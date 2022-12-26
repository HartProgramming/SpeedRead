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
const reviewPhrase = document.querySelector("#review-phrase");
const menuButtonReview = document.querySelector("#menu-button-review");

let reviewArray = [];

class StartReading {
  static beginReading(rate, text) {
    let sum = 0;
    let intervalRate = 60000 / rate;
    wordP.style.display = "flex";
    questionButton.style.display = "none";
    readButton.style.display = "none";
    insertText.style.display = "none";
    textAreaParent.style.height = "300px";
    textAreaParent.style.width = "300px";
    setInterval(() => {
      if (sum !== text.length) {
        wordP.textContent = text[sum];
        sum += 1;
      } else {
        intervalRate = 0;
        sum = 0;
        text = "";
        rate = 0;
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
      readButton.style.display = "flex";
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
    menuButtonReview.classList.remove("color-mode-black");
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

    menuButtonReview.classList.add("color-mode-white");
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
    menuButton.classList.remove("color-mode-white");
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

    menuButtonReview.classList.add("color-mode-black");
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
  static CheckReviewExistence() {
    if (JSON.parse(localStorage.getItem("review-array")).length === 0) {
      reviewButton.style.display = "none";
    } else {
      reviewButton.style.display = "flex";
    }
  }
  static formSummary(one, two, three, four) {
    const summaryOne = `${one.answer} - ${one.answer}, in summary is ${four.answer}. What I found to be
        the most important aspect of ${one.answer} is ${three.answer}. The least important part of
        ${one.answer} is ${two.answer}`;
    console.log(summaryOne);
    const summaryTwo = `${one.answer} - I find that ${one.answer}'s most important part is ${three.answer} and its least
        is ${two.answer}. In summary, ${one.answer} is about ${four.answer}.`;
    const summaryThree = `${one.answer} - The reading about ${one.answer} covers a variety of subjects that make up the topic.
        Two of which include ${two.answer} and ${three.answer}. My biggest takeaway was ${three.answer}. In conclusion,
        ${one.answer} is about ${four.answer}.`;
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
      questionObjectArray[questionTotal].answer = answerInput.value;

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
      console.log("hi");
      if (JSON.parse(localStorage.getItem("review-array")) !== null) {
        console.log(reviewArray);
        reviewArray.push(questionObjectArray);
        reviewArray.push(...JSON.parse(localStorage.getItem("review-array")));
        console.log(reviewArray);
        localStorage.setItem("review-array", JSON.stringify(reviewArray));
        reviewArray = [];
        console.log(reviewArray);
      } else if (JSON.parse(localStorage.getItem("review-array") === null)) {
        console.log("set");
        reviewArray.push(questionObjectArray);

        localStorage.setItem("review-array", JSON.stringify(reviewArray));
        reviewArray = [];
        console.log(reviewArray);
      }
      console.log(questionObjectArray);
      initialMenuDiv.style.display = "flex";
      questionDiv.style.display = "none";
      questionButton.style.display = "none";
      answerInput.value = "";
      questionText.textContent = "";
      questionTotal = 0;
      QuestionSummary.CheckReviewExistence();
      return;
    });
    return;
  }
}
class ReviewReadings {
  static reviewMenuButton() {
    reviewButton.addEventListener("click", function () {
      let deleteArray = [];
      if (JSON.parse(localStorage.getItem("review-array")) !== null) {
        deleteArray.push(JSON.parse(localStorage.getItem("review-array")));
        menuButtonReview.style.display = "block";
        reviewMenu.style.display = "flex";
        initialMenuDiv.style.display = "none";
        for (let i of JSON.parse(localStorage.getItem("review-array"))) {
          console.log(i[4]);
          i.push(QuestionSummary.formSummary(i[0], i[1], i[2], i[3]));
          console.log(i);
          const div = document.createElement("div");
          const p = document.createElement("p");
          const button = document.createElement("button");
          const deleteButton = document.createElement("button");
          const buttonContainer = document.createElement("div");

          buttonContainer.classList.add("review-item-button-container");
          deleteButton.classList.add("color-mode-black");
          deleteButton.classList.add("minimize-button");
          deleteButton.style.display = "flex";
          deleteButton.textContent = "Delete";
          button.classList.add("color-mode-black");
          button.classList.add("minimize-button");
          button.textContent = "Minimize";
          reviewMenu.append(div);
          div.append(p);
          div.append(buttonContainer);
          buttonContainer.append(button);
          buttonContainer.append(deleteButton);
          p.textContent = i[0].answer;
          p.classList.add("p-header");
          p.classList.add("word-white");
          div.classList.add("div-black");
          deleteButton.addEventListener("click", function (e) {
            console.log(this.parentNode.parentNode);
            this.parentNode.parentNode.style.display = "none";
            console.log(this.parentNode.parentNode.childNodes[0].innerText);
            const indexFound = (x) =>
              x[0].answer ===
              this.parentNode.parentNode.childNodes[0].innerText;
            deleteArray.splice(deleteArray.findIndex(indexFound), 1);
            if (deleteArray.length === 0) {
              console.log("zero");
              reviewButton.style.display = "none";
              localStorage.setItem("review-array", JSON.stringify([]));
            } else {
              localStorage.setItem("review-array", JSON.stringify(deleteArray));
            }
          });
          p.addEventListener("click", function () {
            p.textContent = i[4];
            button.style.display = "flex";
            p.classList.remove("p-header");
          });
          button.addEventListener("click", function () {
            p.textContent = i[0].answer;
            button.style.display = "none";
            p.classList.add("p-header");
          });
          mode.addEventListener("click", function () {
            if (div.classList.contains("div-black")) {
              p.style.color = "black";
              div.classList.remove("div-black");
              div.classList.add("div-white");
              return;
            } else {
              p.style.color = "white";
              div.classList.add("div-black");
              div.classList.remove("div-white");
              return;
            }
          });
        }
        deleteArray = [];
        return;
      }
    });
  }
  static backToMenu() {
    menuButtonReview.addEventListener("click", function () {
      while (reviewMenu.lastChild !== menuButtonReview) {
        reviewMenu.removeChild(reviewMenu.lastChild);
      }
      reviewMenu.style.display = "none";

      initialMenuDiv.style.display = "flex";
    });
  }
}

mode.addEventListener("click", ChangeColor.SwitchColor);
ReviewReadings.backToMenu();
QuestionSummary.beginQuestions();
QuestionSummary.questionButtons();
QuestionSummary.CheckReviewExistence();
StartReading.menuTransition();
StartReading.readBtn();
ReviewReadings.reviewMenuButton();
