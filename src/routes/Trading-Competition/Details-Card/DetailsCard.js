import { useState } from "react";
import React from 'react';

export function DetailsCard() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    // const handleClick = () => {
    //     setShow(!show);
    //   };


    return (
        <>

            <div className="body-detailsCard">
                <div className="top-detailsCard">
                    <h2>Details</h2>
                </div>
                <div className="content-detailsCard">
                    <div className="eligible" onClick={() => setShow(!show)}>
                        <div className="wrapper-detailsCard">
                            <p>Eligible trading pairs</p>
                            <div className="btn">
                                {show?<button className="detailsBtn">Hide</button>:<button className="detailsBtn">Details</button>}
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {show?<div className="text">
                            Only trades on DAR/BNB, CAKE/BNB, and CAKE/BUSD pairs will be included in volume calculations. Please
                            note that the volume from limit orders will not be included.
                        </div>:null}
                    </div>
                    <div className="eligible" onClick={() => setShow1(!show1)}>
                        <div className="wrapper-detailsCard">
                            <p>Calculating team ranks and winners</p>
                            <div className="btn">
                                {show1?<button className="detailsBtn">Hide</button>:<button className="detailsBtn">Details</button>}
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {show1?<div className="text">
                            - Team ranks are calculated by the total combined volume of the top 500 members of each respective team.
                            <br></br>
                            - The final winning team will be the team with the highest total volume score at the end of the
                            competition period.
                        </div>:null}
                    </div>
                    <div className="eligible" onClick={() => setShow2(!show2)}>
                        <div className="wrapper-detailsCard">
                            <p>Prize distribution</p>
                            <div className="btn">
                                {show2?<button className="detailsBtn">Hide</button>:<button className="detailsBtn">Details</button>}
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {show2?<div className="text">
                            - Prizes to be distributed in CAKE and DAR in a distribution of 1:5 and shared by all members of each
                            respective tier. <br></br>
                            - The price of token prizes ($CAKE and $DAR) in USD will be determined as per their BUSD pair price
                            during the tally period. <br></br>
                            - Every participant will win at least one prize at the end of the competition.
                        </div>:null}
                    </div>
                    <div className="eligible" onClick={() => setShow3(!show3)}>
                        <div className="wrapper-detailsCard">
                            <p>Fine print</p>
                            <div className="btn">
                                {show3?<button className="detailsBtn">Hide</button>:<button className="detailsBtn">Details</button>}
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {show3?<div className="text">
                            - In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the
                            final say. <br></br>
                            - PancakeSwap can and will disqualify any team or specific members that are proven to have taken
                            malicious action or attempt to “cheat” in any way.
                        </div>:null}
                    </div>
                    <div className="eligible" onClick={() => setShow4(!show4)}>
                        <div className="wrapper-detailsCard">
                            <p>Can I join the battle after it starts?</p>
                            <div className="btn">
                                {show4?<button className="detailsBtn">Hide</button>:<button className="detailsBtn">Details</button>}
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {show4?<div className="text">
                            Sorry, no. You need to register during the registration period, before the start of the event.
                        </div>:null}
                    </div>
                    <div className="eligible" onClick={() => setShow5(!show5)}>
                        <div className="wrapper-detailsCard">
                            <p>How do I know if I successfully registered?</p>
                            <div className="btn">
                                {show5?<button className="detailsBtn">Hide</button>:<button className="detailsBtn">Details</button>}
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {show5?<div className="text">
                            At the top of the page, the text in the button “I Want to Battle” will change to “Registered”.
                        </div>:null}
                    </div>
                    <div className="eligible" onClick={() => setShow6(!show6)}>
                        <div className="wrapper-detailsCard">
                            <p>How can I see my current rank?</p>
                            <div className="btn">
                                {show6?<button className="detailsBtn">Hide</button>:<button className="detailsBtn">Details</button>}
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {show6?<div className="text">
                            Check Your Score section on the event page. You’ll need to connect your wallet, of course.
                        </div>:null}
                    </div>
                    <div className="eligible border-detailsCard" onClick={() => setShow7(!show7)}>
                        <div className="wrapper-detailsCard">
                            <p>How do I claim my prize(s)?</p>
                            <div className="btn">
                                {show7?<button className="detailsBtn">Hide</button>:<button className="detailsBtn">Details</button>}
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {show7?<div className="text">
                            After the battle ends, visit the event page and click the “Claim Prizes” button in the top section or in
                            “Your Score” section. Once you claim your prizes successfully, the button text will change to “Prizes
                            Claimed”.
                        </div>:null}
                    </div>
                </div>
            </div>

        </>
    )
}
