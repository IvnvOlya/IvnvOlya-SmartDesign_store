import Nav from "../Nav/Nav";

export default function Header(props) {
  return (
    <div className="Header">
      <Nav main={props.main} />
    </div>
  );
}
