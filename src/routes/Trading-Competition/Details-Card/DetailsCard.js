export function DetailsCard() {

    return (
        <>

            <div className="body-detailsCard">
                <div className="top-detailsCard">
                    <h2>Details</h2>
                </div>
                <div className="content-detailsCard">
                    <div className="eligible" onclick="showHide()">
                        <div className="wrapper-detailsCard">
                            <p>Eligible trading pairs</p>
                            <div className="btn">
                                <button className="detailsBtn">Details</button>
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="text">
                            Only trades on DAR/BNB, CAKE/BNB, and CAKE/BUSD pairs will be included in volume calculations. Please
                            note that the volume from limit orders will not be included.
                        </div>
                    </div>
                    <div className="eligible" onclick="showHide2()">
                        <div className="wrapper-detailsCard">
                            <p>Calculating team ranks and winners</p>
                            <div className="btn">
                                <button className="detailsBtn">Details</button>
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="text">
                            - Team ranks are calculated by the total combined volume of the top 500 members of each respective team.
                            <br></br>
                            - The final winning team will be the team with the highest total volume score at the end of the
                            competition period.
                        </div>
                    </div>
                    <div className="eligible" onclick="showHide3()">
                        <div className="wrapper-detailsCard">
                            <p>Prize distribution</p>
                            <div className="btn">
                                <button className="detailsBtn">Details</button>
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="text">
                            - Prizes to be distributed in CAKE and DAR in a distribution of 1:5 and shared by all members of each
                            respective tier. <br></br>
                            - The price of token prizes ($CAKE and $DAR) in USD will be determined as per their BUSD pair price
                            during the tally period. <br></br>
                            - Every participant will win at least one prize at the end of the competition.
                        </div>
                    </div>
                    <div className="eligible" onclick="showHide4()">
                        <div className="wrapper-detailsCard">
                            <p>Fine print</p>
                            <div className="btn">
                                <button className="detailsBtn">Details</button>
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="text">
                            - In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the
                            final say. <br></br>
                            - PancakeSwap can and will disqualify any team or specific members that are proven to have taken
                            malicious action or attempt to “cheat” in any way.
                        </div>
                    </div>
                    <div className="eligible" onclick="showHide5()">
                        <div className="wrapper-detailsCard">
                            <p>Can I join the battle after it starts?</p>
                            <div className="btn">
                                <button className="detailsBtn">Details</button>
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="text">
                            Sorry, no. You need to register during the registration period, before the start of the event.
                        </div>
                    </div>
                    <div className="eligible" onclick="showHide6()">
                        <div className="wrapper-detailsCard">
                            <p>How do I know if I successfully registered?</p>
                            <div className="btn">
                                <button className="detailsBtn">Details</button>
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="text">
                            At the top of the page, the text in the button “I Want to Battle” will change to “Registered”.
                        </div>
                    </div>
                    <div className="eligible" onclick="showHide7()">
                        <div className="wrapper-detailsCard">
                            <p>How can I see my current rank?</p>
                            <div className="btn">
                                <button className="detailsBtn">Details</button>
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="text">
                            Check Your Score section on the event page. You’ll need to connect your wallet, of course.
                        </div>
                    </div>
                    <div className="eligible border-detailsCard" onclick="showHide8()">
                        <div className="wrapper-detailsCard">
                            <p>How do I claim my prize(s)?</p>
                            <div className="btn">
                                <button className="detailsBtn">Details</button>
                                <svg viewBox="0 0 24 24" fill="#1fc7d4" color="primary" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 hUJQGG">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="text">
                            After the battle ends, visit the event page and click the “Claim Prizes” button in the top section or in
                            “Your Score” section. Once you claim your prizes successfully, the button text will change to “Prizes
                            Claimed”.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
