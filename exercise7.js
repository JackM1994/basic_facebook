var database = [
    {
        username: "andrei",
        password: 'superhans'
    }
];

var newsFeed = [
    {
        username: 'Bobby',
        timeLine: 'So tired from all that learning'
    },
    {
        username: 'Sally',
        timeline: 'JavaScript is sooo cool!'
    }

];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?")

function signIn(user, pass){
    if (user === database[0].username && 
        pass === database[0].password){
            console.log(newsFeed);
        } else{
            alert("Wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);