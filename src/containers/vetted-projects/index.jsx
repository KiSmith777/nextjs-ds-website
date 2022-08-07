import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Anchor from "@ui/anchor";
import { SectionTitleType, ItemType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";
import Wallet from "@components/wallet";
import Service from "@components/service";
import VettedCard from "../../components/vetted-project-card";

const VettedProjectsArea = ({ className, id, space, data }) => (
    <div className="rn-section-gapTop">
        <div className="container text">
            <div className="row text-center">
                <div className="col-12 mb--50">
                    <SectionTitle title="DeFi Skeptic Vetted Projects" />
                    <Image
                        src="/images/icons/DSbadge280x280.png"
                        alt="Slider BG"
                        height={280}
                        width={280}
                        objectFit="contain"
                        quality={100}
                        priority
                    />
                </div>
            </div>
            <div className="row text-center">
                <p>
                    DeFi Skeptic is developing a more informational and
                    intuitive listing database that will have vetted project
                    profiles and allow users to navigate key details seamlessly.
                    This will feature the data DeFi Skeptic collects and
                    validates as well as information and data from our partners
                    <Anchor path="/partners"> StaySAFU </Anchor> and
                    <Anchor path="/partners"> Mobula</Anchor>.
                </p>
                <p>
                    For now, you can click on the vetted projects below to view
                    their “legacy” reports.
                </p>
            </div>
            <div className="row g-5 mt--20 justify-content-center text-center">
                {data.items.map((item) => (
                    <div
                        className="col-xxl-4 col-lg-6 col-md-12 col-sm-12 col-12"
                        key={item.id}
                    >
                        <VettedCard
                            title={item.title}
                            subtitle={item.subtitle}
                            path={item.path}
                            description={item.description}
                            image={item.images}
                        ></VettedCard>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

VettedProjectsArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
VettedProjectsArea.defaultProps = {
    space: 1,
};

export default VettedProjectsArea;
