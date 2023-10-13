function Window({ title, body, luz, toggleLuz }) {
  return (
    <div className="window">
      <h1>{title}</h1>
      <p className="window-text">
        {body}
        <br/>
        <h2>
        {luz}
        </h2> 
      </p>
      <button onClick={toggleLuz} className="window-button">
        Alternar Luz
      </button>
    </div>
  );
}
export default Window;
