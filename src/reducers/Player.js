import * as PlayerActionTypes from '../actionTypes/Player';

const initialState = {
  players: [
    { name: "Mic Doja", score: 31, id: 1, created: '11/11/2016', updated: '08/15/2017'},
    { name: "Sam Smith", score: 28, id: 2, created: '11/11/2016', updated: '03/12/2017'},
    { name: "Mike Brown", score: 35, id: 3, created: '11/11/2016', updated: '05/05/2017'},
    { name: "Tina May", score: 30 ,id: 4, created: '11/11/2016', updated: '07/04/2017'}
  ],
  selectedPlayerIndex: -1
};

export default function Player(state=initialState, action) {

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER: {
      const addPlayerList = [...state.players, {
        name: action.name,
        score: 0,
        created: `${month}/${day}/${year}`
      }];
      return {
          ...state,
          players: addPlayerList
        };
      }

    case PlayerActionTypes.REMOVE_PLAYER: {
      const removePlayerList = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      return {
        ...state,
        players: removePlayerList
      };
    }

      case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
        const updatePlayerList = state.player.map((player, index) => {
          if (index === action.index) {
            return {
              ...player,
              score: player.score + action.score,
              updated: `${month}/${day}/${year}`
            };
          }
          return player;
        });
        return {
          ...state,
          players: updatePlayerList
        };
      }

      case PlayerActionTypes.SELECT_PLAYER:
        return {
            ...state,
            selectedPlayerIndex: action.index
        };

    default:
      return state;
  }
}
