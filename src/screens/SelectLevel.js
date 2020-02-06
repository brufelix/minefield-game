import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export default props => {
    return(
        <Modal onRequestClose={props.cancel} visible={props.isVisible} animationType='slide'>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Select Level</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} 
                    onPress={() => props.levelSelect(0.1)}>
                        <Text style={styles.buttonLabel}>Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ [styles.button, styles.bgMediun] }
                    onPress={() => props.levelSelect(0.2)}>
                        <Text style={styles.buttonLabel}>Mediun</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]}
                    onPress={() => levelSelect(0.3)}>
                        <Text style={styles.buttonLabel}>Hard</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel:{
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgMediun:{
        backgroundColor: '#2765F7',
    },
    bgHard:{
        backgroundColor: '#F26337'
    }
});