function createContactPage() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  contactContainer.appendChild(createLocationBox());
  contactContainer.appendChild(createContactInfo());

  return contactContainer;
}

function createQuestionBox(question, answer) {
  const contactQuestion = document.createElement("div");
  const questionElement = document.createElement("h3");
  const answerElement = document.createElement("p");

  contactQuestion.classList.add("contactQuestion");
  questionElement.textContent = question;
  answerElement.textContent = answer;

  contactQuestion.appendChild(questionElement);
  contactQuestion.appendChild(answerElement);

  return contactQuestion;
}

function createContactInfo() {
  const contactInfo = document.createElement("div");
  const contactTitle = document.createElement("h2");

  contactInfo.classList.add("contactInfo");
  contactTitle.textContent = "Daddy's Delicious Bakery";

  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(
    createQuestionBox(
      "Where to grab a bite?",
      `305-1192, Nishishinjuku Shinjuku Pakutawa(2-kai),Shinjuku-ku Tokyo,Japan`
    )
  );
  contactInfo.appendChild(
    createQuestionBox("Order online!", `+8181-693-1048 `)
  );

  return contactInfo;
}

function createLocationBox() {
  const locationContainer = document.createElement("div");
  const locationMap = document.createElement("iframe");

  locationContainer.classList.add("locationContainer");

  locationMap.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4005.1670545852176!2d139.6928598995238!3d35.684311174955205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188db5dd7bb275%3A0x5e6969d958b1af59!2sShiomi%20Bakery!5e0!3m2!1str!2str!4v1657985050010!5m2!1str!2str";
  locationMap.referrerPolicy = "no-referrer-when-downgrade";

  locationContainer.appendChild(locationMap);

  return locationContainer;
}

function loadContact() {
  const container = document.querySelector("#mainContent");
  container.innerHTML = "";
  container.appendChild(createContactPage());
  return container;
}

export default loadContact;
