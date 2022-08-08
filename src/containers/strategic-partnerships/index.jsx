import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import Button from "@ui/button";

const StrategyArea = ({ space, className, data, reverse, section }) => {
    return (
        <div className={clsx(space === 1 && "rn-section-gapTop", className)}>
            <div className="container">
                <div
                    className={clsx(
                        "row g-5 d-flex align-items-center",
                        reverse && "flex-row-reverse"
                    )}
                >
                    <div className="col-lg-12">
                        <div className="rn-about-title-wrapper text-center">
                            {data?.section_title && (
                                <SectionTitle {...data.section_title} />
                            )}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div
                            className="rn-about-wrapper"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            data-sal-delay="150"
                        >
                            {data?.texts?.map((text) => (
                                <p className="text-justify" key={text.id}>
                                    {text.content}
                                </p>
                            ))}
                            {section === "strategy" && (
                                <div className="container d-flex justify-content-center">
                                    {data.image?.src && (
                                        <Image
                                            alt="Our strategy"
                                            src={data.image.src}
                                            height={164}
                                            width={400}
                                            quality={100}
                                        />
                                    )}
                                </div>
                            )}

                            {section === "token-nft-pair" && (
                                <div className="container d-flex justify-content-center">
                                    {data.image?.src && (
                                        <Image
                                            alt="token / nft pair"
                                            src={data.image.src}
                                            height={164}
                                            width={592}
                                            quality={100}
                                        />
                                    )}
                                </div>
                            )}

                            {data.links && (
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="d-flex justify-content-evenly pt--25">
                                            <div className="setting-option header-btn">
                                                <div className="icon-box">
                                                        <Button
                                                            path="/token-nft"
                                                            color="primary-alta"
                                                            className="connectBtn"
                                                            size="large"
                                                        >
                                                            Learn More
                                                        </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

StrategyArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
        links: PropTypes.arrayOf(),
    }),
};

StrategyArea.defaultProps = {
    space: 1,
};

export default StrategyArea;
