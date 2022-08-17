import React from "react";
import { ScrollView, View, Text, Button } from "react-native";


const RedWire = (props) => {
    return(
        <ScrollView 
            style={{
            backgroundColor: "red"
          }}>
            <Text 
                style={{
                    fontSize:100,
                    color:"white"
                    
                  }}   
            >
                Red
            </Text>
            <Text 
                style={{
                    fontSize:100,
                    color:"white",
                    textAlign:"right"
                  }}   
            >
                Wire
            </Text>
            <Button
                color="red"
                title="Apple News"
                onPress={()=> props.navigation.navigate('Apple')}
            />
            <Button 
                color="red"
                title="TechCrunch"
                onPress={()=> props.navigation.navigate('TechCrunch')}
            />
            <Button 
                color="red"
                title="WallStreet"
                onPress={()=> props.navigation.navigate('WallStreet')}
            />
            
        </ScrollView>
    )
}

export default RedWire;