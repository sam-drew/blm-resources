# Educate Donate - BLM

Website linking to resources that might be helpful when learning about racism and the Black Lives Matter movement. Also includes some fundraisers to donate to, and petitions to sign.

Each education resource, petition, and fundraiser has a short blurb explaining what you can expect to learn or how you will be supporting the movement.

It's not my place to be arbiter of truth or relevance, hence the open-source approach. I appreciate this presents challenges in itself due to the technical literacy barrier that has to be jumped over in order to contribute.

**If you think you have anything to contribute (resources, petitions, fundraisers, textual narrative for the site), please let me know by [messaging me on Twitter](https://twitter.com/sam__drew).** Each individual content item has a Title, Blurb, and Link to external resource. These are the only pieces of information you need to add a new item.

If you've got the skills, checkout the 'Technical Stuff' section below and fork this repo!

Translate-able into a lot of languages thanks to the magic of Google Translate.

If you want to run this website yourself, under a different domain or (in the unlikely event) because GitHub Pages doesn't work well in your region, grab everything (apart from the `CNAME` file) in the `docs/` folder and put it at the root of any server, it should probably work. If it doesn't, [let me know](https://twitter.com/sam__drew) and I'll be happy to help out.

## Technical Stuff

This website is a React web application. It leverages GitHub Pages for free hosting. To make this work, the built application is moved into the `docs/` folder.

Each individual content item has a Title, Blurb, and Link to external resource. These are the only pieces of information you need to add a new item.

All content is within the `src/App.js` file.

Each content stream (education resources, petitions, and fundraisers) is contained within a functional React component (`Educate`, `DonateTime`, `DonateMoney` respectively).

Individual content items on this site takes the form of a `react-bootstrap/Card` component which links to an external resource. `Card`s are organised into rows of 2 using the `react-bootstrap/CardDeck` component. These `CardDeck`s are in turn seperated by a `<br/>` tag.

Here's an example:

```js
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
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Stop France Censoring Police Violence Images</Card.Title>
                        <Card.Text>
                            Petition to block bill which would prevent images/video of police brutality being shared on social media in France.
                        </Card.Text>
                        <Card.Link href="https://www.change.org/p/gouvernement-fran%C3%A7ais-refus-de-la-loi-visant-%C3%A0-emp%C3%AAcher-la-diffusion-des-images-de-violences-polici%C3%A8res" target="_blank"><Button variant="primary">Go To Petition</Button></Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br/>
        </div>
    )
}

```

Subsequent `CardDeck`s are added to the `DonateTime` (petitions) compenent and page by inserting them after the `<br/>`.

As you can see, each `Card` has a `Card.Body`, which contains a `Card.Title`, `Card.Text`, and `Card.Link`. The 3 component types within the `Card.Body` match the 3 visible parts of a card: The title, blurb, and link.

Here's a template you can copy-paste:

```js
<CardDeck>
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>**INSERT_TITLE_HERE**</Card.Title>
            <Card.Text>
                **INSERT_BLURB_HERE**
            </Card.Text>
            <Card.Link href="**INSERT_LINK_URL_HERE**" target="_blank"><Button variant="primary">Go To Petition</Button></Card.Link>
        </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
    <Card.Body>
        <Card.Title>**INSERT_TITLE_HERE**</Card.Title>
        <Card.Text>
            **INSERT_BLURB_HERE**
        </Card.Text>
        <Card.Link href="**INSERT_LINK_URL_HERE**" target="_blank"><Button variant="primary">Go To Petition</Button></Card.Link>
    </Card.Body>
    </Card>
</CardDeck>
<br/>
```

Fill in the sections surrounded with `**`s, and insert into whichever component (`Educate`, `DonateTime`, `DonateMoney`) is relevant.

When you've finished adding stuff, make sure dependencies are installed:
```
$ yarn
```
Build the app:
```
$ yarn build
```
Move the CNAME file from `docs/` to `build/`:
```
$ mv docs/CNAME build/
```
Empty the `docs/` folder:
```
$ sudo rm -r docs/*
```
Move the app to the `docs/` folder:
```
$ mv build/* docs/
```
Delete the (now empty) `build/` folder:
```
$ rmdir build/
```

You're all good to go! Commit the changes to your fork of the repo, then submit a pull request on GitHub.
