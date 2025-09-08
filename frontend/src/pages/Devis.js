import React, { useEffect, useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';

const Devis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeProjet: '',
    budget: '',
    delai: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.paddingTop = '80px';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construction du message email
    const emailSubject = encodeURIComponent(`Demande de devis - ${formData.nom}`);
    const emailBody = encodeURIComponent(`
Nouvelle demande de devis:

Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Type de projet: ${formData.typeProjet}
Budget: ${formData.budget}
Délai souhaité: ${formData.delai}

Message:
${formData.message}

---
Demande envoyée depuis le site Veyura
    `);

    // Ouverture du client email
    window.location.href = `mailto:contact@veyura.com?subject=${emailSubject}&body=${emailBody}`;

    setIsSubmitted(true);

    // Reset form après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        typeProjet: '',
        budget: '',
        delai: '',
        message: ''
      });
    }, 3000);
  };

  const projectTypes = [
    "Site vitrine",
    "Site e-commerce",
    "Application web",
    "Refonte de site existant",
    "Optimisation SEO",
    "Maintenance de site",
    "Autre"
  ];

  const budgetRanges = [
    "Moins de 1000€",
    "1000€ - 3000€",
    "3000€ - 5000€",
    "5000€ - 10000€",
    "Plus de 10000€"
  ];

  const timeframes = [
    "Urgent (moins de 1 mois)",
    "Rapide (1-2 mois)",
    "Standard (2-3 mois)",
    "Flexible (plus de 3 mois)"
  ];

  return (
    <div className="devis">
      {/* Hero Section */}
      <section className="devis-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="heading-1">Demande de Devis</h1>
            <p className="hero-description">
              Parlez-nous de votre projet et recevez un devis personnalisé sous 24h
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section section">
        <div className="container">
          <div className="form-container">
            <div className="form-info">
              <h2 className="heading-3">Votre Projet en Détail</h2>
              <p className="info-description">
                Plus vous nous donnez d'informations, plus notre devis sera précis et adapté à vos besoins.
              </p>

              <div className="contact-info">
                <h3>Nous Contacter Directement</h3>
                <div className="contact-methods">
                  <a href="mailto:contact@veyura.com" className="contact-method">
                    <Mail size={20} />
                    <span>contact@veyura.com</span>
                  </a>
                  <a href="tel:0751199961" className="contact-method">
                    <Phone size={20} />
                    <span>07 51 19 99 61</span>
                  </a>
                </div>
              </div>

              <div className="process-info">
                <h3>Notre Processus</h3>
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <span>Analyse de votre demande</span>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <span>Devis détaillé sous 24h</span>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <span>Planification du projet</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-wrapper">
              {!isSubmitted ? (
                <form
                  className="devis-form"
                  action="https://formspree.io/f/mldwavrz"
                  method="POST"
                >
                  <div className="form-group">
                    <label htmlFor="nom" className="form-label">
                      <User size={18} />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      className="form-input"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <Mail size={18} />
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-input"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="telephone" className="form-label">
                        <Phone size={18} />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="form-input"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      <MessageSquare size={18} />
                      Détails du projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      className="form-textarea"
                      placeholder="Décrivez votre projet en détail..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary submit-btn">
                    <Send size={20} />
                    Envoyer ma Demande
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <CheckCircle size={64} className="success-icon" />
                  <h3>Demande Envoyée !</h3>
                  <p>
                    Votre demande de devis a été transmise. Notre équipe vous contactera sous 24h pour discuter de votre projet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .devis {
          min-height: 100vh;
        }

        /* Hero Section */
        .devis-hero {
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

        /* Form Section */
        .form-section {
          background: var(--bg-page);
        }

        .form-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .form-info {
          padding: 2rem;
        }

        .info-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-info,
        .process-info {
          margin-bottom: 2rem;
        }

        .contact-info h3,
        .process-info h3 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-method:hover {
          color: var(--brand-primary);
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .step-number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          background: var(--brand-primary);
          color: white;
          border-radius: 50%;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .step span {
          color: var(--text-secondary);
        }

        /* Form Wrapper */
        .form-wrapper {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: 1rem;
          padding: 2.5rem;
        }

        .devis-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
          background: var(--bg-page);
          border: 1px solid var(--border-medium);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--brand-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          margin-top: 1rem;
          font-size: 1.1rem;
          padding: 1rem 2rem;
        }

        /* Success Message */
        .success-message {
          text-align: center;
          padding: 3rem 2rem;
        }

        .success-icon {
          color: var(--brand-primary);
          margin-bottom: 1.5rem;
        }

        .success-message h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .success-message p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .form-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-wrapper {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Devis;