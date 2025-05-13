// Components/ContactUs.js

import React from 'react';

const page = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-emerald-700 mb-4">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" required></textarea>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">Send Message</button>
        </form>

        {/* Contact Info + Map */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Address</h2>
          <p>Shop No. 9, Juna Mondha, Nanded, Maharashtra - 431601</p>
          <p>Phone: +91-7483600212</p>
          <p>Email: info@krishnanaturals.com</p>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.1350634779443!2d77.31949187448626!3d19.1479529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6383bb5a859%3A0x4566f2e227148be!2sShri%20Krishna%20Trading!5e0!3m2!1sen!2sin!4v1747156173083!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold">Q: Do you ship outside Maharashtra?</h3>
            <p>A: Yes, we offer all-India shipping for all our dry fruit products.</p>
          </div>
          <div>
            <h3 className="font-bold">Q: Are your products organic?</h3>
            <p>A: Yes, Krishna Naturals specializes in organic and premium-quality dry fruits.</p>
          </div>
          <div>
            <h3 className="font-bold">Q: Can I track my order?</h3>
            <p>A: Once your order is shipped, you’ll receive a tracking ID via email or SMS.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
