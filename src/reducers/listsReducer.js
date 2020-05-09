import {CONSTANTS} from '../actions';

let listID = 0;
let cardID = 0;

const initialState = [];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            listID += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                habit: action.payload.habit,
                id: `card-${cardID}`
            };
            cardID += 1;
            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED:

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            } = action.payload;
            const newState = [...state];

            // drag list
            if (type === 'list') {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            // drop within the same list
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list=> droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            // drop into a different list
            if (droppableIdStart !== droppableIdEnd) {
                // find the list where the drag started
                const listStart = state.find(list => droppableIdStart === list.id)
                // pull out the card from the list
                const card = listStart.cards.splice(droppableIndexStart, 1)
                // find the list where the drag ended
                const listEnd = state.find(list => droppableIdEnd === list.id)
                // put the card in the new list in the proper position
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState;

        default:
            return state;

    }
};

export default listsReducer;