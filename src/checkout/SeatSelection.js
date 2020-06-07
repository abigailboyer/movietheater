import React from 'react';
import movieSeats from '../data/movieSeats';

class SeatSelection extends React.Component {
     getTaken() {
        movieSeats.forEach(function (movie) {
            var seats = movie.seats;
            seats.forEach(function (seat) {
                var seatName = seat.name
                var taken = seat.taken
                console.log(seatName);
                console.log(taken);
            })
        })
    }

    render() {
        return (
            <section>
                {this.getTaken()}
            </section>
        )
    }
}
export default SeatSelection
