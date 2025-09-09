import React, { useEffect } from 'react';
import FacebookAds from '../components/FacebookAds';

const FacebookAdsPage = () => {
  useEffect(() => {
    document.body.style.paddingTop = '80px';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <div className="facebook-ads-page">
      <section className="ads-header">
        <div className="container">
          <h1 className="heading-1">Visuels Publicitaires Facebook</h1>
          <p className="ads-description">
            4 visuels professionnels créés pour promouvoir Veyura sur Facebook et attirer des clients potentiels
          </p>
        </div>
      </section>

      <section className="ads-showcase">
        <FacebookAds />
      </section>

      <section className="ads-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Format Optimisé</h3>
              <p>Visuels au format carré 1080x1080px, parfaitement adaptés aux publications Facebook et Instagram</p>
            </div>
            <div className="info-card">
              <h3>Design Professionnel</h3>
              <p>Palette de couleurs cohérente (bleu nuit, blanc, doré) reflétant l'image premium de Veyura</p>
            </div>
            <div className="info-card">
              <h3>Ciblage Précis</h3>
              <p>Messages adaptés aux TPE, PME, restaurateurs et commerces cherchant une présence web moderne</p>
            </div>
            <div className="info-card">
              <h3>Call-to-Action Efficace</h3>
              <p>Informations de contact claires et bouton "Devis" pour maximiser les conversions</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .facebook-ads-page {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--bg-page), var(--bg-section));
        }

        .ads-header {
          padding: 8rem 0 4rem;
          text-align: center;
          background: var(--bg-page);
        }

        .ads-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .ads-showcase {
          padding: 2rem 0;
          display: flex;
          justify-content: center;
        }

        .ads-info {
          background: var(--bg-section);
          padding: 5rem 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .info-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border-light);
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
        }

        .info-card h3 {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .info-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .ads-header {
            padding: 6rem 0 3rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default FacebookAdsPage;