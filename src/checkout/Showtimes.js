import React from 'react'

function Showtimes(props) {

  /* for each day, create an li with the date in it
     call this function inside the ol below */

  return (
    <section id="dateTimeSelection">
      <ol id="dates">
        <li>
          1 July
        </li>
        <li>
          2 July
        </li>
        <li>
          3 July
        </li>
      </ol>

      <ol id="showtimes">
        <li>
          10:00pm
        </li>
        <li>
          10:30pm
        </li>
      </ol>
    </section>
  )
}

export default Showtimes
