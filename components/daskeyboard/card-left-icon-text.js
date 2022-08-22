import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import React from "react";

export default function CardLeftIconText(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card border rounded-4">
                <div className="card-body pt-5 px-5 pb-5">
                    <div className="d-flex mb-3">
                        <Image
                            priority
                            src={`/images/daskeyboard/${props.img}`}
                            height={props.height}
                            width={props.width}
                            alt="icon"
                            className="img-fluid"
                        />
                    </div>
                    <h4 className="fw-bold">{props.title}</h4>
                    <p className="card-text text-secondary">{props.description}</p>
                </div>
            </div>
        </div>
    );
}