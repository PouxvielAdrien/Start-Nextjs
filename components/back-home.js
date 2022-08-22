import styles from "./layout.module.css";
import Link from "next/link";

export default function BackHome() {
    return (
        <div >
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
    );
}