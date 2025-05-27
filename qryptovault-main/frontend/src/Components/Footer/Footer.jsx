import "./Footer.css";
import { Shield, Activity, Users, Zap, ChevronDown, Download, Upload, Lock, Eye } from 'lucide-react';
export default function Footer() {
  return (
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
  );
}
