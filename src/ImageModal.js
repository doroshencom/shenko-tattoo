import React from 'react';

function ImageModal({ image, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Selected Tattoo" />
      </div>
    </div>
  );
}

export default ImageModal;
