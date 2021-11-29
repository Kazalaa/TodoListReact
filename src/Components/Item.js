export default function Item(props) {
  return (
    <div>
      <li className="container h-50 d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
        {/* <button className="btn btn-success p-2 h-50"
        onClick={() => props.doneFunc(props.id)}
        >Done</button> */}
        <button className="btn btn-danger p-2 h-50"
        onClick={() => props.delFunc(props.id)}
        >Delete</button>
      </li>
    </div>
  )
}
