import React, { useEffect } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

const Realisations = () => {
  useEffect(() => {
    document.body.style.paddingTop = '80px';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Restaurant Le Gourmand",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      description: "Site vitrine moderne pour un restaurant gastronomique avec système de réservation en ligne.",
      technologies: ["React", "Node.js", "MongoDB"],
      date: "Décembre 2024",
      url: "#"
    },
    {
      id: 2,
      title: "Garage Auto Premium",
      category: "Automobile",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=300&fit=crop",
      description: "Plateforme complète pour une concession automobile avec catalogue véhicules et prise de rendez-vous.",
      technologies: ["Vue.js", "PHP", "MySQL"],
      date: "Novembre 2024",
      url: "#"
    },
    {
      id: 3,
      title: "Spa Wellness Center",
      category: "Bien-être",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=300&fit=crop",
      description: "Site élégant pour un centre de bien-être avec booking en ligne et présentation des soins.",
      technologies: ["Next.js", "Strapi", "PostgreSQL"],
      date: "Octobre 2024",
      url: "#"
    },
    {
      id: 4,
      title: "Boutique Mode Élégance",
      category: "Mode",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      description: "E-commerce moderne pour une boutique de mode avec système de paiement intégré.",
      technologies: ["Shopify", "JavaScript", "CSS3"],
      date: "Septembre 2024",
      url: "#"
    },
    {
      id: 5,
      title: "Cabinet Médical Dr. Martin",
      category: "Médical",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      description: "Site professionnel pour un cabinet médical avec prise de rendez-vous en ligne.",
      technologies: ["WordPress", "PHP", "Custom Plugins"],
      date: "Août 2024",
      url: "#"
    },
    {
      id: 6,
      title: "Agence Immobilière Horizon",
      category: "Immobilier",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      description: "Plateforme immobilière avec recherche avancée et gestion des biens.",
      technologies: ["React", "Express", "MongoDB"],
      date: "Juillet 2024",
      url: "#"
    }
  ];

  const categories = ["Tous", "Restaurant", "Automobile", "Bien-être", "Mode", "Médical", "Immobilier"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="realisations">
      {/* Hero Section */}
      <section className="realisations-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="heading-1">Nos Réalisations</h1>
            <p className="hero-description">
              Découvrez nos projets récents et l'expertise Veyura au service de différents secteurs d'activité
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="view-project-btn">
                      <ExternalLink size={20} />
                      Voir le projet
                    </button>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <div className="project-date">
                      <Calendar size={16} />
                      {project.date}
                    </div>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Clients satisfaits</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3 ans</div>
              <div className="stat-label">D'expérience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .realisations {
          min-height: 100vh;
        }

        /* Hero Section */
        .realisations-hero {
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

        /* Filter Section */
        .filter-section {
          background: var(--bg-page);
          padding: 2rem 0;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-tab {
          background: transparent;
          border: 2px solid var(--border-medium);
          color: var(--text-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-tab:hover {
          border-color: var(--brand-primary);
          color: var(--brand-primary);
        }

        .filter-tab.active {
          background: var(--brand-primary);
          border-color: var(--brand-primary);
          color: white;
        }

        /* Projects Section */
        .projects-section {
          background: var(--bg-page);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          padding: 0;
          overflow: hidden;
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 14, 26, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .view-project-btn {
          background: var(--brand-primary);
          color: white;
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .view-project-btn:hover {
          background: var(--brand-hover);
          transform: translateY(-2px);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .project-category {
          background: var(--brand-accent);
          color: var(--text-inverse);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .project-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-technologies {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tech-tag {
          background: var(--bg-section);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          border: 1px solid var(--border-light);
        }

        /* Stats Section */
        .stats-section {
          background: var(--bg-section);
          padding: 5rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-item {
          padding: 2rem 1rem;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          color: var(--brand-primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.125rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .filter-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }

          .project-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Realisations;