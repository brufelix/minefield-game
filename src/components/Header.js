import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Flag from './Flag';

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    <Flag Bigger/>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>{props.flagsLeft}</Text>
            </View>
            <TouchableOpacity onPress={props.onNewGame} style={styles.button}>
                <Text style={styles.buttonLabel}>New Game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'#AAA',
        alignItems: 'center',
        justifyContent:'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer:{
        flexDirection: 'row'
    },
    flagButton:{
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft:{
        fontSize: 30,
        fontWeight: 'bold'
    },button:{
        backgroundColor: '#999',
        padding: 5
    },
    buttonLabel:{
        fontSize: 20,
        color: '#222',
        fontWeight: 'bold'
    }

});