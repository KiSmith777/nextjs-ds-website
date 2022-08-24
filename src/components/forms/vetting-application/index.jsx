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
            /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

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
                                I confirm that I am one of the projects core
                                team members and that I have read and understand
                                the{" "}
                                <Anchor path="/vetting-process">
                                    <u>vetting process</u>
                                </Anchor>
                                . I also understand that if my project passes the 
                                preliminary review and I pay the $250 vetting fee, 
                                that it is non-refundable, even if my project is not approved. 
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
                            What is your project's website? *
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
                                        className="connectBtn mt--20"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20"
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
                            Preferred Contact Method *
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
                                        className="connectBtn mt--20"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20"
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
                            Were you referred to DeFi Skeptic? If so, enter the
                            person that referred you. Otherwise, click next.
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
                                        className="connectBtn mt--20"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20"
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
                    <div
                        className={clsx(
                            "text-justify mb-5 noShowForm font--16",
                            show && "showForm"
                        )}
                    >
                        <h4>Required Items</h4>
                        <p>
                            To have an initial review conducted prior to a
                            vetting interview being scheduled, these last four
                            questions must have an answer of yes.
                        </p>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="icon-box d-flex justify-content-evenly mt--10">
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20"
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
                {step === 6 && (
                    <div className="mb-5">
                        <div>
                            <label className="rn-form-label">
                                Is your projects smart contract audited? *
                            </label>
                        </div>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                id="yes"
                                checked={radio.yes}
                                name="contractAudited"
                                onClick={(e) => handleClick(e)}
                                {...register("contractAudited", {
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
                                {...register("contractAudited", {
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
                                        className="connectBtn mt--20"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
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
                                                    "You must have a smart contract audit prior to our initial review. We provide contract auditing if needed."
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
                {step === 7 && (
                    <div className="mb-5">
                        <div>
                            <label className="rn-form-label text-justify">
                                Are those on your projects team that handle code
                                or funds publicly doxed and/or KYC verified? *
                            </label>
                        </div>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                checked={radio.yes}
                                name="doxOrKyc"
                                onClick={(e) => handleClick(e)}
                                {...register("doxOrKyc", {
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
                                name="doxOrKyc"
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
                                        className="connectBtn mt--20"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
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
                                                    "Those that handle code or funds must be publicly doxed or KYC verified prior to our initial review. We provide KYC services if needed."
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
                {step === 8 && (
                    <div className="mb-5">
                        <div>
                            <label className="rn-form-label text-justify">
                                If your project uses a liquidity pool, is it
                                locked? We require all LP's to be locked unless justification can be provided. *
                            </label>
                        </div>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                id="yes"
                                checked={radio.yes}
                                name="liquidityPoolLocked"
                                onClick={(e) => handleClick(e)}
                                {...register("liquidityPoolLocked", {
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
                                name="liquidityPoolLocked"
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
                                        className="connectBtn mt--20"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
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
                                                setStep(step + 1);
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
                        <div>
                            <label className="rn-form-label text-justify">
                                For project owned wallets, does more than one
                                person have access? This can be direct or via multi-sig. If not, do you have a
                                contingency in place if the sole accessor dies or becomes incapacitated? *
                            </label>
                        </div>
                        <div className="form-check radioBox">
                            <input
                                type="radio"
                                value="yes"
                                id="yes"
                                checked={radio.yes}
                                name="multipleProjectWalletAccess"
                                onClick={(e) => handleClick(e)}
                                {...register("multipleProjectWalletAccess", {
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
                                        className="connectBtn mt--20"
                                        size="large"
                                        onClick={() => {
                                            setStep(step - 1);
                                        }}
                                    >
                                        Go Back
                                    </Button>
                                    <Button
                                        color="primary-alta"
                                        className="connectBtn mt--20"
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
                                                    "To ensure longevity of the project, we require more than one person have access to project wallets. If direct access is not desired, there are other options. Please contact us to discuss."
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
