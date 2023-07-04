import React from "react";

const DiaryItem = ({ author, content, emotion, id, createDate, onRemove }) => {
  const remove = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      onRemove(id);
    }
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자: {author}</span>
        <br />
        <span>Today Emotion: {emotion}</span>
        <br />
        <span className="date">{new Date(createDate).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button onClick={remove}>삭제하기</button>
    </div>
  );
};

export default DiaryItem;
