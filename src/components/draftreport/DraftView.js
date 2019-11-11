import React, { Component } from 'react';
import ReportEnclosure from '../report/ReportEnclosure';
import ReportComment from '../report/ReportComment';
import RequirementsMatcher from './RequirementsMatcher';
// const ReportView = (this.props) => (
class DraftView extends Component {

    getHighlightedText(text, higlight, question) {
        // Split on higlight term and include term into parts, ignore case
        let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
        return <span> {parts.map((part, i) =>
            <span alt={question} key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor: 'yellow' } : {}}>
                {part}
            </span>)
        } </span>;
    }
    matchRequirements(reportText) {

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
                        "Rooms were rather shabby but it is in Somaliland, a country not recognized by any other country, to the world it is still Somalia.Remarkably I have never felt safer or met friendlier people than I did here. The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations! That being said no public transport can be trusted, you need a guided to take you out on the road."
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
    sendData(url, payload) {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        console.log("url: " + url);
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('POST', url)
        // send the request
        xhr.send(JSON.stringify({ report: payload }))
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
                                <RequirementsMatcher matches={this.matchRequirements(this.props.report.text)} />
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
                                <b>Text:</b> {this.props.report.text.split('\n').map((item, key) => {
                                    return <p key={key}>{item}<br /></p>
                                })}
                            </div>
                            {
                                this.props.report.comments.map((comment) => (
                                    <ReportComment comment={comment} />
                                ))
                            }
                            {
                                this.props.report.encl.map((encl) => (
                                    <ReportEnclosure encl={encl} />
                                ))
                            }

                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default DraftView;