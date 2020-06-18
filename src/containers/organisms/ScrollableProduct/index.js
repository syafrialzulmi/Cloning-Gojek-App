import React, {Component} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';

class ScrollableProduct extends Component {
    render() {
        return (
            <View>
                <View style={{height: 15, width: 60, marginLeft: 16}}>
                <Image source={require('../../../assets/logo/go-food.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>Nearby Reastaurant</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>See All</Text>
                </View>
                <ScrollView horizontal={true} style={{flexDirection: 'row', marginLeft: 16, marginVertical: 16}}>
                <View style={{marginRight: 16}}>
                    <View style={{width: 150, height: 150, borderRadius: 10}}>
                    <Image source={require('../../../assets/dummy/go-food-kfc.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>KFC Aeon Mall</Text>
                </View>
                <View style={{marginRight: 16}}>
                    <View style={{width: 150, height: 150, borderRadius: 10}}>
                    <Image source={require('../../../assets/dummy/go-food-banka.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>Martabak Banka</Text>
                </View>
                <View style={{marginRight: 16}}>
                    <View style={{width: 150, height: 150, borderRadius: 10}}>
                    <Image source={require('../../../assets/dummy/go-food-gm.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>Bakmi GM Aeon Mall</Text>
                </View>
                <View style={{marginRight: 16}}>
                    <View style={{width: 150, height: 150, borderRadius: 10}}>
                    <Image source={require('../../../assets/dummy/go-food-orins.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>Martabak Orins</Text>
                </View>
                <View style={{marginRight: 16}}>
                    <View style={{width: 150, height: 150, borderRadius: 10}}>
                    <Image source={require('../../../assets/dummy/go-food-pak-boss.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>Ayam Bakar Pak Boss</Text>
                </View>
                </ScrollView>
                <View style={{borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginBottom: 20}}></View>
            </View>
        )
    }
}

export default ScrollableProduct;