import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GopayFeature from '../../../component/molecules/GopayFeature';


class HomeGoPay extends Component {
    render() {
        return (
            <View style={{marginHorizontal: 17, marginTop: 8}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c5fbb', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 14}}>
                    <Image source={require('../../../assets/icon/gopay.png')}/>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>RP. 50.000</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    <GopayFeature title='Pay' img={require('../../../assets/icon/pay.png')}/>
                    <GopayFeature title='Nerby' img={require('../../../assets/icon/nearby.png')}/>
                    <GopayFeature title='Top Up' img={require('../../../assets/icon/topup.png')}/>
                    <GopayFeature title='More' img={require('../../../assets/icon/more.png')}/>              
                </View>
            </View>
        )
    }
}

export default HomeGoPay;