import "../css/App.css";

const user = {
  name: "Vladilen",
  lastname: "Minin",
};

const Elem = App(user);
function App(user) {
  return (
    <div className="App">
      <h1>
        {`Hello, ${user.name}, hello ${user.lastname}!`}
      </h1>
    </div>
  );
}

export default Elem;
