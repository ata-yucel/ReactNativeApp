import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'


const CounterSample = () => {
const [myInt, setmyInt] = useState(0)
const increase = () => { setmyInt(myInt+1) }

    return (
    <View style={{flex : 1, justifyContent: 'center', alignItems:'center'}}>
      <Text style={styles.textStyle}>{myInt}</Text>
<Button
onPress={increase}
title= {"Increase"}
color={"turquoise"}
accessibilityLabel="Learn more about this purple button"



/>
      <Button
  onPress={()=>setmyInt(myInt-1)}
  title= {"Decrease"}
  color={"turquoise"}
  accessibilityLabel="Learn more about this purple button"

  
/>
    </View>
  )
}

export default CounterSample


const styles = StyleSheet.create({
    textStyle : {
        fontSize : 40,
        color : "red",
        textAlign : "central"
    }
})







