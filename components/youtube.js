import React from "react";
import YouTube from "react-youtube";
import youtube from "../styles/youtube.module.css";

export default class YoutubeVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const opts = {
            height: this.props.height,
            width: this.props.width,
            playerVars: {
                autoplay: 0,
            },
        };

        return (
            <div className="p-4">
                <div className={youtube.videoResponsive}>
                    <YouTube
                        videoId={this.props.value}
                         opts={opts} onReady={this._onReady}
                    />
                </div>
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}