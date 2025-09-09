import React, { useEffect } from 'react';
import { Code, Smartphone, Search, Palette, Settings, Zap } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    document.body.style.paddingTop = '80px';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  const services = [
    {
      icon: <Code size={48} />,
      title: "Création de Sites Vitrines",
      description: "Conception et développement de sites web modernes et professionnels qui reflètent parfaitement votre image de marque.",
      features: [
        "Design personnalisé et moderne",
        "Interface utilisateur intuitive",
        "Contenu optimisé pour votre secteur",
        "Intégration de vos réseaux sociaux"
      ],
      price: "À partir de 890€"
    },
    {
      icon: <Palette size={48} />,
      title: "Développement Sur Mesure", 
      description: "Solutions web personnalisées adaptées à vos besoins spécifiques et à votre secteur d'activité.",
      features: [
        "Analyse approfondie de vos besoins",
        "Architecture technique sur mesure",
        "Fonctionnalités avancées",
        "Support et maintenance inclus"
      ],
      price: "Sur devis"
    },
    {
      icon: <Search size={48} />,
      title: "Optimisation SEO",
      description: "Amélioration de votre visibilité sur les moteurs de recherche pour attirer plus de clients potentiels.",
      features: [
        "Audit SEO complet",
        "Optimisation technique",
        "Stratégie de mots-clés",
        "Suivi des performances"
      ],
      price: "À partir de 450€"
    },
    {
      icon: <Smartphone size={48} />,
      title: "Design Responsive",
      description: "Conception d'interfaces adaptatives qui offrent une expérience optimale sur tous les appareils.",
      features: [
        "Compatible mobile et tablette",
        "Navigation tactile optimisée",
        "Temps de chargement rapide",
        "Tests multi-navigateurs"
      ],
      price: "Inclus"
    },
    {
      icon: <Settings size={48} />,
      title: "Maintenance & Support",
      description: "Service de maintenance et de support technique pour assurer la performance de votre site.",
      features: [
        "Mises à jour de sécurité",
        "Sauvegardes automatiques",
        "Support technique prioritaire",
        "Évolutions et améliorations"
      ],
      price: "À partir de 50€/mois"
    },
    {
      icon: <Zap size={48} />,
      title: "Performance & Sécurité",
      description: "Optimisation des performances et sécurisation avancée de votre présence en ligne.",
      features: [
        "Optimisation de la vitesse",
        "Certificat SSL inclus",
        "Protection contre les attaques",
        "Monitoring 24/7"
      ],
      price: "À partir de 290€"
    }
  ];

  return (
    <div className="services">
      {/* Hero Section avec l'image du visuel services */}
      <section className="services-hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1529071242804-840f9a164b8b" 
            alt="MacBook Pro setup"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="heading-1">Nos Services</h1>
            <p className="hero-description">
              Nous créons des sites vitrines et e-commerce sur mesure
            </p>
            <div className="hero-services-icons">
              <div className="hero-service-icon">
                <Code size={40} />
                <span>Sites Web</span>
              </div>
              <div className="hero-service-icon">
                <Smartphone size={40} />
                <span>Responsive</span>
              </div>
              <div className="hero-service-icon">
                <Search size={40} />
                <span>SEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-info">
                    <h3 className="service-title">{service.title}</h3>
                    <div className="service-price">{service.price}</div>
                  </div>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section avec fond moderne */}
      <section className="process-section">
        <div className="process-background">
          <img 
            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd" 
            alt="Professional workspace"
            className="process-bg-image"
          />
          <div className="process-overlay"></div>
        </div>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Notre Processus</h2>
            <p className="body-large">
              Une approche structurée pour garantir votre satisfaction
            </p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Analyse</h3>
              <p className="step-description">
                Étude approfondie de vos besoins et de votre secteur d'activité
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Conception</h3>
              <p className="step-description">
                Création des maquettes et définition de l'architecture technique
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Développement</h3>
              <p className="step-description">
                Intégration et développement de votre solution sur mesure
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Livraison</h3>
              <p className="step-description">
                Tests finaux, formation et mise en ligne de votre site
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services {
          min-height: 100vh;
        }

        /* Hero Section avec style du visuel services */
        .services-hero {
          position: relative;
          padding: 8rem 0 6rem;
          text-align: center;
          overflow: hidden;
          min-height: 70vh;
          display: flex;
          align-items: center;
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
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(10, 14, 26, 0.6));
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-content h1 {
          color: white;
          margin-bottom: 1rem;
        }

        .hero-description {
          font-size: 1.5rem;
          color: white;
          line-height: 1.6;
          margin-bottom: 3rem;
          font-weight: 600;
        }

        .hero-services-icons {
          display: flex;
          justify-content: center;
          gap: 3rem;
        }

        .hero-service-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }

        .hero-service-icon:hover {
          transform: translateY(-10px);
        }

        .hero-service-icon span {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
        }

        /* Services Section */
        .services-section {
          background: var(--bg-page);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .service-card {
          padding: 2.5rem;
          height: auto;
          display: flex;
          flex-direction: column;
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
          border-radius: 1rem;
          color: white;
          flex-shrink: 0;
        }

        .service-info {
          flex: 1;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .service-price {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--brand-accent);
        }

        .service-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
        }

        .feature-bullet {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
          background: var(--brand-primary);
          color: white;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        /* Process Section avec fond */
        .process-section {
          position: relative;
          padding: 8rem 0;
          overflow: hidden;
        }

        .process-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }

        .process-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .process-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(10, 14, 26, 0.8), rgba(10, 14, 26, 0.5));
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
        }

        .section-header p {
          color: rgba(255, 255, 255, 0.9);
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .process-step {
          text-align: center;
          padding: 2rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }

        .process-step:hover {
          transform: translateY(-10px);
        }

        .step-number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
          color: white;
          border-radius: 50%;
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 auto 1.5rem;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .step-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-header {
            flex-direction: column;
            text-align: center;
          }

          .service-icon {
            margin: 0 auto;
          }

          .hero-services-icons {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }

          .process-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;