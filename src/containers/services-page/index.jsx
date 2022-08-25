import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title";
import Service from "@components/service-page";
import { SectionTitleType, ItemType } from "@utils/types";
import Wallet from "@components/wallet";
import Anchor from "@ui/anchor";

const ServiceArea = ({ className, id, space, data }) => (
    <div
        className={clsx(
            "rn-service-area",
            space === 1 && "rn-section-smallGapTop",
           
            className
        )}
        id={id}
    >
        <div className="container">
            {data?.section_title && (
                <div className="row text-center">
                    <div className="col-12 mb--20">
                        <SectionTitle {...data.section_title} />
                    </div>
                    {data?.description && (
                        <div className="row text-justify mb--40">
                        <p>{data.description}</p>
                        <p>Below are the services we currently have live to meet your needs. To view services we intend to roll out in the near future, please visit our <Anchor path="https://docs.defiskeptic.com"> <u>documentation</u></Anchor>.</p>
                        </div>
                    )}
                </div>
            )}
            {data?.items && (
                <div className="row g-5 justify-content-center">
                    {data.items.map((item) => (
                        <div
                            className="col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                            key={item.id}
                        >
                            <Service
                                title={item.title}
                                subtitle={item.subtitle}
                                path={item.path}
                                description={item.description}
                                image={item.images}
                            >
                                <div className="row plr--20 g-5 justify-content-center pb--20">
                                    {item.services?.map((service) => (
                                        <div
                                            className="col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                                            key={item.id}
                                        >
                                            <Wallet
                                                title={service.title}
                                                path={service.path}
                                                icon={service.icon}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Service>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

ServiceArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
ServiceArea.defaultProps = {
    space: 1,
};

export default ServiceArea;
