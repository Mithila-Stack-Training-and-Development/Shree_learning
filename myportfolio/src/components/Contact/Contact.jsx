import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("contactFormData");
    return saved ? JSON.parse(saved) : { name: '', email: '', message: '' };
  });

  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    localStorage.removeItem("contactFormData");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#050414] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#050414]">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="4" 
              required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" 
            />
          </div>

          <button type="submit" className="w-full bg-[#050414] text-white py-2 rounded-md hover:bg-[#1b1a3f] transition-colors">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
