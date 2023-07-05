import React, { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

function App() {
  const [diary, setDiary] = useState([]);
  const diaryId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const createDate = new Date().getTime();
    const newDiary = {
      author,
      content,
      emotion,
      createDate,
      id: diaryId.current,
    };
    diaryId.current += 1;
    setDiary([newDiary, ...diary]);
  };
  const onRemove = (targetId) => {
    const removedDiary = diary.filter((item) => item.id !== targetId);
    setDiary(removedDiary);
  };
  const onEdit = (targetId, newContent) => {
    setDiary(
      diary.map((item) =>
        item.id === targetId ? { ...item, content: newContent } : item
      )
    );
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} allDiary={diary} onRemove={onRemove} />
    </div>
  );
}

export default App;
