import { useState } from "react";
import React from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import clsx from "clsx";


const ServiceRequestForm = ({ className }) => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState("");
    const [radio, setRadio] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    console.log(watch("liquidityPoolCheck"));

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
            url: "https://getform.io/f/ea656151-c1db-409f-8347-f56d415c36d9",
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
            <h3 style={{ textAlign: "center" }} className="mb--30">
                Service Request Form
                <br />
            </h3>
            <form
                className="rwt-dynamic-form"
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5 font--16">
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
                <div className="mb-5 font--16">
                    <label htmlFor="contact-method" className="rn-form-label">
                        Preferred Contact Method *
                    </label>

                    <select
                        name="contact-method"
                        type="text"
                        {...register("contactMethod", {
                            required: "Preferred Contact Method is required",
                            value: "select",
                            validate: (value) =>
                                value !== "select" ||
                                "Preferred Contact Method is required",
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
                <div
                    className={clsx(
                        "mb-5 noShowForm font--16",
                        show && "showForm"
                    )}
                >
                    <label htmlFor="contact-info" className="rn-form-label">
                        {selected} *
                    </label>
                    <input
                        name="contact-info"
                        type="text"
                        placeholder={"Your " + selected}
                        {...register("contactInfo", {
                            required: "Contact Information is required",
                            pattern: {
                                message: "invalid contact info",
                            },
                        })}
                    />
                    {errors.contactInfo && (
                        <ErrorText>{errors.contactInfo?.message}</ErrorText>
                    )}
                </div>
                <div
                    className={clsx(
                        "mb-5 noShowForm font--16",
                        show && "showForm"
                    )}
                >
                    <label htmlFor="delivery-date" className="rn-form-label">
                        Preferred Delivery Date *
                    </label>
                    <input
                        name="delivery-date"
                        type="date"
                        placeholder={today}
                        max="2024-08-01"
                        min="2022-08-01"
                        format="yyyy-MM-dd"
                        {...register("preferredDeliveryDate", {
                            required: "Preferred Delivery Date is required",
                            max: "2024-08-01",
                            min: "2022-08-01",
                        })}
                    />
                    {errors.preferredDeliveryDate && (
                        <ErrorText>
                            {errors.preferredDeliveryDate?.message}
                        </ErrorText>
                    )}
                </div>

                <div
                    className={clsx(
                        "mb-5 noShowForm font--16",
                        show && "showForm"
                    )}
                >
                    <label htmlFor="select-service" className="rn-form-label">
                        Select Service *
                    </label>

                    <select
                        name="select-service"
                        type="text"
                        {...register("serviceRequested", {
                            required:
                                "Please select a service from the dropdown",
                            value: "select",
                            validate: (value) =>
                                value !== "select" ||
                                "Please select a service from the dropdown",
                        })}
                    >
                        <option value="select" disabled>
                            - Select -
                        </option>
                        <option value="contract-audit">Contract Audit</option>
                        <option value="token-nft">Token & NFT Creation</option>
                        <option value="bot-dapp">dApp & Bot Creation</option>
                        <option value="vaas">Vetting as a Service (VaaS)</option>
                        <option value="web-development">Web Development</option>
                        <option value="ux-ui-design">UX / UI Design</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="vetted-ama-tour">Vetted AMA Tour</option>
                        <option value="marketing-strategist">Marketing Strategist</option>
                        <option value="fiat-onboarding">FIAT Onboarding</option>
                    </select>

                    {errors.serviceRequested && (
                        <ErrorText>
                            {errors.serviceRequested?.message}
                        </ErrorText>
                    )}
                </div>

                <div
                    className={clsx(
                        "mb-5 noShowForm font--16",
                        show && "showForm"
                    )}
                >
                    <label htmlFor="jobDescription" className="rn-form-label">
                        Describe Your Needs *
                    </label>
                    <textarea
                        name="job-description"
                        placeholder="Please try to share as many details as possible"
                        rows="4"
                        {...register("jobDescription", {
                            required: "A description is required",
                        })}
                    />
                    {errors.jobDescription && (
                        <ErrorText>{errors.jobDescription?.message}</ErrorText>
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
                    <div className="icon-box d-flex justify-content-center mt--10">
                        <Button
                            type="submit"
                            color="primary-alta"
                            className="connectBtn"
                            size="large"
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
export default ServiceRequestForm;
