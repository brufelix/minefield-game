import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from './Field';

export default props => {
    const row = props.board.map((row, r)=> {
        const column = row.map((column, c) => {
            return <Field {...column} key={c} 
                onOpen={() => props.onOpenField(r, c)}
                onFlag={() => props.onFlag(r, c)}/>
        });
        return <View key={r} style={{flexDirection: 'row'}} >{column}</View>
    });
    return <View style={styles.container}>{row}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
});