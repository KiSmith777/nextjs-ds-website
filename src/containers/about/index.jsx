import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import SectionTitle from "@components/section-title";
import AboutCard from "@components/about-card";
import Sticky from "@ui/sticky";
import { ImageType, ItemType, SectionTitleType } from "@utils/types";

const AboutArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-about-banner-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container mb--50" id="about">
            <div className="row text-center">
                <div className="col-12">
                    {data?.section_title && (
                        <SectionTitle
                            className="about-title-m"
                            {...data.section_title}
                        />
                    )}
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row g-5">
                {data?.items?.[0] && (
                    <div className="col-lg-6">
                            <AboutCard
                                className="transparent-bg"
                                title={data.items[0].title}
                                desc={data.items[0].description}
                                path={data.items[0].path}
                            />
                    </div>
                )}
                {data?.items?.[1] && (
                    <div className="col-lg-6">
                        <AboutCard
                            className="transparent-bg"
                            title={data.items[1].title}
                            desc={data.items[1].description}
                            path={data.items[1].path}
                        />
                    </div>
                )}
            </div>
        </div>
    </div>
);

AboutArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        image: ImageType,
        items: PropTypes.arrayOf(ItemType),
    }),
};

AboutArea.defaultProps = {
    space: 1,
};

export default AboutArea;
