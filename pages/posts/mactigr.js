import styles from "../../components/layout.module.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import mactigr from "../../styles/mactigr.module.css";
import YoutubeVideo from "../../components/youtube";
import NavbarDk from "../../components/navbar-dk";

export default function Mactigr() {
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
                    src="/images/mactigr.png"
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
                    src="/images/mactigr2.png"
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
                <YoutubeVideo/>
            </div>
        </section>
        <section className="justify-content-center p-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-stretch">
                        <div className="card border rounded-4">
                            <Image
                                priority
                                src="/images/mactigr-left.png"
                                height={660}
                                width={1000}
                                alt="mactigr-left"
                                className="img-fluid"
                            />
                            <div className="card-body px-5 pb-5">
                                <div className="d-flex mb-3">
                                    <Image
                                        priority
                                        src="/images/hammer.svg"
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
                                src="/images/mactigr-right.png"
                                height={660}
                                width={1000}
                                alt="mactigr-left"
                                className="img-fluid"
                            />
                            <div className="card-body px-5 pb-5">
                                <div className="d-flex mb-3">
                                    <Image
                                        priority
                                        src="/images/mac-key.svg"
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
                    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div className="card border rounded-4">
                            <div className="card-body pt-5 px-5 pb-5">
                                <div className="d-flex mb-3">
                                    <Image
                                        priority
                                        src="/images/2-port-usb-c.svg"
                                        height={21}
                                        width={48}
                                        alt="icon usb-c"
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
                    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div className="card border rounded-4">
                            <div className="card-body pt-5 px-5 pb-5">
                                <div className="d-flex mb-3">
                                    <Image
                                        priority
                                        src="/images/low-pro-switches.svg"
                                        height={46}
                                        width={48}
                                        alt="icon low-switches"
                                        className="img-fluid"
                                    />
                                </div>
                                <h4 className="fw-bold">Cherry MX red switches</h4>
                                <p className="card-text text-secondary">The low profile Cherry MX red switches provide
                                    a seamless typing experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div className="card border rounded-4">
                            <div className="card-body pt-5 px-5 pb-5">
                                <div className="d-flex mb-3">
                                    <Image
                                        priority
                                        src="/images/low-pro-cap.svg"
                                        height={30}
                                        width={48}
                                        alt="icon low-pro-cap"
                                        className="img-fluid"
                                    />
                                </div>
                                <h4 className="fw-bold">Low profile keycaps</h4>
                                <p className="card-text text-secondary">Made by Das Keyboard, these doubleshot PBT
                                    keycaps are durable, and will not fade or wear down.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
    </div>
    );
}