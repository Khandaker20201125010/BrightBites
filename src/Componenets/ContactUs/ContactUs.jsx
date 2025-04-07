import React, { useState } from "react";
import bg from "../../assets/images/bgblue.png";
import axios from "axios";

const ContactUs = () => {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await axios.post("http://localhost:5000/contact", form);
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setForm({ email: "", subject: "", message: "" }); // reset form
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="mt-40 bg-cover bg-center bg-no-repeat h-[530px] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-cyan-500 font-bold text-lg">Contact Us</h1>
      <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Stay connected with us</h2>

      <form className="mt-6 w-full max-w-lg" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none mb-4"
          required
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none mb-4"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          rows="4"
          className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none mb-4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition"
        >
          Submit
        </button>

        {status && <p className="mt-4 text-white font-semibold">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
