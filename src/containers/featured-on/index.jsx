import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, ProductType } from "@utils/types";
import Image from "next/image";
import Anchor from "@ui/anchor";

const SliderOptions = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 4000,
    arrows: false,
    
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
};

const FeaturedOnArea = ({ data, className, space }) => (
    <div
        className={clsx(
            "en-product-area",
            space === 1 && "rn-section-gapTop",
            space === 2 && "rn-section-gap",
            className
        )}
    >
        <div className="container">
            <div className="container">
                {data?.section_title && (
                    <div className="row mb--30">
                        <div className="col-12 text-center">
                            <SectionTitle {...data.section_title} />
                        </div>
                    </div>
                )}
                {data?.items && (
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider
                                options={SliderOptions}
                                className="banner-one-slick slick-arrow-style-one rn-slick-dot-style slick-gutter-15"
                            >
                                {data.items.map((prod) => (
                                    <SliderItem
                                        key={prod.id}
                                        className="single-slide-product"
                                    >
                                        <Anchor path={prod.path}>
                                            <Image
                                                alt="featured on"
                                                src={prod.images?.src}
                                                height="100%"
                                                width="100%"
                                                quality={100}
                                            />
                                        </Anchor>
                                    </SliderItem>
                                ))}
                            </Slider>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
);

FeaturedOnArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
    }),
};

FeaturedOnArea.defaultProps = {
    space: 1,
};

export default FeaturedOnArea;
