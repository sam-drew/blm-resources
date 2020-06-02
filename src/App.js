import React from 'react';
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
            <p className="sectionSubtitle last">Education is the first step to positive change. Hopefully this page will give you some pointers on what you can do to contribute to that change, and why this change is neccessary.</p>
            <div className="cardContainer">
                <CardDeck>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Protest Safety</Card.Title>
                            <Card.Text>
                                Amnesty International's guide to staying safe during protests.
                            </Card.Text>
                            <Card.Link href="https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Ethnicity Pay Gap (UK)</Card.Title>
                            <Card.Text>
                                Ethnicity Pay Gap information from the Equality and Human Rights Comission.
                            </Card.Text>
                            <Card.Link href="https://youtu.be/1cp5QTRBpaY" target="_blank" rel="noopener noreferrer">Video</Card.Link>
                            <Card.Link href="https://www.equalityhumanrights.com/en/pay-gaps/ethnicity-what-does-pay-gap-look" target="_blank" rel="noopener noreferrer">Interactive Graphic</Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
                <CardDeck>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>What is Racism?</Card.Title>
                            <Card.Text>
                                Workshop activity toolkit for helping teach other people the definition of racism.
                            </Card.Text>
                            <Card.Link href="http://www.socialjusticetoolbox.com/activity/what-is-racism/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Netflix: 13th</Card.Title>
                            <Card.Text>
                                In this Netflix documentary, scholars, activists, and politicians analyse the criminalisation of African Americans and the U.S. prison boom.
                            </Card.Text>
                            <Card.Link href="https://www.netflix.com/title/80091741" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
                <CardDeck>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Race, ethnicity and crime</Card.Title>
                            <Card.Text>
                                An Open University course (approx. 30mins long) briefly examining the relationships between race and ethnicity, crime, criminalisation, and criminal justice.
                            </Card.Text>
                            <Card.Link href="https://www.open.edu/openlearn/society-politics-law/race-ethnicity-and-crime/content-section-0?active-tab=description-tab" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>George Floyd: How can I help from the UK?</Card.Title>
                            <Card.Text>
                                Instagram post series explaining some things that people in the UK can do to support anti-racism.
                            </Card.Text>
                            <Card.Link href="https://www.instagram.com/p/CAu_buhH5lD/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
                <CardDeck>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Not All Superheroes Wear Capes</Card.Title>
                            <Card.Text>
                                TEDx talk from Nova Reid explaining the impact of racial microaggressions.
                            </Card.Text>
                            <Card.Link href="https://www.youtube.com/watch?v=G8iNGeVyvUs" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>WHITE PEOPLE, WE HAVE WORK TO DO</Card.Title>
                            <Card.Text>
                                Instagram post series explaining some things that White people can do to support anti-racism.
                            </Card.Text>
                            <Card.Link href="https://www.instagram.com/p/CAtHZeIpEW-/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
                <CardDeck>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Project Implicit</Card.Title>
                            <Card.Text>
                                Harvard University lead project helping people discover their hidden, implicit associations about race, gender, sexual orientation, and other topics.
                            </Card.Text>
                            <Card.Link href="https://implicit.harvard.edu/implicit/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>What should we do with videos of police brutality?</Card.Title>
                            <Card.Text>
                                Article from gal-dem evaluating how videos of police brutality should be handled.
                            </Card.Text>
                            <Card.Link href="https://gal-dem.com/bookmark-this-what-should-we-do-with-videos-of-police-brutality/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
                <CardDeck>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Seeing White</Card.Title>
                            <Card.Text>
                                14-part documentary series expoloring the relationship between the notion of "whiteness" and racial inequality.
                            </Card.Text>
                            <Card.Link href="https://www.sceneonradio.org/seeing-white/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>How to Make this Moment the Turning Point for Real Change</Card.Title>
                            <Card.Text>
                                Article from Barack Obama highlighting the need for protest and politics to work together in order to affect real change.
                            </Card.Text>
                            <Card.Link href="https://medium.com/@BarackObama/how-to-make-this-moment-the-turning-point-for-real-change-9fa209806067" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go!</Button></Card.Link>
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
                    <p className="sectionSubtitle">In a capitalist society such as the one we live in, opressed people are often the people with the least financial resources. If you find yourself in a position to be able to share some of your own financial resources to help others, it could really make a difference.</p>
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
                        <p className="sectionSubtitle">Donating money can give people on the frontline the extra resources they need, enabling them to make a difference.</p>
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
                        <Card.Link href="https://www.amnesty.org/en/get-involved/take-action/george-floyd-police-violence-usa/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go To Petition</Button></Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Stop France Censoring Police Violence Images</Card.Title>
                        <Card.Text>
                            Petition to block bill which would prevent images/video of police brutality being shared on social media in France.
                        </Card.Text>
                        <Card.Link href="https://www.change.org/p/gouvernement-fran%C3%A7ais-refus-de-la-loi-visant-%C3%A0-emp%C3%AAcher-la-diffusion-des-images-de-violences-polici%C3%A8res?" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go To Petition</Button></Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br/>
                <CardDeck>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>COVID-19 Response Should Not Leave Black Communities Behind in USA</Card.Title>
                            <Card.Text>
                                Sign to push elected officials in the USA to take brave and bold action to make sure communities are not left behind.
                            </Card.Text>
                            <Card.Link href="https://m4bl.org/join-our-movement/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go To Petition</Button></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Ban the Use of Rubber Bullets</Card.Title>
                            <Card.Text>
                                Sign this petition, directed at the United Nations, for the sake and safety of protestors. Let’s increase people’s safety, so that they can continue to protest peacefully.
                            </Card.Text>
                            <Card.Link href="https://www.change.org/p/united-nations-ban-the-use-of-inhumane-rubber-bullets" target="_blank" rel="noopener noreferrer"><Button variant="primary">Go To Petition</Button></Card.Link>
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
                        <Card.Title>Black Women's Blueprint</Card.Title>
                        <Card.Text>
                            Black Women’s Blueprint envisions a world where women and girls of African descent are fully empowered and where gender, race and other disparities are erased.
                        </Card.Text>
                        <a href="https://blackwomensblueprint.ourpowerbase.net/civicrm/contribute/transact?reset=1&id=4" target="_blank" rel="noopener noreferrer"><Button variant="primary">Donate</Button></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Generating Genius</Card.Title>
                        <Card.Text>
                            Generating Genius has been working for 15 years to ensure that talented and able students from BAME backgrounds are positioned to excel in STEM careers.
                        </Card.Text>
                        <Card.Link href="https://generatinggenius.org.uk/donate/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Donate</Button></Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br/>
            <CardDeck>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>The Bail Project</Card.Title>
                        <Card.Text>
                            USA based non-profit working to 'prevent incarceration and combat racial and economic disparities in the bail system'.
                        </Card.Text>
                        <a href="https://secure.givelively.org/donate/the-bail-project" target="_blank" rel="noopener noreferrer"><Button variant="primary">Donate</Button></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Black Lives Matter</Card.Title>
                        <Card.Text>
                            Support the movement and BLM's ongoing fight to end state-sanctioned violence, liberate Black people, and end white supremacy forever.
                        </Card.Text>
                        <Card.Link href="https://secure.actblue.com/donate/ms_blm_homepage_2019" target="_blank" rel="noopener noreferrer"><Button variant="primary">Donate</Button></Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br/>
            <CardDeck>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Access UK</Card.Title>
                        <Card.Text>
                            AccessUK provides a comprehensive and bespoke careers services for marginalised and disadvantaged service users, particularly those from the Black and Minority Ethnic community (BAME).
                        </Card.Text>
                        <a href="https://www.accessuk.org/donate" target="_blank" rel="noopener noreferrer"><Button variant="primary">Donate</Button></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Stephen Lawrence Charitable Trust</Card.Title>
                        <Card.Text>
                            Creating a fairer society for all, by building careers, building communities, and building inclusive culture.
                        </Card.Text>
                        <Card.Link href="https://www.stephenlawrence.org.uk/support-us/donate/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Donate</Button></Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br/>
            <CardDeck>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>African Sons and Daughters</Card.Title>
                        <Card.Text>
                            Promoting and encouraging the social, economic and physical well-being of the African community in the U.K and Worldwide African Diaspora.
                        </Card.Text>
                        <a href="https://africansonsanddaughters.com/donate-and-support/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Donate</Button></a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>100 Black Men of London</Card.Title>
                        <Card.Text>
                            The 100 Black Men of London is a community-based charity led by Black men delivering programmes and activities focused on Mentoring, Education, Economic Empowerment, and Health & Wellness.
                        </Card.Text>
                        <Card.Link href="http://100bml.org/support-us/" target="_blank" rel="noopener noreferrer"><Button variant="primary">Donate</Button></Card.Link>
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

function Footer (props) {
    return(
        <>
            <div className="footer">
                <p><a href="https://github.com/educate-donate/demo/blob/master/README.md">About This Site</a></p>
                <p>Got More Ideas/Content? <a href="https://twitter.com/sam__drew">Contact</a></p>
            </div>
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
                <Footer />
            </div>
        </Router>
    );
}

export default App;
