import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import Anchor from "../../ui/anchor";
import { PartnerType } from "../../../utils/types";

const PartnerModal = ({ show, handleModal, key, group, title, telegram, website, desc1, desc2, desc3, items}) => {
    

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
                <h5 style={{textAlign: 'center'}} className="modal-title">{title}</h5>
            </Modal.Header>
            {group ===  "Partners" && (
                <Modal.Body>
                    <p>{desc1}<br/><br/>For more information, please visit <Anchor path={website}>{title}</Anchor>.<br/><br/><b>{desc2}</b>{" "}{desc3}</p>
                    <div className="report-form-box">
                        <div style={{display: "flex", justifyContent: "center"}} className="report-button">
                            <Button 
                                size="medium" 
                                className="mr--10 w-auto"
                                path={website}
                                >
                                Visit {title}
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
            )}
            {group ===  "Affiliates" && (
                <Modal.Body>
                    <p>{desc1}<br/><br/>For more information, please visit <Anchor path={website}>{title}</Anchor><br/><br/><b>{desc2}.</b>{" "}{desc3}</p>
                    <div className="report-form-box">
                        <div style={{display: "flex", justifyContent: "center"}} className="report-button">
                            <Button 
                                size="medium" 
                                className="mr--10 w-auto"
                                path={website}
                                >
                                Visit {title}
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
            )}
            {group ===  "AMA & Promotional Groups" && (
                <Modal.Body>
                    <p>{desc1}<br/><br/>For more information, please visit <Anchor path={website}>{title}</Anchor>.<br/><br/><b>{desc2}{title}.</b>{" "}{desc3}</p>
                    <div className="report-form-box">
                        <div style={{display: "flex", justifyContent: "center"}} className="report-button">
                            <Button 
                                size="medium" 
                                className="mr--10 w-auto"
                                path={website}
                                >
                                Visit {title}
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
            )}
    

        </Modal>
    )
};

PartnerModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PartnerType)
};
export default PartnerModal;
