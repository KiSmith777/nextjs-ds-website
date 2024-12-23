import { useState, useEffect } from "react";
import React from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Anchor from "@ui/anchor";

const VettingApplication = ({ className }) => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState("");
    const [radio, setRadio] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [correctRadio, setCorrectRadio] = useState(false);
    const [correctEntry, setCorrectEntry] = useState(false);
    const [step, setStep] = useState(1);
    const [submit, setSubmit] = useState();

    function handleWebsiteInput(e) {
        let value = e.target.value;
        let regexTest =
            /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,7}(:[0-9]{1,5})?(\/.*)?$/
            {/*/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;*/}

        if (regexTest.test(value) === false) {
            console.log(value);
            setCorrectEntry(false);
        } else {
            console.log(value);
            setCorrectEntry(true);
        }
    }

    const handleContactInput = (e) => {
        let value = e.target.value;
        let emailRegex = /^\S+@\S+\.\S+$/;
        let telegramRegex = /^@{1}([A-Za-z0-9_]{5,32})$/;
        let discordRegex = /^((.{2,32})#\d{4})$/;

        if (selected === "Email Address" && emailRegex.test(value) === true) {
            setCorrectEntry(true);
        } else if (
            selected === "Email Address" &&
            emailRegex.test(value) === false
        ) {
            setCorrectEntry(false);
        }
        if (
            selected === "Telegram Username" &&
            telegramRegex.test(value) === true
        ) {
            setCorrectEntry(true);
        } else if (
            selected === "Telegram Username" &&
            telegramRegex.test(value) === false
        ) {
            setCorrectEntry(false);
        }
        if (
            selected === "Discord Username" &&
            discordRegex.test(value) === true
        ) {
            console.log(discordRegex.test(value));
            setCorrectEntry(true);
        } else if (
            selected === "Discord Username" &&
            discordRegex.test(value) === false
        ) {
            setCorrectEntry(false);
        }
      
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    function handleChange(e) {
        let value = e.target.value;
        let valStr = value.charAt(0).toUpperCase() + value.slice(1);
        setSelected(valStr);
        setShow(true);
        console.log(selected);
        if (valStr === "Email") {
            setSelected(valStr + " Address");
        } else {
            setSelected(valStr + " Username");
        }
    }

    function handleClick(e) {
        const val = e.target.value;
        setRadio(() => {
            return {
                yes: false,
                no: false,
                [val]: true,
            };
        });
        if (val === "yes") {
            setCorrectRadio(true);
        } else {
            setCorrectRadio(false);
        }
    }

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        });
        if (ok) {
            form.reset();
        }
    };

    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/cf3ee196-ea18-473a-9da6-a483ee335b9f",
            data,
        })
            .then((_res) => {
                handleServerResponse(
                    true,
                    "Thanks for choosing DeFi Skeptic!",
                    form
                );
            })
            .catch((err) => {
                handleServerResponse(false, err.response.data.error, form);
                console.log(err);
            });
    };

    useEffect(() => {
        setRadio({ yes: false, no: false });
        setErrorMsg();
        setCorrectRadio(false);
        setCorrectEntry(false);
    }, [step]);

    return (
        <div className={clsx("form-wrapper-one registration-area", className)}>
            <form
                className="rwt-dynamic-form"
                id="kyc-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                {step === 1 && (
                    <div className="text-justify mb-5">
                        <div>
                            <label className="rn-form-label">
                                <p>
                                    I confirm that I am one of the projects core
                                    team members and that I have read and understand
                                    the <Anchor path="/vetting-process"><u>vetting process</u></Anchor>.
                                </p>
                            </label>
                        </div>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                checked={radio.yes}
                                id="yes"
                                name="understandsProcess"
                                onClick={(e) => handleClick(e)}
                                {...register("understandsProcess", {
                                    required:
                                        "Please choose one of these options",
                                })}
                            />
                            <label className="rn-form-label" htmlFor="yes">
                                I accept
                            </label>
                        </div>

                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="no"
                                id="no"
                                checked={radio.no}
                                name="understandsProcess"
                                onClick={(e) => handleClick(e)}
                                {...register("understandsProcess", {
                                    required:
                                        "Please choose one of these options",
                                })}
                            />
                            <label className="rn-form-label" htmlFor="no">
                                I don't accept
                            </label>
                        </div>
                        <div>
                            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
                        </div>
                        <div className="setting-option header-btn">
                            <div className="icon-box d-flex justify-content-center mt--10">
                                <Button
                                    color="primary-alta"
                                    className="connectBtn mt--20"
                                    size="large"
                                    onClick={() => {
                                        if (
                                            radio.no === false &&
                                            radio.yes === false
                                        ) {
                                            setErrorMsg(
                                                "Please choose one of these options"
                                            );
                                        } else if (correctRadio === false) {
                                            setErrorMsg(
                                                "You must accept that you have read and understand the vetting process to continue"
                                            );
                                        } else if (correctRadio === true) {
                                            setStep(step + 1);
                                        }
                                    }}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
             
                {step === 2 && (
                    <div className={clsx("mb-5")}>
                        <label
                            htmlFor="project-website"
                            className="rn-form-label"
                        >
                            <p>What is your project's website? *</p>
                        </label>
                        <input
                            name="project-website"
                            type="text"
                            onInput={(e) => handleWebsiteInput(e)}
                            pattern="/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/"
                            placeholder="yourprojecturl.example"
                            {...register("projectWebsite", {
                                required: "Project Website is required",
                                pattern: {
                                    message: "invalid project website",
                                },
                            })}
                        />

                        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 mr--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 ml--5"
                                        size="large"
                                        onClick={() => {
                                            if (correctEntry === true) {
                                                setStep(step + 1);
                                            } else {
                                                setErrorMsg(
                                                    "Please enter your website url in the valid format"
                                                );
                                            }
                                        }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="mb-5">
                        <label
                            htmlFor="contact-method"
                            className="rn-form-label"
                        >
                            <p>Preferred Contact Method *</p>
                        </label>

                        <select
                            name="contact-method"
                            type="text"
                            {...register("contactMethod", {
                                required: "Contact Method is required",
                                value: "select",
                                validate: (value) =>
                                    value !== "select" ||
                                    "Contact Method is required",
                            })}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="select" disabled>
                                - Select -
                            </option>
                            <option value="email">Email</option>
                            <option value="telegram">Telegram</option>
                            <option value="discord">Discord</option>
                        </select>

                        {errors.contactMethod && (
                            <ErrorText>
                                {errors.contactMethod?.message}
                            </ErrorText>
                        )}
                        <div
                            className={clsx(
                                "mt-5 noShowForm",
                                show && "showForm"
                            )}
                        >
                            <label
                                htmlFor="contact-info"
                                className="rn-form-label"
                            >
                                {selected} *
                            </label>
                            <input
                                name="contact-info"
                                type="text"
                                onInput={(e) => handleContactInput(e)}
                                placeholder={"Your " + selected}
                                {...register("contactInfo", {
                                    required: `${selected} is required`,
                                    pattern: {
                                        message: "invalid contact info",
                                    },
                                })}
                            />
                            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 mr--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 ml--5"
                                        size="large"
                                        onClick={() => {
                                            if (correctEntry === true) {
                                                setStep(step + 1);
                                            } else {
                                                setErrorMsg(
                                                    "Please enter your contact information in its valid format"
                                                );
                                            }
                                        }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 4 && (
                    <div
                        className={clsx(
                            "mb-5 noShowForm font--16",
                            show && "showForm"
                        )}
                    >
                        <label htmlFor="referral" className="rn-form-label text-justify ">
                            <p>
                                Were you referred to DeFi Skeptic? If so, enter the
                                person that referred you. Otherwise, click next.
                            </p>
                        </label>
                        <input
                            name="referral"
                            type="text"
                            placeholder="Please enter their contact info (Telegram, Discord, Twitter, or Email)"
                            {...register("referral")}
                        />
                        {errors.referral && (
                            <ErrorText>{errors.referral?.message}</ErrorText>
                        )}
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 mr--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 ml--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step + 1);
                                        }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 5 && (
                    <div className="mb-5">
                        <label className="rn-form-label">
                        <p>To be vetted, we have the following requirements. *</p>
                        </label>
                        <ol>
                            <li><p>Primary smart contract must be audited.</p></li>
                            <li><p>Those who handle funds or code must be doxed or KYC verified.</p></li>
                            <li><p>More than one team member is required and more than one team member must have access to project wallets whether directly, through multi-sig or via a contingency plan.</p></li>
                            <li><p>We strive to support the sustainability and longevity of DeFi, thus we do not approve "meme" projects unless they have a strong use case and/or utility.</p></li>
                        </ol>
                        <br />
                        <p>By clicking next, you understand all the above.</p>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                id="yes"
                                checked={radio.yes}
                                name="minChecks"
                                onClick={(e) => handleClick(e)}
                                {...register("minChecks", {
                                    required:
                                        "Please choose one of these options",
                                })}
                            />
                            <label className="rn-form-label" htmlFor="yes">
                                Yes
                            </label>
                        </div>

                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="no"
                                id="no"
                                checked={radio.no}
                                name="minChecks"
                                onClick={(e) => handleClick(e)}
                                {...register("minChecks", {
                                    required:
                                        "Please choose one of these options",
                                })}
                            />
                            <label className="rn-form-label" htmlFor="no">
                                No
                            </label>
                        </div>
                        <div>
                            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 mr--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 ml--5"
                                        size="large"
                                        onClick={() => {
                                            if (
                                                radio.no === false &&
                                                radio.yes === false
                                            ) {
                                                setErrorMsg(
                                                    "Please choose one of these options"
                                                );
                                            } else if (correctRadio === false) {
                                                setErrorMsg(
                                                    "Must answer yes to be considered for vetting. We provide contract audits and KYC if needed."
                                                );
                                            } else if (correctRadio === true) {
                                                setStep(step + 1);
                                                setErrorMsg();
                                            }
                                        }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 6 && (
                    <div
                        className={clsx(
                            "text-justify mb-5 noShowForm font--16",
                            show && "showForm"
                        )}
                    >
                        <p>Please select the current stage your project is in.</p>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mr--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step + 1);
                                        }}
                                    >
                                        Pre-Launch
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn ml--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step + 2);
                                        }}
                                    >
                                        Live
                                    </Button>
                                </div>
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 7 && (
                    <div className="mb-5">
                        <label className="rn-form-label">
                            <p>For pre-launched projects, the following must be true. *</p>
                        </label>
                        <ul>
                            <li><p>For Tokens</p></li>
                                <ul>
                                    <li><p>Funds added to liquidity must be >= 70% of the funds raised.</p></li>
                                    <li><p>Unlocked project owned tokens can not exceed 3% at launch.</p></li>
                                    <li><p>No manual blacklist functions.</p></li>
                                    <li><p>If there are any taxes, transaction limits or wallet limits, there must be hard coded limitations to prevent lockout.</p></li>
                                    <li><p>If mint or trading pause functions exist, they must pertain to the utility and not be owner controlled.</p></li>
                                </ul>
                            <li><p>For NFTs</p></li>
                                <ul>
                                    <li><p>NFT cannot be revocable unless utility requires it.</p></li>
                                </ul>
                        </ul>
                            <br />
                            <p>By clicking next, you certify the above.</p>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                id="yes"
                                checked={radio.yes}
                                name="preLaunchChecks"
                                onClick={(e) => handleClick(e)}
                                {...register("preLaunchChecks")}
                            />
                            <label className="rn-form-label" htmlFor="yes">
                                Yes
                            </label>
                        </div>

                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="no"
                                id="no"
                                checked={radio.no}
                                name="preLaunchChecks"
                                onClick={(e) => handleClick(e)}
                                {...register("preLaunchChecks")}
                            />
                            <label className="rn-form-label" htmlFor="no">
                                No
                            </label>
                        </div>
                        <div>
                            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 mr--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 ml--5"
                                        size="large"
                                        onClick={() => {
                                            if (
                                                radio.no === false &&
                                                radio.yes === false
                                            ) {
                                                setErrorMsg(
                                                    "Please choose one of these options"
                                                );
                                            } else if (correctRadio === false) {
                                                setErrorMsg(
                                                    "Must answer yes to be considered for vetting."
                                                );
                                            } else if (correctRadio === true) {
                                                setStep(step + 2);
                                                setErrorMsg();
                                            }
                                        }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 8 && (
                    <div className="mb-5">
                        <label className="rn-form-label">
                            For live projects, the following must be true. *
                        </label>
                        <ul>
                            <li><p>For Tokens</p></li>
                                <ul>
                                    <li><p>Must be >= 2 weeks since launch.</p></li>
                                    <li><p>Liquidity must be locked unless justified.</p></li>
                                    <li><p>Unlocked project owned tokens can not exceed 5%.</p></li>
                                </ul>
                            <li><p>For NFTs</p></li>
                                <ul>
                                    <li><p>If NFT, NFT cannot be revocable unless utility requires it.</p></li>
                                </ul>
                        </ul>
                        <br />
                        <p>By clicking next, you certify the above.</p>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                Checked={radio.yes}
                                name="liveChecks"
                                onClick={(e) => handleClick(e)}
                                {...register("liveChecks")}
                            />
                            <label className="rn-form-label" htmlFor="yes">
                                Yes
                            </label>
                        </div>

                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="no"
                                id="no"
                                checked={radio.no}
                                name="liveChecks"
                                onClick={(e) => handleClick(e)}
                                {...register("liveChecks")}
                            />
                            <label className="rn-form-label" htmlFor="no">
                                No
                            </label>
                        </div>
                        <div>
                            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 mr--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 2);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 ml--5"
                                        size="large"
                                        onClick={() => {
                                            if (
                                                radio.no === false &&
                                                radio.yes === false
                                            ) {
                                                setErrorMsg(
                                                    "Please choose one of these options"
                                                );
                                            } else if (correctRadio === false) {
                                                setErrorMsg(
                                                    "Must answer yes to be considered for vetting."
                                                );
                                            } else if (correctRadio === true) {
                                                setStep(step + 1);
                                            }
                                        }}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 9 && (
                    <div className="mb-5">
                            <label className="rn-form-label">
                                <p>By submitting, you understand the following. *</p>
                            </label>
                            <p>
                                We will conduct a preliminary review. If we decide to move forward and 
                                schedule a vetting session, you will receive a $300 invoice. This fee is 
                                non-refundable whether your project passes or fails the vetting session. If 
                                your project fails, we will provide recommendations. If resolved, the project 
                                status will be changed to "Vetted" at no additional cost.
                            </p>
                            <p>I understand and agree to the above.</p>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                id="yes"
                                checked={radio.yes}
                                name="understandsSubmitChecks"
                                onClick={(e) => handleClick(e)}
                                {...register("understandsSubmitChecks", {
                                    required:
                                        "Please choose one of these options",
                                })}
                            />
                            <label className="rn-form-label" htmlFor="yes">
                                Yes
                            </label>
                        </div>

                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="no"
                                id="no"
                                checked={radio.no}
                                name="contractAudited"
                                onClick={(e) => handleClick(e)}
                            />
                            <label className="rn-form-label" htmlFor="no">
                                No
                            </label>
                        </div>
                        <div>
                            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 mr--5"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 3);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20 ml--5"
                                        size="large"
                                        type={submit}
                                        onClick={() => {
                                            if (
                                                radio.no === false &&
                                                radio.yes === false
                                            ) {
                                                setErrorMsg(
                                                    "Please choose one of these options"
                                                );
                                            } else if (correctRadio === false) {
                                                setErrorMsg(
                                                    "You must agree to the above terms."
                                                );
                                            } else if (correctRadio === true) {
                                                setSubmit("submit");
                                            }
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {serverState.status && (
                    <p
                        className={`mt-4 font-14 ${
                            !serverState.status.ok
                                ? "text-danger"
                                : "text-success"
                        }`}
                    >
                        {serverState.status.msg}
                    </p>
                )}
            </form>
        </div>
    );
};
export default VettingApplication;
