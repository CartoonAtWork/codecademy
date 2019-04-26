let userName = 'Jane';
userName ? console.log(`Hello ${userName}!`) : console.log ('Hello!');

let userQuestion = 'Will I be rich?'; 
if (userQuestion) {
  console.log(`${userName} asked: ${userQuestion}`); 
};

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
switch(randomNumber) {
  case 1: eightBall = 'It is certain.';
  break;
  case 1: eightBall = 'No.';
  break;
  case 2: eightBall = 'Try again.';
  break;
  case 3: eightBall = 'Yes.';
  break; 
  case 4: eightBall = 'No way.';
  break;
  case 5: eightBall = 'Of course.';
  break;
  case 6: eightBall = 'Always.';
  break;
  case 7: eightBall = 'Maybe.';
  break;
  default: eightBall = 'Ask again.';
  break;
}
console.log(`The eight ball answered: ${eightBall}`);




                                                                 
                                                                 
                                                                 
