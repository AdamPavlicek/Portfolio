'use strict';

function bio(){
    return    `
<div class='container'>
    <h1 class="bio_start">Hi i'm Adam Pavlicek</h1>
    <p class="picture_placeholder">MY PICTURE SHOULD GO HERE</p>
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
    return`
    <div class="container">
        <div name="Project1">
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
        <div name="Project2">
            <h2>Placeholder</h2>
        </div>
    </div>
    `;
}

function contact(){
return `
<div class="container">
    <h2>Contact Info</h2>
    <ul>
        <li>Email: adamhpavlicek@gmail.com</li>
        <li>Github: <a href="https://github.com/AdamPavlicek">AdamPavlicek</a></li>
    </ul>
</div>
`;
}
function handleBio(){
    $('header').on('click', '.js-bio', function(){
        $('.container').remove();
        $('html').append(bio());
        });
}
function handlePortfolio(){
    $('header').on('click', '.js-portfolio', function(){
        $('.container').remove();
        $('html').append(portfolio());
    });
}

function HandleContact(){
    $('header').on('click', '.js-contact', function(){
        $('.container').remove();
        $('html').append(contact());
    });
}

handleBio();
handlePortfolio();
HandleContact();