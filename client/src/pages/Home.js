import React from 'react';




const Home = () => {
  const headingStyle = {
    fontFamily: 'Satisfy, cursive',
    color: '#c5f7ff',
  };
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <audio controls autoPlay>
          <source src="lofi music.wav" type="audio/wav" />
          <source src="lofimp3.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div style={{ paddingTop: '50px', textAlign: 'center' }}>
        <h2 style={headingStyle}>Welcome to the Home Page</h2>
        <img src = "lofigirl.jpg" alt ="lofigirl" />
      </div>
    </div>
  );
};

export default Home;