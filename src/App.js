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
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Protest Safety</Card.Title>
                            <Card.Text>
                                Amnesty International's guide to staying safe during protests.
                            </Card.Text>
                            <Card.Link href="https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf" target="_blank"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Ethnicity Pay Gap (UK)</Card.Title>
                            <Card.Text>
                                Ethnicity Pay Gap information from the Equality and Human Rights Comission.
                            </Card.Text>
                            <Card.Link href="https://youtu.be/1cp5QTRBpaY" target="_blank">Video</Card.Link>
                            <Card.Link href="https://www.equalityhumanrights.com/en/pay-gaps/ethnicity-what-does-pay-gap-look" target="_blank">Interactive Graphic</Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
                <CardDeck>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Race, ethnicity and crime</Card.Title>
                            <Card.Text>
                                An Open University course (approx. 30mins long) briefly examining the relationships between race and ethnicity, and crime, criminalisation and criminal justice.
                            </Card.Text>
                            <Card.Link href="https://www.open.edu/openlearn/society-politics-law/race-ethnicity-and-crime/content-section-0?active-tab=description-tab" target="_blank"><Button variant="primary">Go!</Button></Card.Link>
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
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Justice for George Floyd</Card.Title>
                        <Card.Text>
                            Write to Minnesota Governor Tim Walz and call on USA authorities to make sure that all those responsible in the death of George Floyd and many others are held accountable.
                        </Card.Text>
                        <Card.Link href="https://www.amnesty.org/en/get-involved/take-action/george-floyd-police-violence-usa/" target="_blank"><Button variant="primary">Go To Petition</Button></Card.Link>
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
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>The Bail Project</Card.Title>
                        <Card.Text>
                            USA based non-profit working to 'prevent incarceration and combat racial and economic disparities in the bail system'.
                        </Card.Text>
                        <a href="https://secure.givelively.org/donate/the-bail-project" target="_blank"><Button variant="primary">Go To Fundraiser</Button></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Black Lives Matter</Card.Title>
                        <Card.Text>
                            Support the movement and BLM's ongoing fight to end state-sanctioned violence, liberate Black people, and end white supremacy forever.
                        </Card.Text>
                        <Card.Link href="https://secure.actblue.com/donate/ms_blm_homepage_2019" target="_blank"><Button variant="primary">Go To Fundraiser</Button></Card.Link>
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
