import React from 'react';
import {View, Image, TextInput} from 'react-native';

const SearchFeature = () => {
    return (
        <View style={{marginHorizontal: 17, paddingTop: 15, flexDirection: 'row'}}>
            <View style={{position: 'relative', flex: 1}}>
                <TextInput placeholder='What do you want to eat' style={{borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}}></TextInput>
                <Image source={require('../../../assets/icon/search.png')} style={{position: 'absolute', top: 10, left: 12}}/>
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../../../assets/icon/promo.png')}/>
            </View>
        </View>
    )
}

export default SearchFeature;