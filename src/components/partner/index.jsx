import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import CountdownTimer from "@ui/countdown/layout-01";
import ClientAvatar from "@ui/client-avatar";
import ShareDropdown from "@components/share-dropdown";
import Button from "@ui/button";
import { ImageType } from "@utils/types";
import PartnerModal from "@components/modals/partner-modal";
import { dataURItoByteString } from "react-pdf/dist/umd/shared/utils";

const Partner = ({
    style,
    overlay,
    title,
    telegram,
    website,
    desc1,
    desc2,
    desc3,
    image,
    id,
    items,
    group
}) => {
    const [showPartnerModal, setShowPartnerModal] = useState(false);
    const handlePartnerModal = () => {
        setShowPartnerModal((prev) => !prev);
    };
    
    return (
        <>
        
            <div className={clsx("product-style-two", !overlay && "no-overlay")}>
                
                <div className="card-thumbnail" style={{ cursor: "pointer" }} onClick={handlePartnerModal}>
                    {image?.src && (
                        <Image
                            src={image.src}
                            alt={image?.alt || "NFT_portfolio"}
                            width={550}
                            height={533}
                        />
                    )}
                </div>
                <div
                    style={{ justifyContent: "center" }}
                    className="product-share-wrapper"
                    type="Partners"
                >
                    <h5>{title}</h5>
                </div>
                <Anchor path={`https://t.me/${telegram}`}>
                    <span
                        style={{ textAlign: "center" }}
                        className="product-name"
                    >
                        Telegram
                    </span>
                </Anchor>
                <Anchor path={website}>
                    <span
                        style={{ textAlign: "center" }}
                        className="product-name"
                    >
                        Website
                    </span>
                </Anchor>
            </div>
            <PartnerModal
                show={showPartnerModal}
                handleModal={handlePartnerModal}
                title={title}
                telegram={telegram}
                website={website}
                desc1={desc1}
                desc2={desc2}
                desc3={desc3}
                items={items}
                group={group}
            />
        </>
    );
};

Partner.propTypes = {
    overlay: PropTypes.bool,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    desc1: PropTypes.string,
    desc2: PropTypes.string,
    desc3: PropTypes.string,
    style: PropTypes.object,
    image: ImageType
};

Partner.defaultProps = {
    overlay: false,
};

export default Partner;

