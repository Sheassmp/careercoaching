import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Contact Us</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Have questions or want to schedule a session? Email us at{" "}
        <a href="mailto:info@careercoaching.com" className="text-blue-600 hover:underline">
          info@careercoaching.com
        </a>.
      </p>
    </main>
  );
};

export default Contact;
