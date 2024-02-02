

import React from 'react';

const ContactUsSection = () => {
  return (
    // Added mb-8 for bottom margin. Adjust the number as needed.
    <section className="contact-us bg-white py-16 mb-8">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold text-gray-700 mb-8">CONTACT US</h2>
        <p className="text-lg mb-2">Better yet, see us in person!</p>
        <p className="mb-4">
          We love our customers, so feel free to visit during normal business hours.
        </p>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-full inline-flex items-center mb-4">
        <i className="fab fa-whatsapp mr-2" /> Message us on WhatsApp
        </button>
        <div className="mb-4">


          <p className="mt-2" style={{ color: "#666" }}>
          Pali Hospital And Nursing Home, Manuel Gonsalves Road, Opposite St
          Joseph's Convent, Bandra West, Mumbai, Maharashtra, India
         </p>
         <p>Hours</p>
          <p>Open today 09:00 am - 05:00 pm</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;








// // ContactSection.js
// import React from 'react';

// const ContactSection = () => {
//   return (
//     <section className="py-12" style={{ backgroundColor: "#e6f8f9" }}>
//   <div className="container mx-auto px-4">
//     {/* Section Title */}
//     <div className="text-center">
//       <h2 className="text-4xl font-bold" style={{ color: "#333" }}>
//         Contact Us
//       </h2>
//       <hr className="mx-auto my-4 border-b-2 border-gray-300 w-1/4" />
//     </div>
//     {/* Contact Details Component */}
//     <div className="text-center mt-8">
//       <p className="text-lg mb-4" style={{ color: "#666" }}>
//         Better yet, see us in person!
//       </p>
//       <p style={{ color: "#666" }}>
//         We love our customers, so feel free to visit during normal business
//         hours.
//       </p>
//       {/* WhatsApp Message Button */}
//       <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
//         <i className="fab fa-whatsapp mr-2" /> Message us on WhatsApp
//       </button>
//       {/* Address Component */}
//       <div className="mt-8">
//         <h3 className="text-xl font-semibold" style={{ color: "#333" }}>
//           Heal And Hope
//         </h3>
//         <p className="mt-2" style={{ color: "#666" }}>
//           Pali Hospital And Nursing Home, Manuel Gonsalves Road, Opposite St
//           Joseph's Convent, Bandra West, Mumbai, Maharashtra, India
//         </p>
//       </div>
//       {/* Hours Component */}
//       <div className="mt-4">
//         <h4 className="text-lg font-semibold" style={{ color: "#333" }}>
//           Hours
//         </h4>
//         <p style={{ color: "#666" }}>Open today 09:00 am – 05:00 pm</p>
//       </div>
//     </div>
//   </div>
// </section>

//   );
// };

// export default ContactSection;
