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
                <title> Efé Elaiho </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web|Work+Sans" rel="stylesheet"></link>
                </Head>
                <section className="hero is-medium">
                    <div className="hero-body">
                        <div className="container"> 
                            <div className="columns">
                                <div className="column is-three-fifths">

                                <figure className="image is-128x128" style={{marginBottom: '4em'}}>
                                    <img className="is-rounded" src="https://avatars2.githubusercontent.com/u/8105085?s=460&v=4"/>
                                </figure>
                                        <h1 className="title is-2" style={{color: '#000000'}}>
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
                                    <div>
                                    <a href="https://www.linkedin.com/in/efeelaiho/" target="_blank"><i className="fab fa-linkedin-in " style={{marginRight: '1em'}}><span className="f"> - LinkedIn </span></i></a>
                                    <a href="https://github.com/efeelaiho" target="_blank"><i className="fab fa-github " style={{margin: '1em'}}><span className="f"> - GitHub </span></i></a>
                                    <a href="mailto:efeelaiho15@utexas.edu"><i className="far fa-envelope " style={{margin: '1em'}}><span className="f"> - Email </span></i></a>
                                    <a href="/efe_elaiho_resume.pdf" target="_blank"><i className="far fa-file " style={{margin: '1em'}}><span className="f"> - Resume </span></i></a>
                                   
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

                     section {}
                     
                     
                     p {
                        font-family: 'Work Sans', sans-serif;
                        #font-family: 'Titillium Web', sans-serif;
                        color: black;
                        font-size: 16px;
                        
                     }

                     .f {
                        font-family: 'Work Sans', sans-serif; 
                        font-size: 14px
                     }

                     h1 {
                        font-family: 'Titillium Web', sans-serif;
                        font-size: 18px
                     }

                    
                    a {
                        color: #4a4a4a;
                    }

                    .flex {
                        width: 50px;
                        padding: 10px 8px 8px 8px;
                        display: flex;
                        display: -webkit-flex;
                        justify-content: space-between;
                        -webkit-justify-content: space-between;
                    }

                    


                    `}
                </style>
            </div>

        )
    }
}
    
export default Home;