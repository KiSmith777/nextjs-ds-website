import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ImageType } from "@utils/types";
import Button from "@ui/button";
import ShareDropdown from "@components/share-dropdown";
import ShareModal from "@components/modals/share-modal";
import Anchor from "@ui/anchor";
import HeadingLabel from "@components/heading-label";
import TransparentBox from "@components/transparent-box";
import SolidBox from "../../components/solid-box";
import Copy from "@components/ContributionForm";
import { EthersContext } from "../../context/EthersContext";

const TestArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const {
        bnbVal,
        skpVal,
        bnbPrice,
        tokenPrice,
        Web3Api,
        PancakeRouter,
        fetchAmountOut,
        fetchBnbPrice,
        changeBnbValue,
        changeSkpValue,

        provider,
    } = useContext(EthersContext);

    return (
        <>
            <div
                className="container ptb--60"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <div
                    className="swap-container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <div className="swap-headings pt--20">
                        <h3 style={{ color: "#ffffff" }}>Discount Swapper</h3>
                        <h6>Swap BNB for SKP at a 2% Discount</h6>
                    </div>
                    <div
                        className="swap-box h-100"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                        }}
                    >
                        <div
                            className="container h-100"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className="p-lg-3">
                                <input
                                    style={{
                                        background: "#ffffff",
                                        height: 64,
                                        border: 2,
                                        borderRadius: 12,
                                    }}
                                    type="text"
                                    inputMode="numeric"
                                    step="1"
                                    value={bnbVal}
                                    onChange={changeBnbValue}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    pattern="^[0-9]"
                                    placeholder={bnbPrice}
                                    minLength="1"
                                    maxLength="9"
                                    spellCheck="false"
                                ></input>
                                <div
                                    className="container mlr--10 pt--10"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: 18,
                                            color: "#ffffff",
                                            opacity: "0.4",
                                            fontWeight: "var(--s-bold)",
                                        }}
                                    >
                                        Price per BNB:
                                    </span>
                                    <span
                                        style={{
                                            fontSize: 18,
                                            color: "#ffffff",
                                            opacity: "0.4",
                                            fontWeight: "var(--s-bold)",
                                        }}
                                    >
                                        ${bnbPrice}
                                    </span>
                                </div>

                                <input
                                    style={{
                                        background: "#ffffff",
                                        height: 64,
                                        border: 2,
                                        borderRadius: 12,
                                        marginTop: 8,
                                    }}
                                    type="text"
                                    id="bnb"
                                    inputMode="numeric"
                                    step="1"
                                    value={skpVal}
                                    onChange={changeSkpValue}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    pattern="^[0-9]"
                                    placeholder={tokenPrice}
                                    minLength="1"
                                    maxLength="9"
                                    spellCheck="false"
                                ></input>
                                <div
                                    className="container mlr--10 pt--10"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: 8,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: 18,
                                            color: "#ffffff",
                                            opacity: "0.4",
                                            fontWeight: "var(--s-bold)",
                                        }}
                                    >
                                        Price per BNB:
                                    </span>
                                    <span
                                        style={{
                                            fontSize: 18,
                                            color: "#ffffff",
                                            opacity: "0.4",

                                            opacity: "0.4",
                                            fontWeight: "var(--s-bold)",
                                        }}
                                    >
                                        ${tokenPrice}
                                    </span>
                                </div>
                            </div>
                            <div
                                className="container mlr--10 ptb--20"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",

                                    flexDirection: "row",
                                }}
                            >
                                <span
                                    style={{
                                        display: "flex",
                                        fontSize: 18,
                                        color: "#ffffff",
                                        opacity: "0.4",
                                        justifyContent: "flex-start",
                                        opacity: "0.4",
                                        fontWeight: "var(--s-bold)",
                                    }}
                                >
                                    Conversion Rate:
                                </span>
                                <span
                                    style={{
                                        display: "flex",
                                        fontSize: 18,
                                        color: "#ffffff",
                                        opacity: "0.4",
                                        justifyContent: "flex-end",
                                        opacity: "0.4",
                                        fontWeight: "var(--s-bold)",
                                    }}
                                >
                                    1 BNB per 200k SKP
                                </span>
                            </div>
                            <div
                                className="container mlr--10 ptb--20"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",

                                    flexDirection: "row",
                                }}
                            >
                                <span
                                    style={{
                                        display: "flex",
                                        fontSize: 18,
                                        color: "#ffffff",
                                        opacity: "0.4",
                                        justifyContent: "flex-start",
                                        opacity: "0.4",
                                        fontWeight: "var(--s-bold)",
                                    }}
                                >
                                    Conversion Rate:
                                </span>
                                <span
                                    style={{
                                        display: "flex",
                                        fontSize: 18,
                                        color: "#ffffff",
                                        opacity: "0.4",
                                        justifyContent: "flex-end",
                                        opacity: "0.4",
                                        fontWeight: "var(--s-bold)",
                                    }}
                                >
                                    1 BNB per 200k SKP
                                </span>
                            </div>
                            <div
                                className="container mlr--10 ptb--20"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",

                                    flexDirection: "row",
                                }}
                            >
                                <span
                                    style={{
                                        display: "flex",
                                        fontSize: 18,
                                        color: "#ffffff",
                                        opacity: "0.4",
                                        justifyContent: "flex-start",
                                        opacity: "0.4",
                                        fontWeight: "var(--s-bold)",
                                    }}
                                >
                                    Conversion Rate:
                                </span>
                                <span
                                    style={{
                                        display: "flex",
                                        fontSize: 18,
                                        color: "#ffffff",
                                        opacity: "0.4",
                                        justifyContent: "flex-end",
                                        opacity: "0.4",
                                        fontWeight: "var(--s-bold)",
                                    }}
                                >
                                    1 BNB per 200k SKP
                                </span>
                            </div>
                            <div
                                className="container mlr--10 ptb--20"
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    flexDirection: "column",
                                }}
                            >
                                <Button
                                    color="primary-alta"
                                    className="connectBtn"
                                    style={{ width: "100%" }}
                                >
                                    <span style={{ fontSize: 22 }}>Swap</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

TestArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        followers: PropTypes.string,
        following: PropTypes.string,
        image: ImageType,
    }),
};
TestArea.defaultProps = {
    space: 1,
};

export default TestArea;
