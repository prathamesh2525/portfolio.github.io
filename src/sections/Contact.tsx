import React, { useState } from "react"
import Button from "../components/Button"
import { MapPin, Mail, Phone } from "lucide-react"
import emailjs from "emailjs-com"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission here
    emailjs
      .send(
        "service_z5anugc", // e.g., service_xxx123
        "template_ltpto78", // e.g., template_abc456
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "50V0BJ0QIgs4e6C0H" // e.g., your user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text)
          alert("Thank you for your message! I will get back to you soon.")
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        },
        (error) => {
          console.error("Email send error:", error.text)
          alert("Failed to send message. Please try again later.")
        }
      )
  }

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: "Pune, India",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "prathamesh.madniwale@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+91-9370024838",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg mr-4 text-blue-600 dark:text-blue-400 transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {info.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md transition-colors duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                ></textarea>
              </div>

              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
