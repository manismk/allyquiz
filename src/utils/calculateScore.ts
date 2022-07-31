import { userSelectionType } from "../features/quiz/quizSlice";

export const calculateScores = (userSelection: userSelectionType) => {
  let rightCount = 0;
  userSelection.userAnswers.map((usrSel) =>
    usrSel.isUserChoiceRight ? rightCount++ : ""
  );
  const score = (rightCount / 5) * 100;
  return score;
};
