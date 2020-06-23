import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import NavBar from '../../organisms/NavBar';

const Orders = (props) => {
    return (
        <View style={{flex: 1}}>        
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <Text>Orders Page</Text>
            <Button title='Go to Orders Detail' onPress={() => props.navigation.navigate('OrdersDetail')} />
        </ScrollView>
        {/* nav bar menu bottom */}
        <NavBar />
    </View>      
    )
}

export default Orders;