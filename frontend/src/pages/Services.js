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
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="heading-1">Nos Services</h1>
            <p className="hero-description">
              Des solutions digitales complètes pour propulser votre entreprise vers le succès en ligne
            </p>
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

      {/* Process Section */}
      <section className="process-section">
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

        /* Hero Section */
        .services-hero {
          background: linear-gradient(135deg, var(--bg-page), var(--bg-section));
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .hero-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-top: 1rem;
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
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
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

        /* Process Section */
        .process-section {
          background: var(--bg-section);
          padding: 5rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .process-step {
          text-align: center;
          padding: 2rem 1rem;
        }

        .step-number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
          color: white;
          border-radius: 50%;
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 auto 1.5rem;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .step-description {
          color: var(--text-secondary);
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

          .process-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;