import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Search, Palette, Star, Users, Award } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    document.body.style.paddingTop = '80px';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  const features = [
    {
      icon: <Code size={32} />,
      title: "Sites Vitrines",
      description: "Des sites web modernes et professionnels qui reflètent votre image de marque"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Design Responsive", 
      description: "Une expérience utilisateur optimale sur tous les appareils"
    },
    {
      icon: <Search size={32} />,
      title: "Optimisation SEO",
      description: "Amélioration de votre visibilité sur les moteurs de recherche"
    },
    {
      icon: <Palette size={32} />,
      title: "Développement Sur Mesure",
      description: "Solutions personnalisées adaptées à vos besoins spécifiques"
    }
  ];

  const stats = [
    { icon: <Users size={32} />, number: "50+", label: "Clients Satisfaits" },
    { icon: <Award size={32} />, number: "100%", label: "Projets Réussis" },
    { icon: <Star size={32} />, number: "3 ans", label: "D'Expérience" },
  ];

  return (
    <div className="home">
      {/* Hero Section avec l'image du visuel branding */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd" 
            alt="Professional workspace"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Veyura
            </h1>
            <p className="hero-subtitle">
              Votre partenaire digital pour un site moderne et efficace
            </p>
            <p className="hero-description">
              Nous transformons vos idées en solutions digitales performantes. 
              Sites web modernes, infrastructure robuste et communication professionnelle.
            </p>
            <div className="hero-actions">
              <Link to="/devis" className="btn-primary">
                Demander un Devis
                <ArrowRight size={20} />
              </Link>
              <Link to="/realisations" className="btn-secondary">
                Voir nos Réalisations
                <ArrowRight size={20} />
              </Link>
            </div>
            {/* Éléments décoratifs comme dans le visuel publicitaire */}
            <div className="floating-elements">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services avec l'image du visuel services */}
      <section className="services-section section">
        <div className="services-background">
          <img 
            src="https://images.unsplash.com/photo-1529071242804-840f9a164b8b" 
            alt="MacBook Pro setup"
            className="services-bg-image"
          />
          <div className="services-overlay"></div>
        </div>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Nous créons des sites vitrines et e-commerce sur mesure</h2>
            <p className="body-large">
              Des solutions digitales complètes pour votre réussite en ligne
            </p>
          </div>
          
          <div className="services-icons-grid">
            <div className="service-icon-card">
              <div className="service-icon-wrapper">
                <Code size={40} />
              </div>
              <h3>Sites Web</h3>
              <p>Création de sites modernes et performants</p>
            </div>
            <div className="service-icon-card">
              <div className="service-icon-wrapper">
                <Smartphone size={40} />
              </div>
              <h3>Responsive</h3>
              <p>Design adaptatif pour tous les appareils</p>
            </div>
            <div className="service-icon-card">
              <div className="service-icon-wrapper">
                <Search size={40} />
              </div>
              <h3>SEO</h3>
              <p>Optimisation pour les moteurs de recherche</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Clients avec l'image du visuel exemples */}
      <section className="clients-section">
        <div className="clients-background">
          <img 
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
            alt="Modern office"
            className="clients-bg-image"
          />
          <div className="clients-overlay"></div>
        </div>
        <div className="container">
          <div className="clients-content">
            <h2 className="clients-title">Restaurant, agence auto, spa, boutique...</h2>
            <h3 className="clients-subtitle">Veyura crée le site qui vous ressemble</h3>
            
            <div className="mockups-showcase">
              <div className="mockup-card">
                <div className="mockup-screen restaurant-mockup"></div>
                <span>Restaurant</span>
              </div>
              <div className="mockup-card">
                <div className="mockup-screen auto-mockup"></div>
                <span>Automobile</span>
              </div>
              <div className="mockup-card">
                <div className="mockup-screen spa-mockup"></div>
                <span>Spa & Bien-être</span>
              </div>
              <div className="mockup-card">
                <div className="mockup-screen boutique-mockup"></div>
                <span>Boutique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section avec l'image du visuel call-to-action */}
      <section className="cta-section">
        <div className="cta-background">
          <img 
            src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb" 
            alt="Facebook icons"
            className="cta-bg-image"
          />
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Contactez-nous dès aujourd'hui pour votre site web !</h2>
            <div className="cta-contact-info">
              <div className="contact-item-cta">
                <span>📧 contact@veyura.com</span>
              </div>
              <div className="contact-item-cta">
                <span>📞 07 51 19 99 61</span>
              </div>
              <div className="contact-item-cta">
                <span>📍 Lille, France</span>
              </div>
            </div>
            <div className="cta-actions">
              <Link to="/devis" className="cta-button-special">
                Demander un Devis
              </Link>
              <a href="mailto:contact@veyura.com" className="btn-secondary-cta">
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home {
          min-height: 100vh;
        }

        /* Hero Section avec style du visuel branding */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 14, 26, 0.8), rgba(10, 14, 26, 0.5));
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
        }

        .hero-title {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: clamp(4rem, 8vw, 7rem);
          line-height: 0.9;
          color: var(--text-primary);
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--brand-accent);
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Éléments flottants du visuel branding */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
        }

        .floating-shape.shape-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
          top: 10%;
          right: 10%;
          animation: float 6s ease-in-out infinite;
        }

        .floating-shape.shape-2 {
          width: 80px;
          height: 80px;
          background: var(--brand-accent);
          bottom: 20%;
          left: 15%;
          animation: float 4s ease-in-out infinite reverse;
        }

        .floating-shape.shape-3 {
          width: 60px;
          height: 60px;
          background: var(--brand-primary);
          top: 30%;
          left: 10%;
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Services Section avec style du visuel services */
        .services-section {
          position: relative;
          padding: 8rem 0;
          overflow: hidden;
        }

        .services-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }

        .services-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .services-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(10, 14, 26, 0.6));
          z-index: -1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .section-header h2 {
          color: white;
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1rem;
        }

        .section-header p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.25rem;
        }

        .services-icons-grid {
          display: flex;
          justify-content: space-around;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .service-icon-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }

        .service-icon-card:hover {
          transform: translateY(-10px);
        }

        .service-icon-wrapper {
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
          padding: 1rem;
          border-radius: 50%;
          margin-bottom: 1rem;
          color: white;
        }

        .service-icon-card h3 {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .service-icon-card p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        /* Clients Section avec style du visuel exemples */
        .clients-section {
          position: relative;
          padding: 8rem 0;
          overflow: hidden;
        }

        .clients-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }

        .clients-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .clients-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 14, 26, 0.7), rgba(59, 130, 246, 0.4));
          z-index: -1;
        }

        .clients-content {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .clients-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .clients-subtitle {
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 600;
          color: var(--brand-accent);
          margin-bottom: 3rem;
        }

        .mockups-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .mockup-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }

        .mockup-card:hover {
          transform: translateY(-5px);
        }

        .mockup-screen {
          width: 120px;
          height: 80px;
          border-radius: 8px;
          border: 2px solid white;
          position: relative;
          overflow: hidden;
        }

        .restaurant-mockup {
          background: linear-gradient(135deg, #dc2626, #7c2d12);
        }

        .auto-mockup {
          background: linear-gradient(135deg, #1f2937, #4b5563);
        }

        .spa-mockup {
          background: linear-gradient(135deg, #059669, #065f46);
        }

        .boutique-mockup {
          background: linear-gradient(135deg, #7c3aed, #5b21b6);
        }

        .mockup-card span {
          color: white;
          font-weight: 600;
          font-size: 1rem;
        }

        /* Stats Section */
        .stats-section {
          background: var(--bg-section);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-card {
          padding: 2rem;
          background: var(--bg-card);
          border-radius: 1rem;
          border: 1px solid var(--border-light);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          color: var(--brand-primary);
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--brand-primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* CTA Section avec style du visuel call-to-action */
        .cta-section {
          position: relative;
          padding: 8rem 0;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }

        .cta-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(59, 130, 246, 0.6));
          z-index: -1;
        }

        .cta-content {
          text-align: center;
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: white;
          margin-bottom: 2rem;
        }

        .cta-contact-info {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .contact-item-cta {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-item-cta span {
          color: white;
          font-weight: 500;
          font-size: 1rem;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button-special {
          background: linear-gradient(135deg, var(--brand-accent), #d97706);
          color: white;
          border: none;
          padding: 1.25rem 2.5rem;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
        }

        .cta-button-special:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
        }

        .btn-secondary-cta {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 1.25rem 2.5rem;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .btn-secondary-cta:hover {
          background: white;
          color: var(--brand-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .services-icons-grid {
            flex-direction: column;
            align-items: center;
          }

          .mockups-showcase {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-contact-info {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-button-special,
          .btn-secondary-cta {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;