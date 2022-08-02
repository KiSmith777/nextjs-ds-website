import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import clsx from "clsx";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState("");

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
            url: "https://getform.io/f/b4c8ab32-fa26-4086-b102-853246798d03",
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
            <h3 className="mb--30">Contact Us</h3>
            <form
                className="rwt-dynamic-form"
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5 font--16">
                    <label htmlFor="contact-name" className="form-label">
                        Your Name
                    </label>
                    <input
                        id="contact-name"
                        type="text"
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
                    <label htmlFor="subject" className="form-label">
                        Subject
                    </label>
                    <input
                        name="subject"
                        type="text"
                        {...register("subject", {
                            required: "Subject is required",
                        })}
                    />
                    {errors.subject && (
                        <ErrorText>{errors.subject?.message}</ErrorText>
                    )}
                </div>
                <div
                    className={clsx(
                        "mb-5 noShowForm font--16",
                        show && "showForm"
                    )}
                >
                    <label htmlFor="contact-message" className="form-label">
                        Write Message
                    </label>
                    <textarea
                        id="contact-message"
                        rows="3"
                        {...register("contactMessage", {
                            required: "Message is required",
                        })}
                    />
                    {errors.contactMessage && (
                        <ErrorText>{errors.contactMessage?.message}</ErrorText>
                    )}
                </div>

                <Button type="submit" size="medium">
                    Send Message
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
export default ContactForm;

