import logo from './logo.svg';
import './App.css';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { BrowserRouter as Router, Route, Link } from 'react-routerdom';

function App() {
  return (
    <div className="App">
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" ><Link to="/">Home</Link></Button>
          <Button className="bp3-minimal" icon="document" text="Files"><Link to="/files/">Files</Link></Button>
        </Navbar.Group>
      </Navbar>
      <header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
 <Route path="/" exact component={Index} />
 <Route path="/files/" component={Files} />
</header>
    </div>
  );
}

function Index() {
 return <h2>Home</h2>;
}
function Files() {
 return <h2>Files</h2>;
}


export default App;
