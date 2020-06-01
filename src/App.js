import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';

function Educate (props) {
    return(
        <>
            <p className="sectionSubtitle last">Education is the first step to positive change, hopefully this page will give you some pointers on what you can do to contribute to that change.</p>
            <div className="cardContainer">
                <CardDeck>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Protest Safety</Card.Title>
                            <Card.Text>
                                Amnesty International's guide to staying safe during protests.
                            </Card.Text>
                            <a href="https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf" target="_blank"><Button variant="primary">Go!</Button></a>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </>
    )
}

function Donate (props) {
    let { path, url } = useRouteMatch();
    return(
        <>
            <Switch>
                <Route exact path={path}>
                    <p className="sectionSubtitle">In a capitalist society such as the one we live in, opressed people are often the people with the least financial resources. If you find yourself in a position to be able to share some of your own financial resources to help others, it will be gratefully received.</p>
                    <p className="sectionSubtitle last">If you are not in a position to donate money, please consider donating some of your time to sign petitions.</p>
                    <div className="cardContainer">
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Time</Card.Title>
                                    <Card.Text>
                                        Donate your time by signing petitions and contacting politicians/authorities.
                                    </Card.Text>
                                    <Link to={`${url}/time`}><Button variant="primary">Get Started</Button></Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Money</Card.Title>
                                    <Card.Text>
                                        Donate your money to fundraisers acting for the benefit of the people.
                                    </Card.Text>
                                    <Link to={`${url}/fundraisers`}><Button variant="primary">Get Started</Button></Link>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </div>
                </Route>
                <Route path={`${path}/time`}>
                    <>
                        <p className="sectionSubtitle">Donating your time to sign petitions and contact politicians/authorities is an extremely important part in raising the general public awareness of oppression.</p>
                        <DonateTime/>
                    </>
                </Route>
                <Route path={`${path}/fundraisers`}>
                    <>
                        <p className="sectionSubtitle">Donating money can give people on the frontline the extra resources they need to keep activism alive.</p>
                        <DonateMoney/>
                    </>
                </Route>
            </Switch>
        </>
    )
}

function DonateTime (props) {
    return(
        <div className="cardContainer">
            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Example Petition</Card.Title>
                        <Card.Text>
                            Donate your time by signing petitions and contacting politicians/authorities.
                        </Card.Text>
                        <Link to={``}><Button variant="primary">Go To Petition</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Example Petition 2</Card.Title>
                        <Card.Text>
                            Donate your time by signing petitions and contacting politicians/authorities.
                        </Card.Text>
                        <Link to={``}><Button variant="primary">Go To Petition</Button></Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

function DonateMoney (props) {
    return(
        <div className="cardContainer">
            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Example Fundraiser</Card.Title>
                        <Card.Text>
                            Donate your time by signing petitions and contacting politicians/authorities.
                        </Card.Text>
                        <Link to={``}><Button variant="primary">Go To Fundraiser</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Example Fundraiser 2</Card.Title>
                        <Card.Text>
                            Donate your money to fundraisers acting for the benefit of the people.
                        </Card.Text>
                        <Link to={``}><Button variant="primary">Go To Fundraiser</Button></Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

function Header (props) {
    let location = useLocation();
    let edOrDo = location.pathname.split("/")[1];
    return(
        <>
            <header className="App-header">
                <Link to="/educate" id="educateHeader"><span className={(edOrDo === "educate") ? "headerText selected" : "headerText"}>EDUCATE</span></Link>
                <Link to="/donate" id="donateHeader"><span className={(edOrDo === "donate") ? "headerText selected" : "headerText"}>DONATE</span></Link>
            </header>
            <div id="google_translate_element"></div>
        </>
    )
}

function App () {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route path="/educate">
                            <>
                                <Header/>
                                <Educate />
                            </>
                        </Route>
                        <Route path="/donate">
                            <>
                                <Header/>
                                <Donate />
                            </>
                        </Route>
                        <Route path="/">
                            <>
                                <Header />
                                <p className="sectionSubtitle">For change to happen action is required. Learn about the problems, contribute to the solutions with your time and/or money.</p>
                            </>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
