import { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import { toDecimal, parseInput, toHex, toDecimalBalance } from "../utils";
import { useMoralisWeb3Api, useOneInchQuote } from "react-moralis";
import {
    NODE_URL,
    ROUTER_ADDRESS,
    ROUTER_ABI,
    BNB,
    BSW,
    BUSD,
    WMART,
    WMART_ABI
} from "../lib/constants";



export const EthersContext = createContext();

export const EthersProvider = ({ children }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    const [bnbVal, setBnbVal] = useState("");
    const [skpVal, setSkpVal] = useState("");
    const [tokenPrice, setTokenPrice] = useState("");
    const [bnbPrice, setBnbPrice] = useState();
    const Web3Api = useMoralisWeb3Api();
    const provider = new ethers.providers.JsonRpcProvider(NODE_URL);

    const PancakeRouter = new ethers.Contract(
        ROUTER_ADDRESS,
        ROUTER_ABI,
        provider
    );


    useEffect(() => {
        async function updatePrices() {
            await fetchBnbPrice();
            await fetchWmartPrice();

            console.log(bnbPrice);
            console.log(tokenPrice);
        }
        const interval = setInterval(() => {
            updatePrices();
        }, 1000);
        return () => clearInterval(interval);
    }, [setDecimals]);




    async function fetchAmountOut() {
        let tokens = [bnbVal, skpVal];

        let amountIn = parseInput(tokens[0].toString()) || parseInput(tokens[1].toString());
        let amountOut;
        try {
            amountOut = await PancakeRouter.getAmountsOut(amountIn, [
                BNB,
                BSW,
            ]);
            setTokenPrice(toDecimalBalance(amountOut[1]));
        } catch (error) { }
        if (!amountOut) return 0;
        return amountOut;
    }

    async function fetchBnbPrice() {
        let amountIn = parseInput("1");
        let amountOut;
        try {
            amountOut = await PancakeRouter.getAmountsOut(amountIn, [
                BNB,
                BUSD,
            ]);
            setBnbPrice(toDecimalBalance(amountOut[1]));

        } catch (error) { }
        if (!amountOut) return 0;
        return amountOut;
    }

    async function fetchWmartPrice() {
        let tokenRouter = await new ethers.Contract(WMART, WMART_ABI, provider);
        let tokenDecimals = await tokenRouter.decimals();

        let amountIn = parseInput("1");
        let amountOut;
        try {
            amountOut = await PancakeRouter.getAmountsOut(amountIn, [
                BNB,
                WMART,
            ]);
            console.log(tokenDecimals)
            console.log(ethers.utils.formatUnits(amountOut[1], tokenDecimals))
            setTokenPrice(formatInput(amountOut[1]));
        } catch (error) { }
        if (!amountOut) return 0;
        return amountOut;
    }


    const changeBnbValue = (e) => {
        const result = e.target.value.replace(/[^0-9.]/g, "");
        if (result.split(".").length > 2) {
            result = result.replace(/\.+$/, "");
        } else if (result.length !== 0) {
            setBnbVal(result);
            setSkpVal(result * tokenPrice);
        } else {
            setBnbVal("");
            setSkpVal("");
        }
    };

    const changeSkpValue = (e) => {
        e.preventDefault();
        const result = e.target.value.replace(/[^0-9.]/g, "");
        if (result.split(".").length > 2) {
            result = result.replace(/\.+$/, "");
        } else if (result.length !== 0) {
            setSkpVal(result);
            setBnbVal(result / tokenPrice); // Set 200000 to variable for token price
        } else {
            setBnbVal("");
            setSkpVal("");
        }
    };

    const depositHandler = () => {

    }

    async function calcSell(tokensToSell, WMART) {
        let tokenRouter = await new ethers.Contract(tokenRouter, WMART_ABI, provider);
        tokenDecimals = await tokenRouter.methods.decimals()

        tokensToSell = setDecimals(tokensToSell, tokenDecimals);
        let amountOut;
        try {
            amountOut = await PancakeRouter.getAmountsOut(tokensToSell, [WMART, BNB])
            amountOut = ethers.utils.formatEther(amountOut[1]);
            console.log(amountOut);
        } catch (error) { }
        if (!amountOut) return 0;
        return amountOut;
    }
    function setDecimals(number, decimals) {
        number = number.toString();
        let numberAbs = number.split('.')[0]
        let numberDecimals = number.split('.')[1] ? number.split('.')[1] : '';
        while (numberDecimals.length < decimals) {
            numberDecimals += "0";
        }
        return numberAbs + numberDecimals;
    }


    return (
        <EthersContext.Provider
            value={{
                bnbVal,
                skpVal,
                bnbPrice,
                tokenPrice,
                Web3Api,
                PancakeRouter,
                fetchAmountOut,
                fetchBnbPrice,
                fetchWmartPrice,
                changeBnbValue,
                changeSkpValue,
                provider
            }}
        >
            {children}
        </EthersContext.Provider>
    );
};
