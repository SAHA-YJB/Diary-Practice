import React, { useRef } from "react";
import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE, CREATE, EDIT } from "./redux/modules/diary";

const App = () => {
  const diaryId = useRef(0);
  const diaryData = useSelector((state) => state.diary);
  const dispatch = useDispatch();

  const onCreate = (author, content, emotion) => {
    dispatch({
      type: CREATE,
      data: { author, content, emotion, id: diaryId.current },
    });
    diaryId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: REMOVE, targetId });
  };

  const onEdit = (targetId, newContent) => {
    dispatch({ type: EDIT, targetId, newContent });
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} allDiary={diaryData} onRemove={onRemove} />
    </div>
  );
};

export default App;
