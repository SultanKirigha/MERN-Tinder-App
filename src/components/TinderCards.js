import { useState } from 'react';

const Tindercards = () => {
  const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Monica Hall',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Jared Dunn',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiped = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
    }
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div className="tindercards-container">
      {/* Header */}
      <header>
        {/* Header content */}
      </header>

      {/* Swipe buttons */}
      <div className="swiper-buttons">
        {/* Swipe buttons content */}
      </div>

      {/* Tinder cards */}
      <div className="tinder-cards">
        {characters.slice(currentIndex, currentIndex + 3).map((character, index) => (
          <div
            className="card swipe"
            key={character.name}
            style={{
              backgroundImage: `url(${character.url})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              zIndex: characters.length - index
            }}
            onDragStart={(e) => e.preventDefault()}
            onMouseUp={(e) => {
              const direction = e.clientX < window.innerWidth / 2 ? 'left' : 'right';
              swiped(direction);
            }}
          >
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tindercards;
