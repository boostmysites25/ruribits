// import { allServices } from "../constants";
// import { BiCaretRight } from "react-icons/bi";

import { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { clientDetails } from "../constants";

const Form = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: clientDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Ruribits",
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div data-aos="fade-left" className="flex flex-col items-start gap-3 group">
      <div className="bg-gradient-to-b from-background to-background rounded-2xl w-full p-7">
        <h2 className="text-2xl font-medium">Get In Touch</h2>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="grid grid-cols-1 gap-3 mt-3"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="">
              <input
                type="text"
                className="w-full outline-none p-3 rounded-lg  border"
                autoComplete="off"
                placeholder="Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div className="">
              <input
                type="email"
                className="w-full outline-none p-3 rounded-lg  border"
                autoComplete="off"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="">
              <input
                type="text"
                className="w-full outline-none p-3 rounded-lg  border"
                autoComplete="off"
                placeholder="Subject"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Subject is required";
                    }
                  },
                })}
              />
              <p className="text-red-500">{errors.subject?.message}</p>
            </div>
            <div className="">
              <input
                type="tel"
                className="w-full outline-none p-3 rounded-lg  border"
                autoComplete="off"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[0-9]{10,15}$/,
                    message: "Entered phone number is invalid",
                  },
                })}
              />
              <p className="text-red-500">{errors.phone?.message}</p>
            </div>
          </div>

          <div>
            <textarea
              type="text"
              rows="4"
              placeholder="Message"
              className="w-full outline-none p-3 rounded-lg  "
              autoComplete="off"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <p className="text-red-500">{errors.message?.message}</p>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-4 primary-btn"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
