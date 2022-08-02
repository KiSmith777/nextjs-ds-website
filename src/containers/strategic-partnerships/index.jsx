import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import Button from "@ui/button";

const StrategyArea = ({ space, className, data, reverse }) => {
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
                            <div className="container d-flex justify-content-center">
                                {data.image?.src && (
                                    <Image
                                        src={data.image.src}
                                        height={164}
                                        width={400}
                                        quality={100}
                                    />
                                )}
                            </div>

                            {data.links && (
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="d-flex justify-content-evenly pt--25">
                                            <div className="setting-option header-btn">
                                                <div className="icon-box">
                                                    <Anchor path="/additional-pools">
                                                        <Button
                                                            path="/token"
                                                            color="primary-alta"
                                                            className="connectBtn"
                                                            size="large"
                                                        >
                                                            Token
                                                            <br />
                                                            Learn More
                                                        </Button>
                                                    </Anchor>
                                                </div>
                                            </div>
                                            <div className="setting-option header-btn">
                                                <div className="icon-box">
                                                    <Anchor path="/first-skeptics">
                                                        <Button
                                                            path="/first-skeptics"
                                                            color="primary-alta"
                                                            className="connectBtn"
                                                            size="large"
                                                        >
                                                            NFT
                                                            <br />
                                                            Learn More
                                                        </Button>
                                                    </Anchor>
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
