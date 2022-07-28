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
          question: "This is question 1",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 2,
          question: "This is question 2",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 3,
          question: "This is question 3",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 4,
          question: "This is question 4",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 5,
          question: "This is question 5",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
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
          question: "This is question 1",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 2,
          question: "This is question 2",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 3,
          question: "This is question 3",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 4,
          question: "This is question 4",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
        {
          questionNo: 5,
          question: "This is question 5",
          options: [
            {
              isRight: false,
              option: "option 1",
              optionNo: 1,
            },
            {
              isRight: true,
              option: "option 2",
              optionNo: 2,
            },
            {
              isRight: false,
              option: "option 3",
              optionNo: 3,
            },
            {
              isRight: false,
              option: "option 4",
              optionNo: 4,
            },
          ],
        },
      ],
    },
  ],
};
