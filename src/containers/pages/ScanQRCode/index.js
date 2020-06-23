import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const IconWithText = (props) => {
    return (
        <View>
            <View style={{width: 60, height: 60, borderRadius: 60, backgroundColor: 'green'}}/>
            <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>{props.title}</Text>
        </View>
    )
}

const IconAction = () => {
    return (
        <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'white'}}>            
        </View>
    )
}

class ScanQRCode extends React.Component {
    state = {
        barcode : ''
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'grey'}}>
                    <RNCamera
                        ref={(ref) => {
                            this.camera = ref;
                        }}
                        style={{height: '100%', 
                                width: '100%',                                 
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'center',}}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onBarCodeRead={(barcode) => {
                            console.log(barcode);
                            this.setState({
                                barcode: barcode.data,
                            })
                        }}
                        />
                    <View style={{flexDirection: 'row', paddingHorizontal: 16, marginTop: 16, justifyContent: 'space-between', top: 0, left: 0, position: 'absolute', width: '100%'}}>                        
                        <IconAction />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <IconAction />
                            <IconAction />
                        </View>
                    </View>
                </View>
                <View style={{height: 200, backgroundColor: 'white', paddingHorizontal: 16}}>
                    <View style={{alignItems: 'center', marginBottom: 18, marginTop: 8}}>
                        <View style={{width: 40, height: 3, backgroundColor: '#e0e0e0', marginVertical: 1}}></View>
                        <View style={{width: 40, height: 3, backgroundColor: '#e0e0e0', marginVertical: 1}}></View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>More Options</Text>
                        <Text style={{fontSize: 14, color: '#61a756', fontWeight: 'bold'}}>SHORTCUT</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%'}}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start', width: 150, justifyContent: 'space-between'}}>
                            <IconWithText title='Phone Number' />
                            <IconWithText title='Go Pay code' />
                        </View>
                        <View style={{width: 1, height: 60, backgroundColor: 'grey'}}></View>
                        <View style={{flex: 1, paddingLeft: 12}}>
                            {/* <Text>Your recent GoPay receivers will show here. No admin fees!</Text> */}
                            <Text>{this.state.barcode}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


export default ScanQRCode;