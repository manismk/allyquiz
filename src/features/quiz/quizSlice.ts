import { createSlice } from "@reduxjs/toolkit";
import { questionType, Quizes, quizesType, quizType } from "../../data/quiz";

type initialStateType = {
  quizes: quizesType;
  selectedQuiz: string;
  userSelection: {};
  currentQuiz: quizType | undefined;
  currentQuestion: questionType | undefined;
  currentQuizQuestions: questionType[] | undefined;
};

const initialState: initialStateType = {
  quizes: Quizes,
  selectedQuiz: "",
  userSelection: {},
  currentQuiz: undefined,
  currentQuizQuestions: undefined,
  currentQuestion: undefined,
};

export const quizeSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state, { payload }) => {
      const quiz = state.quizes.quiz.find(
        (curQuiz) => curQuiz.name === payload
      );
      state.selectedQuiz = payload;
      state.currentQuiz = quiz;
      state.currentQuizQuestions = quiz?.questions;
      state.currentQuestion = quiz?.questions[0];
    },

    quitQuiz: (state) => {
      state.selectedQuiz = initialState.selectedQuiz;
      state.currentQuestion = initialState.currentQuestion;
      state.currentQuiz = initialState.currentQuiz;
      state.currentQuizQuestions = initialState.currentQuizQuestions;
      state.userSelection = initialState.userSelection;
    },

    quizAnswerHandler: (state, { payload }) => {
      state.currentQuestion = state.currentQuizQuestions?.find(
        (ques) => ques.questionNo === payload
      );
    },
  },
});

export const { startQuiz, quitQuiz, quizAnswerHandler } = quizeSlice.actions;

export default quizeSlice.reducer;
