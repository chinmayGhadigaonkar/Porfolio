"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneno) {
      newErrors.phoneno = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneno)) {
      newErrors.phoneno = "Phone number is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Form Data Submitted:", formData);
    setLoading(true);
    setSuccess(""); // Clear success message on submit

    try {
      const res = await fetch("/api/contactapi", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setSuccess("Thank you for contacting us! Your message has been sent.");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phoneno: "",
      message: "",
    });
  };

  const info = [
    {
      title: "Phone No",
      description: "(+91) 8591244736",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Email",
      description: "ghadigaonkarchinmay@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      title: "Address",
      description: "07, Satya Vijay Chawl, Dahisar (East), Mumbai-400068.",
      icon: <FaMapMarkerAlt />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 h-full"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent-Default">Contact Us</h3>

              {/* Display Success Message */}
              {success && (
                <p className="text-green-500 font-semibold mb-4">{success}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstname}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastname}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    name="phoneno"
                    placeholder="Phone No"
                    value={formData.phoneno}
                    onChange={handleInputChange}
                  />
                  {errors.phoneno && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneno}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Textarea
                  name="message"
                  className="h-[200px]"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <Button
                size="md"
                className="max-w-40 h-12"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex sm:items-center sm:gap-6 sm:flex-row flex-col"
                >
                  <div className="w-[62px] mx-2 sm:mx-0 h-[62px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-Default rounded-md flex items-center justify-center gap-3">
                    <div className="text-[26px]">{item.icon}</div>
                  </div>
                  <div className="flex-1 mx-2 sm:mx-0">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-md text-white sm:text-lg ">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
