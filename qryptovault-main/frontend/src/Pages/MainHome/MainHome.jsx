import React, { useState, useEffect } from 'react';
import { Shield, Activity, Users, Zap, ChevronDown, Download, Upload, Lock, Eye } from 'lucide-react';
import './MainHome.css';
import Navbar from '../../Components/Navbar/Navbar';

// Mock QuantumConsole component
const QuantumConsole = ({ logs }) => (
  <div className="quantum-panel console-container">
    <div className="console-bg-animation"></div>
    <h3 className="console-title">System Console</h3>
    <div className="console-logs">
      {logs.map(log => (
        <div key={log.id} className="log-entry">
          <span className="log-timestamp">{log.timestamp}</span>
          <span className={`log-message log-${log.type}`}>{log.message}</span>
        </div>
      ))}
    </div>
  </div>
);

const MainHome = () => {
  const [logs, setLogs] = useState([
    {
      id: '1',
      timestamp: new Date().toLocaleTimeString(),
      message: 'Quantum-Secured File Transfer System initialized',
      type: 'info'
    },
    {
      id: '2',
      timestamp: new Date().toLocaleTimeString(),
      message: 'All systems operational',
      type: 'success'
    }
  ]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addLog = (message, type = 'info') => {
    const newLog = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString(),
      message,
      type
    };
    setLogs(prev => [...prev, newLog]);
  };

  const stats = [
    { icon: Shield, label: 'Security Level', value: 'Quantum', color: 'neon-cyan' },
    { icon: Activity, label: 'Server Status', value: 'Online', color: 'neon-green' },
    { icon: Users, label: 'Active Sessions', value: '0', color: 'neon-blue' },
    { icon: Zap, label: 'Transfer Rate', value: 'Ready', color: 'neon-purple' },
  ];

  const features = [
    {
      icon: Lock,
      title: "Quantum Encryption",
      description: "Unbreakable security using quantum key distribution protocols"
    },
    {
      icon: Upload,
      title: "Lightning Fast",
      description: "Transfer files at unprecedented speeds with zero latency"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Track every byte with our advanced monitoring system"
    }
  ];

  return (
    <div className="main-container">
        <Navbar/>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Animated Background Elements */}
        <div className="parallax-bg"></div>
        <div 
          className="hero-overlay"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>

        <div className="hero-content">
          {/* Main Hero Content */}
          <div className="hero-header">
            <div className="hero-title-section">
              <Shield className="hero-icon" />
              <h1 className="hero-title">
                Quantum Transfer Hub
              </h1>
            </div>
          </div>

          <div className="hero-panel">
            <p className="hero-description">
              Secure file transmission with quantum encryption protocols
            </p>
            
            <div className="hero-buttons">
              <button className="neon-button primary">
                <a href="/server"> Initialize Transfer </a>
              </button>
              <button className="neon-button secondary">
                View Documentation
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <ChevronDown className="scroll-icon" />
            <p className="scroll-text">Explore Features</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">
            System Status
          </h2>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card"
              >
                <stat.icon className={`stat-icon ${stat.color}`} />
                <h3 className="stat-label">{stat.label}</h3>
                <p className={`stat-value ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            Advanced Capabilities
          </h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <feature.icon className="feature-icon" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Console Section */}
      <section className="console-section">
        <div className="container">
          <h2 className="section-title">
            Live System Monitor
          </h2>
          <div className="console-wrapper">
            <QuantumConsole logs={logs} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <Shield className="footer-icon" />
            <span className="footer-title">Quantum Transfer Hub</span>
          </div>
          <p className="footer-tagline">
            Secure • Fast • Quantum-Encrypted
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainHome;