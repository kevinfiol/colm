import m from 'mithril';
import Actions from './Actions';

const state = {
    showOptions: false,
    editMode: false,
    columns: ['one', 'two', 'three', 'four'],
    temp: []
};

const actions = Actions(state);

export { state, actions };