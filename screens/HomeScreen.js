import { View, Text, SafeAreaView, TextInput, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Microphone from '../assets/Homepage/Microphone.svg'
import Wishlist from '../assets/Homepage/Wishlist.svg'
import BellIcon from '../assets/Homepage/BellIcon.svg'
import SearchIcon from '../assets/Homepage/SearchIcon.svg'
import Camera from '../assets/Homepage/Camera.svg'
import UserIcon from '../assets/Homepage/UserIcon.svg'
import Stroke from '../assets/Homepage/Stroke.svg'
import Logo from '../assets/Homepage/Logo.svg'
import Products from '../components/HomePage/Products'
import { useNavigation } from '@react-navigation/native';
import BrandCar from '../components/HomePage/BrandCar';
import Banner from '../components/HomePage/Banner';
import Promotedproducts from '../components/HomePage/Promotedproducts';

const HomeScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.TopBorder}>
          <Logo width={35} height={35} style={{ margin: 20 }} />
          <Pressable style={styles.TopNotify}>
            <Wishlist onPress={() => navigation.navigate("Wishlist")} size={35} color="#4B4E4E" />
            <BellIcon onPress={() => navigation.navigate("Notifications")} size={35} color="#4B4E4E" />
          </Pressable>
        </View>
        <View style={{ backgroundColor: '#F2F3F3', }}>
          <View style={styles.TopLog}>
            <UserIcon size={20} color="#00CCBB" />
            <Text onPress={() => navigation.navigate("Login")} style={{ fontSize: 14, fontWeight: 500 }}>
              <Text style={{ color: '#3D8F84' }}> Login </Text> to get exclusive offers
            </Text>
            <Stroke size={20} />
          </View>
        </View>
        <Pressable style={styles.SearchBar}>
          <View style={styles.SearchBarInput}>
            <SearchIcon style={{ width: 20, height: 20 }} />
            <TextInput
              placeholder="Search for Products"
              style={{ flex: 1, fontWeight: 'normal' }}
              placeholderTextColor={'#7C7E7E'}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Camera style={{ width: 20, height: 20 }} />
              <Microphone width={20} height={20} />
            </View>
          </View>
        </Pressable>
        <Text style={{
          borderColor: '#F2F3F3',
          height: 1,
          borderWidth: 3,
        }} />
        <Products />
        <Text style={{
          borderColor: '#F2F3F3',
          height: 1,
          borderWidth: 3,
        }} />
        <BrandCar />
        <Text style={{
          borderColor: '#F2F3F3',
          height: 1,
          borderWidth: 3,
        }} />
        <Banner />
        <Promotedproducts />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  TopBorder: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 64,
    gap: 10
  },
  TopLog: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginLeft: 20,
    gap: 5
  },
  SearchBar: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
  },
  SearchBarInput: {
    borderColor: '#CBCDCD',
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    height: 52,
    gap: 16,
    margin: 20,
  },
  TopNotify: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    gap: 20
  }
});
