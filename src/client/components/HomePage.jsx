import '../App.css';

const HomePage = () => {
  return (
  <div className="homepage-container">
      
    <div className="particles">
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
      
      
    <h1>Gaming Wisdom Unleashed!</h1>

    <div className="image-container">
      <img className="fade-in" src='/COD.webp' alt="Call of Duty GIF" />
      <img className="fade-in" src='/spiderman.webp' alt="Spiderman GIF" />
      <img className='fade-in' src='/mariokart.webp' alt='Mario Kart GIF'/>
    </div>

    <div className="star-rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} role="img" aria-label={`Star ${star}`}>
        ⭐
      </span>
    ))}
    </div>

    <div className="center-text">
      <p className="header-text">Real Reviews, Real Insights</p>
      <p>Join our gaming community where passion meets insights.</p>
      <p>Discover the latest reviews, share your experiences, and connect with fellow gamers.</p>
      <img className="fade-in" src='/gamer.jpg' alt="Gamer playing on a laptop" style={{ border: '2px solid white', width: '500px', height: 'auto' }} />
      <img className="fade-in" src='/gamingteam.jpg' alt="team of gamers" style={{ border: '2px solid white', width: '500px', height: 'auto' }} />
      <p className="bottom-text">Level up your gaming journey and unleash your game wisdom with Gurus!</p>
    </div>
  </div>
  );
}

export default HomePage; 