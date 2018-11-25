import React, { Component } from 'react';
import { StyleSheet, Text,  AppRegistry, Image, View,  ScrollView, Animated, Button, Alert } from 'react-native';
import { Dimensions }  from 'react-native';



// Import Styles
var styles = require('./src/styles/styles.js');

// Import Components
import { TourCta } from  './src/components/tourCta/index';
// import HideableWidget from './src/components/hideableWidget/index';


// retrieve data from local json-document
const data = require('./src/assets/data/touren.json');



export default class App extends React.Component { 


  // Set a default State for the hidden text
  constructor(){
    super();
    this.state ={
      showTheThing:false
    }
  }


// declare function for json-iterator
  createArticles = () => {

    // create Array for articles 
    let dataArray = []    

    // for every json-data node
    for (let i = 0; i < data.length; i++) {
      // Push another data-set into the array
    dataArray.push( 

      // Define Article Layout !!!
      <View style={styles.container}>

        
        <View style={styles.centerContainer}>      
          {/* Main-Image as Background on 50% height */}
          <Image source={{uri:data[i].mainImg }}   style={styles.homeImage} />  
            {/* Author as image-overlay */}
            <Text style={[styles.caption, styles.captionAuthor]}>{data[i].authorText}</Text>


            {/* CallToaAction with additional functionalities */}
            <TourCta  
            // toggle visibility of img-description
            onPress={() => (
              this.setState(previousState => (
                { showTheThing: !previousState.showTheThing }
              ))                 
            )} 
            name= {data[i].titleText}  />          
        </View>
          
        {/* conditional rendering of the img-description */}
        { this.state.showTheThing && 
          <Text  style={styles.textContainer} >{data[i].mainText}</Text>  
        }

      </View>
      
      )
      //   children.push(<Text>{`Column ${j + 1}`}</Text>)
    }
    // return Array to the render-function
    return dataArray
}

//  declare render-function 
  render() {
    return (


      <View >
        {/* DIsplay Navbar */}
        <View style={styles.topNavContainer}>
            <Text style={styles.navText}>Wallraf-Richartz Museum</Text>
        </View>


        {/* Main-Content */}
        <ScrollView  style={styles.scrollContainer}
        >


          
          <View style={styles.container}>

            {/* Start Iteration of Articles */}
            {this.createArticles()}

            {/* <Button       
              title="Go"
              onPress={this.json_function}         /> */}
          </View>



        </ScrollView>

      </View>

          );
        }
      }
