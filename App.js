import React, { Component } from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import params from './src/params'
import MinedField  from './src/components/MinedField';
import { createMinedBoard, openField, wonGame, cloneBoard, showMines, hadExplosion, invertFlag, flagUser } from './src/functions'
import Header from './src/components/Header';
import SelectLevel  from './src/screens/SelectLevel';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = this.createState();
  }

  getAmoutMined = () => {
    const rowAmount = params.getRowsAmount();
    const colsAmout = params.getColumnsAmount();
    return Math.ceil(rowAmount * colsAmout * params.difficultLevel);
  }

  createState = () => {
    const rowAmount = params.getRowsAmount();
    const colsAmout = params.getColumnsAmount(); 

    return {
      board: createMinedBoard(rowAmount, colsAmout, this.getAmoutMined()),
      win: false,
      lost: false,
      showLevelSelect : false
    } 
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const win = wonGame(board);
    const lost = hadExplosion(board);
    
    if (win) {
      Alert.alert('Parabéns', 'Você Venceu mas não na vida!');
    }

    if (lost) { 
      showMines(board);
      Alert.alert('Perdeuuuu!', 'Que Nuuuub');
    }

    this.setState({ board, lost, win });
  }

  onFlag = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const win = wonGame(board);

    if (win) {
      Alert.alert('Parabéns você ganhou');
    }
    this.setState({board ,win});
  }

  onLevelSelect = level => {
    params.difficultLevel = level;
    this.setState(this.createState());
  }

  render(){
    return (
      <View style={styles.container}>
        <SelectLevel isVisible={this.state.showLevelSelect} levelSelect={this.onLevelSelect} 
          cancel={() => this.setState({showLevelSelect: false})}></SelectLevel>
        <Header flagsLeft={this.getAmoutMined() - flagUser(this.state.board)}
        onNewGame={() => this.setState(this.createState())}
        onFlagPress={() => this.setState({showLevelSelect: true})}/>
        <View style={styles.board}>
          <MinedField board={this.state.board} 
            onOpenField={this.onOpenField}
            onFlag={this.onFlag}></MinedField>
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'flex-end',
    backgroundColor: '#AAA'
  }
});
