import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../component/molecules/NavBarIcon';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();
    return (
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
            <NavBarIcon onPress={() => navigation.navigate('Home')} title='Home' img={require('../../../assets/icon/home-active.png')} active/>
            <NavBarIcon onPress={() => navigation.navigate('Orders')} title='Orders' img={require('../../../assets/icon/order.png')} />
            <NavBarIcon title='Help' img={require('../../../assets/icon/help.png')} />
            <NavBarIcon title='Inbox' img={require('../../../assets/icon/inbox.png')} />
            <NavBarIcon title='Account' img={require('../../../assets/icon/account.png')} />          
        </View>
    )
}

export default NavBar;