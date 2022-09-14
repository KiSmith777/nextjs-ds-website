import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, ProductType } from "@utils/types";
import Image from "next/image";
import Anchor from "@ui/anchor";

const SliderOptions = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 7500,
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

const AmaPartnerSlider = ({ data, className, space }) => {
  console.log(data.items[4])
    return (
        <div
            className={clsx(
                "en-product-area",
                space === 1 && "rn-section-gapTop",
                space === 2 && "rn-section-gap",
                className
            )}
            style={{padding: "35px 0"}}
        >
          
            <div className="container">
                <div className="container">
                    {data?.items[4] && (
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider
                                    options={SliderOptions}
                                    className="banner-one-slick slick-arrow-style-one rn-slick-dot-style slick-gutter-15"
                                >
                                    {data.items[4].promoters.map((amaPartner) => (
                                        <SliderItem
                                            key={amaPartner.id}
                                            className="single-slide-product"
                                        >
                                          {console.log(amaPartner)}
                                            <Anchor path="/partners">
                                                <Image
                                                    alt="ama partners"
                                                    src={amaPartner.images[0].src}
                                                    height={100}
                                                    width={100}
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
};
AmaPartnerSlider.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
    }),
};

AmaPartnerSlider.defaultProps = {
    space: 1,
};

export default AmaPartnerSlider;
