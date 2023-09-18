import React from 'react';
import FootballGameCard from './components/FootballGameCard';
import './App.css';

const App = () => {
  const footballGames = [
    {
      title: 'Wk 2 Regular Season',
      date: 'September 18, 2023',
      time: '6:15 PM CDT',
      venue: 'Bank of America Stadium',
      teams: 'Saints vs. Panthers',
      description:
        'Join us for an exciting NFL regular seasons between Saints and Panthers. It promises to be an action-packed match!',
      image: './src/img/Game1.png',
      ticketLink: 'https://www.ticketmaster.com/Carolina-Panthers-tickets/artist/805909?wt.mc_id=NFL_LEAGUE_CLUB_SCHED_PAGE_LINK_CAR&utm_source=NFL.com&utm_medium=client&utm_campaign=NFL_LEAGUE&utm_content=CLUB_SCHED_PAGE_LINK_CAR&icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/saints-at-panthers-2023-reg-2',
    },
    // Add more game data with images, ticket links, and live stream links
    {
      title: 'Wk 2 Regular Season',
      date: 'September 18, 2023',
      time: '7:15 PM CDT',
      venue: 'Acrisure Stadium',
      teams: 'Browns vs. Steelers',
      description:
      'Join us for an exciting NFL regular seasons between Brown and Steelers. It promises to be an action-packed match!',
      image: './src/img/Game2.png',
      ticketLink: 'https://www.ticketmaster.com/Pittsburgh-Steelers-tickets/artist/806007?wt.mc_id=NFL_LEAGUE_CLUB_SCHED_PAGE_LINK_PIT&utm_source=NFL.com&utm_medium=client&utm_campaign=NFL_LEAGUE&utm_content=CLUB_SCHED_PAGE_LINK_PIT&icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/browns-at-steelers-2023-reg-2',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 21, 2023',
      time: '7:15 PM CDT',
      venue: 'Levis Stadium',
      teams: 'Giants vs. 49ers',
      description:
        'Join us for an exciting NFL regular seasons between Giants and 49ers. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'https://www.ticketmaster.com/San-Francisco-49ers-tickets/artist/806015?wt.mc_id=NFL_LEAGUE_CLUB_SCHED_PAGE_LINK_SF&utm_source=NFL.com&utm_medium=client&utm_campaign=NFL_LEAGUE&utm_content=CLUB_SCHED_PAGE_LINK_SF&icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/giants-at-49ers-2023-reg-3',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 24, 2023',
      time: '12:00 PM CDT',
      venue: 'M&T Bank Stadium',
      teams: 'Colts vs. Ravens',
      description:
      'Join us for an exciting NFL regular seasons between Colts and Ravens. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'http://www.nfl.com/tickets/baltimore-ravens?icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/colts-at-ravens-2023-reg-3',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 24, 2023',
      time: '12:OO PM CDT',
      venue: 'M&T Bank Stadium',
      teams: 'Titans vs. Browns',
      description:
      'Join us for an exciting NFL regular seasons between Titans and Brown. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'http://www.nfl.com/tickets/baltimore-ravens?icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/colts-at-ravens-2023-reg-3',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 24, 2023',
      time: 'TBD',
      venue: 'M&T Bank Stadium',
      teams: 'Colts vs. Ravens',
      description:
      'Join us for an exciting NFL regular seasons between Colts and Ravens. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'http://www.nfl.com/tickets/baltimore-ravens?icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/colts-at-ravens-2023-reg-3',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 24, 2023',
      time: 'TBD',
      venue: 'M&T Bank Stadium',
      teams: 'Colts vs. Ravens',
      description:
      'Join us for an exciting NFL regular seasons between Colts and Ravens. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'http://www.nfl.com/tickets/baltimore-ravens?icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/colts-at-ravens-2023-reg-3',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 24, 2023',
      time: 'TBD',
      venue: 'M&T Bank Stadium',
      teams: 'Colts vs. Ravens',
      description:
      'Join us for an exciting NFL regular seasons between Colts and Ravens. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'http://www.nfl.com/tickets/baltimore-ravens?icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/colts-at-ravens-2023-reg-3',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 24, 2023',
      time: 'TBD',
      venue: 'M&T Bank Stadium',
      teams: 'Colts vs. Ravens',
      description:
      'Join us for an exciting NFL regular seasons between Colts and Ravens. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'http://www.nfl.com/tickets/baltimore-ravens?icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/colts-at-ravens-2023-reg-3',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 24, 2023',
      time: 'TBD',
      venue: 'M&T Bank Stadium',
      teams: 'Colts vs. Ravens',
      description:
      'Join us for an exciting NFL regular seasons between Colts and Ravens. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'http://www.nfl.com/tickets/baltimore-ravens?icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/colts-at-ravens-2023-reg-3',
    },

    {
      title: 'Wk 3 Regular Season',
      date: 'September 24, 2023',
      time: 'TBD',
      venue: 'M&T Bank Stadium',
      teams: 'Colts vs. Ravens',
      description:
      'Join us for an exciting NFL regular seasons between Colts and Ravens. It promises to be an action-packed match!',
      image: './src/img/DefaultPic1.jpeg',
      ticketLink: 'http://www.nfl.com/tickets/baltimore-ravens?icampaign=Tickets_pre_gamecenter',
      liveStreamLink: 'https://www.nfl.com/games/colts-at-ravens-2023-reg-3',
    },
    // Add more game data with images, ticket links, and live stream links
  ];

  return (
    <div className="App">
      <h1>Football Game Schedule</h1>
      <div className="card-container">
        {footballGames.map((game, index) => (
          <FootballGameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default App;