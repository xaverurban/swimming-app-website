console.log("Hello from the Web App Dev 1 lab!");

const greenbtn = document.querySelector(".green");

greenbtn &&
  greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));

const bluebtn = document.querySelector(".blue");

bluebtn &&
  bluebtn.addEventListener("click", () => {
    let readMoreDiv = document.querySelector("#readmore");
    if (readMoreDiv.style.display === "block") {
      readMoreDiv.style.display = "none";
    } else {
      readMoreDiv.style.display = "block";
    }
  });

const redbtn = document.querySelector(".red");

const welcomeUserDiv = document.querySelector("#welcomeuser");
 $(".delswimmer").click(() => confirm('Really delete this swimmer?'))
$(".delswimmingteam").click(() => confirm('Really delete this swimming team?'))
redbtn &&
  redbtn.addEventListener("click", () => {
    let username = prompt("What's your name?");
    welcomeUserDiv.style.display = "block";
    document.querySelector("#welcomeuser").innerHTML = `<p> Hello, ${username},
    looking forward to hearing your swimming teams! Click this message to close it.</p>`;
    welcomeUserDiv.style.cursor = "pointer";
  });

welcomeUserDiv &&
  welcomeUserDiv.addEventListener("click", (evt) => {
   // evt.currentTarget.style.display = "none";
    welcomeUserDiv.style.display = "none";
  });

const ratebtn  = document.querySelector("#rateit");

ratebtn &&
  ratebtn.addEventListener("click", () => {
   let userRating = parseInt(prompt("Rate this collection (from 1 to 5 stars)"));
  if (userRating>5 || userRating<1 || isNaN(userRating)){
    alert("Try again with a number between 1 and 5!");
  }
  else{

    document.querySelector("#rating").innerHTML = "You gave a rating of: ";
    for (let i=0; i < userRating; i++){
        document.querySelector("#rating").innerHTML +="<i class='yellow star icon'></i>";
    }
   

  }
});


