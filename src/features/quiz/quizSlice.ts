import { createSlice, current } from "@reduxjs/toolkit";
import { questionType, Quizes, quizesType, quizType } from "../../data/quiz";

type userAnswerType = {
  questionNo: number;
  userSelecetedOptionNo: number;
  isUserChoiceRight: Boolean;
  correctOptionNo: number;
};

export type userSelectionType = {
  userAnswers: userAnswerType[];
  userSelectedQuiz: string;
  userSelectedQuizName: string;
};

type initialStateType = {
  quizes: quizesType;
  selectedQuiz: string;
  userSelection: userSelectionType;
  currentQuiz: quizType | null;
  currentQuestion: questionType | null;
  currentQuizQuestions: questionType[] | null;
};

const initialState: initialStateType = {
  quizes: Quizes,
  selectedQuiz: "",
  userSelection: {
    userAnswers: [],
    userSelectedQuiz: "",
    userSelectedQuizName: "",
  },
  currentQuiz: null,
  currentQuizQuestions: null,
  currentQuestion: null,
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
      state.currentQuiz = quiz || null;
      state.currentQuizQuestions = quiz?.questions || null;
      state.currentQuestion = quiz?.questions[0] || null;
      state.userSelection.userSelectedQuiz = payload;
      state.userSelection.userSelectedQuizName = quiz?.spacedName || "";
    },

    quitQuiz: (state) => {
      state.selectedQuiz = initialState.selectedQuiz;
      state.currentQuestion = initialState.currentQuestion;
      state.currentQuiz = initialState.currentQuiz;
      state.currentQuizQuestions = initialState.currentQuizQuestions;
      state.userSelection = initialState.userSelection;
    },

    quizAnswerHandler: (state, { payload }) => {
      state.userSelection.userAnswers?.push({
        questionNo: payload.questionNo,
        correctOptionNo: payload.correctOptionNo,
        isUserChoiceRight: payload.isUserChoiceRight,
        userSelecetedOptionNo: payload.userSelecetedOptionNo,
      });
    },

    moveToNextquestion: (state, { payload }) => {
      state.currentQuestion =
        state.currentQuizQuestions?.find(
          (ques) => ques.questionNo === payload + 1
        ) || null;
    },
  },
});

export const { startQuiz, quitQuiz, quizAnswerHandler, moveToNextquestion } =
  quizeSlice.actions;

export default quizeSlice.reducer;
