import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';

// ReactDOM.render(<App />, document.getElementById('root'));


// class FavoriteColorForm extends React.Component {
//     state = { value: '' }

//     newColor = e =>
//         this.setState({ value: e.target.value })

//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault()
//     }
//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>
//                     Favorite Color:
//                 <input type="color"
//                         onChange={this.newColor} />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }










// let data = [
//     {
//         "fuzzy_matches": [],
//         "ml_matches": [
//             [
//                 "Is there a cocktail bar in the hotel?",
//                 "There is a gastropub with some bangin whiskey sours"
//             ],
//             [
//                 "Are there trains or buses around?",
//                 "DJ spins certain nights"
//             ]
//         ],
//         "paragraph_number": 1,
//         "text": "Really Cool Vibe here! Place is clean and staff is friendly. your smack in the middle of Tribeca here. Lots of common space to work. network or just meetup. There is a gastropub with some bangin whiskey sours. Roof Top has very good feel indoor and out.  DJ spins certain nights. Free wifi and good cell signal in the cafe."
//     },
//     {
//         "fuzzy_matches": [
//             [
//                 "Is there a cocktail bar in the hotel?",
//                 [
//                     [
//                         "The dinning room and bar were exceptional.",
//                         "bar"
//                     ]
//                 ]
//             ],
//             [
//                 "What is there to do near the hotel for fun?",
//                 [
//                     [
//                         "What a great location.",
//                         "What"
//                     ]
//                 ]
//             ]
//         ],
//         "ml_matches": [
//             [
//                 "What is there to do near the hotel for fun?",
//                 "swimming"
//             ]
//         ],
//         "paragraph_number": 2,
//         "text": "The grounds at the Royal Kona Resort are just as pictured, the plants flowers ,and grounds were absolutely breathtaking.The pool was beautiful,as well, because you could watch the ocean while swimming in the pool. The lagoon was beautiful as well. Our room overlooked the lagoon as well as being oceanfront. The dinning room and bar were exceptional. The food was great,and the whole open air effect was beautiful. The only negative thing I can say was the room w as not pretty. In fact it was old, but the grounds and resort made up for this. What a great location. The location could not have been better.. We had a great time!"
//     },
//     {
//         "fuzzy_matches": [],
//         "ml_matches": [
//             [
//                 "Are there trains or buses around?",
//                 "Stayed at the Courtyard by Marriott Kamehameha, we spent all day out sunning on the beach and the nights slaying beers. Note that HA does not have the best public transport, driving is certainly an adventure the roads can be quiet bad."
//             ],
//             [
//                 "What is there to do near the hotel for fun?",
//                 "spent all day out sunning"
//             ]
//         ],
//         "paragraph_number": 3,
//         "text": "Stayed at the Courtyard by Marriott Kamehameha, we spent all day out sunning on the beach and the nights slaying beers. Note that HA does not have the best public transport, driving is certainly an adventure the roads can be quiet bad."
//     },
//     {
//         "fuzzy_matches": [
//             [
//                 "Is there a cocktail bar in the hotel?",
//                 [
//                     [
//                         "The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations!",
//                         "hotel"
//                     ]
//                 ]
//             ],
//             [
//                 "What is there to do near the hotel for fun?",
//                 [
//                     [
//                         "The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations!",
//                         "hotel"
//                     ]
//                 ]
//             ]
//         ],
//         "ml_matches": [
//             [
//                 "Are there trains or buses around?",
//                 "Rooms were rather shabby but it is in Somaliland, a country not recognized by any other country, to the world it is still Somalia.Remarkably I have never felt safer or met friendlier people than I did here. The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations! That being said no public transport can be trusted, you need a guided to take you out on the road."
//             ]
//         ],
//         "paragraph_number": 4,
//         "text": "One of the most interesting hotels I have ever stayed at! Inside you can see a photo of the building taken during the civil war showing a corner completely blown away by a bomb, possibly by the airplane that is now on display in a square after being shot down by the locals.Great staff, decent included breakfast, open access to the roof to overlook the streets and markets. Rooms were rather shabby but it is in Somaliland, a country not recognized by any other country, to the world it is still Somalia.Remarkably I have never felt safer or met friendlier people than I did here. The recent election was held during my stay, I stepped out of the hotel and people rushed up to me to assure me all the gunfire was not trouble, only celebrations! That being said no public transport can be trusted, you need a guided to take you out on the road."
//     },
//     {
//         "fuzzy_matches": [
//             [
//                 "Is there a cocktail bar in the hotel?",
//                 [
//                     [
//                         "The service level at this hotel is definitely highest quality and much better than you find today at the large hotel-chain properties, which I also stay in around the world.",
//                         "hotel"
//                     ]
//                 ]
//             ],
//             [
//                 "Are there trains or buses around?",
//                 [
//                     [
//                         "The service level at this hotel is definitely highest quality and much better than you find today at the large hotel-chain properties, which I also stay in around the world.",
//                         "around"
//                     ]
//                 ]
//             ],
//             [
//                 "What is there to do near the hotel for fun?",
//                 [
//                     [
//                         "The service level at this hotel is definitely highest quality and much better than you find today at the large hotel-chain properties, which I also stay in around the world.",
//                         "hotel"
//                     ]
//                 ]
//             ]
//         ],
//         "ml_matches": [
//             [
//                 "Are there trains or buses around?",
//                 "All within walking distance of the White House and Metro and at prices generally lower than others in the area."
//             ]
//         ],
//         "paragraph_number": 5,
//         "text": "I stay here regularly for business and have for well over a year. The service level at this hotel is definitely highest quality and much better than you find today at the large hotel-chain properties, which I also stay in around the world. In addition to the basics of clean and comfortable, there are always attentive bell persons to assist, including Alex, who now retrieves my bag in storage before I even have a chance to ask! Sara and Carlos in the lounge handle the largest crowds with ease and always make the regulars feel at home. Rooms come with a fridge and free bottled water daily - virtually unheard of anymore. All within walking distance of the White House and Metro and at prices generally lower than others in the area. And then there is the beautiful pool in the summer time. I recommend it to everyone."
//     }
// ]



// let bookList = [
//     { "title": "Rainbow six", "author": "Earnest Hemingway", "pages": 260 },
//     { "title": "Rainbow six", "author": "Earnest Hemingway", "pages": 260 },
//     { "title": "Rainbow six", "author": "Earnest Hemingway", "pages": 260 },
//     { "title": "Rainbow six", "author": "Earnest Hemingway", "pages": 260 },
//     { "title": "Rainbow six", "author": "Earnest Hemingway", "pages": 260 },
//     { "title": "Rainbow six", "author": "Earnest Hemingway", "pages": 260 }
// ]

// const Book = ({ title, author, pages, freeBookmark }) => {
//     return (
//         <section>
//             {/* <h2>{title}</h2>
//             <p>by: {author}</p>
//             <p>Pages: {pages} pages</p>
//             <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no!'}</p> */}
//         </section>
//     )
// }

// const Hiring = () =>
//     <div>
//         <p>the library is hiring. go to www.library.com/jobs for more.</p>
//     </div>
// const NotHiring = () =>
//     <div>
//         <p>the library is not hiring. Please check back a different time.</p>
//     </div>

// class Library extends React.Component {
// static defaultProps = {
//     books:[
//         {"title":"Taho Tales", "author":"Chet Whitley", "pages":1000}
//     ]
// }

//     state = {
//         open: true,
//         freeBookmark: true,
//         hiring: true,
//         data: [],
//         loading: false
//     }

//     componentDidMount() {
//         this.setState({ loading: true })

//         // fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//         // var data = require('./example_result.json')
//         // fetch('./example_result.json')
//         //     .then(data => console.log(data))
//         //     .then(data => data.json())
//         //     // .then(function (data) {
//         //     //     console.log(data)
//         //     // })
//         //     .then(data => this.setState({ data, loading: false }))

//         console.debug(data)
//         this.setState({data, loading:false})
//     }
//     componentDidUpdate() {
//         console.log("component just updated")
//     }
//     toggleOpenClosed = () => {
//         this.setState(prevState => ({
//             open: !prevState.open
//         }))
//     }
//     getHighlightedText(text, higlight, question) {
//         // Split on higlight term and include term into parts, ignore case
//         let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
//         return <span> { parts.map((part, i) => 
//             <span alt={question} key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor:'yellow' } : {} }>
//                 { part }
//             </span>)
//         } </span>;
//     }
//     check
//     render() {
//         console.log(this.state)
//         const { books } = this.props
//         return (
//             <div>
               
//                 {this.state.loading
//                     ? "loading"
//                     : <div>
//                         {this.state.data.map(product => {
//                             console.log(product)
//                             return (
//                                 <div>
//                                     <h3>Question</h3>
//                                     <h4>{product.ml_matches[0][0]}</h4>
//                                     <h3>Text</h3>
//                                     <h4>{this.getHighlightedText(product.text, product.ml_matches[0][1], product.ml_matches[0][0])}</h4>
                                    

//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
         
//                 {books.map(
//                     (book, i) =>
//                         <Book/>
//                 )}

//             </div>
//         )
//     }
// }

// render(
//     // <Library  />,
//     document.getElementById('root')
// )