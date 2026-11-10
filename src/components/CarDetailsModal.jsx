import React, { useState, useEffect } from 'react';
import { X, Calendar, Gauge, Fuel, Cog, Zap, Palette, CheckCircle2, Phone, Send } from 'lucide-react';
import './CarDetailsModal.css';

const CarDetailsModal = ({ car, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });

  useEffect(() => {
    // Reset state on car change
    setActiveImageIndex(0);
    setInquirySent(false);

    // Lock background scrolling
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [car, onClose]);

  if (!car) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-car-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="إغلاق تفاصيل السيارة"
        >
          <X size={24} />
        </button>

        <div className="modal-layout">
          {/* Left Column: Visual Gallery */}
          <div className="modal-gallery-column">
            <div className="modal-main-image-wrap">
              <img
                src={car.gallery ? car.gallery[activeImageIndex] : car.image}
                alt={`${car.name} view ${activeImageIndex + 1}`}
                className="modal-main-image"
              />
              <span className="modal-price-pill">{car.price}</span>
            </div>

            {car.gallery && car.gallery.length > 1 && (
              <div className="modal-thumbnails">
                {car.gallery.map((thumb, idx) => (
                  <button
                    type="button"
                    key={thumb}
                    className={`thumbnail-btn ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`عرض الصورة ${idx + 1}`}
                  >
                    <img src={thumb} alt="" />
                  </button>
                ))}
              </div>
            )}

            <div className="modal-description-box">
              <h4 className="box-title">نبذة عن السيارة ومميزاتها</h4>
              <p className="box-text">{car.description}</p>
            </div>
          </div>

          {/* Right Column: Full Specifications & Inquiry */}
          <div className="modal-info-column">
            <div className="modal-title-header">
              <span className="modal-subtitle">{car.model}</span>
              <h2 id="modal-car-title" className="modal-title">{car.name}</h2>
            </div>

            <div className="modal-specs-grid">
              <div className="modal-spec-card">
                <span className="spec-label">
                  <Calendar size={16} /> سنة الصنع
                </span>
                <span className="spec-val">{car.year}</span>
              </div>

              <div className="modal-spec-card">
                <span className="spec-label">
                  <Gauge size={16} /> المسافة المقطوعة
                </span>
                <span className="spec-val">{car.mileage}</span>
              </div>

              <div className="modal-spec-card">
                <span className="spec-label">
                  <Fuel size={16} /> نوع الوقود
                </span>
                <span className="spec-val">{car.fuel}</span>
              </div>

              <div className="modal-spec-card">
                <span className="spec-label">
                  <Cog size={16} /> ناقل الحركة
                </span>
                <span className="spec-val">{car.transmission}</span>
              </div>

              <div className="modal-spec-card">
                <span className="spec-label">
                  <Zap size={16} /> المحرك
                </span>
                <span className="spec-val">{car.engine}</span>
              </div>

              <div className="modal-spec-card">
                <span className="spec-label">
                  <Palette size={16} /> اللون الخارجي
                </span>
                <span className="spec-val">{car.color}</span>
              </div>
            </div>

            {/* Inquire section */}
            <div className="modal-inquiry-box">
              <div className="inquiry-header">
                <h3>استفسار حول السيارة</h3>
                <p>أرسل طلبك لحجز السيارة أو لترتيب موعد مشاهدة خاص.</p>
              </div>

              {inquirySent ? (
                <div className="inquiry-success">
                  <CheckCircle2 size={36} className="success-icon" />
                  <h4>تم استلام طلبك</h4>
                  <p>سيتواصل معك مستشار المبيعات خلال 15 دقيقة بخصوص <strong>{car.name}</strong>.</p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setInquirySent(false)}
                    style={{ marginTop: 14 }}
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form className="inquiry-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">الاسم الكامل</label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="أدخل اسمك الكامل"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">الهاتف / واتساب</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+966 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">البريد الإلكتروني</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">استفسارات إضافية / خيارات التوصيل</label>
                    <textarea
                      id="notes"
                      rows={2}
                      placeholder={`Inquiring on: ${car.name} (${car.year})`}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <div className="inquiry-actions">
                    <button type="submit" className="btn btn-primary submit-btn">
                      <Send size={16} />
                      <span>اطلب التواصل الفوري</span>
                    </button>
                    <a
                      href={`https://wa.me/966500000000?text=Hello%20COBRA%20MOTORS,%20I%20am%20interested%20in%20the%20${encodeURIComponent(car.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline whatsapp-quick-btn"
                    >
                      <Phone size={16} />
                      <span>تواصل عبر واتساب</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;
