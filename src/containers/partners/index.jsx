import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import SectionTitle from "@components/section-title";
import BoxContainer from "@components/box-container";
import Sticky from "@ui/sticky";
import { ImageType, ItemType, SectionTitleType } from "@utils/types";
import HeadingLabel from "../../components/heading-label";
import TransparentBox from "../../components/transparent-box";
import ExplorePartnerArea from "@containers/partner-cards";
import { normalizedData } from "@utils/methods";
import partnersData from "../../data/innerpages/partners.json";
import { Link } from 'react-scroll'



const PartnersArea = ({ space, className, data}) => {

    return(

        <div
            className={clsx(
                "rn-about-banner-area",
                className
            )}
            style={{scrollSnapType: 'y mandatory'}}
        >
            <div className="container" style={{maxWidth: 1100, marginTop: 32}}>
                <div className="row g-5">
                       {data?.items?.[0] && (
                        <div className="col-lg-12">
                            <div className="h--100">
                                    <BoxContainer
                                        key={data.items[0].id}
                                        className="rbt-fixed-top-adjust"
                                        title={data.items[0].title}
                                        desc={data.items[0].desc}
                                    >
                                   <p 
                                        data-sal="slide-right"
                                        data-sal-delay="150"
                                        data-sal-duration="1200">You can find all of our partners and affiliates below as well as any pertinent information. </p>
                                        <div
                                        data-sal="slide-up"
                                        data-sal-delay="150"
                                        data-sal-duration="1200"
                                        >
                                        <p><b>Quick Links:</b></p>
                                        <ul>
                                            <li style={{fontSize: 18, fontWeight: 'bold'}}>
                                                <Link
                                                    key={data.items[1].id}
                                                    href="/partners#partners"
                                                    to="partners"
                                                    spy
                                                    smooth
                                                    offset={-200}
                                                    duration={1000}
                                                    >{data.items[1].title}</Link>
                                            </li>
                                            <li style={{fontSize: 18, fontWeight: 'bold'}}>
                                                <Link
                                                    key={data.items[2].id}
                                                    href="/partners#affiliates"
                                                    to="affiliates"
                                                    spy
                                                    smooth
                                                    offset={-200}
                                                    duration={1000}
                                                >{data.items[2].title}</Link>
                                            </li>
                                            <li style={{fontSize: 18, fontWeight: 'bold'}}>
                                                <Link
                                                    key={data.items[3].id}
                                                    href="/partners#ama-and-promotional-groups"
                                                    to="ama-and-promotional-groups"
                                                    spy
                                                    smooth
                                                    offset={-200}
                                                    duration={1000}
                                                    >{data.items[3].title}</Link>
                                            </li>
                                        </ul>
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
                                    <ExplorePartnerArea id={data.items[1].id} space={1} title={data.items[1].title} items={data.items}/>
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
                                    <ExplorePartnerArea id={data.items[2].id} space={1} title={data.items[2].title} items={data.items}/>
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
                                    <ExplorePartnerArea id={data.items[3].id} space={1} title={data.items[3].title} items={data.items}/>
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
