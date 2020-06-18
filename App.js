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
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// const GopayFeature = (props) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center'}}>
//       <Image source={props.img}/>
//       <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.title}</Text>
//     </View>
//   )
// }

class GopayFeature extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={this.props.img}/>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{this.props.title}</Text>
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>        
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search */}
          <View style={{marginHorizontal: 17, paddingTop: 15, flexDirection: 'row'}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder='What do you want to eat' style={{borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}}></TextInput>
              <Image source={require('./src/assets/icon/search.png')} style={{position: 'absolute', top: 10, left: 12}}/>
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./src/assets/icon/promo.png')}/>
            </View>
          </View>
          {/* gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c5fbb', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 14}}>
              <Image source={require('./src/assets/icon/gopay.png')}/>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>RP. 50.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
              <GopayFeature title='Pay' img={require('./src/assets/icon/pay.png')}/>
              <GopayFeature title='Nerby' img={require('./src/assets/icon/nearby.png')}/>
              <GopayFeature title='Top Up' img={require('./src/assets/icon/topup.png')}/>
              <GopayFeature title='More' img={require('./src/assets/icon/more.png')}/>              
            </View>
          </View>
          {/* main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-ride.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-car.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-bluebird.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-send.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-SEND</Text>
              </View>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-deals.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-DEALS</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-pulsa.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-PULSA</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-food.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-more.png')}/>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>MORE</Text>
              </View>
            </View>            
          </View>
          <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 10}}></View>
          {/* new section */}
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./src/assets/dummy/sepak-bola.jpg')} style={{height: 200, width: '100%', borderRadius: 10}}/>
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 10}}></View>
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                <Image source={require('./src/assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}}/>
              </View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginBottom: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7a7a7a'}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* internal information  */}
          <View style={{padding: 16, paddingBottom: 0}}>
            <View style={{height: 15, width: 60, marginLeft: -4}}>
              <Image source={require('./src/assets/logo/gojek.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}}/>
            </View>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
            <View style={{flexDirection: 'row', marginBottom: 16}}>
              <View>
                <Image source={require('./src/assets/dummy/facebook-connect.png')} />
              </View>
              <View style={{marginLeft: 16, flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>Connect with Facebook</Text>
                <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%'}}>Log in faster without verification code</Text>
              </View>              
            </View>
            <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}}>
              <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16}}></View>
          </View>
          {/* FoFood banner section */}
          <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{height: 200, width: '100%', borderRadius: 10}}/>
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 10}}></View>
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                <Image source={require('./src/assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}}/>
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
          {/* nerby restaurant */}
          <View>
            <View style={{height: 15, width: 60, marginLeft: 16}}>
              <Image source={require('./src/assets/logo/go-food.png')} style={{height: undefined, width: undefined, resizeMode: 'contain', flex: 1}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>Nearby Reastaurant</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>See All</Text>
            </View>
            <ScrollView horizontal={true} style={{flexDirection: 'row', marginLeft: 16, marginVertical: 16}}>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>KFC Aeon Mall</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('./src/assets/dummy/go-food-banka.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>Martabak Banka</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('./src/assets/dummy/go-food-gm.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>Bakmi GM Aeon Mall</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>Martabak Orins</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('./src/assets/dummy/go-food-pak-boss.jpg')} style={{height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}}/>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20}}>Ayam Bakar Pak Boss</Text>
              </View>
            </ScrollView>
            <View style={{borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginBottom: 20}}></View>
          </View>
        </ScrollView>
        {/* nav bar menu bottom */}
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/home-active.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: '#43ab4a'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/order.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Order</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/help.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/inbox.png')}/> 
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/account.png')}/>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})