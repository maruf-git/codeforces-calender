import React, { useEffect, useState } from 'react'
import CodeforcesContest from '../codeforces-contest/CodeforcesContest'


const CodeforcesContests = props => {
    const [codeforcesContests, setCodeforcesContests] = useState([])
    useEffect(() => {
        fetch("https://codeforces.com/api/contest.list?gym=false")
            .then(response => response.json())
            .then(data => {
                console.log(data.result);
                setCodeforcesContests(data.result)
            })
    }, [])
    const upComingContests = codeforcesContests.filter(contest => contest.phase === "BEFORE");
    upComingContests.sort((a, b) => a.startTimeSeconds - b.startTimeSeconds);

    return (
        <div className="grid grid-cols-3 gap-5">
            {
                upComingContests.slice(0, 5).map(contest => <CodeforcesContest key={contest.id} contest={contest}></CodeforcesContest>)
            }
        </div>
    )
}


export default CodeforcesContests
