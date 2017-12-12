import React from 'react';

const VideoListItem = (props) => {
    const { video, onVideoClick } = props;
    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => onVideoClick(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;