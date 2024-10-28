import React from 'react'
import PropTypes from 'prop-types'

const CodeforcesContest = ({ contest }) => {
    console.log("Contest Data:", contest)
    const { id, name, startTimeSeconds, durationSeconds, type } = contest;
    // converting startTimeSeconds in local date and time format
    const convertToLocalDateTime = () => {
        const date = new Date(startTimeSeconds * 1000)
        const formattedDateTime = date.toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true, // Optional: use 24-hour format
          });
        return formattedDateTime;
    }
    // converting durationSeconds to hours and minutes
    function convertSeconds() {
        const hours = Math.floor(durationSeconds / 3600);
        const minutes = Math.floor((durationSeconds % 3600) / 60);
        return `${hours} hours ${minutes!==0? minutes :""} ${minutes!==0? "minutes" :""}`;
      }
      


    return (
        <div className="border border-teal-400 rounded-lg p-14 flex flex-col justify-center items-center gap-3">
            <h1>{name}</h1>
            <p>Starts: {convertToLocalDateTime()}</p>
            <p>Duration: {convertSeconds(durationSeconds)}</p>
            <button onClick={()=>{console.log(id)}} className="btn"><a href={`https://codeforces.com/contests/${id}`}>Open Contest</a></button>
        </div >
    )
}

CodeforcesContest.propTypes = {

}

export default CodeforcesContest
