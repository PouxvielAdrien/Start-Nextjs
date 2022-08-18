import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
    render() {
        const opts = {
            height: "624",
            width: "1100",
            playerVars: {
                autoplay: 1,
            },
        };

        return (
            <div className="p-4">
                <YouTube
                    videoId="ohW2FXjhR_8"
                     opts={opts} onReady={this._onReady}
                />
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}