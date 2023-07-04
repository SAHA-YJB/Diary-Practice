import React, { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const authorInput = useRef();
  const contentInput = useRef();

  const inputChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = () => {
    if (state.author.length < 1) {
      return authorInput.current.focus();
    }
    if (state.content.length < 5) {
      return contentInput.current.focus();
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 완료");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Today Diary</h2>
      <div>
        <input
          name="author"
          value={state.author}
          ref={authorInput}
          placeholder="이름을 입력해주세요"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          placeholder="내용을 입력해주세요"
          ref={contentInput}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        Today Emotion:
        <select
          name="emotion"
          value={state.emotion}
          onChange={inputChangeHandler}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={submitHandler}>Diary 저장</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
