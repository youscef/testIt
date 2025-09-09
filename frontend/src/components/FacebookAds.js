import React from 'react';
import { Monitor, Smartphone, Search, Mail, Phone, MapPin } from 'lucide-react';

const FacebookAds = () => {
  return (
    <div className="facebook-ads-container">
      {/* Visuel 1 - Branding */}
      <div className="ad-visual" id="visual-1">
        <div className="ad-background">
          <img 
            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd" 
            alt="Professional workspace"
            className="bg-image"
          />
          <div className="overlay"></div>
        </div>
        <div className="ad-content branding-content">
          <h1 className="brand-logo">Veyura</h1>
          <p className="brand-slogan">Votre partenaire digital pour un site moderne et efficace</p>
          <div className="abstract-elements">
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
            <div className="abstract-shape shape-3"></div>
          </div>
        </div>
      </div>

      {/* Visuel 2 - Services */}
      <div className="ad-visual" id="visual-2">
        <div className="ad-background">
          <img 
            src="https://images.unsplash.com/photo-1529071242804-840f9a164b8b" 
            alt="MacBook Pro setup"
            className="bg-image"
          />
          <div className="overlay services-overlay"></div>
        </div>
        <div className="ad-content services-content">
          <h2 className="services-title">Nous créons des sites vitrines et e-commerce sur mesure</h2>
          <div className="services-icons">
            <div className="service-icon">
              <Monitor size={40} />
              <span>Sites Web</span>
            </div>
            <div className="service-icon">
              <Smartphone size={40} />
              <span>Responsive</span>
            </div>
            <div className="service-icon">
              <Search size={40} />
              <span>SEO</span>
            </div>
          </div>
          <div className="brand-small">Veyura</div>
        </div>
      </div>

      {/* Visuel 3 - Exemples Clients */}
      <div className="ad-visual" id="visual-3">
        <div className="ad-background">
          <img 
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
            alt="Modern office"
            className="bg-image"
          />
          <div className="overlay examples-overlay"></div>
        </div>
        <div className="ad-content examples-content">
          <h2 className="examples-title">Restaurant, agence auto, spa, boutique...</h2>
          <h3 className="examples-subtitle">Veyura crée le site qui vous ressemble</h3>
          <div className="mockups-grid">
            <div className="mockup-item">
              <div className="mockup-screen restaurant"></div>
              <span>Restaurant</span>
            </div>
            <div className="mockup-item">
              <div className="mockup-screen auto"></div>
              <span>Auto</span>
            </div>
            <div className="mockup-item">
              <div className="mockup-screen spa"></div>
              <span>Spa</span>
            </div>
            <div className="mockup-item">
              <div className="mockup-screen boutique"></div>
              <span>Boutique</span>
            </div>
          </div>
          <div className="brand-small">Veyura</div>
        </div>
      </div>

      {/* Visuel 4 - Call to Action */}
      <div className="ad-visual" id="visual-4">
        <div className="ad-background">
          <img 
            src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb" 
            alt="Facebook icons"
            className="bg-image"
          />
          <div className="overlay cta-overlay"></div>
        </div>
        <div className="ad-content cta-content">
          <h2 className="cta-title">Contactez-nous dès aujourd'hui pour votre site web !</h2>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={20} />
              <span>contact@veyura.com</span>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <span>07 51 19 99 61</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <span>Lille, France</span>
            </div>
          </div>
          <button className="cta-button">
            Demander un Devis
          </button>
          <div className="brand-small">Veyura</div>
        </div>
      </div>

      <style jsx>{`
        .facebook-ads-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          padding: 2rem;
          background: #f0f2f5;
        }

        .ad-visual {
          position: relative;
          width: 540px;
          height: 540px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .ad-visual:hover {
          transform: scale(1.02);
        }

        .ad-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 14, 26, 0.8), rgba(10, 14, 26, 0.5));
        }

        .services-overlay {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(10, 14, 26, 0.6));
        }

        .examples-overlay {
          background: linear-gradient(135deg, rgba(10, 14, 26, 0.7), rgba(59, 130, 246, 0.4));
        }

        .cta-overlay {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(59, 130, 246, 0.6));
        }

        .ad-content {
          position: relative;
          z-index: 2;
          height: 100%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          color: white;
        }

        /* Visuel 1 - Branding */
        .brand-logo {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: 4rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #3b82f6, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .brand-slogan {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          max-width: 400px;
          margin: 0 auto;
        }

        .abstract-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .abstract-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
        }

        .shape-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #3b82f6, #f59e0b);
          top: 10%;
          right: 10%;
          animation: float 6s ease-in-out infinite;
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          background: #f59e0b;
          bottom: 20%;
          left: 15%;
          animation: float 4s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 60px;
          height: 60px;
          background: #3b82f6;
          top: 30%;
          left: 10%;
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Visuel 2 - Services */
        .services-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .services-icons {
          display: flex;
          justify-content: space-around;
          margin-bottom: 2rem;
        }

        .service-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .service-icon span {
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Visuel 3 - Exemples */
        .examples-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .examples-subtitle {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #f59e0b;
        }

        .mockups-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .mockup-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .mockup-screen {
          width: 80px;
          height: 60px;
          border-radius: 8px;
          border: 2px solid white;
          position: relative;
          overflow: hidden;
        }

        .mockup-screen.restaurant {
          background: linear-gradient(135deg, #dc2626, #7c2d12);
        }

        .mockup-screen.auto {
          background: linear-gradient(135deg, #1f2937, #4b5563);
        }

        .mockup-screen.spa {
          background: linear-gradient(135deg, #059669, #065f46);
        }

        .mockup-screen.boutique {
          background: linear-gradient(135deg, #7c3aed, #5b21b6);
        }

        .mockup-item span {
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Visuel 4 - CTA */
        .cta-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .cta-button {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
          margin-bottom: 1rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
        }

        /* Brand Small */
        .brand-small {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 1rem;
          font-weight: 700;
          color: #f59e0b;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .facebook-ads-container {
            grid-template-columns: 1fr;
            padding: 1rem;
          }

          .ad-visual {
            width: 100%;
            max-width: 540px;
            margin: 0 auto;
          }

          .brand-logo {
            font-size: 3rem;
          }

          .services-title, .cta-title {
            font-size: 1.5rem;
          }

          .examples-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FacebookAds;