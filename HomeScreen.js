import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.subheading}>Explore my page</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    subheading: {
        fontSize: 15,
        color: 'red'
    }
})

export default HomeScreen