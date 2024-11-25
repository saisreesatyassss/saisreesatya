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
    background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #EDE9FF 100%)',
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
  navContent: {
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
  },
  hero: {
    paddingTop: '8rem',
    paddingBottom: '5rem',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    background: '#DBEAFE',
    borderRadius: '9999px',
    color: '#2563EB',
    marginBottom: '1rem',
  },
  heading: {
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
    maxWidth: '36rem',
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
  },
  statsSection: {
    padding: '3rem 1rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  statCard: {
    background: 'white',
    padding: '1.5rem',
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
  featuresSection: {
    padding: '4rem 1rem',
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(8px)',
  },
  featureCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  featureIcon: {
    background: '#DBEAFE',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    color: '#2563EB',
    marginBottom: '1rem',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  alert: {
    background: '#EFF6FF',
    border: '1px solid #BFDBFE',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(8px)',
    padding: '2rem 1rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  socialButtons: {
    display: 'flex',
    gap: '1rem',
  },
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '2.5rem',
    },
    statsGrid: {
      gridTemplateColumns: '1fr',
    },
    footerContent: {
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'center',
    },
  }
};

// Component implementation remains similar, just using the styles object
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
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <Sparkles size={24} color="#2563EB" />
            <span>DevCard</span>
          </div>
          <div style={styles.navLinks}>
            <button style={styles.navButton}>Features</button>
            <button style={styles.navButton}>Showcase</button>
            <button style={styles.navButton}>Templates</button>
          </div>
        </div>
      </nav>

      <div style={styles.hero}>
        <div style={styles.badge}>
          <Star size={16} style={{ marginRight: '0.5rem' }} />
          New AI-Powered Card Generation
        </div>
        <h1 style={styles.heading}>
          Your Developer Story,<br />Beautifully Presented
        </h1>
        <p style={styles.subtitle}>
          Create stunning developer cards that showcase your skills, projects, and achievements in seconds.
        </p>
        
        <div style={styles.buttonGroup}>
          <button 
              href="https://devcard.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
            style={{
              ...styles.primaryButton,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Create Your DevCard
            <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </button>
          <button style={styles.secondaryButton}>
            View Templates
          </button>
        </div>
      </div>

      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {[
            { number: "1+", label: "Developer Cards Created" },
            { number: "1", label: "Custom Templates" },
            { number: "60%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.featuresSection}>
        <div style={styles.featureGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  <Icon size={24} />
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>{feature.title}</h3>
                <p style={{ color: '#4B5563' }}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div style={styles.alert}>
        <span>Try our new AI-powered template generation!</span>
        <ExternalLink size={20} color="#2563EB" />
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} color="#2563EB" />
            © 2024 DevCard. Create something amazing.
          </div>
          <div style={styles.socialButtons}>
            <button style={styles.navButton}><Github size={24} /></button>
            <button style={styles.navButton}><Twitter size={24} /></button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DevCard;