import React from 'react';
import './Card.css';

const data = {
  description: ` No Game No Life is a surreal comedy that follows Sora and Shiro,shut-in NEET siblings and the online gamer duo behind the legendaryusername &quot Blank.&quot They view the real world as just anotherlousy game; however, a strange e-mail challenging ...`,
  name: 'No Game No Life',
  backgroundImage: 'https://cdn.myanimelist.net/images/anime/5/65187l.webp',
};

const Card = () => {
  const { description, name, backgroundImage } = data;
  return (
    <div className="card">
      <div
        className="front-card"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="name-box">{name}</div>
      </div>
      <div className="back-card">
        <div className="back-card__container">
          <h1 className="title">{name}</h1>
          <p className="description">{description}</p>
        </div>
        <div className="rating-box">rating</div>
      </div>
    </div>
  );
};

export default Card;
