import Link from "next/link";
import React from 'react';
import Head from 'next/head';
import 'bulma/css/bulma.css';
import cx from 'classnames';
import Typed from 'typed.js';



class Home extends React.Component {

    componentDidMount() {
        
      

      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
        strings: ["a software engineer", "an ML/AI enthusiast", "a technologist", "a sushi eating monster &#x1F363;"],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed("#iam", options);

      this.d = Date(Date.now()).toString();
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {

        return (

            <div>
                <Head>
                <title> Efe Elaiho </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web|Work+Sans" rel="stylesheet"></link>
                </Head>
                <section className="hero is-medium">
                    <div className="hero-body">
                        <div className="container"> 
                            <div className="columns">
                                <div className="column is-three-fifths">
                                        <h1 className="title is-2">
                                        Efé Elaiho - <span id="iam"></span>
                                        </h1><br/><br/>
                                    
                                    <p> I'm a man in sync with technology, who builds and designs products in many sectors, but mostly targeting health and education technology.  
                                        I am currently working as a software engineer at IBM Watson in performance.
                                        Some projects that I'm currently working on are <a className="ucardia" href="https://ucardia.com" target="_blank" >Ucardia</a>, a post cardiac rehabilitation consumer product, and Groopium, a group project management tool for the classroom.
                                        In my spare time I like to lift heavy weights and put them back down, and travel.</p> <br/><br/>

                                    <p>I am currently finishing up my Masters of Science in Computer Science at Georgia Institute of Technology with a specialization in Interactive Intelligence.
                                        Prior, I attended The University of Texas at Austin where I majored in Computer Science, with a minor in Business Administration.
                                    </p>
                                    <br/><br/>
                                    <div className="window">
                                        <div>
                                            <div className="circle terminal-red"></div>
                                            <div className="circle terminal-yellow"></div>
                                            <div className="circle terminal-green"></div>
                                            <div className="text_container">
                                            <span className="blue">エフォサ elaiho@code</span>:~$ curl -X GET "https://efeelaiho.com/sociallinks" <br/>
                                            {"{ \"twitter\": \"mytwitter\",  \"linkedin\": \"mylinkedin\", \"github\": \"mygithub\"} "} <br/>
                                            <span className="blue">エフォサ elaiho@code</span>:~$ curl -X GET "https://efeelaiho.com/funfacts"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>               
                        </div>
                    </div>
                </section>
                <style jsx>
                    {` 
                     .ucardia {
                         color: #d9534f
                     }

                     p {
                        font-family: 'Work Sans', sans-serif;
                        #font-family: 'Titillium Web', sans-serif;
                        color: black;
                        font-size: 16px
                     }

                     h1 {
                        font-family: 'Titillium Web', sans-serif;
                        font-size: 14px
                     }

                    .terminal-red {
                         background: red;
                     }

                    .terminal-yellow {
                        background: #d8d813;
                    }

                    .terminal-green {
                        background: green;
                    }
                    
                    .window {
                        width: 100%;
                        height: 337px;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 4px;
                        background: #000000;
                        box-shadow: 0px 2px 0px 0px #E5E5E5;
                    }

                    .flex {
                        width: 50px;
                        padding: 10px 8px 8px 8px;
                        display: flex;
                        display: -webkit-flex;
                        justify-content: space-between;
                        -webkit-justify-content: space-between;
                    }

                    .circle {
                        width: 12px;
                        height: 12px;
                        border-radius: 8px;
                        display: inline-block;
                        margin: 5px;
                    }

                    .text_container {
                        margin: 6px;
                        padding: 12px 18px 15px 18px;
                        
                        
                        background: black;
                        
                        font: 600 .8em "Source Code Pro", monospace;
                        color: #fff;
                        padding-top: 19px;
                        width: 100% - 50px;
                        height: 290px;
                        line-height: 1.7em;
                        letter-spacing: -0.31px;
                      }

                    .window p {
                        display: block;
                        margin: 0;
                      }
                      
                      .blue {
                        color: #2261E8;
                      }
                      .black {
                        color: #222;
                      }
                      .muted {
                        color: #6C819A;
                      }
                      .ione { margin-left: 20px; }
                      .itwo { margin-left: 40px; }
                      .ithree { margin-left: 60px; }
                      


                    `}
                </style>
            </div>

        )
    }
}
    
export default Home;