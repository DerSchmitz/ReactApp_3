import React, { Component } from 'react';
import { StyleSheet, Text,  AppRegistry, Image, View,  ScrollView, Animated, Button, Alert ,TouchableHighlight} from 'react-native';
import { Dimensions }  from 'react-native';
import PropTypes from 'prop-types';

// Import Styles
var styles = require('../../styles/styles.js');




export var HideableWidget = React.createComponent({

    getInitialState: function () {
        return {
            showWidget: false,
        };
    },
    toggleWidget: function () {
        this.setState({
            showWidget: !this.state.showWidget
        });
    },

    _renderWidget: function () {
        if (this.state.showWidget) {
            return (

                    <View>
                        <Text style={styles.caption}>Test</Text>
                    </View>
            );
        } else {
            return null;
        }
    },

    render: function () {
        return (
            <TouchableHighlight 
                onPress={this.toggleCancel()}>
            </TouchableHighlight>


            // {this._renderCancel()}          
        );
    }

});