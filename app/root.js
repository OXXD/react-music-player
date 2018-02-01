import React from 'react';
import Header from './components/header'
import Progress from './components/progress'

let duration = null;
let Root = React.createClass({
    getInitialState() {
        return {
            progress: '-'
        }
    },
    componentDidMount() {
        $('#player').jPlayer({
            ready: function() {
                $(this).jPlayer('setMedia', {
                    mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            // this.setState({progress: Math.round(e.jPlayer.status.currentTime)})
            this.setState({progress: e.jPlayer.status.currentPercentAbsolute})
        });
    },
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate);
    },
    progressChangeHandler(progress) {
        $('#player').jPlayer('play', duration * progress);
    },
    render() {
        return (
            <div>
                <Header />
                <Progress progress={this.state.progress} onProgressChange={this.progressChangeHandler} barColor='#f00'></Progress>
            </div>
        );
    }
});

export default Root;