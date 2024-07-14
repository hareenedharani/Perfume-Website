// import React, { useState, useEffect } from 'react';
// import './Carousel.css';

// export const Carousel = () => {
//   const [slide, setSlide] = useState(0);
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchEventImages = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/events');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const eventData = await response.json();
//       if (!Array.isArray(eventData)) {
//         throw new Error('Invalid data format from server');
//       }
//       const eventImages = eventData.map(event => ({
//         src: event.images[0], // Assuming you want to use the first image link
//         alt: `${event.name} image`
//       }));
//       console.log('Fetched images:', eventImages);
//       setImages(eventImages);
//       setLoading(false);
//     } catch (error) {
//       console.error('Fetch error:', error);
//       setError('Failed to load images');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEventImages();
//   }, []);

//   const nextSlide = () => {
//     setSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
//   };

//   const prevSlide = () => {
//     setSlide(prevSlide => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className='carousel'>
//       {images.map((item, idx) => (
//         <img
//           src={item.src}
//           alt={item.alt}
//           key={idx}
//           className={slide === idx ? 'slide' : 'slide slide-hidden'}
//         />
//       ))}
//       <button onClick={prevSlide} className="prev">
//         &#10094;
//       </button>
//       <button onClick={nextSlide} className="next">
//         &#10095;
//       </button>
//       <div className='indicators'>
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setSlide(idx)}
//             className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import './Carousel.css';

export const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEventImages = async () => {
    try {
      const response = await fetch('http://localhost:3000/events/home');
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