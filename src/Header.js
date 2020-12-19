import logo from './logo.png';

const Header = () => {
  return (
    <header>
      <h1>Cat</h1>
      <img className="logo" alt="cat mash" src={logo} />
      <h1>Mash</h1>
    </header>
  );
}

export default Header