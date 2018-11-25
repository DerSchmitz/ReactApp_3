import React, { Component } from 'react';
import { StyleSheet, Text,  AppRegistry, Image, View,  ScrollView, Animated } from 'react-native';
import { Dimensions }  from 'react-native';



const win = Dimensions.get('window');

'use strict';




module.exports = StyleSheet.create({

// global container styles
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textContainer: {
    paddingVertical:10 ,
    paddingHorizontal: 10,

  },

  centerContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: 'center',

  },


  topNavContainer: {
    width: win.width,
    paddingVertical:10 ,
    paddingHorizontal: 10,
    paddingTop: 30,
    backgroundColor: '#ccc',
  },
  scrollContainer: {
    height: win.height-65,
  },


//   text styles
  navText : {
    fontSize: 20,
    color: '#000',
  },

  caption :{
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingHorizontal:25,
    paddingVertical:15,  
  },

  captionText :{
    color: 'white',
  },

  captionCta :{
    position: 'absolute',
  },
  captionAuthor :{
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingHorizontal:5,
    paddingVertical:5,  
    position: 'absolute',
    bottom: 0,
    left:0,
  },

//   Image styles

  homeImage: {
    marginTop:0,
    width: win.width,
    height: win.height/2-35,
    resizeMode: 'cover',

  },

});