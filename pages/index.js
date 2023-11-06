import { Inter } from "next/font/google";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [allFeedback, setAllFeedback] = useState([]);
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        email,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const getFeedback = () => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setAllFeedback(data.feedback));
  };
  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="messge">message</label>
          <textarea type="message" row="5" id="message" ref={messageRef} />
        </div>
        <button>전송</button>
      </form>
      <hr />
      <button onClick={getFeedback}>데이터 가져오기</button>
      <ul>
        {allFeedback.map((data) => (
          <li key={data.id}>
            {data.email} : {data.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
