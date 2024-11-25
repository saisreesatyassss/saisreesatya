// // const DevCard = () => {
// //   return (
// //     <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //       <a 
// //         href="https://devcard.streamlit.app/" 
// //         target="_blank" 
// //         rel="noopener noreferrer"
// //         style={{ 
// //           fontSize: '1.5rem', 
// //           color: '#007bff', 
// //           textDecoration: 'none',
// //           padding: '10px 20px',
// //           border: '2px solid #007bff',
// //           borderRadius: '5px'
// //         }}
// //       >
// //         Open DevCard App
// //       </a>
// //     </div>
// //   );
// // }

// // export default DevCard;


// import React from "react";

// const DevCard = () => {
//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
//         color: "#333333",
//         fontFamily: "'Inter', sans-serif",
//         textAlign: "center",
//         padding: "20px",
//       }}
//     >
//       {/* Header Section */}
//       <h1
//         style={{
//           fontSize: "2.5rem",
//           fontWeight: "bold",
//           marginBottom: "10px",
//           color: "#2d3748",
//         }}
//       >
//         Welcome to <span style={{ color: "#718096" }}>DevCard</span>
//       </h1>
//       <p
//         style={{
//           fontSize: "1rem",
//           maxWidth: "800px",
//           lineHeight: "1.6",
//           marginBottom: "30px",
//           color: "#4a5568",
//         }}
//       >
//         Simplify your online presence with personalized developer cards. DevCard 
//         helps you share contact details, QR codes, and links in a sleek, shareable 
//         format. Built for developers, designed for simplicity.
//       </p>

//       {/* Features Section */}
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "20px",
//           marginBottom: "30px",
//         }}
//       >
//         <FeatureCard
//           icon="🎨"
//           title="Customizable"
//           description="Tailor your DevCard with themes and layouts to match your personal style."
//         />
//         <FeatureCard
//           icon="🔗"
//           title="Shareable Links"
//           description="Generate QR codes and links to share your profiles effortlessly."
//         />
//         <FeatureCard
//           icon="⚙️"
//           title="Effortless Setup"
//           description="Set up your DevCard in minutes with a streamlined process."
//         />
//       </div>

//       {/* Call to Action Button */}
//       <a
//         href="https://devcard.streamlit.app/"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           display: "inline-block",
//           background: "#4caf50",
//           color: "#ffffff",
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           padding: "12px 24px",
//           borderRadius: "8px",
//           textDecoration: "none",
//           boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
//           transition: "transform 0.2s, box-shadow 0.2s",
//         }}
//         onMouseOver={(e) => {
//           e.target.style.transform = "translateY(-3px)";
//           e.target.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.3)";
//         }}
//         onMouseOut={(e) => {
//           e.target.style.transform = "translateY(0)";
//           e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
//         }}
//       >
//         Open DevCard App 🚀
//       </a>

//       {/* Footer Section */}
//       <footer
//         style={{
//           marginTop: "40px",
//           fontSize: "0.9rem",
//           color: "#718096",
//         }}
//       >
//         © {new Date().getFullYear()} DevCard. All Rights Reserved.
//       </footer>
//     </div>
//   );
// };

// // Reusable Feature Card Component
// const FeatureCard = ({ icon, title, description }) => {
//   return (
//     <div
//       style={{
//         background: "#ffffff",
//         color: "#333333",
//         borderRadius: "12px",
//         padding: "20px",
//         maxWidth: "250px",
//         textAlign: "center",
//         boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
//         transition: "transform 0.2s, box-shadow 0.2s",
//       }}
//       onMouseOver={(e) => {
//         e.target.style.transform = "translateY(-5px)";
//         e.target.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.2)";
//       }}
//       onMouseOut={(e) => {
//         e.target.style.transform = "translateY(0)";
//         e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.1)";
//       }}
//     >
//       <div
//         style={{
//           fontSize: "2rem",
//           marginBottom: "10px",
//           color: "#4caf50",
//         }}
//       >
//         {icon}
//       </div>
//       <h3
//         style={{
//           fontSize: "1.1rem",
//           fontWeight: "bold",
//           marginBottom: "10px",
//         }}
//       >
//         {title}
//       </h3>
//       <p style={{ fontSize: "0.9rem", lineHeight: "1.4", color: "#4a5568" }}>
//         {description}
//       </p>
//     </div>
//   );
// };

// export default DevCard;


import React, { useState } from 'react';
import { ArrowRight, Code, Share2, Palette, Github, Twitter, Star, Sparkles, Download, ExternalLink } from 'lucide-react';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f5ff 0%, #e8eaff 50%, #f3f0ff 100%)',
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(8px)',
    zIndex: 50,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  navInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  navButton: {
    background: 'none',
    border: 'none',
    color: '#4B5563',
    cursor: 'pointer',
    padding: '0.5rem',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#2563EB',
    },
  },
  hero: {
    paddingTop: '8rem',
    paddingBottom: '5rem',
    textAlign: 'center',
  },
  heroInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 1rem',
    background: '#EBF5FF',
    borderRadius: '9999px',
    color: '#2563EB',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '3.75rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    background: 'linear-gradient(to right, #2563EB, #4F46E5, #7C3AED)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#4B5563',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#2563EB',
    color: 'white',
    borderRadius: '0.5rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      background: '#1D4ED8',
      transform: 'scale(1.05)',
    },
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'transparent',
    color: '#2563EB',
    borderRadius: '0.5rem',
    fontWeight: '500',
    textDecoration: 'none',
    border: '2px solid #2563EB',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      background: '#EBF5FF',
    },
  },
  statsSection: {
    padding: '3rem 1rem',
  },
  statsGrid: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  statCard: {
    background: 'white',
    padding: '1rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: '0.25rem',
  },
  statLabel: {
    color: '#4B5563',
    fontSize: '0.875rem',
  },
  featureCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
  },
  featureIcon: {
    background: '#EBF5FF',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    color: '#2563EB',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  featureDescription: {
    color: '#4B5563',
  },
  alert: {
    background: '#EBF5FF',
    border: '1px solid #BFDBFE',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    padding: '4rem 1rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  stepGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  step: {
    textAlign: 'center',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  stepNumber: {
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(to right, #2563EB, #4F46E5)',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  cta: {
    background: 'linear-gradient(to right, #2563EB, #4F46E5)',
    color: 'white',
    padding: '4rem 1rem',
    textAlign: 'center',
  },
  footer: {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(8px)',
    padding: '2rem 1rem',
  },
  footerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  socialButton: {
    background: 'none',
    border: 'none',
    color: '#4B5563',
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#2563EB',
    },
  },
  // Media queries
  '@media (max-width: 768px)': {
    hero: {
      paddingTop: '6rem',
    },
    title: {
      fontSize: '2.5rem',
    },
    statsGrid: {
      gridTemplateColumns: '1fr',
    },
    stepGrid: {
      gridTemplateColumns: '1fr',
    },
    footerInner: {
      flexDirection: 'column',
      gap: '1rem',
    },
  },
};

// Component definition remains largely the same, just update className to style
const DevCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: Code,
      title: "Smart Template Generation",
      description: "AI-powered templates that adapt to your professional style and preferences."
    },
    {
      icon: Share2,
      title: "Instant Sharing",
      description: "One-click sharing to all major platforms and custom URL generation."
    },
    {
      icon: Palette,
      title: "Advanced Customization",
      description: "Fine-tune every aspect of your card with our intuitive design tools."
    }
  ];

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <Sparkles style={{ color: '#2563EB' }} />
            <span>DevCard</span>
          </div>
          <div style={styles.navLinks}>
            <button style={styles.navButton}
                    onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              Features
            </button>
            <button style={styles.navButton}
                    onClick={() => document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' })}>
              Showcase
            </button>
            <button style={styles.navButton}
                    onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}>
              Templates
            </button>
          </div>
        </div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.badge}>
            <Star style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
            New AI-Powered Card Generation
          </div>
          <h1 style={styles.title}>
            Your Developer Story,<br />Beautifully Presented
          </h1>
          <p style={styles.subtitle}>
            Create stunning developer cards that showcase your skills, projects, and achievements in seconds.
          </p>
          
          <div style={styles.buttonGroup}>
            <a href="https://devcard.streamlit.app/"
               target="_blank"
               rel="noopener noreferrer"
               style={styles.primaryButton}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
              Create Your DevCard
              <ArrowRight style={{
                marginLeft: '0.5rem',
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s'
              }} />
            </a>
            
            <button style={styles.secondaryButton}
                    onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}>
              View Templates
            </button>
          </div>
        </div>
      </section>

      {/* Rest of the sections follow the same pattern - 
          replace className with style and use the styles object */}
      {/* ... */}
    </div>
  );
};

export default DevCard;