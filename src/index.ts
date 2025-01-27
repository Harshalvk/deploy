import express, { Response, Request } from "express";

const app = express();
const PORT = 3000;

const todos = [
  {
    id: 1,
    task: "workout",
    completed: false,
    priority: "medium",
    dueDate: "2023-10-15",
  },
  {
    id: 2,
    task: "study dev",
    completed: false,
    priority: "high",
    dueDate: "2023-10-10",
  },
  {
    id: 3,
    task: "call at home",
    completed: true,
    priority: "low",
    dueDate: "2023-10-05",
  },
];

app.get("/success", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.get("/", (req: Request, res: Response) => {
  res.json({ todos });
});

app.listen(PORT, () => {
  console.log("⚙ Server is listening!");
});
