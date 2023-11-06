import { getFileData, getFilePath } from "./feedback";

// 들어오는 모든 요청에 대해 json데이터 반환
export default function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = getFilePath();
  const fileData = getFileData(filePath);

  const selectedFeedback = fileData.find((data) => data.id === feedbackId);
  return res.status(200).json({
    message: "success",
    feedback: selectedFeedback,
  });
}
