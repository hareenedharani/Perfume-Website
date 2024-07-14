// import React, { useState, useEffect } from 'react';
// import './Carousel2.css';
// import img4 from '../Assets/img4.png';
// import img5 from '../Assets/img5.png';
// import img6 from '../Assets/img6.png';

// const images = [
//   { src: img4, alt: 'Image 1 for carousel' },
//   { src: img5, alt: 'Image 2 for carousel' },
//   { src: img6, alt: 'Image 3 for carousel' }
// ];

// export const Carousel2 = () => {
//   const [slide, setSlide] = useState(0);

//   const nextSlide = () => {
//     setSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
//   };

//   const prevSlide = () => {
//     setSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, []);

//   return (
//     <div className='carousel-container'>
//       <h1 className='title'>TOP PICKS FOR YOU</h1>
//       <div className='carousel'>
//         {images.map((item, idx) => (
//           <img
//             src={item.src}
//             alt={item.alt}
//             key={idx}
//             className={slide === idx ? 'slide' : 'slide slide-hidden'}
//           />
//         ))}
//         <span className='indicators'>
//           {images.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSlide(idx)}
//               className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}
//             ></button>
//           ))}
//         </span>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import './Carousel2.css';

export const Carousel2 = () => {
  const [slide, setSlide] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEventImages = async () => {
    try {
      const response = await fetch('http://localhost:3000/events/offer');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const eventData = await response.json();
      if (!Array.isArray(eventData)) {
        throw new Error('Invalid data format from server');
      }
      const eventImages = eventData.map(event => ({
        src: event.images[0], // Assuming you want to use the first image link
        alt: `${event.name} image`
      }));
      console.log('Fetched images:', eventImages);
      setImages(eventImages);
      setLoading(false);
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to load images');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventImages();
  }, []);

  const nextSlide = () => {
    setSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide(prevSlide => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='carousel'>
      {images.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? 'slide' : 'slide slide-hidden'}
        />
      ))}
      <button onClick={prevSlide} className="prev">
        &#10094;
      </button>
      <button onClick={nextSlide} className="next">
        &#10095;
      </button>
      <div className='indicators'>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}
          ></button>
        ))}
      </div>
    </div>
  );
};