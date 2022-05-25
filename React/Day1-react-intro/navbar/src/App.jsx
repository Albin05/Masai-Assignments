import "./App.css";

function App() {
  const links = ["Services", "Projects", "About"];

  return (
    <div className="App">
      <Logo />
      <div className="links">
        {links.map((e) => {
          return <Links links={e} />;
        })}
      </div>
      <Button />
    </div>
  );
}

function Logo() {
  return <h3 className="logo">LOGOBAKERY</h3>;
}

function Links(props) {
  return <a className="links_tags">{props.links}</a>;
}

function Button() {
  return <button className="contact">Contact</button>;
}

export default App;
