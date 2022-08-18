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

            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>

        </section>
    </div>
    );
}