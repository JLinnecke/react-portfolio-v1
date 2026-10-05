import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function Modal({ image, images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(
    images ? images.indexOf(image) : 0,
  );

  function handlePrevious(e) {
    e?.stopPropagation();

    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function handleNext(e) {
    e?.stopPropagation();

    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((index) =>
          index === 0 ? images.length - 1 : index - 1,
        );
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((index) =>
          index === images.length - 1 ? 0 : index + 1,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, images.length]);

  return (
    <div className="modal" onClick={onClose}>
      <Button className="modal-close" onClick={onClose}>
        &times;
      </Button>

      {images?.length > 1 && (
        <Button
          className="modal-arrow modal-arrow-left"
          onClick={handlePrevious}
        >
          &#10094;
        </Button>
      )}

      <img
        src={images ? images[currentIndex] : image}
        alt="Vergrößerte Ansicht"
        onClick={(e) => e.stopPropagation()}
      />

      {images?.length > 1 && (
        <Button className="modal-arrow modal-arrow-right" onClick={handleNext}>
          &#10095;
        </Button>
      )}
    </div>
  );
}
