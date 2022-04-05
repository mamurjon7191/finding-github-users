// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
//   .then((a) => {
//     return a.json();
//   })
//   .then((b) => {
//     console.log(b);
//   });

// console.log("sinsxron1");

// setTimeout(() => {
//   console.log("assixron");
// }, 2000);

// Promise.resolve("promise").then((res) => console.log(res));

// console.log("sinsxron2");

// setTimeout(() => {
//   fetch("https://restcountries.com/v2/name/uzbekistan").then((a) =>
//     console.log(a)
//   );
// }, 2000);

// console.time("loop");
// setTimeout(() => {
//   console.log("assixron");
// }, 0);
// fetch("https://restcountries.com/v2/name/uzbekistan");
// console.timeEnd("loop");

// const tanga = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("true");
//     } else {
//       reject("false");
//     }
//   });
// });
// tanga.then(
//   (res) => console.log(res),
//   (ser) => console.log(ser)
// );
// const countriesContainer = document.querySelector(".countries");

// function renderHtml(data, className) {
//   let html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// }

// const data = async function () {
//   let data1 = await fetch("https://restcountries.com/v2/name/uzbekistan");
//   let [data1Oqish] = await data1.json();
//   // let chegara = data1Oqish.border[2];
//   console.log(data1Oqish);
// };
// data();

// const func = async function () {
//   try {
//     let data = await fetch("https://restcountries.com/v2/name/uzbekistan");
//     let dataJson = await data.json();
//     console.log(dataJson);
//   } catch (err) {
//     alert(err);
//   }
// };
// func();

let map = new Map([]);

let input = document.querySelector(".input");
let answerPage = document.querySelector(".answer");
let searchBox = document.querySelector(".searchBox");
let form = document.querySelector(".form");
let repo = document.querySelector(".repositories");

input.focus();

const repo1 = async function (a) {
  let data = await fetch(
    `https://api.github.com/users/${a}/repos?client_id=71203de97c7ade4dfabc&client_secret=7bee81346a8035403df7e7cec2c04269e9266057`
  );
  let dataJson = await data.json();
  let html1 = `<div class="repoTitle">
        <h1>Latest Repos</h1>
      </div>`;
  repo.insertAdjacentHTML("beforeEnd", html1);
  dataJson.forEach((element) => {
    let html = `
      <div class="latestRepos flex">
        <a class="repoName" href="${element.html_url}">${element.name}</a>
      <div class="flex" style="gap: 2rem;">
        <div class="box1" style="background-color: blueviolet;">Stars:1</div>
        <div class="box1" style="background-color: rgb(128, 114, 142);">Watchers:${element.watchers}</div>
        <div class="box1" style="background-color:rgb(90, 122, 76);">Forks:${element.forks}</div>
      </div>
      </div>`;
    repo.insertAdjacentHTML("beforeend", html);
  });
};

const func = async function (a) {
  let data = await fetch(
    `https://api.github.com/users/${a}?client_id=71203de97c7ade4dfabc&client_secret=7bee81346a8035403df7e7cec2c04269e9266057`
  );
  let dataJson = await data.json();
  map = Object.entries(dataJson);
  console.log(dataJson);
  let html = `
  <div class="answer--left flex">
    <img src="${dataJson.avatar_url}" alt="">
    <a href="${
      dataJson.html_url
    }" target="_blank" class="btn flex">View Profile</a>
  </div>
  <div class="answer--right">
  <div class="answer--right--top flex">
    <div class="repo box1" style="background-color: blueviolet;"><p>Public Repos:${
      dataJson.public_repos
    }</p></div>
    <div class="gists box1" style="background-color: green;"><p>Public Gists:${
      dataJson.public_gists
    }</p></div>
    <div class="follower box1" style="background-color: rgb(128, 114, 142);"><p>Followers:${
      dataJson.followers
    }</p></div>
    <div class="following box1 " style="background-color: rgb(90, 122, 76);"><p>Following:${
      dataJson.following
    }</p></div>
  </div>
  <div class="answer--right--bottom">
    <p class="box2">Company:${
      dataJson.company == null ? "Company has not defined" : dataJson.company
    } </p>
    <p class="box2">Website/Blog:${
      dataJson.events_html_url == undefined
        ? "Website has not defined"
        : dataJson.events_html_url
    }</p>
    <p class="box2">Location:${
      dataJson.location == undefined
        ? "Website has not defined"
        : dataJson.location
    }</p>
    <p class="box2">Member since:${dataJson.updated_at}</p>
  </div>
  </div>`;
  answerPage.insertAdjacentHTML("beforeend", html);
};

let search = function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let val = input.value;
    func(val);
    repo1(val);
    answerPage.innerHTML = "";
    repo.innerHTML = "";
  });
};

search();

// fetch(
//   "https://api.github.com/users/${user}?client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797"
// );
