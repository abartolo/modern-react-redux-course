import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDm75YMahjptPjvEGB5qCZIZj41wJieMko';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.searchVideos('surfboards');
    }

    searchVideos(term) {
        YTSearch({ key: API_KEY, term }, videos => {
            console.log('youtube data', videos);
            this.setState({
                videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => this.searchVideos(term), 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelected={video => this.setState({ selectedVideo: video })}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));