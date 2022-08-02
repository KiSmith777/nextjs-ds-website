import { useState, useEffect } from "react";
import React from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const ArbitrageForm = ({ className, kycChoice }) => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState("");
    const [radio, setRadio] = useState(false);
    const [errorMsg, setErrorMsg] = useState();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
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
            if (val === true) {
                return false;
            } else {
                return true;
            }
        });
    }
    console.log(kycChoice);
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
            url: "https://getform.io/f/be7c87a6-f25e-44c6-b39c-29d53302e9b9",
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

    return (
        <div className={clsx("form-wrapper-one registration-area", className)}>
            <h3 className="mb--30 text-center">KYC Request Form</h3>
            <form
                className="rwt-dynamic-form"
                id="kyc-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5">
                    <label htmlFor="kyc-choice" className="rn-form-label">
                        KYC Provider
                    </label>
                    <input
                        id="kyc-choice"
                        type="text"
                        placeholder={kycChoice}
                        disabled
                        value={kycChoice}
                        {...register("providerChoice")}
                    />
                    {errors.providerChoice && (
                        <ErrorText>{errors.providerChoice?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-name" className="rn-form-label">
                        Name *
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        placeholder="Your Name"
                        {...register("contactName", {
                            required: "Name is required",
                        })}
                    />
                    {errors.contactName && (
                        <ErrorText>{errors.contactName?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-method" className="rn-form-label">
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
                        <ErrorText>{errors.contactMethod?.message}</ErrorText>
                    )}
                </div>
                <div className={clsx("mb-5 noShowForm", show && "showForm")}>
                    <label htmlFor="contact-info" className="rn-form-label">
                        {selected} *
                    </label>
                    <input
                        name="contact-info"
                        type="text"
                        placeholder={"Your " + selected}
                        {...register("contactInfo", {
                            required: `${selected} is required`,
                            pattern: {
                                message: "invalid contact info",
                            },
                        })}
                    />
                    {errors.contactInfo && (
                        <ErrorText>{errors.contactInfo?.message}</ErrorText>
                    )}
                </div>
                <div className={clsx("mb-5 noShowForm", show && "showForm")}>
                    <label htmlFor="project-name" className="rn-form-label">
                        Project Name *
                    </label>
                    <input
                        name="project-name"
                        type="text"
                        placeholder="Your Project Name"
                        {...register("projectName", {
                            required: "Project Name is required",
                            pattern: {
                                message: "invalid project name",
                            },
                        })}
                    />

                    {errors.projectName && (
                        <ErrorText>{errors.projectName?.message}</ErrorText>
                    )}
                </div>

                <div className={clsx("mb-5 noShowForm", show && "showForm")}>
                    <label htmlFor="project-website" className="rn-form-label">
                        Project Website
                    </label>
                    <input
                        name="project-website"
                        type="text"
                        placeholder="Your Project Website"
                        {...register("projectWebsite")}
                    />

                    {errors.projectWebsite && (
                        <ErrorText>{errors.projectWebsite?.message}</ErrorText>
                    )}
                </div>
                <div
                    className={clsx(
                        "mb-5 noShowForm font--16",
                        show && "showForm"
                    )}
                >
                    <label htmlFor="referral" className="rn-form-label">
                        Who Referred You?
                    </label>
                    <input
                        name="referral"
                        type="text"
                        placeholder="Please enter their contact info (TG, Discord, Twitter, or Email)"
                        {...register("referral")}
                    />
                    {errors.referral && (
                        <ErrorText>{errors.referral?.message}</ErrorText>
                    )}
                </div>

                <div className="setting-option header-btn">
                    <div className="icon-box d-flex justify-content-center mt--10 pb--50">
                        <Button
                            type="submit"
                            color="primary-alta"
                            className="connectBtn"
                            size="large"
                            onClick={() => {
                                setValue("providerChoice", kycChoice);
                            }}
                        >
                            Submit Request
                        </Button>
                    </div>
                </div>
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
export default ArbitrageForm;
