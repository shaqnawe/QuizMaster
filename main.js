let apiBtn = document.querySelector("#startGame");
let qList = document.querySelector("#questionList");
let submitAns = document.querySelector("#submitAns");
let score = document.querySelector("#score");
const answerList = [];
const userAns = [];
let count = 0;

// create an event listener
apiBtn.addEventListener("click", () => {
  fetch("./quizBank.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // loop over Questions
      for (let i = 0; i < data.length; i++) {
        // create li element for every question
        let li = document.createElement("li");
        let inp = document.createElement("input");
        inp.classList.add(`user-answer${i}`);
        // set Bootstrap classname for li element
        li.classList.add("list-group-item");
        // add the question as the text of the li element
        li.innerText = data[i][`Q${i + 1}`];
        // add li element into unordered list
        qList.appendChild(li);
        qList.appendChild(inp);
        answerList.push(data[i][`A${i + 1}`]);
      }
      console.log(answerList);
    });
});
const mouseHoverAnimation = () => {
  anime({
    targets: submitAns,
    scale: {
      delay: 200,
      value: 1.2,
    },
    duration: 1000
  });
}
const mouseOutAnimation = () => {
  anime({
    targets: submitAns,
    scale: {
      delay: 200,
      value: 1,
    },
    duration: 1000,
  });
};
submitAns.addEventListener("mouseover", mouseHoverAnimation);
submitAns.addEventListener("mouseout", mouseOutAnimation);

formInfo.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < 10; i++) {
    currAns = document.querySelector(`.user-answer${i}`);
    if (currAns.value.toLowerCase() !== answerList[i].toLowerCase()) {
      currAns.previousSibling.style.background = "#B33F40";
      console.log("Oops");
    } else {
      currAns.previousSibling.style.background = "#B3E6B5";
      count += 10;
    }
  }
  score.innerHTML = count+'%';
  
});