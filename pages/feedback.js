import { getFileData, getFilePath } from "./api/feedback"; //클라이언트 사이드 번들에 포함되지 않음

export default function Feedback(props) {
  const { feedback } = props;
  return (
    <ul>
      {feedback.map((data) => (
        <li key={data.id}>
          {data.email} : {data.message}
        </li>
      ))}
    </ul>
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
