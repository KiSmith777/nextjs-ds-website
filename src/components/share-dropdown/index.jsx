import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ShareModal from "@components/modals/share-modal";
import ReportModal from "@components/modals/report-modal";

const ShareDropdown = () => {
    const [showShareModal, setShowShareModal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const handleShareModal = () => {
        setShowShareModal((prev) => !prev);
    };
    const handleReportModal = () => {
        setShowReportModal((prev) => !prev);
    };
    return (
        <>
            <Dropdown className="share-btn share-btn-activation">
                <Dropdown.Toggle className="icon" variant="link" bsPrefix="p-0">
                    <Image
                        src="/images/icons/sharebtn.svg"
                        alt="share svg"
                        viewBox="0 0 14 4"
                        fill="none"
                        width={16}
                        height={16}
                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                    ></Image>
                </Dropdown.Toggle>

                <Dropdown.Menu className="share-btn-setting" align="end">
                    <button
                        type="button"
                        className="btn-setting-text share-text"
                        onClick={handleShareModal}
                    >
                        Share
                    </button>
                    <button
                        type="button"
                        className="btn-setting-text report-text"
                        onClick={handleReportModal}
                    >
                        Report
                    </button>
                </Dropdown.Menu>
            </Dropdown>
            <ShareModal show={showShareModal} handleModal={handleShareModal} />
            <ReportModal
                show={showReportModal}
                handleModal={handleReportModal}
            />
        </>
    );
};

export default ShareDropdown;

