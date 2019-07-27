'use strict';

function bio(){
  return    `
        <div class='js-containe container'>
            <h1 class="bio_start">Hi i'm Adam Pavlicek</h1>
            <img src="pics/MyPhoto/ME!!.jpg" alt="Adam Pavlicek, With his nephew, on his shoulders.">
            <p Class="bio">
                I have always always enjoyed puzzle games. 
                Seeing my actions take shape to build an answer to a problem. 
                I also enjoy a good challenge. 
                I often find myself playing games that have a learning curve designed around repetition and learning from your mistakes.
            </p>
        </div>
`;
}
function portfolio(){
  return `
        <div class='js-containe container'>
            <div name="project1">
                <h2>Quizz app Project</h2>
                <p>This is a class project that I worked on with a fellow classmate, Peter</p>
                <h3">Start of Quiz</h3>
                <p>The start of the quiz</p>
                <img name="quizStart" src="pics/QuizStart.PNG" alt="Start of quiz">
                <h3>Quiz Question</h3>
                <p>Here the user can answer a multiple choice question</p>
                <img src="pics/QuizQuestion.PNG" alt="A quiz question">
                <h3>Quiz Response</h3>
                <p>Here the user can sees if he answered correctly or not</p>
                <img src="pics/QuizResponse.PNG" alt="Response to answerd Question">
                <h3>Quiz Results</h3>
                <p>The User can see how well he did on the quiz</p>
                <img src="pics/QuizEndCard.PNG" alt="End of quiz">
                <a class="projectLinks" href="https://thinkful-ei-cheetah.github.io/OOP-quiz-render-adam-peter/">Quiz App</a>
                <a class="projectLinks" href="https://github.com/thinkful-ei-cheetah/OOP-quiz-render-adam-peter">GitHubRepo</a>
            </div>
            <div name="project2">
                <h2>SquadUp!</h2>
                <p>SquadUp helps you to connect with all types of gamers across all types of games. From video games to sports games. I helped build SquadUp! with a group of talented classmates. We really wanted to produce a somthing that we believed people would love to use as well as solve the problem of finding people to play with. </p>
                <h3>Main Dahsboard view</h3>
                <p>The User is able to browse or search through a list of games as well as chat with squads.</p>
                <img src="pics/SquadUp/DashBoardWithUpdatedChat.png" alt="squadUp dashboard page">
                <h3>Game squads list</h3>
                <p>After choosing a game you can browse through a list of sqauds for that game</p>
                <img src="pics/SquadUp/DashBoardSquads.png" alt="game squad list">
                <h3>Create a Squad</h3>
                <p>You can even create your own squad if you want to</p>
                <img src="pics/SquadUp/DashBoardMakeSquad.png" alt="create squad form">
                <h3>technology used</h3>
                <ul>
                  <li>React with React hooks</li>
                  <li>Node.js</li>
                  <li>express</li>
                  <li>postgreSQL</li>
                  <li>socket.io</li>
                </ul>
                <h3>Website and Repo</h3>
                <a class="projectLinks" href="https://squadup.now.sh/">SquadUP!</a>
                <a class="projectLinks" href="https://github.com/cgillette12/Squad-up-Client">SquadUp Repo</a> 
            </div>
        </div>
    `;
}

function contact(){
  return `
    <div class='js-containe container'>
        <h2>Contact Info</h2>
        <ul>
            <li>Email: adamhpavlicek@gmail.com</li>
            <li><a href="https://github.com/AdamPavlicek">Github</a></li>
            <li><a href="https://www.linkedin.com/in/adam-pavlicek-3a1a9ab1/">LinkdIn</a></li>
        </ul>
    </div>
`;
}
function handleBio(){
  $('header').on('click', '.js-bio', function(event){
    event.preventDefault();
    $('.js-containe').remove();
    $('main').append(bio());
  });
}
function handlePortfolio(){
  $('header').on('click', '.js-portfolio', function(event){
    event.preventDefault();
    $('.js-containe').remove();
    $('main').append(portfolio());
  });
}

function HandleContact(){
  $('header').on('click', '.js-contact', function(event){
    event.preventDefault();
    $('.js-containe').remove();
    $('main').append(contact());
  });
}

handleBio();
handlePortfolio();
HandleContact();