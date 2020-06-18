import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoBanner = () => {
    return (
        <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
                <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{height: 200, width: '100%', borderRadius: 10}}/>
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10}}></View>
                <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                    <Image source={require('../../../assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}}/>
                </View>
                <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                    <View style={{}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white', marginBottom: 8}}>Free GO-FOOD voucher</Text>
                        <Text style={{fontWeight: '500', fontSize: 13, color: 'white'}}>Quick, before they run out</Text>
                    </View>
                    <View style={{flex: 1, paddingLeft: 12}}>
                        <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}}>
                            <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
        </View>
    )
}

export default GoBanner;