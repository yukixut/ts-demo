import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./common.less";
class DraggableDemo extends React.Component {
  state = {
    show: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: "Learn React",
        },
        {
          id: 2,
          text: "Learn Redux",
        },
        {
          id: 3,
          text: "Watch TV",
        },
      ],
    };
  }

  click = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  renderSubMenu = () => {
    console.log("111");
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={(result) => {
          console.log(result);
          const { source, destination, draggableId } = result;
          if (!destination) {
            return;
          }

          let arr = Array.from(this.state.todos);
          console.log(arr);
          const [remove] = arr.splice(source.index, 1);
          arr.splice(destination.index, 0, remove);
          this.setState({
            todos: arr,
          });
        }}
      >
        <Droppable
          droppableId="d"
          style={{ width: 1000, height: 200, border: "1px solid red" }}
        >
          {(provided, snapshot) => {
            console.log(provided, snapshot);
            return (
              <div>
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {this.state.todos.map((t, i) => (
                    <Draggable draggableId={t.id.toString()} index={i}>
                      {(p) => (
                        // <Menu.Item>{"111"}</Menu.Item>
                        <>
                          <ul
                            ref={p.innerRef}
                            {...p.draggableProps}
                            {...p.dragHandleProps}
                            key={t.id}
                          >
                            <li
                              className={"first"}
                              onMouseOver={this.renderSubMenu}
                            >
                              <div onClick={this.click}>{t.text}</div>
                              {/* <ul
                                style={{
                                  display: `${this.state.show ? "" : "none"}`,
                                }}
                              >
                                <li>'111ewtsafewrewtqt53242dg4e'</li>
                                <li>'222'</li>
                              </ul> */}
                            </li>
                          </ul>
                        </>
                      )}
                    </Draggable>
                  ))}
                  <Droppable droppableId="d">
                    {(p) => {
                      return (
                        <div ref={p.innerRef} {...p.droppableProps}>
                          <Draggable draggableId={"11111"} index={1112}>
                            {(provided) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                >
                                  test draggableId
                                </div>
                              );
                            }}
                          </Draggable>
                          ;
                          <Draggable draggableId={"22"} index={222}>
                            {(provided) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                >
                                  test 2
                                </div>
                              );
                            }}
                          </Draggable>
                          ;
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default DraggableDemo;
