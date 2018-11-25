import React, { Component } from 'react';
import { StyleSheet, Text,  AppRegistry, Image, View,  ScrollView, Animated , TouchableNativeFeedback} from 'react-native';
import { Dimensions }  from 'react-native';

// Import Styles
var styles = require('../../styles/styles.js');


// Man erschaffe eine neue Klasse für jxml_Elemente, welche
export class TourCta extends Component {
      render() {
        return (
          // folgenden jxml-output bedeuten

                        // nehme den Attributwert von "Name" und setze es an den String an
            
            <TouchableNativeFeedback 
            // onPress={this._onPressButton}            
            onPress={this.props.onPress}
            background={TouchableNativeFeedback.SelectableBackground()}
            >
                <View style={[styles.caption, styles.captionCta]}>
                    <Text     style= {styles.captionText}                           > 
                        {this.props.name}-Tour starten
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
      }
  }