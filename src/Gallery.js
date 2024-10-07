import React, { useState } from 'react';
import ImageModal from './ImageModal';

// Importa todas las imágenes
import image1 from './img/01_Luffy.png';
import image2 from './img/03_Flor.png';
import image3 from './img/03_Rebeca.png';
import image4 from './img/04_Narsil.png';
import image5 from './img/05_Chorts.png';
import image6 from './img/06_Narsil.png';
import image7 from './img/07_DoubleLine.png';
import image8 from './img/08_Loki.png';
import image9 from './img/09_DoubleLine.png';
import image10 from './img/10_Nike.png';
import image11 from './img/11_Basquiat.png';
import image12 from './img/12_Metallica.png';
import image13 from './img/13_Father.png';
import image14 from './img/14_Berserk.png';
import image15 from './img/15_Mountains.png';
import image16 from './img/16_NashadiyaShukta.png';
import image17 from './img/17_EscudoBetis.png';
import image18 from './img/18_Rojita.png';
import image19 from './img/19_Snake.png';
import image20 from './img/20_noventaiseis.png';
import image21 from './img/21_Euler.png';
import image23 from './img/23_Snake.png';
import image24 from './img/24_Janit.png';

// Lista de imágenes
const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19,
  image20, image21, image23, image24
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Tattoo ${index}`} onClick={() => openImage(image)} />
        </div>
      ))}

      {selectedImage && <ImageModal image={selectedImage} onClose={closeImage} />}
    </div>
  );
}

export default Gallery;
