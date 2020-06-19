import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import SearchFeature from '../../../component/molecules/SearchFeature';
import HomeGoPay from '../../organisms/HomeGoPay';
import HomeMainFeature from '../../organisms/HomeMainFeature';
import GoNews from '../../../component/molecules/GoNews';
import GoInfo from '../../../component/molecules/GoInfo';
import GoBanner from '../../../component/molecules/GoBanner';
import ScrollableProduct from '../../organisms/ScrollableProduct';
import NavBar from '../../organisms/NavBar';

class Home extends Component {
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
                    <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} />
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

export default Home;