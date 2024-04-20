"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.getTasks);

  const deleteTask = useMutation(api.tasks.deleteTask);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }) => (
        <>
          {" "}
          <div key={_id}>{text}</div>
          <button
            onClick={async () => {
              await deleteTask({ id: _id });
            }}
          >
            Delete task
          </button>
        </>
      ))}
    </main>
  );
}
