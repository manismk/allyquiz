import { User } from "firebase/auth";
import { userSelectionType } from "../features/quiz/quizSlice";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const addScore = async (
  score: number,
  userSelection: userSelectionType,
  user: User
) => {
  try {
    const scoreRef = await addDoc(collection(db, "scores"), {
      score: score,
      uid: user?.uid,
      timeTaken: Date.now(),
      quiz: {
        type: userSelection.userSelectedQuiz,
        name: userSelection.userSelectedQuizName,
      },
    });
    const userRef = doc(db, "users", user?.uid);
    await setDoc(
      userRef,
      {
        user: user,
        tests: arrayUnion({
          score: score,
          sid: scoreRef.id,
          timeTaken: Date.now(),
          quiz: {
            type: userSelection.userSelectedQuiz,
            name: userSelection.userSelectedQuizName,
          },
        }),
      },
      { merge: true }
    );
    toast({
      description: "Score successfully updated to dashboard",
      status: "success",
      position: "bottom-left",
    });
  } catch (err) {
    toast({
      description: "Something went wrong in updating score in dashboard",
      status: "error",
      position: "bottom-left",
    });
  }
};
