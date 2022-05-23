import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Product from "@components/product/layout-01";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, PartnerType } from "@utils/types";

const SliderOptions = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
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
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
            },
        },
    ],
};

const ExploreProductArea = ({ data, className, space, type }) => (
    
        <div className="container">
            {data?.items?.[1] && (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row" style={{gap: 32, justifyContent: 'space-evenly'}}>
                            {type === data.items[1].title && data.items[1].partners.map((partner) => (
                                    <Product
                                        style={{width: 10, height: 100}}
                                        overlay
                                        title={partner.title}
                                        telegram={partner.telegram}
                                        website={partner.website}
                                        image={partner.image?.[0]}
                                       
                                    />
                            ))}
                            {type === data.items[2].title && data.items[2].affiliates.map((affiliate) => (
                                    <Product
                                        style={{width: 10, height: 100}}
                                        overlay
                                        title={affiliate.title}
                                        telegram={affiliate.telegram}
                                        website={affiliate.website}
                                        image={affiliate.image?.[0]}
                                       
                                    />
                            ))}
                            {type === data.items[3].title && data.items[3].promoters.map((promoter) => (
                                    <Product
                                        style={{width: 10, height: 100}}
                                        overlay
                                        title={promoter.title}
                                        telegram={promoter.telegram}
                                        website={promoter.website}
                                        image={promoter.image?.[0]}
                                       
                                    />
                            ))}
                    
                        </div>
                    </div>
                    </div>
               
            )}
        </div>
   
);

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2, 3, 4]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        partners: PropTypes.arrayOf(PartnerType).isRequired,
        affiliates: PropTypes.arrayOf(PartnerType).isRequired,
        promoters: PropTypes.arrayOf(PartnerType).isRequired,
        placeBid: PropTypes.bool,
    }),
    type: PropTypes.string
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
