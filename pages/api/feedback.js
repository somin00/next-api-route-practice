import fs from "fs";
import path from "path";

export function getFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function getFileData(filePath) {
  const data = fs.readFileSync(filePath);
  const parseData = JSON.parse(data);
  return parseData;
}

export default function postHandler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      message,
    };

    const filePath = getFilePath();
    const data = getFileData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success", feedback: newFeedback });
  } else {
    const filePath = getFilePath();
    const data = getFileData(filePath);
    res.status(200).json({
      message: "success",
      feedback: data,
    });
  }
}
