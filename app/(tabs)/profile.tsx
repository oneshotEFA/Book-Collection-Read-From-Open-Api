import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
    const styleses = StyleSheet.create({
        container:{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height:'100%'
        }
    })
      return (
        <View
         style={styleses.container}
        >
      <Text>profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})