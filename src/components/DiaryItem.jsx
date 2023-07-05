import React, { useState, useRef } from "react";

const DiaryItem = ({
  author,
  content,
  emotion,
  id,
  createDate,
  onRemove,
  onEdit,
}) => {
  const editRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const editChange = (e) => setLocalContent(e.target.value);

  const remove = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      onRemove(id);
    }
  };
  const quitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const editComplete = () => {
    if (localContent < 5) {
      return editRef.current.focus();
    }
    if (window.confirm("일기를 수정하시겠습니까?")) {
      onEdit(id, localContent);
      toggleIsEdit();
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
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              ref={editRef}
              onChange={editChange}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={quitEdit}>수정취소</button>
          <button onClick={editComplete}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={remove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
