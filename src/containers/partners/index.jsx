import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import SectionTitle from "@components/section-title";
import BoxContainer from "@components/box-container";
import Sticky from "@ui/sticky";
import { ImageType, ItemType, SectionTitleType } from "@utils/types";
import HeadingLabel from "../../components/heading-label";
import TransparentBox from "../../components/transparent-box";
import ExploreCarouselBothArea from "@containers/partner-cards";
import { normalizedData } from "@utils/methods";
import partnersData from "../../data/innerpages/partners.json";


const PartnersArea = ({ space, className, data }) => {
    const content = normalizedData(partnersData?.content || []);

    return(

        <div
            className={clsx(
                "rn-about-banner-area",
                
                className
            )}
        >
            <div className="container" style={{maxWidth: 1600, marginTop: 32}}>
                <div className="row g-5">
                    {data?.items?.[0] && (
                        <div className="col-lg-12">
                            <div className="h--100">
                                    <BoxContainer
                                        className="rbt-fixed-top-adjust"
                                        title={data.items[0].title}
                                        desc={data.items[0].description}
                                    >
                                        You can find all of our partners and affiliates below as well as any pertinent information. 
                                        <br/><br/>
                                        <b>Quick Links:</b>
                                        <ul>
                                            <li style={{fontSize: 18, fontWeight: 'bold'}}>
                                                <a href="/partners#partners">Partners</a>
                                            </li>
                                            <li style={{fontSize: 18, fontWeight: 'bold'}}>
                                                <a href="/partners#affiliates">Affiliates</a>
                                            </li>
                                            <li style={{fontSize: 18, fontWeight: 'bold'}}>
                                                <a href="/partners#ama-and-promotional-groups">AMA & Promotional Groups</a>
                                            </li>
                                        </ul>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>

                                            
                                        
                                        </div>
                                    </BoxContainer>
                                
                            </div>
                        </div>
                    )}
                    {data?.items?.[1] && (
                        <div className="col-lg-12" >
                            <div style={{textAlign: 'center'}}>
                                    <HeadingLabel
                                        section="partners"
                                        title={data.items[1].title}
                                        style={{padding: 4, justifyContent: 'center', alignItems: "center", display: 'flex', margin: 0}}
                                    />
                                
                            </div>
                        </div>
                    )}
                    {data?.items?.[1] && (
                        <div className="col-lg-12" style={{marginTop:0}} >
                                <TransparentBox>
                                    <ExploreCarouselBothArea type="Partners" space={1} data={content["partner-section"]}/>
                                </TransparentBox> 
                        </div>
                    )}
                    {data?.items?.[2] && (
                        <div className="col-lg-12">
                            <div style={{textAlign: 'center'}}>
                                    <HeadingLabel
                                        section="affiliates"
                                        title={data.items[2].title}
                                        style={{padding: 4, justifyContent: 'center', alignItems: "center", display: 'flex', margin: 0}}
                                    />
                                
                            </div>
                        </div>
                    )}
                    {data?.items?.[2] && (
                        <div className="col-lg-12" style={{marginTop:0}}>
                                <TransparentBox>
                                    <ExploreCarouselBothArea type="Affiliates" space={1} data={content["partner-section"]}/>
                                </TransparentBox> 
                        </div>
                    )}
                    {data?.items?.[3] && (
                        <div className="col-lg-12">
                            <div style={{textAlign: 'center'}}>
                                    <HeadingLabel
                                        section="ama-and-promotional-groups"
                                        title={data.items[3].title}
                                        style={{padding: 4, justifyContent: 'center', alignItems: "center", display: 'flex', margin: 0}}
                                    />
                                
                            </div>
                        </div>
                    )}
                    {data?.items?.[3] && (
                        <div className="col-lg-12" style={{marginTop:0}}>
                                <TransparentBox>
                                    <ExploreCarouselBothArea type="AMA & Promotional Groups" space={1} data={content["partner-section"]}/>
                                </TransparentBox> 
                        </div>
                    )}
                
                </div>
            </div>
        </div>
    );
};


PartnersArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        image: ImageType,
        items: PropTypes.arrayOf(ItemType),
    }),
};

PartnersArea.defaultProps = {
    space: 1,
};

export default PartnersArea;
