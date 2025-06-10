import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-green-600">Contact Us</h1>
      <p className="text-lg mb-4">
        We'd love to hear from you! Reach out with any questions, feedback, or support inquiries.
      </p>

      <ul className="text-lg space-y-2">
        <li><strong>Email:</strong> <a href="mailto:contact@shopzone.com" className="text-green-600 hover:underline">contact@shopzone.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-green-600 hover:underline">(+251) 99 999 9999</a></li>
        <li><strong>Address:</strong> 123 Shopping St, Shop City, ET</li>
      </ul>
    </div>
  );
};

export default Contact;
