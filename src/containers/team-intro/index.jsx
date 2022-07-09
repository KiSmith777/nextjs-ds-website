import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import ShareDropdown from "@components/share-dropdown";
import ShareModal from "@components/modals/share-modal";
import Anchor from "@ui/anchor";

const TeamIntroArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src="/images/banner/test3.png"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <div style={{gap: 32, height: "100%", display: "flex", flexDirection: "row"}} className="container col-lg-12">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: 420}}className="card col-lg-3">    
                    <p className="card-body" style={{width: "100%", padding: 16}}>Poopy doopy</p>
                    <div className="row ptb--20">
                        <h2 className="card-title" style={{color: "black"}}>Poop</h2>
                        <h6 className="card-subtitle" style={{color: "black"}}>in your doop</h6>
                    </div>
                </div>
            

                <div 
                    data
                    style={{display: "flex", justifyContent: "center", alignItems: "center", height: 420}} className="card col-lg-3">    
                    <p className="card-body" style={{width: "100%", padding: 16}}>Poopy doopy</p>
                    <div className="row ptb--20">
                        <h2 className="card-title" style={{color: "black"}}>Poop</h2>
                        <h6 className="card-subtitle" style={{color: "black"}}>in your doop</h6>
                    </div>
                </div>
            

            
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: 420}}className="card col-lg-3">    
                    <p className="card-body" style={{width: "100%", padding: 16}}>Poopy doopy</p>
                    <div className="row ptb--20">
                        <h2 className="card-title" style={{color: "black"}}>Poop</h2>
                        <h6 className="card-subtitle" style={{color: "black"}}>in your doop</h6>
                    </div>
                </div>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: 420}}className="card col-lg-3">    
                    <p className="card-body" style={{width: "100%", padding: 16}}>Poopy doopy</p>
                    <div className="row ptb--20">
                        <h2 className="card-title" style={{color: "black"}}>Poop</h2>
                        <h6 className="card-subtitle" style={{color: "black"}}>in your doop</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

TeamIntroArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        followers: PropTypes.string,
        following: PropTypes.string,
        image: ImageType,
    }),
};
TeamIntroArea.defaultProps = {
    space: 1,
};

export default TeamIntroArea;
