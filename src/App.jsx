import { useState } from 'react';

const Slides = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{ 
        backgroundColor: '#1f2937', 
        color: 'white', 
        padding: '1rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem' 
      }}>
        <svg width="32" height="32" viewBox="0 0 500 500" style={{ flexShrink: 0 }}>
          <rect width="500" height="500" fill="#1a202c"/>
          <path d="M122 165h41v63h41v-63h41v168h-41v-63h-41v63h-41V165z" fill="white"/>
          <rect x="268" y="165" width="124" height="168" fill="#00ff88"/>
        </svg>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4ade80', margin: 0 }}>
          Slideshow App
        </h1>
      </div>

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', justifyContent: 'center' }}>
          <button
            onClick={handleRestart}
            disabled={isFirstSlide}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              border: '2px solid',
              backgroundColor: isFirstSlide ? '#e5e7eb' : 'white',
              color: isFirstSlide ? '#9ca3af' : '#16a34a',
              borderColor: isFirstSlide ? '#d1d5db' : '#16a34a',
              cursor: isFirstSlide ? 'not-allowed' : 'pointer'
            }}
          >
            Restart
          </button>
          <button
            onClick={handlePrev}
            disabled={isFirstSlide}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              border: 'none',
              backgroundColor: isFirstSlide ? '#9ca3af' : '#16a34a',
              color: isFirstSlide ? '#e5e7eb' : 'white',
              cursor: isFirstSlide ? 'not-allowed' : 'pointer'
            }}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={isLastSlide}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              border: 'none',
              backgroundColor: isLastSlide ? '#9ca3af' : '#16a34a',
              color: isLastSlide ? '#e5e7eb' : 'white',
              cursor: isLastSlide ? 'not-allowed' : 'pointer'
            }}
          >
            Next
          </button>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '0.5rem', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '3rem', 
          minHeight: '24rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: '700', 
            color: '#1f2937', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            marginTop: 0 
          }}>
            {slides[currentIndex].title}
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            textAlign: 'center', 
            maxWidth: '42rem',
            margin: 0 
          }}>
            {slides[currentIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const slides = [
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
      title: "Next, 10 squats",
      text: "Do 10 reps. Keep your back straight and core engaged."
    },
    {
      title: "Finally, 10 sit-ups",
      text: "Do 10 reps. Focus on controlled movements and breathing."
    }
  ];

  return <Slides slides={slides} />;
}