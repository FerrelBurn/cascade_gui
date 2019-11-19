import React, { Component } from 'react';
import ReportEnclosure from '../report/ReportEnclosure';
import ReportComment from '../report/ReportComment';
import RequirementsMatcher from './RequirementsMatcher';
import { Button } from 'react-bootstrap';
import HighlightedText from './HighlightedText';
const reactStringReplace = require('react-string-replace');
// const ReportView = (this.props) => (
class DraftView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlighted: []
        };
        this.spot = this.spot.bind(this);
        this.tryAgain = this.tryAgain.bind(this);

    }
    componentDidMount() {

        let reportText = this.props.report.text.split('\n').map((item, key) => {
            return <p key={key}>{item}</p>
        });

        this.setState({ highlighted: reportText });
    }


    sendData(url, payload) {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here

        })
        // open the request with the verb and the url
        xhr.open('POST', url)
        // send the request
        xhr.send(JSON.stringify({ report: payload }))
    }
    tryAgain() {
        //let miso = this.state.highlighted.forEach((v) => console.log(v))
        const newText = [...this.state.highlighted]
        var res = this.matchRequirements(this.props.report.text)
        let hl = [];
        for (let i = 0; i < res.length; i++) {
            res[i].ml_matches.forEach(value => {
                let marker = {};
                let currentValue = value[1];
                // console.log("trying to match: " + currentValue);


                // alert("misio:"+miso)

                let face = this.state.highlighted.map((item, arindex) => (
                    //   console.log(item.props.children){}

                    // console.log(item)

                    reactStringReplace(item.props.children, currentValue, (match, i) => (
                        <HighlightedText key={i} highlighted={true} text={match} />
                    ))

                ));
                this.setState({ highlighted: face });
                // console.log("face");
                // console.log(face);


            });
        }

        // console.log(JSON.stringify(newText))
        console.log("newtext");
        console.log(newText);

        // let face = this.highlighted.map((item, i) => (
        //     reactStringReplace(item, ss, (match, i) => (
        //         <HighlightedText key={i} highlighted={true} text={match} />
        //     ))
        // ))
    }
    textMatches(a, b) {
        if (a.replace(" ", "").toLowerCase(b.replace(" ", "").toLowerCase())) {
            return true;
        }
        return false;
    }
    spot() {

        /**
         * Parse AIML response for matches and create an array of them
         */
        var res = this.matchRequirements(this.props.report.text)
        let hl = [];
        for (let i = 0; i < res.length; i++) {
            res[i].ml_matches.forEach(value => {
                let marker = {};

                let currentValue = value[1];
                // console.log('currentValue')
                // console.log(currentValue)
                marker.start = this.props.report.text.indexOf(currentValue);
                // console.log("marker start");
                // console.log(marker.start)
                marker.end = marker.start + currentValue.length;
                hl.push(marker);
            });
        }
        // let reportText = this.props.report.text.split('\n').map((item, key) => {
        //     return <p key={key}>{item}<br /></p>
        // });
        // console.log("reportText")
        // console.log(JSON.stringify(reportText.join('')))
        let highlightedReport = this.props.report.text;
        hl.forEach((item, i) => {
            let ss = this.props.report.text.substring(item.start, item.end);

            highlightedReport = reactStringReplace(highlightedReport, ss, (match, i) => (
                <HighlightedText key={i} highlighted={true} matches={res} text={match} currentIndex={i} />
            ));


        })
        // let reportText = highlightedReport.split('\n').map((item, key) => {
        //     return <p key={key}>{item}<br /></p>
        // });
        // console.log("highlightedReport");
        // console.log(highlightedReport)
        // console.log(JSON.stringify(highlightedReport));
        highlightedReport = reactStringReplace(highlightedReport, '\n', (match, i) => (
            <p key={i}>{match}</p>
        ))
        //   console.log(JSON.stringify(highlightedReport));
        this.setState({ highlighted: highlightedReport });
    }

    render() {

        return (
            <div className="container-fluid" >

                {

                    <div className="card" >
                        <div className="card-header  d-flex">
                            <span>
                                <b> Serial Number:</b>
                                {this.props.report.serial.classification}
                                {this.props.report.serial.crc}
                                {this.props.report.serial.serialNumber}
                                {this.props.report.serial.year}
                            </span>
                            <span className="ml-auto">
                                <Button onClick={this.spot}>match</Button>
                                <RequirementsMatcher
                                    highlights={this.state.highlighted}
                                    matches={this.matchRequirements(this.props.report.text)} />
                                <b>Acquisition Date:</b> {this.props.report.acqDate}</span>
                        </div>
                        <div className="cardBody">
                            <p className="card-text">
                                <b>ACQ: </b>{this.props.report.acq}
                            </p>
                            <p className="card-text">
                                <b>DISSEM: </b>{this.props.report.dissem}
                            </p>
                            <p className="card-text">
                                <b>IPSP: </b>{this.props.report.ipsp}
                            </p>
                            <p className="card-text">
                                <b>Country: </b>{this.props.report.country.trigraph}
                            </p>
                            <p className="card-text">
                                <b>Subject: </b>{this.props.report.subject}
                            </p>
                            <p className="card-text">
                                <b>Summary: </b>{this.props.report.summary}
                            </p>
                            <div className="card-text">
                                <b>Text:</b>
                                {
                                    this.state.highlighted
                                    // this.addParagraphs(this.state.highlighted)
                                    // this.state.highlighted.map()
                                    // this.state.highlighted.map((paragraph, index) => (
                                    // <HighlightedText key={index} highlighted={false} text={paragraph}></HighlightedText>
                                    //      <p>{paragraph}</p>
                                    //   ))
                                }

                            </div>
                            {
                                this.props.report.comments.map((comment, index) => (
                                    <ReportComment key={index} comment={comment} />
                                ))
                            }
                            {
                                this.props.report.encl.map((encl, index) => (
                                    <ReportEnclosure key={index} encl={encl} />
                                ))
                            }

                        </div>
                    </div>
                }
            </div>
        )
    }
    addParagraphs(text) {
        // return text.split('\n').map((item, key) => {
        //     return <p key={key}>{item}<br /></p>
        // });
        // console.log('text')
        // console.log(text)
        return text;
    }
    matchRequirements(payload) {

        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('POST', "http://localhost:3005/read")
        // send the request
        xhr.send(JSON.stringify({ report: payload }))
    
        return this.matchFakeData();
    }
matchFakeData() {
    let testData = [
        {
            "fuzzy_matches": [],
            "ml_matches": [
                [
                    "Is there a cocktail bar in the hotel?",
                    "There is a gastropub with some bangin whiskey sours"
                ],
                [
                    "Are there trains or buses around?",
                    "DJ spins certain nights"
                ]
            ],
            "paragraph_number": 1,
            "text": "Really Cool Vibe here! Place is clean and staff is friendly. your smack in the middle of Tribeca here. Lots of common space to work. network or just meetup. There is a gastropub with some bangin whiskey sours. Roof Top has very good feel indoor and out.  DJ spins certain nights. Free wifi and good cell signal in the cafe."
        },
        {
            "fuzzy_matches": [
                [
                    "Is there a cocktail bar in the hotel?",
                    [
                        [
                            "The dinning room and bar were exceptional.",
                            "bar"
                        ]
                    ]
                ],
                [
                    "What is there to do near the hotel for fun?",
                    [
                        [
                            "What a great location.",
                            "What"
                        ]
                    ]
                ]
            ],
            "ml_matches": [
                [
                    "What is there to do near the hotel for fun?",
                    "swimming"
                ]
            ],
            "paragraph_number": 2,
            "text": "The grounds at the Royal Kona Resort are just as pictured, the plants flowers ,and grounds were absolutely breathtaking.The pool was beautiful,as well, because you could watch the ocean while swimming in the pool. The lagoon was beautiful as well. Our room overlooked the lagoon as well as being oceanfront. The dinning room and bar were exceptional. The food was great,and the whole open air effect was beautiful. The only negative thing I can say was the room w as not pretty. In fact it was old, but the grounds and resort made up for this. What a great location. The location could not have been better.. We had a great time!"
        },
        {
            "fuzzy_matches": [],
            "ml_matches": [
                [
                    "Are there trains or buses around?",
                    "Stayed at the Courtyard by Marriott Kamehameha, we spent all day out sunning on the beach and the nights slaying beers. Note that HA does not have the best public transport, driving is certainly an adventure the roads can be quiet bad."
                ],
                [
                    "What is there to do near the hotel for fun?",
                    "spent all day out sunning"
                ]
            ],
            "paragraph_number": 3,
            "text": "Stayed at the Courtyard by Marriott Kamehameha, we spent all day out sunning on the beach and the nights slaying beers. Note that HA does not have the best public transport, driving is certainly an adventure the roads can be quiet bad."
        },
        {
            "fuzzy_matches": [
                [
                    "Is there a cocktail bar in the hotel?",
                    [
                        [
                            "The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations!",
                            "hotel"
                        ]
                    ]
                ],
                [
                    "What is there to do near the hotel for fun?",
                    [
                        [
                            "The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations!",
                            "hotel"
                        ]
                    ]
                ]
            ],
            "ml_matches": [
                [
                    "Are there trains or buses around?",
                    "Rooms were rather shabby but it is in Somaliland, a country not recognized by any other country, to the world it is still Somalia. Remarkably I have never felt safer or met friendlier people than I did here. The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations! That being said no public transport can be trusted, you need a guided to take you out on the road."
                ]
            ],
            "paragraph_number": 4,
            "text": "One of the most interesting hotels I have ever stayed at! Inside you can see a photo of the building taken during the civil war showing a corner completely blown away by a bomb, possibly by the airplane that is now on display in a square after being shot down by the locals.Great staff, decent included breakfast, open access to the roof to overlook the streets and markets. Rooms were rather shabby but it is in Somaliland, a country not recognized by any other country, to the world it is still Somalia.Remarkably I have never felt safer or met friendlier people than I did here. The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations! That being said no public transport can be trusted, you need a guided to take you out on the road."
        },
        {
            "fuzzy_matches": [
                [
                    "Is there a cocktail bar in the hotel?",
                    [
                        [
                            "The service level at this hotel is definitely highest quality and much better than you find today at the large hotel-chain properties, which I also stay in around the world.",
                            "hotel"
                        ]
                    ]
                ],
                [
                    "Are there trains or buses around?",
                    [
                        [
                            "The service level at this hotel is definitely highest quality and much better than you find today at the large hotel-chain properties, which I also stay in around the world.",
                            "around"
                        ]
                    ]
                ],
                [
                    "What is there to do near the hotel for fun?",
                    [
                        [
                            "The service level at this hotel is definitely highest quality and much better than you find today at the large hotel-chain properties, which I also stay in around the world.",
                            "hotel"
                        ]
                    ]
                ]
            ],
            "ml_matches": [
                [
                    "Are there trains or buses around?",
                    "All within walking distance of the White House and Metro and at prices generally lower than others in the area."
                ]
            ],
            "paragraph_number": 5,
            "text": "I stay here regularly for business and have for well over a year. The service level at this hotel is definitely highest quality and much better than you find today at the large hotel-chain properties, which I also stay in around the world. In addition to the basics of clean and comfortable, there are always attentive bell persons to assist, including Alex, who now retrieves my bag in storage before I even have a chance to ask! Sara and Carlos in the lounge handle the largest crowds with ease and always make the regulars feel at home. Rooms come with a fridge and free bottled water daily - virtually unheard of anymore. All within walking distance of the White House and Metro and at prices generally lower than others in the area. And then there is the beautiful pool in the summer time. I recommend it to everyone."
        }
    ]

    //for testing
    return testData;

    //for real
    //return this.sendData("http://localhost:3005/read", reportText);
}
}

export default DraftView;