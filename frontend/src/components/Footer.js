import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Veyura</h3>
            <p className="footer-tagline">
              Votre partenaire digital pour des sites modernes et performants
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info">
              <a href="mailto:contact@veyura.com" className="contact-item">
                <Mail size={18} />
                <span>contact@veyura.com</span>
              </a>
              <a href="tel:0751199961" className="contact-item">
                <Phone size={18} />
                <span>07 51 19 99 61</span>
              </a>
              <div className="contact-item">
                <MapPin size={18} />
                <span>22 rue de Trévise, Lille 59000</span>
              </div>
            </div>
          </div>

          <div className="footer-services">
            <h4 className="footer-title">Services</h4>
            <ul className="service-list">
              <li>Sites vitrines</li>
              <li>Développement sur mesure</li>
              <li>Optimisation SEO</li>
              <li>Design responsive</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Veyura. Tous droits réservés.
          </p>
          <p className="made-with">
            Créé avec passion à Lille
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-section);
          border-top: 1px solid var(--border-light);
          padding: 3rem 0 1.5rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-brand .footer-logo {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: 1.5rem;
          color: var(--brand-primary);
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-tagline {
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-title {
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color: var(--brand-accent);
        }

        .service-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .service-list li {
          color: var(--text-secondary);
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .service-list li:hover {
          color: var(--brand-primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-light);
        }

        .copyright,
        .made-with {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;