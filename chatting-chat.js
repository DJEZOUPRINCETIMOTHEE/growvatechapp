const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Hello sir, ",
  "How can i help you ?",
  "I’ll be there soon.",
  "I am on the way",
  "Oky..!! ",
  "Thank you.. sir!!",
  "Yes, I’ll arrive in 10 min",
];

const BOT_IMG = "../../assets/images/profile/p5.png";
const PERSON_IMG = "../../assets/images/profile/p2.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "Templeton Peck";

msgerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
            <div class="msg-text title-color">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// const msgerForm = get(".message-inputarea");
// const msgerInput = get(".message-input");
// const msgerChat = get(".msger-chat");

// const BOT_MSGS = ["Hello sir, ", "How can i help you ?", "I’ll be there soon.", "I am on the way", "Oky..!! ", "Thank you.. sir!!", "Yes, I’ll arrive in 10 min"];

// // Icons made by Freepik from www.flaticon.com
// const BOT_IMG = "../../../assets/images/icons/p5.png";
// const PERSON_IMG = "../../../assets/images/icons/p2.png";
// const BOT_NAME = "BOT";
// const PERSON_NAME = "Templeton Peck";

// msgerForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const msgText = msgerInput.value;
//   if (!msgText) return;

//   appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
//   msgerInput.value = "";

//   botResponse();
// });

// function appendMessage(name, img, side, text) {
//   //   Simple solution for small apps
//   const msgHTML = `
//     <div class="msg ${side}-msg">
//       <div class="msg-img" style="background-image: url(${img})"></div>

//       <div class="msg-bubble">
//             <div class="msg-text title-color">${text}</div>
//       </div>
//     </div>
//   `;

//   msgerChat.insertAdjacentHTML("beforeend", msgHTML);
//   msgerChat.scrollTop += 500;
// }

// function botResponse() {
//   const r = random(0, BOT_MSGS.length - 1);
//   const msgText = BOT_MSGS[r];
//   const delay = msgText.split(" ").length * 100;

//   setTimeout(() => {
//     appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
//   }, delay);
// }

// // Utils
// function get(selector, root = document) {
//   return root.querySelector(selector);
// }

// function formatDate(date) {
//   const h = "0" + date.getHours();
//   const m = "0" + date.getMinutes();

//   return `${h.slice(-2)}:${m.slice(-2)}`;
// }

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
