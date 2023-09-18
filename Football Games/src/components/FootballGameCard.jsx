import React, { useState } from 'react';
import './FootballGameCard.css';

const FootballGameCard = ({ game }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`football-game-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="header">
        <img src={game.image} alt={game.title} className="game-image" />
        <h2>{game.title}</h2>
        <button className="toggle-button" onClick={toggleExpansion}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
      <div className="details">
        <p>Date: {game.date}</p>
        <p>Time: {game.time}</p>
        <p>Venue: {game.venue}</p>
        <p>Teams: {game.teams}</p>
        {isExpanded && (
          <div>
            <h3>Description:</h3>
            <p>{game.description}</p>
            <div className="related-resources">
              <a
                href={game.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
              >
                Buy Tickets
              </a>
              <a
                href={game.liveStreamLink}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
              >
                Watch Live
              </a>
              {/* You can add more related resource links here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FootballGameCard;
