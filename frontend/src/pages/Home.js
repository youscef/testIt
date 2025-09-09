import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Search, Palette } from 'lucide-react';

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

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://customer-assets.emergentagent.com/job_212d09eb-9aec-4cf8-9ae1-e493ceaa5ab8/artifacts/inmda4n9_server-room.jpg" 
            alt="Server Room"
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
              Votre partenaire digital de confiance
            </p>
            <p className="hero-description">
              Nous transformons vos idées en solutions digitales performantes. 
              Sites web modernes, infrastructure robuste et communication professionnelle.
            </p>
            <div className="hero-actions">
              <Link to="/devis" className="btn-primary">
                Devis Gratuit
                <ArrowRight size={20} />
              </Link>
              <Link to="/realisations" className="btn-secondary">
                Voir nos Réalisations
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Nos Expertises</h2>
            <p className="body-large">
              Des solutions digitales complètes pour votre réussite en ligne
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à démarrer votre projet ?</h2>
            <p className="cta-description">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            <div className="cta-actions">
              <Link to="/devis" className="btn-primary">
                Demander un Devis
                <ArrowRight size={20} />
              </Link>
              <a href="mailto:contact@veyura.com" className="btn-secondary">
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

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 70vh;
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
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.4));
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
          color: var(--text-inverse);
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text-inverse), var(--brand-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--brand-secondary);
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Features Section */
        .features-section {
          background: var(--bg-section);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          text-align: center;
          padding: 2.5rem 2rem;
        }

        .feature-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          color: white;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
          padding: 5rem 0;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-actions .btn-primary {
          background: var(--brand-accent);
          color: white;
        }

        .cta-actions .btn-primary:hover {
          background: #ea580c;
          transform: translateY(-2px);
        }

        .cta-actions .btn-secondary {
          background: transparent;
          color: white;
          border-color: white;
        }

        .cta-actions .btn-secondary:hover {
          background: white;
          color: var(--brand-primary);
        }

        @media (max-width: 768px) {
          .hero-actions,
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-actions .btn-primary,
          .hero-actions .btn-secondary,
          .cta-actions .btn-primary,
          .cta-actions .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;