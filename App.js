/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import GopayFeature from './src/component/molecules/GopayFeature';
// import MainFeature from './src/component/molecules/MainFeature';
import SearchFeature from './src/component/molecules/SearchFeature';
import GoNews from './src/component/molecules/GoNews';
import GoInfo from './src/component/molecules/GoInfo';
import GoBanner from './src/component/molecules/GoBanner';
import ScrollableProduct from './src/containers/organisms/ScrollableProduct';
// import NavBarIcon from './src/component/molecules/NavBarIcon';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>        
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search */}
          <SearchFeature />
          {/* gopay */}
          <HomeGoPay />
          {/* main feature */}
          <HomeMainFeature />
          <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 10}}></View>
          {/* news section */}
          <GoNews />
          {/* internal information  */}
          <GoInfo />
          {/* FoFood banner section */}
          <GoBanner />
          {/* nerby restaurant */}
          <ScrollableProduct />
        </ScrollView>
        {/* nav bar menu bottom */}
        <NavBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})