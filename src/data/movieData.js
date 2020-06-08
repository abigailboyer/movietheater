import LeftBehind from '../images/left-behind.jpg';
import Arsenal from '../images/arsenal.jpg';
import GrandIsle from '../images/grandisle.jpg';

const movieData = [
  {
    _id: 1,
    title: "Grand Isle",
    description: "Walter and his neglected wife lure a young stranger into their Victorian home to escape from a hurricane. When the man is charged with murder by Detective Jones, he must reveal the couple's wicked secrets to save himself.",
    poster: GrandIsle,
    showtimes: [
      "12:30 PM",
      "2:15 PM",
      "5:15 PM",
      "6:30 PM",
      "8:45 PM",
      "9:15 PM",
      "10:15 PM"
    ]
  },
  {
    _id: 2,
    title: "Left Behind",
    description: "A small group of survivors are left behind after millions of people suddenly vanish and the world is plunged into chaos and destruction.",
    poster: LeftBehind,
    showtimes: [
      "10:00 AM",
      "2:15 PM",
      "5:15 PM",
      "8:15 PM",
      "9:30 PM"
    ]
  },
  {
    _id: 3,
    title: "Arsenal",
    description: "When Mikey is kidnapped and held for a ransom by ruthless crime boss Eddie King (Nicolas Cage), JP turns to the brothers' old pal Sal (John Cusack), a plain clothes detective for help.",
    poster: Arsenal,
    showtimes: [
      "10:00 AM",
      "12:30 PM",
      "2:15 PM",
      "4:00 PM",
      "6:30 PM",
      "8:15 PM",
      "9:30 PM"
    ]
  }
]

export default movieData
