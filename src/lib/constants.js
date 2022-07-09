import WalletConnect from "@walletconnect/web3-provider";
import PresaleContract from './PresaleContract_abi.json';
import PancakeRouter from "./pancakeRouter.json";
import Wmart from "./Wmart.json";


// Presale contract
export const contractAddress = '0x17b19904ECd3dD30BA338E21F8BF016fc072C836';
export const presaleAbi = PresaleContract.abi;

export const NODE_URL = "https://speedy-nodes-nyc.moralis.io/c69cd9215cc709273ed94c45/bsc/mainnet";
export const ROUTER_ADDRESS = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
export const ROUTER_ABI = PancakeRouter.abi;
export const BNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const BSW = "0x965f527d9159dce6288a2219db51fc6eef120dd1";
export const BUSD = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
export const WMART = "0xb6c25FeDC58fA52774608058c1751cF3d6B852ed"
export const WMART_ABI = Wmart.abi;



export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Markdown";
export const HOME_OG_IMAGE_URL =
  "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

  883384546576712436



export const providerOptions = {
  walletconnect: {
    package: WalletConnect, // required
    options: {
      rpc: {  // required
        56: "https://bsc-dataseed.binance.org",
      },
      network: "binance"
    },
  },
};

export const networkParams = {
  "0x38": {
    chainId: "0x38",
    rpcUrls: ["https://bsc-dataseed.binance.org"],
    chainName: "Binance Smart Chain",
    nativeCurrency: { name: "BSC", decimals: 18, symbol: "BNB" },
    blockExplorerUrls: ["https://bscscan.com"],
    iconUrls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"]
  }
};

