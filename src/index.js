const displayQuote = (response) => {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
};

const generateQuote = (event) => {
  event.preventDefault();

  let userInput = document.getElementById("user-input");
  let apiKey = "7b34357f3et00d865954fab83029o0ae";
  let context =
    "You are an expert in motivational speaking that loves to write short inspirational quotes. Your mission is to generate no more than 4-lines of inspirational quote. Sign every quote you generate with <strong>'SheCodes AI'</strong> at the end of the quote. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate an inspirational quote about ${userInput}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.getElementById("quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="dot-pulse"></div>`;
  axios.get(apiURL).then(displayQuote);
};

let quoteFormElement = document.getElementById("quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
