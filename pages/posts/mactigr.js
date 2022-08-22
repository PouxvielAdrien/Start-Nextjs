import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import mactigr from "../../styles/mactigr.module.css";
import YoutubeVideo from "../../components/youtube";
import NavbarDk from "../../components/daskeyboard/navbar-dk";
import BackHome from "../../components/back-home";
import React from "react";
import CardLeftIconText from "../../components/daskeyboard/card-left-icon-text";

export default class Mactigr extends React.Component {
    constructor(props){
        super(props);
        this.videoId="ohW2FXjhR_8"
        this.videoHeight="660"
        this.videoWidth="1100"

    }

    render(){
        return (

            <div className="">
                <NavbarDk/>
                <section className="justify-content-center bg-black p-5 mb-5">
                    <div className="container text-center">
                        <div className="text-content ">
                            <h4 className={mactigr.macTitle}>MacTigr</h4>
                            <h2 className={mactigr.verticalGradient}>The real king of the jungle.</h2>
                        </div>
                        <Image
                            priority
                            src="/images/daskeyboard/mactigr.png"
                            height={449}
                            width={1048}
                            alt="mactigr"
                            className="img-fluid"
                        />
                        {/*<div className={mactigr.textSuperpostion}>*/}
                        {/*    <h2 className={mactigr.p}>The real king of the jungle.</h2>*/}
                        {/*</div>*/}
                    </div>
                </section>
                <section className="justify-content-center p-5 mb-5">
                    <div className="container text-center">
                        <div className="text-content">
                            <h1 className={mactigr.verticalGradient}>100% Metal.</h1>
                            <h2 className="fw-bold">A reference mechanical keyboard for Mac users.</h2>
                            <p className="text-secondary">Aluminum unibody, stainless steel top.
                                MacTigr is built to last.</p>
                        </div>
                        <Image
                            priority
                            src="/images/daskeyboard/mactigr2.png"
                            height={624}
                            width={1100}
                            alt="mactigr"
                            className="img-fluid"
                        />
                    </div>
                </section>
                <section className="justify-content-center bg-black p-5">
                    <div className="container text-center">
                        <div className="text-content mt-5">
                            <h1 className={mactigr.verticalGradient}>Discovering MacTigr.</h1>
                        </div>

                        <YoutubeVideo
                            value={this.videoId}
                            height={this.videoHeight}
                            width={this.videoWidth}
                        />

                    </div>
                </section>
                <section className="justify-content-center p-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex align-items-stretch">
                                <div className="card border rounded-4">
                                    <Image
                                        priority
                                        src="/images/daskeyboard/mactigr-left.png"
                                        height={660}
                                        width={1000}
                                        alt="mactigr-left"
                                        className="img-fluid"
                                    />
                                    <div className="card-body px-5 pb-5">
                                        <div className="d-flex mb-3">
                                            <Image
                                                priority
                                                src="/images/daskeyboard/hammer.svg"
                                                height={48}
                                                width={48}
                                                alt="icon hammer"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4 className="fw-bold">100% metal</h4>
                                        <p className="card-text text-secondary">Encased entirely in metal, MacTigr features a slim, unibody housing made of gunmetal
                                            gray aluminum, and a heavy-duty, matte black stainless steel plate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-stretch">
                                <div className="card border rounded-4">
                                    <Image
                                        priority
                                        src="/images/daskeyboard/mactigr-right.png"
                                        height={660}
                                        width={1000}
                                        alt="mactigr-left"
                                        className="img-fluid"
                                    />
                                    <div className="card-body px-5 pb-5">
                                        <div className="d-flex mb-3">
                                            <Image
                                                priority
                                                src="/images/daskeyboard/mac-key.svg"
                                                height={48}
                                                width={48}
                                                alt="icon mac-key"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4 className="fw-bold">Mac features</h4>
                                        <p className="card-text text-secondary">The MacTigr sports many of the features
                                            Mac loyalists would expect, and then some.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row p-4">
                            <CardLeftIconText
                                height={"21"}
                                width={"48"}
                                title={"Mac features"}
                                description={"The MacTigr sports many of the features " +
                                    "Mac loyalists would expect, and then some."}
                                img={"2-port-usb-c.svg"}
                            />
                            <CardLeftIconText
                                height={"46"}
                                width={"48"}
                                title={"Cherry MX red switches"}
                                description={"The low profile Cherry MX red switches provide " +
                                    "a seamless typing experience."}
                                img={"low-pro-switches.svg"}
                            />
                            <CardLeftIconText
                                height={"30"}
                                width={"48"}
                                title={"Low profile keycaps"}
                                description={"Made by Das Keyboard, these doubleshot PBT " +
                                    "keycaps are durable, and will not fade or wear down."}
                                img={"low-pro-cap.svg"}
                            />
                        </div>
                    </div>
                </section>

                <BackHome/>

            </div>
        );
    }

}