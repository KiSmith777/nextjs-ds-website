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
import partnersData from "../../../data/innerpages/partners.json";
import { normalizedData } from "@utils/methods";

const Product = ({ overlay, title, telegram, website, image, style }) => {
    const [showPartnerModal, setShowPartnerModal] = useState(false);
    const handlePartnerModal = () => {
        setShowPartnerModal((prev) => !prev);
    };
    const content = normalizedData(partnersData?.content || []);

    return (
        <>
            <div
                className={clsx("product-style-two", !overlay && "no-overlay")}
            >
                <div className="card-thumbnail" style={{cursor: 'pointer'}} onClick={handlePartnerModal}>
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
            <PartnerModal data={content["partner-section"]} show={showPartnerModal} handleModal={handlePartnerModal} />
        </>
    );
};

Product.propTypes = {
    overlay: PropTypes.bool,
    title: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    image: ImageType,
    style: PropTypes.string
};

Product.defaultProps = {
    overlay: false,
};

export default Product;
