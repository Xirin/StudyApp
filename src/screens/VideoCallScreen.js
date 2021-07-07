import React, {Component} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {
    View,
    LogBox,
} from 'react-native'

export default class VideoCallScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoCall: true,
        }
    }    

    render() {
        LogBox.ignoreAllLogs();

        const rtcProps = {
            appId: '573557ec13bc4538bdf45c56fe439e73',
            channel: 'test',
        };

        const callbacks = {
            EndCall: () => this.setState({ videoCall: false }),
        };

        if(this.state.videoCall == true) {
            return (
                <AgoraUIKit rtcProps = {rtcProps} callbacks = { callbacks }  />
            );
        } else {
            return (
                <View>
                    {this.props.navigation.navigate('Profile')}
                </View>
            );
        }
    }
}