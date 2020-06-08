import React from 'react';
import movieSeats from '../data/movieSeats';

class SeatSelection extends React.Component {
    // first step: create a seat component that takes props
    // display a section class row for the total number of rows
    // within thsoe , display seat components while its less or equal to the total number of seats
    // pass those seat components props of: taken and name. 
     getTaken() {
        movieSeats.forEach(function (movie) {
            var seats = movie.seats;
            var seatsArr = ['1']
            seats.forEach(function (seat) {
                var seatName = seat.name
                var taken = seat.taken
                seatsArr.push("<Seat name=" + seatName + " taken=" + taken + "/>");
            });
            console.log(seatsArr)
        });
        
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
