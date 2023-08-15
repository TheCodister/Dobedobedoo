import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./content.css";
const Content = () => {
  const [plan, setPlan] = useState([]);
  const [text, setText] = useState("");
  const [maxId, setMaxId] = useState(1);
  const handleDelete = (id) => {
    setPlan((prevPlan) => {
      return prevPlan.filter((plan) => plan.id !== id);
    });
    if (maxId > 1) {
      setMaxId((prevMaxId) => prevMaxId - 1);
    } else setMaxId(1);
  };
  const handleAdd = (text) => {
    if (text.length > 3) {
      setMaxId((prevMaxId) => prevMaxId + 1);
      setPlan((prevPlan) => {
        return [...prevPlan, { content: text, id: maxId }];
      });
    } else {
      alert("Your input must be 3 words or more");
    }
    setText("");
  };
  return (
    <div className="content">
      <div className="content-inputbox">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleAdd(text) : "")}
          className="content-input"
          placeholder="What do you want to do"
          min="3"
          max="99"
        ></input>
        <h1 onClick={() => handleAdd(text)} className="content-button">
          Add New Task
        </h1>
      </div>
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="content-todolist"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h1>Your list</h1>
              {plan.map((plan, index) => {
                return (
                  <Draggable draggableId={maxId} index={index}>
                    {(provided) => (
                      <div
                        className="content-todolist-item"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <h1>No.{plan.id}</h1>
                        <p>{plan.content}</p>
                        <h2 onClick={() => handleDelete(plan.id)}>Done!</h2>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Content;
