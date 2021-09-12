import React from 'react'
import Button from '@material-ui/core/Button';
import Navbar from "./Navbar";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { useLocation } from 'react-router';
import Alert from '@material-ui/lab/Alert';

const event_list = {
  Valorant: {
    Eventname: "valorant",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Continue to fight,Continue to win",
    Description: [
      "Short event Description: ",
      "It is a gaming(PC) tournament where several teams will be held up against each other and in order to win, one team will have to dominate others by winning. ",
      "Participation mode: ",
      "It will be a team event. Where one team will contain 5 members. You have to play from your personal devices from home and if it will be possible finals will be BO3(not sure) and as it is a paid event handsome price-pool will be rewarded and winner takes all.",
      "Number of rounds :",
      "The total tournament rounds cannot be estimated as it purely depends on the number of teams registering. In one match there will be a total of 24 rounds if one team scores 13 rounds with leaving the other team at round 11 or less then the first team will win, otherwise the match will go in overtime which can continue until one team scores two continuous round wins. ",
      "Platform used :",
      "WhatsApp, Discord(those who have it) ",
      "The maximum number of participants/teams: ",
      "There will be a total of 32 teams allowed.:",
      "Evaluation Process :",
      "The game will itself evaluate the rounds. ",
      "Resource needed :",
      "Real-time information of participants.",
    ],
    ImgSrc: "https://i.ibb.co/wKvK3W7/valorant-01.png",
    Student_CoOrdinators: ["Yashmay Patel",
      "Dev Parekh",
      "Anuj Bhagat",
      "Keyur Joshi"],
    Faculty_CoOrdinators: ["bhavesh patel", "jaydeep barad", "jayesh chaudhari"],
    Volunteer: [
      "Neel Vaidya",
      "Aakanshu Desai"
    ]
  },
  BidWiser: {
    Eventname: "Bid Wars",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Auction Won, Dreams Go On.",
    Description: [
      "Description:",
      "1. Every team have to bid wisely on the prop/item to go till the end and win the auction.",
      "2. Each team will be given some given specific credit to spend on the items or the props.",
      "3. Each item will have a base price and its true price",
      "a. The actual value of the item/prop will not be disclosed to the teams and will be used for profit and loss calculations",
      "b. The loss value will be calculated by the bid value - true value",
      "c. The profit value will be calculated by the true value – bid value",
      "4. The final winner will be declared after completion of all the rounds",
      "Rules:",
      "1. Team will consist of 2 members each.",
      "2. Each team can select limited numbers of props.",
      "3. If there will be no bidding on a particular prop within 30 seconds, then that particular prop will be declared as unsold.",
      "4. After a particular bid there will be a time of 4 seconds if any otherteam does not bid in that particular time the item will be sold.",
      "5. If all the credit is not spent, then the 1/10th of the remaining credit will be considered during final calculation to declare the winners",
    ],
    ImgSrc: "https://i.ibb.co/f1vnPB6/BIDWARS-FINAL1.jpg",
    Student_CoOrdinators: [
      "Avik Dube (3rd Evening)",
      "Aryan Kapoor (3rd Evening)",
      "Raj Mashruwala (4th Evening)"
    ],
    Faculty_CoOrdinators: ["bhavesh patel", "jaydeep barad", "jayesh chaudhari"]
  },
  BingeWatch: {
    Eventname: "Watch Craft",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Just one more episode!",
    Description: [
      "Team Size: 3 members ",
      "Instructions:",
      "Round 1: (Identify the characters/Series) Approx. 45 min",
      "• In this round, participants need to identify the characters/TV series from the image displayed. ",
      "• Each team will be shown total of 20 images for 10 seconds each. ",
      "• Some images shall be intentionally shown blurred or shadowed or partial.",
      "Round 2: (Quiz)Approx. 45 min",
      "• In this round, participants need to answer the multiple choice questions (memory/knowledge based) from the famous web series",
      "• There will be 25 multiple choice questions provided to each teams on a question paper. ",
      "• Maximum time provided will be not more than 15 minutes. (Submission time will be noted for each team)",
      "Round 3: (Buzzer Round/Audio visual round) Approx. 1 hour",
      "• In this round team has to identify the character/TV Show name from the famous quote/dialogue/theme song.",
      "• The team pressing the buzzer first gets a chance to answer the question, failing to do so will result in negative marking.",
      "Rules:",
      "1. The team with maximum number of correct answers will be qualified for the next rounds. (The number of teams qualifying for the next round will depend on the number of teams participating)",
      "2. Only 1 member of the team need to register their team for the event.",
      "3. The entries that will be qualified for the next rounds will be contacted.",
      "4. All the rounds will be conducted separately.",
    ],
    ImgSrc: "https://i.ibb.co/W6sczcn/watch-craft-final1.png",
    Student_CoOrdinators: [
      "Viral Ahir (9909923321) – CO-E 3rd year",
      "Krinal Gandhi (9537795439) – CO-E 3rd year",
      "Het Shah (9712928969) – CO-E 3rd year",
      "Pathik Patel (9712071980) – CO-M 4th year ",
    ],
    Faculty_CoOrdinators: ["bhavesh patel", "jaydeep barad", "jayesh chaudhari"]
  },
  ScvengerHunt: {
    Eventname: "scavenger hunt",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Rise N Shine. It’s Huntin’ Time !",
    Description: [
      "Round 1 : ",
      "Description :",
      "All the teams having two member each will play against each other.Each team will be given an initial clue from a set (A to E) and the answer to it will be a location on SCET Campus.",
      "The guessed location needs to be confirmed with your nearest volunteer. If the guess is correct, you will find a new QR code at the location. On scanning the code, you will get clue to the next location.",
      "The team from each set that will reach the final destination first will be selected for the next round.",
      "Rules :",
      "1) Teams should compulsory have 2 members.",
      "2) Do not temper or scratch the QR Code.",
      "3) You need to get your location verified compulsorily by the nearest volunteer.",
      "Round 2 :",
      "Description:",
      "The top team from each set (i.e. total 5 teams) will play for this round.One member of the team will be provided any word/location by the coordinators. That member will try to act the word. While the other team member will guess the word. (Like a word Dumb charades).",
      "After guessing the correct word, he/she will find that object/location in the college campus, and take a photograph of that object/location.",
      "They will come back and get their photograph verified. Team that will complete the given set of words in the minimum time, will be declared winner.",
      "Rules :",
      "1) No google searched photos will be allowed. Photo should be clicked within the college campus.",
      "2) The member who is going to act should not speak only convey through actions or they will be disqualified.",
    ],
    ImgSrc: "https://i.ibb.co/2kyqjTX/scavenger-hunt-01.png",
    Student_CoOrdinators: [
      "Nidhi Patel (7984541699)",
      " Nishita Pandya (7778034464)",
      " Nisha Rana (9374722220)",
      "Sonika Shah (8140426235)",
      " Dhavan Maiyani (6353450797)"
    ],
    Faculty_CoOrdinators: ["bhavesh patel", "jaydeep barad", "jayesh chaudhari"]
  },
  Abhivyakti: {
    Eventname: "abhivyakti",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Debate: Gladiatorial Combat of the Intellect.",
    Description: [
      "Rules",
      " 1. In 1st round, there will be a quiz of 20 questions with 4 multiple choices in which you have to choose correct one. There will be no negative marking. Quiz will be based on logical reasoning, current affairs and general knowledge. 5-7 Teams which will gain the highest score will be selected for the next round. ( 2 members for each team)",
      " 2. 2nd round is the debate round that is semi final round in which the team has to prepare on topics given and they will have to speak for the topic within 2-3 min. According to the selection criteria jury will select the top 2 teams for the 3rd round.",
      " 3. Third round will a presentation round.Two teams will be selected from the debate(by the jury based on their scores) and will be given a time of 15-20 mins before the final round to prepare the presentation. ",
      " 4. Winner of ABHIVYAKTI will be selected on the basis of criteria like speech,explanation power and many more. ",
      " 5. Equal participation of students will be required in a team.",
      "Debate Topics:",
      "1)What’s better: traditional or online education? ",
      "2)LI-FI vs WI-FI ",
      "3)Will AI kill jobs? ",
      "4)Is India ready for cashless economy?",
      "5)Will cryptocurrency survive?",
      "6)Should web surfing be restricted at work?",
      "7)Is leisure time essential for workplace?",
    ],
    ImgSrc: "https://i.ibb.co/7Vqz5FB/Abhivyakti-final.png",
    Student_CoOrdinators: [
      "JASH SHAH-CO(M)- 3rd",
      "PALAK DESAI -CO(M) - 3rd",
      "RADHU PATEL -CO(E) - 3rd",
      "VISHESH PATEL-CO(E) - 3rd"
    ],
    Faculty_CoOrdinators: ["Prof. VANDANA JOSHI",
      "Prof. URVASHI PRAJAPATI"]
  },
  Avishkar: {
    Eventname: "Avishkar",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Creativity is thinking up new things. Innovation is doing new things.",
    Description: [
      "Participation Mode:",
      "Individual/Team(Maximum 3 members) ",
      "Description: ",
      "This event is related to innovative/business/start-up ideas. This event contains two rounds. ",
      "Round 1:",
      "Participants have to submit an abstract of their idea. Judges will select some of the best ideas. These selected participants will move to second round. ",
      "Round 2:",
      "Participants have to give presentation of their idea to the judges. After presentation questionary of 5 minutes will be done by judges. Top two ideas will be declared as winners. ",
      "Rules: ",
      "• Abstract should be of 250-300 words. ",
      "• Presentation must be created by participants only.",
      "• Presentation should be maximum of 15 minutes.",
    ],
    ImgSrc: "https://i.ibb.co/dcJJ7SK/Avishkar-final-1.jpg",
    Student_CoOrdinators: ["Priyank Harjilawala (7698254795)",
      "Sneh Patel (9409070709)",
      "Manav Dobariya (9409583829)",
      "Brijesh Patodiya (9974884446)"],
    Faculty_CoOrdinators: [
      "Prof. Bhumika Bhatt",
      "Prof. Nitya Komalan "
    ]
  },
  Predictaholic: {
    Eventname: "Predictaholic",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Foresee The Inevitable",
    Description: [
      "Event Description:",
      "An event where you will be predicting the cricket score.",
      "Number of members:",
      "2",
      "Number of rounds:",
      "2",
      "Round 1:",
      "• Basic Mathematics and Data science based generic quiz  will be conducted.",
      "• This will be score-based qualifier round.",
      "Round 2: ",
      "• Datasets related to cricket will be given before commencement of round 2.",
      "• Each team has to submit the code, along with the score predicted by the code.",
      "• The participant should submit the code through platform given. More details will be shared with registered/qualified participants.",
      "• The winning team will depend on how close the score predicted by the code and accuracy matches the actual score.",
      "• Only Libraries specified are preferred to be used, for fair competition. Information regarding same will be provided later.",
      "• Code should be in Python language.",
      "• If you are a keen follower of cricket and have a fair understanding of the game but are not a programmer or a data scientist, we have something for you too! Predict the score using your own mathematical/basic techniques.Although you will not be considered for winner prize if prediction is not  done through any code/model, but definitely you will get the winning certificate.",
      "Rules:",
      "1) Each participant can submit the form once only.",
      "2) Top entries with maximum score will be qualified for the second round.",
      "3) The entries that will be qualified for the second round will be contacted.",
      "4) Both the rounds will be conducted separately.",
    ],
    ImgSrc: "https://i.ibb.co/G0HZ80S/Predictaholic-final.png",
    Student_CoOrdinators: [
      "Jainil Jakasaniya (CO-E III)",
      "Abhishek Akbari (CO-E III)",
      "Manali Ladhani (CO-E IV)",
      "Jayanshu kikani (CO-M III)",
    ],
    Faculty_CoOrdinators: [
      "Prof. Nirali Nanavati",
      "Prof. Rachna Oza"
    ]
  },
  Zodiac: {
    Eventname: "The Enigma",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Unveil The Turing In You",
    Description: [
      "Event Description:",
      "An event where you will be given mysteries which you need to decode.",
      "Number of members: 1 or 2",
      "Number of rounds: 2",
      "Round 1: (Approx. 1 hour)",
      "In the first round, participants have to solve the logical reasoning and C programming questions. Some questions can be in an encrypted format or given in the form of a puzzle. This will be score-based qualifier round. The participants having maximum correct answers in minimum time will be qualified for the second round. Round 2: (Approx. 1 hour 15 minutes) At the beginning of the round, the participants will be given a story and an input which’ll be used in the story. The given input is used to get answers regarding the mystery. Using the clues, the participant will be able to get to the final answer.",
      "Rules: ",
      "1) Each participant can submit the form once only.",
      "2) Top entries with maximum score will be qualified for the second round.",
      "3) The entries that will be qualified for the second round will be contacted.",
      "4) Both the rounds will be conducted separately.",
    ],
    ImgSrc: "https://i.ibb.co/GWPrhzw/The-Enigma.png",
    Student_CoOrdinators: [
      "Faizan Mombasawala (CO-M IV)",
      "Harshil Modi(CO-M IV)",
      "Love Borad (CO-E III)",
      "Romit Patel (CO-E III)",
      "Rini Patel (CO-E III)"
    ],
    Faculty_CoOrdinators: ["Prof. Bintu Kadhiwala"]
  },
  Niyukti: {
    Eventname: "Niyukti",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Reach the sky or don’t even try",
    Description: [
      "It consists of THREE ROUNDS:",
      "Round 1: Quiz based Round",
      "• Quiz Topics = Quantitative Aptitude, Logical Reasoning, Verbal Ability.",
      "Rules: ",
      "• Quiz will be given by participants through google form in Computer Lab.",
      "• No online searching activities will be allowed during quiz round.",
      "• Around 50 questions will be asked. • In case of same score(tie), time factor will be considered.",
      "Round 2: Group Discussion Round",
      "• Topics of group discussion will be provided after 1st round to all students who are selected in 2nd round. • One topic will be provided to each group from formerly given topics.",
      "• Participants will be short listed for interview session based on the performance of 1st and 2nd round.",
      "Rules: ",
      "• Around 7- 8 mins will be given to each group, time of this round can be changed according to time constraints.",
      "• Groups will be formed randomly from the participants.",
      "Round 3: Interview Session Round",
      "• Participants will be evaluated based on their performance in Technical + Non-Technical interview round.",
      "Rules: ",
      "• For this round, selected participants need to appear with resume.",
    ],
    ImgSrc: "",
    Student_CoOrdinators: [
      "Meet Savaj (8758287026)",
      "Jayesh Maiyani (8200201690)",
      "Aastha Savaliya (9512466947)",
      "Vrushant Bhanderi (9537704403)"
    ],
    Faculty_CoOrdinators: ["Prof. Jaydeep Gheewala"]
  },
  Codechef: {
    Eventname: "Code Fiesta(Codechef)",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "while !succeed == try():",
    Description: [
      "DESCRIPTION ABOUT THE COMPETITION",
      "This is a CodeChef Coding Competition, which will be hosted on the official CodeChef website. There shall be a total of 10 questions ranging from easy, moderate to difficult. Participants shall receive hundred (100) points for solving each question which includes passing of all test cases. No barrier on usage of any programming language. Time duration of the coding competition will be of 2 hours. If more than one participant has an equal score, then their coding time will be considered for breaking the tie.",
      "“Code is like humour. When you have to explain it, it’s bad.” – Cory House",
      "RULES OF THE CODING COMPETITION",
      "1. You should not have multiple accounts on CodeChef. If you have, then you should participate with only one account. If any tampering related to account is found, it will result in disqualification from the competition.",
      "2. If you encounter any issue during an ongoing contest, the competition co-ordinators will help you get over it.",
      "3. You should avoid sharing formulae, logic, or any other significant aspect of your code during a contest. If our plagiarism algorithm finds striking similarities between your code and someone else’s, it will result in disqualification from the competition. If you are taking part in thecompetition, you must take good care of your code. Also, prohibit askingor discussing any aspect of any competition’s problem during an ongoing contest on any other platform, online or offline. Discussion of strategy should be avoided during the contest and postponed till the end",
    ],
    ImgSrc: "https://i.ibb.co/nqXN5cq/CODE-FIESTA-FINAL1.jpg",
    Student_CoOrdinators: [
      "Yash Shah 9265138118",
      "Roshan Sah 7228845169",
      "Shivam Sarang 7226908999",
      "Hrishikesh Patel 9879191394",
    ],
    Faculty_CoOrdinators: [
      "Prof. Snehal Gandhi",
      "Prof. Fagun Vankawala"
    ]
  },
  CodeStorm: {
    Eventname: "Code storm(DSC)",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "Storm your skills & go further",
    Description: [
      "Number of members per team: 2",
      "Number of Rounds: 3",
      "Round 1: C Quiz",
      "Rules:",
      "• Quiz will be conducted through google form. ",
      "• 15 Questions will be asked based on C language (Time limit: 20 mins) ",
      "• In case of same score time factor will be considered.",
      "Round 2: Guess the problem statement.",
      "Rules:",
      "• The set of codes will be displayed on the screen (one code at a time) and the team who guesses the problem statement first will be qualified for final round.",
      "Round 3: Pass on the code.",
      "Rules:",
      "• You have to complete the code by swapping your position with your team member",
    ],
    ImgSrc: "https://i.ibb.co/LkkChTz/Code-storm-Final.png",
    Student_CoOrdinators: [
      "Vishwa Patel (9726679768)",
      "Ishan Mehta (9586443113)",
      "Kartik Jetani (9106632374)",
      "Shailja Patel (9727305782)",
      "Kalp Maniyar (9825725689)",
    ],
    Faculty_CoOrdinators: [
      "Prof Urmi Desai",
      " Prof Vasundhara Uchhula"
    ]
  },
  BlindCode: {
    Eventname: "Blind Coding",
    Eventtime: "",
    Eventvanue: "",
    Tagline: "“Code beyond your vision",
    Description: [
      "It consists of TWO ROUNDS",
      "Round 1: Touch typing",
      "• Let’s test your typing speed and accuracy.",
      "Rules:-",
      "1. Participants will be given some text to be typed within fixed time duration.",
      "2. They will be evaluated wrt typing words per minute and typing accuracy.Note: This event will require approx one hour time.",

      "Round 2: Blind Coding",
      "• Let's switch off the monitor and do programming !!!",
      "• In this event basically students will be given a problem and they have to implement error free code in given time while monitor is being kept off.(Code must be implemented in c language)",
      "Rules:-",
      "1. Selected participants of round 1 will be given chance for round 2.",
      "2. During this round, monitor will be kept off.",
      "3. There are two phases in Round 2. In each phase, separate problem statement will be assigned to participants to be implemented using C language without error.",
      "4. Participant will be qualified for phase-2 only if he/she clears phase-1 of round-2.",
      "5. Winners will be selected based on total time taken to solve all the problem statements.",
      "Note: This event will require approx one hour time.",
    ],
    ImgSrc: "https://i.ibb.co/89kvynn/BLIND-CODE-01.jpg",
    Student_CoOrdinators: ["Chirag Shah (90166 86468)",
      "Veer Shah (7265892256)",
      "Hardik Shah (85112 18812)",
      "Muskan Khatri (75750 83359)"],
    Faculty_CoOrdinators: ["Prof. Rakesh Patel"]
  }
}

const Explore = (props) => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [alertmsg, setAlertmsg] = React.useState('');
  const [enrollment2, setEnrollment2] = React.useState('');
  const [enrollment3, setEnrollment3] = React.useState('');
  const [alert, setAlert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const location = useLocation()
  const path = location.pathname
  const EventName = path.substr(1, path.length)
  const data = event_list[EventName]

  React.useEffect(() => {
    setTimeout(() => {
      setAlert(false);
      setSuccess(false);
    }, 5000)
  }, [alert, success])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const verifyHandler = async (enroll) => {
    let bodydata = {
      "enrollment": enroll,
      "eventname": EventName
    }

    var response = await fetch("http://localhost:5000/enrollment-exist", {
      method: "POST",
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodydata),
    }).then(res => res.json())

    if (response.message === "USER_NOT_EXIST") {
      setAlert(true);
      setAlertmsg(enroll + " Enrollment not exist. Tell them to register first.");
      return;
    } else if (response.message === "ALREADY_REGISTERED") {
      setAlert(true);
      setAlertmsg(response.desc);
      return;
    } else if (response.message === "NOT_REGISTERED") {
      setSuccess(true);
      setAlertmsg(response.desc);
      return;
    }
  }
  const handleSubmit = async () => {
    if (localStorage.getItem("token") === "") {
      setAlert(true);
      setAlertmsg("Please login to register.");
      return;
    }
    else if (!checked) {
      setAlert(true);
      setAlertmsg("Please tick the checkbox.");
      return;
    }

    let members = [enrollment2, enrollment3].filter((item) => (item !== ''));
    console.log(members);

    let bodydata = {
      "eventname": EventName,
      "token": localStorage.getItem("token"),
      "members": members
    }
    console.log("bodydata", bodydata);

    var response = await fetch("http://localhost:5000/event-register", {
      method: "POST",
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodydata),
    }).then(res => res.json())

    console.log(response);
    console.log("submitted");
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Navbar />
      <div className="row mx-auto">
        <div className="col-sm-12 col-md-4">
          <img className="my-4 mx-auto" src={data.ImgSrc} style={{ width: "100%" }} alt="" />
          <div className="mx-auto" style={{ color: "white", textAlign: "center" }}>
            <p>Event Name : {data.Eventname}</p>
            <p>Time : {data.Eventtime}</p>
            <p>Venue : {data.Eventvanue}</p>
            <Button onClick={handleClickOpen} style={{ color: "white", backgroundColor: "blue" }}>Register</Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Confirm Your Registration"}</DialogTitle>
              <DialogContent>
                {/* Alert message */}
                <div style={{ position: 'fixed', top: "10px", zIndex: 10, width: "30vw" }} >
                  {success && <Alert severity="success">{alertmsg}</Alert>}
                  {alert && <Alert severity="error">{alertmsg}</Alert>}
                </div>
                {(EventName === "BidWiser" || EventName === "BingeWatch" || EventName === "Zodiac" || EventName === "CodeStorm" || EventName === "ScvengerHunt" || EventName === "Avishkar" || EventName === "Abhivyakti" || EventName === "Predictaholic") && <div className="my-4">
                  <span className="mx-2">Member 2:</span>
                  <TextField
                    id="Enrollment2"
                    label="Enrollment No."
                    type="Enrollment No."
                    autoComplete="current-enrollment"
                    variant="outlined"
                    onChange={(e) => setEnrollment2(e.target.value)}
                    style={{ height: "15px !important" }}
                  />
                  <Button className="mx-3" variant="contained" onClick={() => verifyHandler(enrollment2)} color="primary">verify</Button>
                </div>}
                {(EventName === "BingeWatch" || EventName === "Avishkar") && <div className="my-4">
                  <span className="mx-2">Member 3:</span>
                  <TextField
                    id="Enrollment3"
                    label="Enrollment No."
                    type="Enrollment No."
                    autoComplete="current-enrollment"
                    variant="outlined"
                    onChange={(e) => setEnrollment3(e.target.value)}
                    style={{ height: "15px !important" }}
                  />
                  <Button className="mx-3" variant="contained" onClick={() => verifyHandler(enrollment3)} color="primary">verify</Button>
                </div>}
                <div>
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />Verify all the enrollment before proceeding.</div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleSubmit} color="primary" autoFocus>
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 text-left" >
          <div style={{ color: "white", textAlign: "left" }}>
            <p ><span style={{ color: "red" }}>Event Name:</span> {data.Eventname}</p>
            <p><span style={{ color: "red" }}>Tagline:</span>“{data.Tagline}”
            </p>
            {data.Description.map((val) => {
              return (
                <p>{val}</p>
              )
            }
            )}
            <p>
              <span style={{ color: "red" }}> Student Co-Ordinators:</span><br />
              {data.Student_CoOrdinators.map((val) => {
                return (
                  <p>{val}</p>
                )
              })}</p>
            <p>
              <span style={{ color: "red" }}>Faculty Co-Ordinators:</span><br />
              {data.Faculty_CoOrdinators.map((val) => {
                return (
                  <p>{val}</p>
                )
              })}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
