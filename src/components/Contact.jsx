import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_kbv7hjx", // replace this
        "template_kms2gkq", // replace this
        form.current,
        "PMsZr8OJ6VSWXvkFK" // replace this
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-20 bg-white dark:bg-[#0F172A] text-gray-800 dark:text-gray-200 transition-colors duration-500"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Contact <span className="text-[#F97316]">Me</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Have a question, a project, or want to collaborate? Fill out the form
          below and I’ll get back to you soon.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-[#1E293B] p-8 rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.15)]">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="flex-1 p-3 rounded-lg bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="flex-1 p-3 rounded-lg bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-3 rounded-lg bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg bg-white dark:bg-[#0F172A] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#F97316] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="text-center mt-4 text-sm text-[#F97316]">{status}</p>
        )}
      </div>
    </section>
  );
}
