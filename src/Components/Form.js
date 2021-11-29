import {useState} from 'react'
import Item from './Item'
import {v4 as uuidv4} from 'uuid'

export default function Form(){

  const [dataArr, setDataArr] = useState([
    { title: "Walk the dog", description:"Don't forget the ball", done: true, id: uuidv4()},
    { title: "Wash the dog", description: "Today it's raining ...", done: false, id: uuidv4()}
  ])

  const [stateInput, setStateInput] = useState();
  const [stateInputDescription, setStateInputDescription] = useState();

  // const markAsDoneElement = id => {
  //   // First, make a copy of the existing items
  //   const newArr = [...dataArr]
  //   // Then find the index of the item you want to modify
  //   const index = newArr.findIndex(task => task.id === id)
  //   // Now you can replace the item with a modified copy of the found item
  //   const foundItem = newArr[index]
  //   newArr[index] = { ...foundItem, completed: !foundItem.completed }
  //   // Finally, set the items to the modified copy of the original array
  //   setDataArr({ newArr });
  // }

  const deleteElement = id => {
    // console.log(id);
    const filteredState = dataArr.filter(item => {
      return item.id !== id;
    })
    setDataArr(filteredState)
  }

  const addTodo = e => {
    // to prevent the page from updating
    e.preventDefault();

    // copy the state and create a new one(never change directly the state)
    const newArr = [...dataArr]

    //create new object, push it and change the state
    const newTodo = {};
    newTodo.title = stateInput;
    newTodo.description = stateInputDescription;
    newTodo.id = uuidv4();

    newArr.push(newTodo);
    setDataArr(newArr);

    // reset input (empty)
    setStateInput('');
    setStateInputDescription('');
  }

  const linkedInput = e => {
    setStateInput(e);
  }
  const linkedInputDescription = e => {
    setStateInputDescription(e);
  }

  return (

    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form
        onSubmit={e => addTodo(e)}
        className="mb-3 mt-3"
      >
        <div className="container d-flex align-items-center flex-column justify-content-center">
          <h3>Add a Task</h3>
        <label htmlFor="todo" className="form-label mt-3">Title</label>
        <input
          value={stateInput}
          onInput={e => linkedInput(e.target.value)}
          type="text" className="form-control" id="todo"
        />
        <label htmlFor="description" className="form-label mt-3">Description</label>
        <input
          value={stateInputDescription}
          onInput={e => linkedInputDescription(e.target.value)}
          type="text" className="form-control" id="description"
        />
        <button className="mt-2 btn btn-primary d-block">Add</button>
        </div>
      </form>

      <h2>Your things :</h2>
      <ul className="list-group">
        {dataArr.map(item => {
          // if (item.done !== true) {
            return (
              <Item
              title={item.title}
              description={item.description}
              done={item.done}
              key={item.id}
              id={item.id}
              // doneFunc={markAsDoneElement}
              delFunc={deleteElement}
              />
            )
          // }
        })}
      </ul>
      {/* <h2>Done :</h2> */}
      {/* <ul className="list-group">
        {dataArr.map(item => {
          if (item.done === true){
            return (
              <Item
                title={item.title}
                description={item.description}
                done={item.done}
                key={item.id}
                id={item.id}
                doneFunc={markAsDoneElement}
                delFunc={deleteElement}
              />
            )
          }
        })}
      </ul> */}

    </div>

  );
}
