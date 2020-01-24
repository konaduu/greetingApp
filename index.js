const date = document.getElementById("date");
const salutation = document.getElementById("greeting");
const time = document.getElementById("time");

//setting up date
const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
date.innerText = today.toLocaleDateString(undefined, options);

//alt. for setting up date
// const today = new Date();//this will be commented out!//
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric"
// };
// date.innerText(this calls out the function to the web)= new Date().toLocaleDateString(undefined, options);

//setting up time
const today2 = new Date();

time.innerText = today2.toLocaleDateString();

//setting greeting

const hour = today2.getHours();
console.log(hour);

let welcome = "";
if (hour >= 0 && hour <= 12) {
  welcome = "Good morning";
} else if (hour >= 13 && hour <= 16) {
  welcome = "Good afternoon";
} else if (hour >= 17 && hour <= 23) {
  welcome = "Good evening";
} else {
  welcome = "Hello";
}

salutation.innerText = welcome;
