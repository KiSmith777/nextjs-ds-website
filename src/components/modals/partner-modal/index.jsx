import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import partnersData from "../../../data/innerpages/partners.json";
import { normalizedData } from "@utils/methods";
import Anchor from "../../ui/anchor";

const PartnerModal = ({ show, handleModal, data }) => {
    
    return (
        
        
        <Modal
            className="rn-popup-modal report-modal-wrapper"
            show={show}
            onHide={handleModal}
            centered
        >
            {show && (
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleModal}
                >
                    <i className="feather-x" />
                </button>
            )}
            
           
            <Modal.Header style={{display: 'flex', justifyContent: 'center'}} className="report-modal-header">
                {data?.items?.[1] && (
                    <h5 style={{textAlign: 'center'}} className="modal-title">{data.items[1].partners[0].title}</h5>
                )}
            </Modal.Header>
            <Modal.Body>
                <p>
                Apollo Ventures is a complete ecosystem to help crypto projects get launched and find vetted 
                services to help promote their project consisting of a marketplace, ads platform and launchpad. 
                Additionally, Apollo Ventures has a loss protection plan which covers anywhere from 25% to 100% 
                of a presale contributors funds incase of exploit or vulnerability. <br/><br/>For more information, 
                please visit <Anchor path={data.items[1].partners.website}>{data.items[1].partners[0].title}</Anchor>.
                </p>
                <p>
               <b> DeFi Skeptic provides Apollo Ventures project vetting for the Apollo Launchpad. </b>
                <br/><br/>By leveraging DeFi Skeptics intensive vetting process, Apollo Venture ensures 
                projects listing on their launchpad maintain a high level of transparency and 
                information accuracy.
                </p>
                <div className="report-form-box">
                   
                    <div style={{display: "flex", justifyContent: "center"}} className="report-button">
                        <Button 
                            size="medium" 
                            className="mr--10 w-auto"
                            path="https://a11.ventures"
                            
                            >
                            Visit Apollo Ventures
                        </Button>
                        <Button 
                            size="medium"
                            color="primary-alta"
                            className="w-auto"
                            onClick={handleModal}
                            
                            >
                            Close
                        </Button>
                        
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
};

PartnerModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
export default PartnerModal;
