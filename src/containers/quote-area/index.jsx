import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import { TextType, SectionTitleType } from "@utils/types";
import Anchor from "@ui/anchor";
import Button from "@ui/button";

const QuoteArea = ({ space, className, data, reverse }) => (
    <div className={clsx(space === 1 && "rn-section-gapTop", className)}>
        <div className="container">
            <div
                className={clsx(
                    "row g-5 d-flex align-items-center",
                    reverse && "flex-row-reverse"
                )}
            >
                <div className="col-lg-6">
                    <div className="rn-about-title-wrapper text-center">
                        {data?.section_title && (
                            <SectionTitle {...data.section_title} />
                        )}
                    </div>
                </div>
                <div className="col-lg-6">
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
                        <div className="setting-option header-btn ">
                            <div className="icon-box d-flex justify-content-center mt--10 ">
                                <Anchor path={data.path}>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn"
                                        size="large"
                                    >
                                        View {data.buttonText} Services
                                    </Button>
                                </Anchor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

QuoteArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

QuoteArea.defaultProps = {
    space: 1,
};

export default QuoteArea;

