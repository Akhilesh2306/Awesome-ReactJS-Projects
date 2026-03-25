/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useReducer } from "react";
import { jobData as initialJobs } from "../data/jobData";

export const JobContext = createContext();

export const jobReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_JOB":
      return [...state, action.payload];

    case "DELETE_JOB":
      return state.filter((job) => job.id !== action.payload);

    default:
      return state;
  }
};

export const JobContextProvider = ({ children }) => {
  const [jobs, dispatch] = useReducer(jobReducer, initialJobs);
  return (
    <JobContext.Provider value={{ jobs, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};
