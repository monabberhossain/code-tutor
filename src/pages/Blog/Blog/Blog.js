import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";
import Blog1 from "../../../assets/blog/cors.jpeg";

const Blog = () => {
    return (
        <Container className="blog">
            <h3>Blog</h3>
            <div className="blog-content">
                <h4 className="question">what is cors?</h4>
                <div className="answer">
                    <p className="mb-3">
                        Cross-origin resource sharing is a mechanism that allows
                        restricted resources on a web page to be requested from
                        another domain outside the domain from which the first
                        resource was served. A web page may freely embed
                        cross-origin images, stylesheets, scripts, iframes, and
                        videos
                    </p>
                    <img className="img-fluid" src={Blog1} alt="" />
                    <p className="mt-3">
                        An example of a cross-origin request: the front-end
                        JavaScript code served from https://domain-a.com uses
                        XMLHttpRequest to make a request for
                        https://domain-b.com/data.json. For security reasons,
                        browsers restrict cross-origin HTTP requests initiated
                        from scripts. For example, XMLHttpRequest and the Fetch
                        API follow the same-origin policy. This means that a web
                        application using those APIs can only request resources
                        from the same origin the application was loaded from
                        unless the response from other origins includes the
                        right CORS headers.
                    </p>
                </div>
            </div>
            <div>
                <h4 className="question">
                    Why are you using firebase? What other options do you have
                    to implement authentication?
                </h4>
                <div className="answer">
                    <p>
                        Firebase Authentication provides backend services,
                        easy-to-use SDKs, and ready-made UI libraries to
                        authenticate users to your app. It supports
                        authentication using passwords, phone numbers, popular
                        federated identity providers like Google, Facebook and
                        Twitter, and more.
                    </p>
                    <p>Advantages of using Firebase:</p>
                    <ul>
                        <li>Reliable & Extensive Databases</li>
                        <li>Fast & Safe Hosting</li>
                        <li>Google Analytics</li>
                        <li>Provides A Free Start to Newbies</li>
                        <li>Firebase Cloud Messaging for Cross-Platform</li>
                    </ul>
                    <p>
                        Here are some alternatives of Firebase Authentication:
                    </p>
                    <ul>
                        <li>Auth0</li>
                        <li>MongoDB</li>
                        <li>Okta</li>
                        <li>Passport</li>
                        <li>Keyclock</li>
                        <li>Amazon Cognito</li>
                    </ul>
                </div>
            </div>
            <div>
                <h4 className="question">How does the private route work?</h4>
                <div className="answer">
                    <p>
                        The react private route component renders child
                        components (children) if the user is logged in. If not
                        logged in the user is redirected to the /login page with
                        the return url passed in the location state property.
                    </p>
                    <p>
                        The current logged in user (authUser) is retrieved from
                        Redux state with a call to the useSelector() hook. Redux
                        is used in this example however it is not required to
                        implement a Private Route component in React Router 6.
                        You could use a different state management library or
                        any approach you prefer to get the logged in status of
                        the user.
                    </p>
                    <p>
                        The App component is the root component of the example
                        app, it contains the outer html, main nav and routes for
                        the application. The /login route is public, and the
                        home route (/) is protected by the private route
                        component that uses Redux to check if the user is logged
                        in. The last route is a catch-all redirect route that
                        redirects any unmatched paths to the home page.
                    </p>
                </div>
            </div>
            <div>
                <h4 className="question">What is Node? How does Node work?</h4>
                <div className="answer">
                    <p>
                        Node.js is an open-source, cross-platform, back-end
                        JavaScript runtime environment that runs on a JavaScript
                        Engine and executes JavaScript code outside a web
                        browser, which was designed to build scalable network
                        applications.
                    </p>
                    <p>
                        Node.js accepts the request from the clients and sends
                        the response, while working with the request node.js
                        handles them with a single thread. To operate I/O
                        operations or requests node.js use the concept of
                        threads. Thread is a sequence of instructions that the
                        server needs to perform. It runs parallel on the server
                        to provide the information to multiple clients. Node.js
                        is an event loop single-threaded language. It can handle
                        concurrent requests with a single thread without
                        blocking it for one request.
                    </p>
                    <p>Node.js basically works on two concept:</p>
                    <ul>
                        <li>Asynchronous</li>
                        <li>Non-blocking I/O</li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Blog;
