export const CREATE = "diary/CREATE";
export const REMOVE = "diary/REMOVE";
export const EDIT = "diary/EDIT";

const diary = (state = [], action) => {
  switch (action.type) {
    case CREATE: {
      const createdDate = new Date().getTime();
      const newDiary = { ...action.data, createdDate };
      return [newDiary, ...state];
    }

    case REMOVE: {
      return state.filter((item) => item.id !== action.targetId);
    }

    case EDIT: {
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, content: action.newContent }
          : item
      );
    }
    default:
      return state;
  }
};
export default diary;
