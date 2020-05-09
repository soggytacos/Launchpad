import {CONSTANTS} from '../actions';

export const addCard = (listID, habit) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {habit, listID}
    };
};