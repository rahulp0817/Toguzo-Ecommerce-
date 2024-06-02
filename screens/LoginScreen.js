import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white", alignItems:"center"}}>
      <ScrollView>
        <View>
          <Text>Login my page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})