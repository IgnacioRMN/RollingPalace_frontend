import React from 'react';
import '../styles/galeria.css';

const Galeria = () => {
  const imagenes = [
    { src: 'http://localhost:5173/src/assets/Images/img_1.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_14.jpg' },
    { src: 'https://www.clarin.com/img/2020/02/04/SyAKNLJE_720x0__1.jpg', },
    { src: 'http://localhost:5173/src/assets/Images/img_8.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_2.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_3.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_4.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_5.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_6.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_7.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_10.jpg' },
    { src: 'http://localhost:5173/src/assets/Images/img_15.jpg' },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-gold">Galería de imagenes</h2>
      <div className="row g-4">
        {imagenes.map((img, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card shadow border-0">
              <img src={img.src} alt={img.alt} className="card-img-top rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
