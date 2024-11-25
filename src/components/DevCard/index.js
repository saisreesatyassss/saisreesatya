// const DevCard = () => {
//   return (
//     <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <a 
//         href="https://devcard.streamlit.app/" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         style={{ 
//           fontSize: '1.5rem', 
//           color: '#007bff', 
//           textDecoration: 'none',
//           padding: '10px 20px',
//           border: '2px solid #007bff',
//           borderRadius: '5px'
//         }}
//       >
//         Open DevCard App
//       </a>
//     </div>
//   );
// }

// export default DevCard;


import React from "react";

const DevCard = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
        color: "#333333",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#2d3748",
        }}
      >
        Welcome to <span style={{ color: "#718096" }}>DevCard</span>
      </h1>
      <p
        style={{
          fontSize: "1rem",
          maxWidth: "800px",
          lineHeight: "1.6",
          marginBottom: "30px",
          color: "#4a5568",
        }}
      >
        Simplify your online presence with personalized developer cards. DevCard 
        helps you share contact details, QR codes, and links in a sleek, shareable 
        format. Built for developers, designed for simplicity.
      </p>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <FeatureCard
          icon="🎨"
          title="Customizable"
          description="Tailor your DevCard with themes and layouts to match your personal style."
        />
        <FeatureCard
          icon="🔗"
          title="Shareable Links"
          description="Generate QR codes and links to share your profiles effortlessly."
        />
        <FeatureCard
          icon="⚙️"
          title="Effortless Setup"
          description="Set up your DevCard in minutes with a streamlined process."
        />
      </div>

      {/* Call to Action Button */}
      <a
        href="https://devcard.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: "#4caf50",
          color: "#ffffff",
          fontSize: "1.2rem",
          fontWeight: "500",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateY(-3px)";
          e.target.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
        }}
      >
        Open DevCard App 🚀
      </a>

      {/* Footer Section */}
      <footer
        style={{
          marginTop: "40px",
          fontSize: "0.9rem",
          color: "#718096",
        }}
      >
        © {new Date().getFullYear()} DevCard. All Rights Reserved.
      </footer>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        color: "#333333",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "250px",
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "translateY(-5px)";
        e.target.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.2)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.1)";
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          marginBottom: "10px",
          color: "#4caf50",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.9rem", lineHeight: "1.4", color: "#4a5568" }}>
        {description}
      </p>
    </div>
  );
};

export default DevCard;
