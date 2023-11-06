import { getFileData, getFilePath } from "./api/feedback"; //클라이언트 사이드 번들에 포함되지 않음
import { useState } from "react";
export default function Feedback(props) {
  const { feedback } = props;

  const [detail, setDetail] = useState({});

  function showFeedbackDetail(id) {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data.feedback));
  }
  return (
    <>
      {detail && <p>{detail.email}</p>}
      <ul>
        {feedback.map((data) => (
          <li key={data.id}>
            {data.message} <button onClick={showFeedbackDetail.bind(null, data.id)}>상세보기</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = getFilePath();
  const feedback = getFileData(filePath);
  return {
    props: {
      feedback,
    },
  };
}
