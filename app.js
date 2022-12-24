/* Set up reading page selectors */
const label = document.querySelector("#label");
const wordP = document.querySelector("#word");
const wpmInput = document.querySelector("#wpm");
const startReadDiv = document.querySelector("#start-read-div");
const menuButton = document.querySelector("#menu-button");

const insertText = document.querySelector("#textarea-insert");
const textAreaParent = document.querySelector("#insert-text-parent");
const readButton = document.querySelector("#read-button");
const questionButton = document.querySelector("#question-button");
/*Initial Menu Action Selectors*/
const readButtonMenu = document.querySelector("#read-button-menu");
const initialMenuDiv = document.querySelector("#initial-menu");
const reviewButton = document.querySelector("#review-button-menu");

/* Never changing selectors */
const header = document.querySelector("#header");
const mode = document.querySelector("#color-mode-button");
const container = document.querySelector("#extension-container");

/* Handle review questions selectors */
const questionPlaceholder = document.querySelector("#question-placeholder");
const questionDiv = document.querySelector("#question-div");
const answerInput = document.querySelector("#answer-input");
const questionText = document.querySelector("#question-text");
const questionPrev = document.querySelector("#question-previous");
const questionNext = document.querySelector("#question-next");
const submit = document.querySelector("#submit");
const rereadButton = document.querySelector("#reread");

/* Review menu selectors */
const reviewMenu = document.querySelector("#review-menu");
const reviewPhrase = document.querySelector('#review-phrase');
const menuButtonReview = document.querySelector('#menu-button-review');

let reviewArray = [];

class StartReading {
  static beginReading(rate, text) {
    let sum = 0;
    const intervalRate = 60000 / rate;
    wordP.style.display = "flex";
    questionButton.style.display = "none";
    insertText.style.display = "none";
    textAreaParent.style.height = "300px";
    textAreaParent.style.width = "300px";
    setInterval(() => {
      if (sum !== text.length) {
        wordP.textContent = text[sum];
        sum += 1;
      } else {
        clearInterval();
      }
    }, intervalRate);
    questionButton.style.display = "flex";
    return;
  }

  static formArr() {
    return insertText.value.split(" ");
  }

  static readBtn() {
    readButton.addEventListener("click", function () {
      console.log("hi");
      return StartReading.beginReading(wpmInput.value, StartReading.formArr());
    });
  }

  static menuTransition() {
    readButtonMenu.addEventListener("click", function () {
      console.log("achieve");
      initialMenuDiv.style.display = "none";
      textAreaParent.style.display = "flex";
      textAreaParent.style.height = "auto";
      textAreaParent.style.width = "auto";
      insertText.style.display = "flex";
      startReadDiv.style.display = "flex";
      wordP.style.display = "none";
      insertText.value = "";
      return;
    });
    menuButton.addEventListener("click", function () {
      initialMenuDiv.style.display = "flex";
      textAreaParent.style.display = "none";
      startReadDiv.style.display = "none";
    });
    return;
  }
}

wpmInput.addEventListener("click", function () {
  wpmInput.value = "";
});

class ChangeColor {
  static DarkModeHover() {
    mode.classList.remove("color-mode-black");

    mode.classList.add("color-mode-white");
    mode.textContent = "Dark";
    return;
  }
  static LightModeHover() {
    mode.classList.remove("color-mode-white");

    mode.classList.add("color-mode-black");
    mode.textContent = "Light";
    return;
  }
  static AlterToLight() {
    ChangeColor.DarkModeHover();
    menuButtonReview.classList.remove('color-mode-black');
    menuButton.classList.remove("color-mode-black");
    submit.classList.remove("color-mode-black");
    questionPlaceholder.classList.remove("placeholder-black");
    questionText.classList.remove("word-white");
    answerInput.classList.remove("textarea-insert-black");
    rereadButton.classList.remove("color-mode-black");
    questionPrev.classList.remove("color-mode-black");
    questionNext.classList.remove("color-mode-black");
    questionButton.classList.remove("color-mode-black");
    reviewButton.classList.remove("color-mode-black");
    readButtonMenu.classList.remove("color-mode-black");
    wordP.classList.remove("word-white");
    wpmInput.classList.remove("color-mode-black");
    insertText.classList.remove("textarea-insert-black");
    container.classList.remove("extension-black");
    textAreaParent.classList.remove("textarea-black");
    readButton.classList.remove("color-mode-black");
    label.classList.remove("label-white");

    menuButtonReview.classList.add('color-mode-white');
    menuButton.classList.add("color-mode-white");
    submit.classList.add("color-mode-white");
    questionPlaceholder.classList.add("placeholder-white");
    questionText.classList.add("word-black");
    answerInput.classList.add("textarea-insert-white");
    questionNext.classList.add("color-mode-white");
    questionPrev.classList.add("color-mode-white");
    rereadButton.classList.add("color-mode-white");
    questionButton.classList.add("color-mode-white");
    readButtonMenu.classList.add("color-mode-white");
    reviewButton.classList.add("color-mode-white");
    wordP.classList.add("word-black");
    wpmInput.classList.add("color-mode-white");
    label.classList.add("label-black");
    insertText.classList.add("textarea-insert-white");
    container.classList.add("extension-white");
    textAreaParent.classList.add("textarea-white");
    header.style.color = "black";
    readButton.classList.add("color-mode-white");
    return;
  }
  static AlterToDark() {
    ChangeColor.LightModeHover();
    menuButton.classList.remove('color-mode-white');
    menuButton.classList.remove("color-mode-white");
    submit.classList.remove("color-mode-white");
    questionPlaceholder.classList.remove("placeholder-white");
    questionText.classList.remove("word-black");
    answerInput.classList.remove("textarea-insert-white");
    rereadButton.classList.remove("color-mode-white");
    questionPrev.classList.remove("color-mode-white");
    questionNext.classList.remove("color-mode-white");
    questionButton.classList.remove("color-mode-white");
    readButtonMenu.classList.remove("color-mode-white");
    reviewButton.classList.remove("color-mode-white");
    wordP.classList.remove("word-black");
    wpmInput.classList.remove("color-mode-white");
    label.classList.remove("label-black");
    insertText.classList.remove("textarea-insert-white");
    container.classList.remove("extension-white");
    textAreaParent.classList.remove("textarea-white");
    readButton.classList.remove("color-mode-white");

    menuButtonReview.classList.add('color-mode-black');
    menuButton.classList.add("color-mode-black");
    submit.classList.add("color-mode-black");
    questionPlaceholder.classList.add("placeholder-black");
    questionText.classList.add("word-white");
    answerInput.classList.add("textarea-insert-black");
    rereadButton.classList.add("color-mode-black");
    questionPrev.classList.add("color-mode-black");
    questionNext.classList.add("color-mode-black");
    questionButton.classList.add("color-mode-black");
    reviewButton.classList.add("color-mode-black");
    readButtonMenu.classList.add("color-mode-black");
    wordP.classList.add("word-white");
    wpmInput.classList.add("color-mode-black");
    label.classList.add("label-white");
    insertText.classList.add("textarea-insert-black");
    container.classList.add("extension-black");
    textAreaParent.classList.add("textarea-black");
    header.style.color = "white";
    readButton.classList.add("color-mode-black");
    return;
  }
  static SwitchColor() {
    console.log(header.style.color);
    if (mode.textContent === "Light") {
      console.log("light");
      return ChangeColor.AlterToLight();
    } else {
      console.log("dark");
      return ChangeColor.AlterToDark();
    }
    return;
  }
}

class Questions {
  constructor(question, answer) {
    (this.question = question), (this.answer = answer);
  }
  formQuestion(y) {
    return `${this.question} ${y}? (Do not restate question in response or add (.) periods at end of answer)`;
  }
}

const question1 = new Questions("What was this topic in 3 words of less?");
const question2 = new Questions("What was the least important aspect of ");
const question3 = new Questions("What was the most important aspect of ");
const question4 = new Questions("Summarize in 50 words or less ");

const questionObjectArray = [question1, question2, question3, question4];

class QuestionSummary {
  static formSummary() {
    const summaryOne = `${questionObjectArray[0].answer} - ${questionObjectArray[0].answer}, in summary is ${questionObjectArray[3].answer}. What I found to be
    the most important aspect of ${questionObjectArray[0].answer} was ${questionObjectArray[2].answer}. The least important part of
    ${questionObjectArray[0].answer} was ${questionObjectArray[1].answer}`;
    const summaryTwo = `${questionObjectArray[0].answer} - I found that ${questionObjectArray[0].answer}'s most important part was ${questionObjectArray[2].answer} and its least
    was ${questionObjectArray[1].answer}. In summary, ${questionObjectArray[0].answer} is about ${questionObjectArray[3].answer}.`;
    const summaryThree = `${questionObjectArray[0].answer} - The reading about ${questionObjectArray[0].answer}`;

    const array = [summaryOne, summaryTwo, summaryThree];
    return array[Math.floor(Math.random() * array.length)];
  }
  static beginQuestions() {
    questionPrev.style.display = "none";

    questionButton.addEventListener("click", function () {
      startReadDiv.style.display = "none";
      textAreaParent.style.display = "none";
      rereadButton.style.display = "flex";
      questionButton.style.display = "none";
      questionDiv.style.display = "flex";
      questionPrev.style.display = "none";
      submit.style.display = "none";
      questionNext.style.display = "flex";
      questionText.textContent = questionObjectArray[0].question;
      return;
    });
    return;
  }
  static questionButtons() {
    let questionTotal = 0;
    /* saves localstorage of text from reading and will reload when reread
    is clicked */
    rereadButton.addEventListener("click", function () {
      questionDiv.style.display = "none";
      textAreaParent.style.display = "flex";
      startReadDiv.style.display = "flex";
      return;
    });
    questionNext.addEventListener("click", function () {
      rereadButton.style.display = "none";
      questionPrev.style.display = "flex";
      console.log(questionTotal);

      questionObjectArray[questionTotal].answer = answerInput.value;
      console.log(questionObjectArray[questionTotal].answer);
      console.log(questionObjectArray);
      questionTotal += 1;
      if (questionTotal === 3) {
        questionObjectArray[questionTotal].answer = answerInput.value;
        questionNext.style.display = "none";
        submit.style.display = "flex";
      }
      answerInput.value = "";

      questionText.textContent = questionObjectArray[
        questionTotal
      ].formQuestion(questionObjectArray[0].answer);
      return;
    });
    questionPrev.addEventListener("click", function () {
      console.log(questionObjectArray[questionTotal].answer);
      questionTotal -= 1;
      answerInput.value = questionObjectArray[questionTotal].answer;
      if (questionTotal !== 0) {
        questionText.textContent = questionObjectArray[
          questionTotal
        ].formQuestion(questionObjectArray[0].answer);
      } else {
        questionText.textContent = questionObjectArray[questionTotal].question;
      }
      console.log(questionObjectArray[questionTotal]);
      if (questionTotal === 0) {
        questionPrev.style.display = "none";
        rereadButton.style.display = "flex";
        return;
      } else if (questionTotal === 2) {
        submit.style.display = "none";
        questionNext.style.display = "flex";
        return;
      }
      return;
    });
    submit.addEventListener("click", function () {
      console.log(QuestionSummary.formSummary());
      questionObjectArray.push(QuestionSummary.formSummary());
      if (JSON.parse(localStorage.getItem("review-array")) !== null) {
        console.log(reviewArray);
        reviewArray.push();
        reviewArray.push(
          questionObjectArray,
          ...JSON.parse(localStorage.getItem("review-array"))
        );
        console.log(reviewArray);
        localStorage.setItem("review-array", JSON.stringify(reviewArray));
        reviewArray = [];
        console.log(reviewArray);
      } else if (JSON.parse(localStorage.getItem("review-array") === null)) {
        console.log("set");
        reviewArray.push(questionObjectArray);
        localStorage.setItem("review-array", JSON.stringify(reviewArray));
        reviewArray = [];
      }
      questionObjectArray.pop();
      initialMenuDiv.style.display = "flex";
      questionDiv.style.display = "none";
      questionButton.style.display = "none";
      answerInput.value = "";
      questionText.textContent = "";
      questionTotal = 0;
      return;
    });
    return;
  }
}
class ReviewReadings {
  static reviewMenuButton() {
    reviewButton.addEventListener("click", function () {
      menuButtonReview.style.display = 'block';
      reviewMenu.style.display = 'flex';
      console.log(JSON.parse(localStorage.getItem("review-array")));
      const loopedArr = JSON.parse(localStorage.getItem("review-array"));
      console.log(loopedArr);
      initialMenuDiv.style.display = "none";
      for (let i of JSON.parse(localStorage.getItem("review-array"))) {
        console.log(i[4]);
        const div = document.createElement('div');
        const p = document.createElement('p');
        reviewMenu.append(div)
        div.append(p)
        p.textContent = i[4]
        p.classList.add('word-white');
        div.classList.add('div-black');
        mode.addEventListener('click', function(){
          if(p.className === 'word-white'){
            p.classList.remove('word-white');
            p.classList.add('word-black');
            div.classList.remove('div-white');
            div.classList.add('div-white');
          }else{
            p.classList.remove('word-black');
            p.classList.add('word-white');
            div.classList.add('div-black');
            div.classList.remove('div-white');
          }
        })
      }

      return;
    });
  }
  static backToMenu(){
    menuButtonReview.addEventListener('click',function(){
      initialMenuDiv.style.display = 'flex';
      reviewMenu.style.display = 'none';
    })
  }
}

mode.addEventListener("click", ChangeColor.SwitchColor);
ReviewReadings.backToMenu();
QuestionSummary.beginQuestions();
QuestionSummary.questionButtons();
StartReading.menuTransition();
StartReading.readBtn();
ReviewReadings.reviewMenuButton();
