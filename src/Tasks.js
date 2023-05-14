import "./tasks.css";

export function Task({ ready }) {
  //props.ready
  // const cardStyles = {background: "#202020", color: "#fff", padding:"20px"};

  return (
    // <div style={cardStyles}>
    <div className="card">
      <h1 style={{ fontWeight: "lighter" }}>Mi first Task</h1>
      {/* <span style={ready ? { background: "green" } : { background: "red" }}> */}
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Task complited or Performed" : "Penditent task"}
      </span>
    </div>
  );
}
