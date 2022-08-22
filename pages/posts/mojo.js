import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackHome from "../../components/back-home";
import React from "react";
import YoutubeVideo from "../../components/youtube";
import NavbarMojo from "../../components/mojo/navbar-mojo";

export default class Mojo extends React.Component {
    constructor(props){
        super(props);
        this.videoId="T0lgE9NcTAc"
        this.height="581"
        this.width="900"
        // example where to catch the videoId on Youtube (after the v=) :
        // https://www.youtube.com/watch?v=T0lgE9NcTAc&ab_channel=MojoHelpdesk
    }

    render(){
        return (
            <div>

                <NavbarMojo/>

                <section className="mt-5">
                    <div className="container">
                        <div className="text-center align-content-center justify-content-center">

                            <div className="mx-auto">
                                <h1 className="text-capitalize mb-4">The Best Solution To Support Customers & Employees</h1>
                                <p>Mojo Helpdesk makes customer service easy. Centralize requests, assign, automate,
                                    track progress, and get more done faster.</p>
                            </div>

                            <YoutubeVideo
                                value={this.videoId}
                                width={this.width}
                                height={this.height}
                            />

                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <div className="pt-2 pb-2 pe-3">
                                        <Link href="/">
                                            <a className="accordion-button">Try for free -></a>
                                        </Link>
                                    </div>
                                    <div className="pt-2 pb-2">
                                        <Link href="/">
                                            <a className="accordion-button">Request a demo -></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row mt-4 border-top p-4">
                            <div className="col-4 col-sm-12 col-md-12 col-lg-4 px-2">
                                <div className="item">
                                    <svg className="svg-inline--fa fa-folder fa-w-16 icon" aria-hidden="true"
                                         focusable="false" data-prefix="fas" data-icon="folder" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         data-fa-i2svg="" width="48" height="48">
                                        <path fill="currentColor"
                                              d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0
                                                      26.51 21.49 48 48 48h416c26.51 0
                                                      48-21.49 48-48V176c0-26.51-21.49-48-48-48z">

                                        </path>
                                    </svg>
                                    <h4 className="mb-3 mt-3">Centralize requests</h4>
                                    <p className="text-muted">Still using spreadsheets and emails for requests?
                                        Migrate to Mojo Helpdesk to put them all in a powerful but simple ticket
                                        tracking.
                                    </p>
                                </div>
                            </div>

                            <div className="col-4 col-sm-12 col-md-12 col-lg-4 px-2">
                                <div className="item">
                                    <svg className="svg-inline--fa fa-location-arrow fa-w-16 icon"
                                         aria-hidden="true" focusable="false" data-prefix="fas"
                                         data-icon="location-arrow" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                         data-fa-i2svg="" width="48" height="48">
                                        <path fill="currentColor"
                                              d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19
                                                      92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.
                                                      78c15.99-38.39-25.59-79.97-63.97-63.97z">

                                        </path>
                                    </svg>
                                    <h4 className="mb-3 mt-3">Knowledge base</h4>
                                    <p className="text-muted">Cut down incoming requests with the self-service
                                        knowledge base.
                                    </p>
                                </div>
                            </div>

                            <div className="col-4 col-sm-12 col-md-12 col-lg-4 px-2">
                                <div className="item">
                                    <svg className="svg-inline--fa fa-cogs fa-w-20 icon" aria-hidden="true"
                                         focusable="false" data-prefix="fas" data-icon="cogs" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                                         data-fa-i2svg="" width="48" height="48">
                                        <path fill="currentColor"
                                              d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z">
                                        </path>
                                    </svg>
                                    <h4 className="mb-3 mt-3">Assign, prioritize, tag</h4>
                                    <p className="text-muted">Mojo keeps things organized. Tickets can be
                                        assigned and tagged. Mojo automation can do all this automatically.
                                    </p>
                                </div>



                            </div>
                        </div>



                    </div>
                </section>





                <BackHome/>
            </div>
        )
    }

}
