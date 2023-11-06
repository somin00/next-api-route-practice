import { Inter } from "next/font/google";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const emailRef = useRef();
  const messageRef = useRef();

  return (
    <div>
      <h1>Home Page</h1>
      <form>
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
    </div>
  );
}
