import { useContext } from "react";
import { JobContext } from "../context/JobContext.jsx";
import KanbanColumn from "../components/KanbanColumn.jsx";

const STATUSES = ["Applied", "Screening", "Interview", "Offer", "Rejected"];

export default function JobBoard() {
  const { jobs } = useContext(JobContext);

  const jobsByStatus = STATUSES.reduce((acc, status) => {
    acc[status] = jobs.filter((job) => job.status === status);
    return acc;
  }, {});

  return (
    <div className="job-board">
      {STATUSES.map((status) => (
        <KanbanColumn
          key={status}
          status={status}
          jobs={jobsByStatus[status]}
        />
      ))}
    </div>
  );
}
