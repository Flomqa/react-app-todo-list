import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = props => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}   &#128157;</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#FF8C00',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 25
    }
})
