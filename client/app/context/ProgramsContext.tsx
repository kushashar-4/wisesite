"use client";
import { createContext, useContext } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const GlobalContext = createContext(null as string | null);

export const GlobalContextProvider = ({ children }: { children: any }) => {
  const programsRef = collection(db, "events");
  let programsArr;
  getDocs(programsRef).then((snapshot) => {
    programsArr = snapshot.docs;
  });

  return (
    <GlobalContext.Provider value={programsArr || null}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = useContext(GlobalContext);
