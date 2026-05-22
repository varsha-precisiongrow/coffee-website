import React, { useState } from "react";
import { motion } from "framer-motion";
import {  FaPhoneAlt,  FaEnvelope,  FaMapMarkerAlt,  FaClock,  FaPaperPlane,  FaInstagram,  FaFacebookF,  FaTwitter,} from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import contactBanner from "../assets/bg-img/page-header-bg.webp";
import contactbg from '../assets/bg-img/bud-formation-bg.webp'

const text = "CONTACT US";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
    },
  }),
};

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Your message has been sent successfully!");

      console.log(formData);

      // Reset Form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
        < Helmet>

        <title>Contact Us | Coffee Support & Inquiries</title>

        <meta name="description" content="Get in touch for coffee inquiries, partnerships, support, and collaboration. We’re here to help coffee lovers worldwide."/>

        <meta  name="keywords" content="contact coffee, coffee support, coffee inquiries, coffee collaboration, coffee help" />
        <link rel="canonical" href="https://coffeeinstitute.co.in/contact" />

     </Helmet>
     {/* ================================================================== banner ================================================================================== */}
     <section
      className=" relative w-full h-[350px] md:h-[500px] overflow-hidden " >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactBanner})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1
          className=" flex items-center justify-center  gap-1  md:gap-3 text-xl sm:text-xl md:text-7xl font-bold tracking-[8px] text-white uppercase overflow-hidden ">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
   {/* ================================================================== banner ================================================================================== */}

<section className="relative w-full ">

  <img
    src={contactbg}
    alt="bg"
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  />

 
 
      <div className="max-w-7xl mx-auto">

        {/* Top Heading */}
        <div className="text-center my-10">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="uppercase tracking-[4px] text-[#8b5e3c] text-sm font-semibold mb-3"
          >
            Contact Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b2416]"
          >
            Let’s Start A Conversation
          </motion.h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 px-4">

          {/* Left Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            className="bg-white rounded-[30px] p-8 shadow-xl border border-[#f1e4d8]"
          >

            <h3 className="text-3xl font-bold text-[#3b2416] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              {[
                {
                    icon: <FaPhoneAlt size={22} />,
                    title: "Phone Number",
                    text: "+91 8097283444",
                    },
                    {
                    icon: <FaEnvelope size={22} />,
                    title: "Email Address",
                    text: "info@coffeeinstitute.co.in",
                    },
                    {
                    icon: <FaMapMarkerAlt size={22} />,
                    title: "Location",
                    text: "Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710.",
                    },
                    {
                    icon: <FaClock size={22} />,
                    title: "Working Hours",
                    text: "Mon - Sat : 9:30 AM - 6.30 PM",
                    },

              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#f7ede4] flex items-center justify-center text-[#8b5e3c] shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#3b2416]">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 mt-1">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Social Icons */}
            <div className="mt-10 flex gap-4">

              {[  FaInstagram,  FaFacebookF,  FaTwitter,].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                  className="w-12 h-12 rounded-full bg-[#f7ede4] flex items-center justify-center cursor-pointer"
                >
                  <Icon className="text-[#8b5e3c]" size={22} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={4}
            className="bg-white rounded-[30px] p-8 shadow-xl border border-[#f1e4d8]"
          >

            <h4 className="text-3xl font-bold text-[#3b2416] mb-8">
              Send A Message
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full h-14 rounded-2xl border px-2 outline-none transition
                  ${
                    errors.name
                      ? "border-red-500"
                      : "border-[#e7d6c7] focus:border-[#8b5e3c]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-14 rounded-2xl border px-5 outline-none transition
                  ${
                    errors.email
                      ? "border-red-500"
                      : "border-[#e7d6c7] focus:border-[#8b5e3c]"
                  }`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full h-14 rounded-2xl border px-5 outline-none transition
                  ${
                    errors.subject
                      ? "border-red-500"
                      : "border-[#e7d6c7] focus:border-[#8b5e3c]"
                  }`}
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border p-5 outline-none resize-none transition
                  ${
                    errors.message
                      ? "border-red-500"
                      : "border-[#e7d6c7] focus:border-[#8b5e3c]"
                  }`}
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success Message */}
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 font-medium"
                >
                  {success}
                </motion.p>
              )}

              {/* Submit Button */}
        
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full sm:w-auto bg-[#6f4e37] hover:bg-[#5b3f2d] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition duration-300"
                >
                Send Message
                <FaPaperPlane size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;