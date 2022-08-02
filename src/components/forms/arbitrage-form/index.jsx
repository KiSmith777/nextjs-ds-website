import { useState } from "react";
import React from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const ArbitrageForm = ({ className }) => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState("");
    const [radio, setRadio] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [correctEntry, setCorrectEntry] = useState(false);

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
            url: "https://getform.io/f/8a627fde-f702-4ad8-847a-617dced8109b",
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
            
            <form
                className="rwt-dynamic-form"
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                    <label htmlFor="token-address" className="rn-form-label">
                        Token Contract Address *
                    </label>
                    <input
                        name="token-address"
                        type="text"
                        placeholder="Contract Address"
                        {...register("tokenAddress", {
                            required: "Token Contract Address is required",
                            pattern: {
                                message: "invalid token contract address",
                            },
                        })}
                    />

                    {errors.tokenAddress && (
                        <ErrorText>{errors.tokenAddress?.message}</ErrorText>
                    )}
                </div>

                <div className={clsx("mb-5")}>
                    <div>
                        <label className="rn-form-label">
                            Do you have two or more Liquidity Pools? *
                        </label>
                    </div>
                    <div className="form-check radioBox">
                        <input
                            type="radio"
                            value="yes"
                            id="yes"
                            name="liquidityPoolCheck"
                            onClick={(e) => handleClick(e)}
                            {...register("liquidityPoolCheck", {
                                required: "Please choose one of these options",
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
                            name="liquidityPoolCheck"
                            onClick={(e) => handleClick(e)}
                            {...register("liquidityPoolCheck", {
                                required: "Please choose one of these options",
                            })}
                        />
                        <label className="rn-form-label" htmlFor="no">
                            No
                        </label>
                    </div>
                    <div>
                        {errors.liquidityPoolCheck && (
                            <ErrorText>
                                {errors.liquidityPoolCheck.message}
                            </ErrorText>
                        )}
                    </div>
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
export default ArbitrageForm;
