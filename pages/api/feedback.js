import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      message,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const prevData = fs.readFileSync(filePath);
    const data = JSON.parse(prevData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success", feedback: newFeedback });
  } else {
    res.status(200).json({
      message: "success",
    });
  }
}
