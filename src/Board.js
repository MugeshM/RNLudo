/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { range, map, find, findIndex } from 'lodash';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen');
const colors = {
  '6,1': { color: '#FF0' },
  '7,1': { color: '#FF0' },
  '7,2': { color: '#FF0' },
  '7,3': { color: '#FF0' },
  '7,4': { color: '#FF0' },
  '7,5': { color: '#FF0' },
  '2,3': { color: '#FF0' },
  '3,2': { color: '#FF0' },
  '3,4': { color: '#FF0' },
  '4,3': { color: '#FF0' },
  '7,6': { color: '#FF0' },
  '1,8': { color: '#F00' },
  '1,7': { color: '#F00' },
  '2,7': { color: '#F00' },
  '3,7': { color: '#F00' },
  '4,7': { color: '#F00' },
  '5,7': { color: '#F00' },
  '2,11': { color: '#F00' },
  '3,10': { color: '#F00' },
  '3,12': { color: '#F00' },
  '4,11': { color: '#F00' },
  '6,7': { color: '#F00' },
  '8,13': { color: '#F0F' },
  '7,13': { color: '#F0F' },
  '7,12': { color: '#F0F' },
  '7,11': { color: '#F0F' },
  '7,10': { color: '#F0F' },
  '7,9': { color: '#F0F' },
  '12,11': { color: '#F0F' },
  '11,12': { color: '#F0F' },
  '11,10': { color: '#F0F' },
  '10,11': { color: '#F0F' },
  '7,8': { color: '#F0F' },
  '13,6': { color: '#00F' },
  '13,7': { color: '#00F' },
  '12,7': { color: '#00F' },
  '11,7': { color: '#00F' },
  '10,7': { color: '#00F' },
  '9,7': { color: '#00F' },
  '12,3': { color: '#00F' },
  '11,4': { color: '#00F' },
  '10,3': { color: '#00F' },
  '11,2': { color: '#00F' },
  '8,7': { color: '#00F' },
  '7,7': { color: '#AAA' },
};
const data = [15, 15];
const playerAPath = ['6,1', '6,2', '6,3', '6,4', '6,5', '5,6', '4,6', '3,6', '2,6', '1,6', '0,6', '0,7', '0,8', '1,8', '2,8', '3,8',
  '4,8', '5,8', '6,9', '6,10', '6,11', '6,12', '6,13', '6,14', '7,14', '8,14', '8,13', '8,12', '8,11', '8,10', '8,9', '9,8', '11,8', '12,8', '13,8', '14,8',
  '14,7', '14,6', '13,6', '12,6', '11,6', '10,6', '9,6', '8,5', '8,4', '8,3', '8,2', '8,1', '8,0', '7,0', '7,1', '7,2', '7,3', '7,4', '7,5', '7,6'];
const playerBPath = ['1,8', '2,8', '3,8', '4,8', '5,8', '6,9', '6,10', '6,11', '6,12', '6,13', '6,14', '7,14', '8,14', '8,13', '8,12', '8,11', '8,10', '8,9', '9,8', '11,8', '12,8', '13,8', '14,8',
  '14,7', '14,6', '13,6', '12,6', '11,6', '10,6', '9,6', '8,5', '8,4', '8,3', '8,2', '8,1', '8,0', '7,0', '6,0', '6,1', '6,2', '6,3', '6,4', '6,5', '5,6', '4,6', '3,6', '2,6', '1,6', '0,6', '0,7', '1,7',
  '2,7', '3,7', '4,7', '5,7', '6,7'];
const playerCPath = ['8,13', '8,12', '8,11', '8,10', '8,9', '9,8', '11,8', '12,8', '13,8', '14,8', '14,7', '14,6', '13,6', '12,6', '11,6', '10,6', '9,6', '8,5', '8,4', '8,3', '8,2', '8,1', '8,0', '7,0', '6,0',
  '6,1', '6,2', '6,3', '6,4', '6,5', '5,6', '4,6', '3,6', '2,6', '1,6', '0,6', '0,7', '0,8', '1,8', '2,8', '3,8', '4,8', '5,8', '6,9', '6,10', '6,11', '6,12', '6,13', '6,14', '7,14', '7,13',
  '7,12', '7,11', '7,10', '7,9', '7,8'];
const playerDPath = ['13,6', '12,6', '11,6', '10,6', '9,6', '8,5', '8,4', '8,3', '8,2', '8,1', '8,0', '7,0', '6,0',
  '6,1', '6,2', '6,3', '6,4', '6,5', '5,6', '4,6', '3,6', '2,6', '1,6', '0,6', '0,7', '0,8', '1,8', '2,8', '3,8', '4,8', '5,8', '6,9', '6,10', '6,11', '6,12', '6,13', '6,14', '7,14', '8,14',
  '8,13', '8,12', '8,11', '8,10', '8,9', '9,8', '11,8', '12,8', '13,8', '14,8', '14,7', '13,7', '12,7', '11,7', '10,7', '9,7', '8,7'];
const playerAcolor = '#FA0';
const playerBcolor = '#CDC';
const playerCcolor = '#BAF';
const playerDcolor = '#0CF';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerA: [{ pos: '2,3', index: -1 }, { pos: '3,2', index: -1 }, { pos: '3,4', index: -1 }, { pos: '4,3', index: -1 }],
      playerB: [{ pos: '2,11', index: -1 }, { pos: '3,10', index: -1 }, { pos: '3,12', index: -1 }, { pos: '4,11', index: -1 }],
      playerC: [{ pos: '10,11', index: -1 }, { pos: '11,10', index: -1 }, { pos: '11,12', index: -1 }, { pos: '12,11', index: -1 }],
      playerD: [{ pos: '10,3', index: -1 }, { pos: '11,2', index: -1 }, { pos: '11,4', index: -1 }, { pos: '12,3', index: -1 }],
      turn: 'a',
      currentRoll: '',
      rollEnabled: true,
    };
    this.checkCoinPosition = this.checkCoinPosition.bind(this);
    this.moveCoin = this.moveCoin.bind(this);
    this.rollADie = this.rollADie.bind(this);
    this.checkValidMoveAvailable = this.checkValidMoveAvailable.bind(this);
  }
  componentDidMount() {
  }
  checkCoinPosition(r, c) {
    let playerACoin = findIndex(this.state.playerA, (coin) => { return coin.pos === r + ',' + c; });
    if (playerACoin !== -1) {
      return { coinColor: playerAcolor, player: 'A', coin: this.state.playerA[playerACoin], index: playerACoin };
    } else {
      let playerBCoin = findIndex(this.state.playerB, (coin) => { return coin.pos === r + ',' + c; });
      if (playerBCoin !== -1) {
        return { coinColor: playerBcolor, player: 'B', coin: this.state.playerB[playerBCoin], index: playerBCoin };
      } else {
        let playerCCoin = findIndex(this.state.playerC, (coin) => { return coin.pos === r + ',' + c; });
        if (playerCCoin !== -1) {
          return { coinColor: playerCcolor, player: 'C', coin: this.state.playerC[playerCCoin], index: playerCCoin };
        } else {
          let playerDCoin = findIndex(this.state.playerD, (coin) => { return coin.pos === r + ',' + c; });
          if (playerDCoin !== -1) {
            return { coinColor: playerDcolor, player: 'D', coin: this.state.playerD[playerDCoin], index: playerDCoin };
          } else {
            return false;
          }
        }
      }
    }
  }
  moveCoin(player, coinIndex, fromIndex, indexToAdd) {
    if (player === 'a') {
      let prevState = [...this.state.playerA];
      let toIndex = prevState[coinIndex].index + indexToAdd;
      if (toIndex <= 55) {
        prevState[coinIndex].index = toIndex;
        prevState[coinIndex].pos = playerAPath[toIndex];
        this.setState({ playerA: prevState });
      }
    } else if (player === 'b') {
      let prevState = [...this.state.playerB];
      let toIndex = prevState[coinIndex].index + indexToAdd;
      prevState[coinIndex].index = toIndex;
      prevState[coinIndex].pos = playerBPath[toIndex];
      this.setState({ playerB: prevState });
    } else if (player === 'c') {
      let prevState = [...this.state.playerC];
      let toIndex = prevState[coinIndex].index + indexToAdd;
      prevState[coinIndex].index = toIndex;
      prevState[coinIndex].pos = playerCPath[toIndex];
      this.setState({ playerC: prevState });
    } else if (player === 'd') {
      let prevState = [...this.state.playerD];
      let toIndex = prevState[coinIndex].index + indexToAdd;
      prevState[coinIndex].index = toIndex;
      prevState[coinIndex].pos = playerDPath[toIndex];
      this.setState({ playerD: prevState });
    }
  }
  rollADie() {
    let currentTurn = this.state.nextTurn || 'a';
    let toPosition = Math.floor(Math.random() * 6) + 1;
    //nextTurn
    let nextTurn = currentTurn;
    if (toPosition !== 6) {
      nextTurn = currentTurn === 'a' ? 'b' : currentTurn === 'b' ? 'c' : currentTurn === 'c' ? 'd' : 'a';
    }
    // Automate coin movement when only one coin available
    // this.moveCoin(currentTurn, 1, 0, toPosition);

    if (this.checkValidMoveAvailable(currentTurn, toPosition)) {
      this.setState({ nextTurn: nextTurn, turn: currentTurn, currentRoll: toPosition, rollEnabled: false });
    } else {
      this.setState({ nextTurn: nextTurn, turn: currentTurn, currentRoll: toPosition, rollEnabled: true });
    }
  }
  checkValidMoveAvailable(player, indexToAdd) {
    let playerCoins = player === 'a' ? this.state.playerA : player === 'b' ? this.state.playerB : player === 'c' ? this.state.playerC : player === 'd' ? this.state.playerD : [];
    let validCoin = find(playerCoins, (coin) => {
      return (coin.index !== -1 && (coin.index + indexToAdd) <= 55)
        || (coin.index === -1 && indexToAdd === 6);
    });
    return validCoin;
  }
  render() {
    let renderRow = () => {
      return map(range(0, data[0]), (r) => {
        return (
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
            {map(range(0, data[1]), (c) => {
              let { coinColor, player, coin, index } = this.checkCoinPosition(r, c);
              return <View style={{
                borderColor: (r < 6 && c < 6) ||
                  (r > 8 && c < 6) ||
                  (r < 6 && c > 8) ||
                  (r > 8 && c > 8) ? '#FFF' : '#000',
                borderWidth: 1,
                flex: 1,
                alignSelf: 'stretch',
                backgroundColor: colors
                  && colors[r + ',' + c] && colors[r + ',' + c].color
                  ? colors[r + ',' + c].color : '#fff',
              }} >
                {coinColor ? <TouchableOpacity
                  onPress={() => {
                    if (player && player.toLowerCase() === this.state.turn && coin) {
                      let coinMoved = false;
                      if (((coin.index === -1 && this.state.currentRoll === 6) || coin.index !== -1)) {
                        let currentRoll = this.state.currentRoll;
                        currentRoll = coin.index === -1 && currentRoll === 6 ? 1 : currentRoll;
                        coinMoved = true;
                        this.moveCoin(player.toLowerCase(), index, 0, currentRoll);
                      }
                      let currentTurn = this.state.turn;
                      let nextTurn = currentTurn;
                      if (this.state.currentRoll !== 6) {
                        nextTurn = currentTurn === 'a' ? 'b' : currentTurn === 'b' ? 'c' : currentTurn === 'c' ? 'd' : 'a';
                      }
                      if (coinMoved || (!coinMoved && !this.checkValidMoveAvailable(currentTurn, this.state.currentRoll))) {
                        this.setState({ turn: nextTurn, currentRoll: '', rollEnabled: true });
                      }
                    }
                  }} style={{ backgroundColor: coinColor, borderWidth: 1, margin: 2, borderRadius: 10, flex: 1 }} >
                  <Text>{player + (index + 1)}</Text>
                </TouchableOpacity> : <View />}
                {/* <Text>{r + '  ' + c}</Text> */}
              </View>;
            })}
          </View>
        );
      });
    };
    return (
      <View style={{ height: height * 0.6, width: width * 0.95, alignItems: 'center', justifyContent: 'center' }}>
        {renderRow()}
        <TouchableOpacity onPress={() => {
          this.state.rollEnabled && this.rollADie();
        }}
          disabled={!this.state.rollEnabled}
          style={{
            marginTop: 16,
            height: 50,
            width: 150,
            backgroundColor: '#B40',
            borderColor: '#F00',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{
            color: '#FFF',
            fontSize: 16,
            fontWeight: 'bold',
          }}>Press to Roll</Text>
        </TouchableOpacity>
        {this.state.nextTurn ? <Text style={{ marginTop: 16 }}>{this.state.currentRoll ? `Player ${this.state.turn} Got ${this.state.currentRoll} ${this.checkValidMoveAvailable(this.state.turn, this.state.currentRoll) ? '😃' : '😔'}. Next roll by ${this.state.nextTurn}`
          : ` Next roll by ${this.state.nextTurn}`}</Text> : <View />}
      </View>
    );
  }
}

export default Board;