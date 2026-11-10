import React from 'react';
import { Calendar, Gauge, Fuel, Cog, ArrowUpRight } from 'lucide-react';
import './CarCollection.css';

const CarCollection = ({ vehicles, onSelectCar }) => {
  return (
    <section id="collection" className="collection-section section-padding">
      <div className="container">
        <header className="collection-header">
          <div>
            <span className="section-tag">COBRA FLEET</span>
            <h2 className="section-title">The Masterpiece Collection</h2>
          </div>
          <p className="section-desc">
            An immaculate assembly of eight world-class luxury vehicles, each certified and maintained to peak mechanical and aesthetic standards.
          </p>
        </header>

        <div className="collection-grid">
          {vehicles.map((car, index) => (
            <article
              key={car.id}
              className="car-card"
              onClick={() => onSelectCar(car)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCar(car);
                }
              }}
              aria-label={`View details for ${car.name}`}
            >
              <div className="car-card-media">
                <img
                  src={car.image}
                  alt={car.name}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  className="car-card-img"
                />
                <span className="car-card-badge">0{index + 1}</span>
                <div className="car-card-overlay">
                  <span className="overlay-btn">
                    <span>Inspect Vehicle</span>
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>

              <div className="car-card-body">
                <div className="car-card-header-row">
                  <div>
                    <span className="car-card-sub">{car.model}</span>
                    <h3 className="car-card-title">{car.name}</h3>
                  </div>
                  <div className="car-card-price">{car.price}</div>
                </div>

                <div className="car-specs-grid">
                  <div className="spec-item" title="Manufacturing Year">
                    <Calendar size={15} className="spec-icon" />
                    <span>{car.year}</span>
                  </div>
                  <div className="spec-item" title="Mileage">
                    <Gauge size={15} className="spec-icon" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="spec-item" title="Fuel Type">
                    <Fuel size={15} className="spec-icon" />
                    <span>{car.fuel.split('/')[0].trim()}</span>
                  </div>
                  <div className="spec-item" title="Transmission">
                    <Cog size={15} className="spec-icon" />
                    <span>{car.transmission.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="car-card-footer">
                  <span className="view-details-link">
                    <span>Explore Full Specs & Inquire</span>
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCollection;
