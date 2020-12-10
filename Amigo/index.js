Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter your first and last name:",
            placeHolder: "Jon Snow",
            isRequired: true,
            autoComplete: "name"
        }, {
            name: "birthdate",
            type: "text",
            inputType: "date",
            title: "Your birthdate:",
            isRequired: true,
            autoComplete: "bdate"
        }, {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Your e-mail:",
            placeHolder: "jon.snow@nightwatch.org",
            isRequired: true,
            autoComplete: "email",
            validators: [
                {
                    type: "email"
                }
            ]
        }, {
            name: "gender",
            type: "text",
            inputType: "gender",
            title: "Your gender",
            isRequired: true,
            autoComplete: "gender"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "List 3 qualities that best describes yourself",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "List 3 admirable qualities that your parents have",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "List 3 admirable qualities that your grandparents have",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "List 3 admirable qualities that your closest friend has",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "List 3 qualities that makes someone unlikable",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "Where do you see yourself 10 years from now? ",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "Describe your ideal vacation destination",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "List 3 of your favorite hobbies",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "What inspires you to get out of bed each morning?",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "What famous celebrity do you admire?",
            isRequired: true,
            autoComplete: "question"
        }, {
            name: "question",
            type: "text",
            inputType: "question",
            title: "What makes you genuinely happy?",
            isRequired: true,
            autoComplete: "question"
        },
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});

//three dots
const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

//individual testimonials
const testimonial1 = document.querySelector('.testimonial1');
const testimonial2 = document.querySelector('.testimonial2');
const testimonial3 = document.querySelector('.testimonial3')

//testimonial parent container
const tests = document.querySelector('.tests');

let nextNextInt = window.setInterval(function() {
  //check for and remove second class
  if (tests.classList.contains('second')) {
    tests.classList.remove('second');

    //add the class which shows the third testimonial
    tests.classList.add('third');
  }

}, 4000)


let nextint = window.setInterval(function() {
  //check for and remove first class
  if (tests.classList.contains('first')) {
    tests.classList.remove('first');

    //add the class that shows the second testimonial
    tests.classList.add('second');
  }

}, 8000)

let prevint = window.setInterval(function() {
  //check for and remove third class
  if (tests.classList.contains('third')) {
    tests.classList.remove('third');

    //add the class that has the first testimonial
    tests.classList.add('first');
  }
}, 16000)
//Create a reusable function for clicking on the dots.
function dotClick(oldClassOne, oldClassTwo, newClass) {
  if (tests.classList.contains(oldClassOne)) {
    tests.classList.remove(oldClassOne);
  }

  if (tests.classList.contains(oldClassTwo)) {
    tests.classList.remove(oldClassTwo)
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add(newClass);
}
nextNext.addEventListener("click", function() {

  dotClick('second', 'first', 'third');

})



next.addEventListener("click", function() {

  dotClick('first', 'third', 'second');

})

prev.addEventListener("click", function() {

  dotClick('second', 'third', 'first');

})
