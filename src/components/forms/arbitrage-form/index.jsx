import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";

const ArbitrageForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
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
            url: "https://getform.io/f/89133663-6b36-4d44-bb0c-0104fe438a36",
            data,
        })
            .then((_res) => {
                handleServerResponse(true, "Thanks! for being with us", form);
            })
            .catch((err) => {
                handleServerResponse(false, err.response.data.error, form);
            });
    };
    return (
        <div className="form-wrapper-one registration-area">
            <h3 style={{textAlign: "center"}} className="mb--30">Request Form<br/>Arbitrage as a Service</h3>
            <form
                className="rwt-dynamic-form"
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5">
                    <label htmlFor="contact-name" className="form-label">
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
                    <label htmlFor="contact-method" className="form-label">
                        Preferred Contact Method *
                    </label>
                    <select
                        name="contact-method"
                        type="email"
                        required
                    >
                        <option>- Select -</option>
                        <option value="email">Email</option>
                        <option value="telegram">Telegram</option>
                        <option value="discord">Discord</option>
                    </select>
                    {errors.contactMethod && (
                        <ErrorText>{errors.contactMethod?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-info" className="form-label">
                        Contact Information *
                    </label>
                    <input
                        name="contact-info"
                        type="text"
                        placeholder="Your Contact Info"
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
                <div className="mb-5">
                    <label htmlFor="delivery-date" className="form-label">
                        Preferred Delivery Date * 
                    </label>
                    <input
                        name="delivery-date"
                        type="date"
                        format="yyyy-MM-dd"
                        {...register("deliveryDate", {
                            required: "Preferred Delivery Date is required",
                            
                        })}
                    />
                    {errors.deliveryDate && (
                        <ErrorText>{errors.deliveryDate?.message}</ErrorText>
                    )}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="contact-message" className="form-label">
                        Describe Your Needs *
                    </label>
                    <textarea
                        id="contact-message"
                        rows="3"
                        placeholder="Please provide as many details as possible in your description."
                        {...register("contactMessage", {
                            required: "Message is required",
                        })}
                    />
                    {errors.contactMessage && (
                        <ErrorText>{errors.contactMessage?.message}</ErrorText>
                    )} 
                </div>
               
                
                <Button type="submit" size="medium">
                    Submit Request
                </Button>
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

