import "bootstrap/dist/css/bootstrap.min.css";

const imagenes = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/59/f3/c3/img-20201121-142543-largejpg.jpg?w=900&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c3/9c/02/caption.jpg?w=1400&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/4c/e8/e8/caption.jpg?w=1400&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/69/45/a7/caption.jpg?w=1400&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/69/45/ab/caption.jpg?w=1400&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/69/45/ac/caption.jpg?w=1100&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/db/0b/98/caption.jpg?w=1100&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/12/64/bf/caption.jpg?w=1400&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/57/24/02/detalle-de-la-habitacion.jpg?w=1400&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/59/f3/c0/img-20201122-094601-largejpg.jpg?w=900&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/9d/db/ec/la-puesta-de-sol-no-esta.jpg?w=1400&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/9d/db/ee/escalera.jpg?w=1400&h=-1&s=1",
];

const CarruselComponent = () => {
  return (
    <div className="container  py-5">
      <div className="row">
        {/* <div className="col-12 text-center mb-4">
          <h2 className="fw-bold text-dark">Galería</h2>
        </div> */}
        <div className="col-12 d-flex justify-content-center">
          <div
            id="carouselGaleria"
            className="carousel slide w-100 w-md-75 w-lg-50"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {imagenes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#carouselGaleria"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                  aria-current={idx === 0 ? "true" : undefined}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="carousel-inner rounded shadow">
              {imagenes.map((src, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                >
                  <img
                    src={src}
                    className="d-block w-100"
                    alt={`Imagen ${idx + 1}`}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselGaleria"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselGaleria"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarruselComponent;
