export type optionType = {
  optionNo: number;
  option: string;
  isRight: boolean;
};

export type questionType = {
  questionNo: number;
  question: string;
  options: optionType[];
};

export type quizType = {
  name: string;
  path: string;
  spacedName: string;
  shortName: string;
  questions: questionType[];
};

export type quizesType = {
  quiz: quizType[];
};

export const Quizes: quizesType = {
  quiz: [
    {
      name: "ally-basic",
      path: "/ally-basic",
      spacedName: "Ally Basic",
      shortName: "basic",
      questions: [
        {
          questionNo: 1,
          question: "What is the full form of WCAG?",
          options: [
            {
              isRight: false,
              option: "Web consortium for Accessibility Guidelines",
              optionNo: 1,
            },
            {
              isRight: false,
              option: "World computer Accessibility Guidelines",
              optionNo: 2,
            },
            {
              isRight: true,
              option: "Web Content Accessibility Guidelines",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "Web and computer Accessibility Guidelines",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 2,
          question:
            "Which of the following is not a type of cognitive disability?",
          options: [
            {
              isRight: false,
              option: "Dyslexia",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "Blind",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "Autism",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "memory loss",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 3,
          question: "What is NVDA?",
          options: [
            {
              isRight: false,
              option: "Speech recognition software ",
              optionNo: 1,
            },
            {
              isRight: false,
              option: "Accessibility organization",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "An initiative by W3C.",
              optionNo: 3,
            },
            {
              isRight: true,
              option: "A screen reader",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 4,
          question:
            "How can we make an image accessible to someone who can’t see it?",
          options: [
            {
              isRight: false,
              option: "Don't use images in the website",
              optionNo: 1,
            },
            {
              isRight: false,
              option: "Images by default accessible by screen raeders",
              optionNo: 2,
            },
            {
              isRight: true,
              option:
                "Add proper alternative text that descrives image in 'alt' attribute",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "Remove the alt attribute from image tag.",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 5,
          question: "Who benefits from the video captions provided",
          options: [
            {
              isRight: false,
              option: "A deaf person",
              optionNo: 1,
            },
            {
              isRight: false,
              option: "A person in a noisy environment",
              optionNo: 2,
            },
            {
              isRight: false,
              option:
                " People with cognitive disabilities who benefit from reading text on screen while listening to it",
              optionNo: 3,
            },
            {
              isRight: true,
              option: "All the above",
              optionNo: 4,
            },
          ],
        },
      ],
    },
    {
      name: "ally-pro",
      path: "/ally-pro",
      shortName: "pro",
      spacedName: "Ally Pro",
      questions: [
        {
          questionNo: 1,
          question: "Which of the following is not a screen reader?",
          options: [
            {
              isRight: false,
              option: "NVDA",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "SIRI",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "JAWS",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "Voice Over",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 2,
          question:
            "Which of the following not fall under POUR accessibility principles?",
          options: [
            {
              isRight: true,
              option: "Undesirable",
              optionNo: 1,
            },
            {
              isRight: false,
              option: "Robust",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "Perceivable",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "Operable",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 3,
          question:
            "A person have both vision disability and hearing disability. Which of the assitive technology will be used by him?",
          options: [
            {
              isRight: false,
              option: "Alternative Keyboards and Mice. ",
              optionNo: 1,
            },
            {
              isRight: false,
              option: "Speech recognition software",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "Screen readers",
              optionNo: 3,
            },
            {
              isRight: true,
              option: "Braille Support",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 4,
          question:
            "A normal text should have which of the following color contrast ratio to meet the WCAG AA guidelines?",
          options: [
            {
              isRight: false,
              option: "3:1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "4.5:1",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "7:1",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "5:1",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 5,
          question: "Why you need to consider making your website accessible?",
          options: [
            {
              isRight: false,
              option: "To avoid legal issues.",
              optionNo: 1,
            },
            {
              isRight: false,
              option:
                "Making accessible websites, brings more no of users to website",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "Accessibility makes website SEO friendly",
              optionNo: 3,
            },
            {
              isRight: true,
              option: "All the above",
              optionNo: 4,
            },
          ],
        },
      ],
    },
  ],
};
