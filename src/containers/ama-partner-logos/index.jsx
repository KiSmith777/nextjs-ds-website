import PropTypes from "prop-types";
import clsx from "clsx";
import { SectionTitleType, ProductType } from "@utils/types";
import Image from "next/image";
import Anchor from "@ui/anchor";

const AmaPartnerLogos = ({ data }) => {
    return (
        <div className="container ptb--30 d-flex justify-content-center">
            {data?.items[4] && (
                <div className="col-lg-6">
                    <div className="d-flex justify-content-around">
                        {data.items[4].promoters.map((amaPartner) => (
                            <Anchor
                                path={`https://t.me/${amaPartner.telegram}`}
                            >
                                <Image
                                    alt="ama partners"
                                    src={amaPartner.images[0].src}
                                    height={100}
                                    width={100}
                                    quality={100}
                                />
                            </Anchor>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
AmaPartnerLogos.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
    }),
};

AmaPartnerLogos.defaultProps = {
    space: 1,
};

export default AmaPartnerLogos;
