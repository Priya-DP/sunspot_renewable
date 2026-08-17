import { useRef, useState } from "react";
import { submitContactMessage } from "@/lib/api";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const formData = new FormData(formRef.current!);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const messageText = formData.get("message") as string;

      const result = await submitContactMessage({
        name,
        email,
        message: messageText,
      });

      if (result.success) {
        setMessage({
          text: "Thank you! Your message has been received by our team.",
          type: "success",
        });
        formRef.current?.reset();
      } else {
        setMessage({
          text: result.error || "Failed to send message. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage({
        text: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-content">
      <h2>We'd Love to Hear From You!</h2>

      {message.text && (
        <div
          className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"}`}
        >
          {message.text}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="contact-form-items"
      >
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="form-clt">
              <span>Your name*</span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                minLength={2}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-clt">
              <span>Your Email*</span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-clt">
              <span>Write Message*</span>
              <textarea
                name="message"
                placeholder="Write Message"
                required
                minLength={10}
                rows={5}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <button type="submit" className="theme-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
