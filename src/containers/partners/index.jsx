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
import { Link } from "react-scroll";
import Anchor from "@ui/anchor";

const PartnersArea = ({ space, className, data }) => {
    return (
        <div
            className={clsx("rn-about-banner-area", className)}
            style={{ scrollSnapType: "y mandatory" }}
        >
            <div
                className="container"
                style={{ maxWidth: 1100, marginTop: 32 }}
            >
                <div className="row g-5">
                    {data?.items?.[0] && (
                        <div className="col-lg-12">
                            <div className="h--100">
                                <BoxContainer
                                    key={data.items[0].id}
                                    className="rbt-fixed-top-adjust"
                                >
                                    <p
                                        className="text-justify"
                                        data-sal="slide-left"
                                        data-sal-delay="150"
                                        data-sal-duration="1200"
                                    >
                                        The DeFi Skeptic team is a strong believer 
                                        in collaboration over competition. Working 
                                        with like minded platforms/projects and sharing 
                                        each others resources is a key component of 
                                        DeFi Skeptic and a valued aspect of our platform.
                                    </p>
                                    <p
                                        className="text-justify"
                                        data-sal="slide-right"
                                        data-sal-delay="150"
                                        data-sal-duration="1200"
                                    >
                                        You can find all of our partners and
                                        affiliates below as well as any
                                        pertinent information.
                                    </p>
                                    <div
                                        data-sal="slide-up"
                                        data-sal-delay="150"
                                        data-sal-duration="1200"
                                    >
                                        <p className="text-justify">
                                            <b>Quick Links:</b>
                                        </p>
                                        <ul>
                                            <li
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                <Link
                                                    key={data.items[1].id}
                                                    href="/partners#launchpad-app-partners"
                                                    to="launchpad-app-partners"
                                                    spy
                                                    smooth
                                                    offset={-200}
                                                    duration={1000}
                                                >
                                                    {data.items[1].title}
                                                </Link>
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                <Link
                                                    key={data.items[2].id}
                                                    href="/partners#service-provider-partners"
                                                    to="service-provider-partners"
                                                    spy
                                                    smooth
                                                    offset={-200}
                                                    duration={1000}
                                                >
                                                    {data.items[2].title}
                                                </Link>
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                <Link
                                                    key={data.items[3].id}
                                                    href="/partners#affiliates"
                                                    to="affiliates"
                                                    spy
                                                    smooth
                                                    offset={-200}
                                                    duration={1000}
                                                >
                                                    {data.items[3].title}
                                                </Link>
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                <Link
                                                    key={data.items[4].id}
                                                    href="/partners#ama-and-promotional-groups"
                                                    to="ama-and-promotional-groups"
                                                    spy
                                                    smooth
                                                    offset={-200}
                                                    duration={1000}
                                                >
                                                    {data.items[4].title}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </BoxContainer>
                            </div>
                        </div>
                    )}
                    {data?.items?.[1] && (
                        <div className="col-lg-12">
                            <div style={{ textAlign: "center" }}>
                                <HeadingLabel
                                    section="launchpad-app-partners"
                                    title={data.items[1].title}
                                    style={{
                                        padding: 4,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        margin: 0,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    {data?.items?.[1] && (
                        <div className="col-lg-12" style={{ marginTop: 0 }}>
                            <TransparentBox>
                                <p className="mb--50 text-justify">
                                DeFi Skeptic works with the following platforms who strive to make DeFi better through various security and transparency focused components. These platforms all utilize our <Anchor path="/vetting-as-a-service"><u>Vetting as a Service (VaaS)</u></Anchor> in addition to various <Anchor path="/developer-services"><u>Developer Services</u></Anchor> we offer. These partnerships are crucial in the combined effort to better the DeFi space as a whole while protecting users and ensuring projects meet a high standard.
                                </p>
                                <ExplorePartnerArea
                                    id={data.items[1].id}
                                    space={1}
                                    title={data.items[1].title}
                                    items={data.items}
                                />
                            </TransparentBox>
                        </div>
                    )}
                    {data?.items?.[2] && (
                        <div className="col-lg-12">
                            <div style={{ textAlign: "center" }}>
                                <HeadingLabel
                                    section="service-provider-partners"
                                    title={data.items[2].title}
                                    style={{
                                        padding: 4,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        margin: 0,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    {data?.items?.[2] && (
                        <div className="col-lg-12" style={{ marginTop: 0 }}>
                            <TransparentBox>
                                <p className="mb--50 text-justify">
                                DeFi Skeptic works with the following DeFi service 
                                providers in various ways. This may include mutual 
                                service usage, API usage or sub-contracting work to 
                                some of these providers. We realize the DeFi space is 
                                filled with platforms, businesses and individuals who 
                                do amazing work and we want to highlight that by working 
                                with those individuals in order to grow and better the 
                                DeFi space.
                                </p>
                                <ExplorePartnerArea
                                    id={data.items[2].id}
                                    space={1}
                                    title={data.items[2].title}
                                    items={data.items}
                                />
                            </TransparentBox>
                        </div>
                    )}
                    {data?.items?.[3] && (
                        <div className="col-lg-12">
                            <div style={{ textAlign: "center" }}>
                                <HeadingLabel
                                    section="affiliates"
                                    title={data.items[3].title}
                                    style={{
                                        padding: 4,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        margin: 0,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    {data?.items?.[3] && (
                        <div className="col-lg-12" style={{ marginTop: 0 }}>
                            <TransparentBox>
                                <p className="mb--50 text-justify">
                                    DeFi Skeptic also works closely with other
                                    projects to provide information or assist
                                    them in specific goals. Below you can find
                                    projects we consider “friends” and thus list
                                    as affiliates.
                                </p>
                                <ExplorePartnerArea
                                    id={data.items[3].id}
                                    space={1}
                                    title={data.items[3].title}
                                    items={data.items}
                                />
                            </TransparentBox>
                        </div>
                    )}
                    {data?.items?.[4] && (
                        <div className="col-lg-12">
                            <div style={{ textAlign: "center" }}>
                                <HeadingLabel
                                    section="ama-and-promotional-groups"
                                    title={data.items[4].title}
                                    style={{
                                        padding: 4,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        margin: 0,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    {data?.items?.[4] && (
                        <div className="col-lg-12" style={{ marginTop: 0 }}>
                            <TransparentBox>
                                <p className="mb--50 text-justify">
                                    One major issue in the DeFi space is how
                                    projects are promoted. A very effective way
                                    of reaching an audience is by directly
                                    speaking to them. However, many of these
                                    platforms conduct in unethical practices
                                    using “paid” bots to make their customer
                                    feel like they are getting more than they
                                    really are. DeFi Skeptic has made an effort
                                    to source legitimate promotional platforms
                                    who do not conduct in these practices. You
                                    can find them below.
                                </p>
                                <ExplorePartnerArea
                                    id={data.items[4].id}
                                    space={1}
                                    title={data.items[4].title}
                                    items={data.items}
                                />
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
