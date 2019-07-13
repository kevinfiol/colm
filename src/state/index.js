import m from 'mithril';
import { clone } from 'ramda';
import Actions from './Actions';
import NanoID from '../services/NanoID';

const state = {
    isLoaded: false,
    showOptions: false,
    editMode: false,

    columns: [],
    temp: [],
    files: {},

    // User Settings
    options: {
        autohideMenu: false,
        width: '80',
        height: '100',
        bgColor: '#111111',
        fontColor: '#ffffff',
        customCss: ''
    }
};

const deps = { NanoID: NanoID(11), clone };
const actions = Actions(state, deps);

export { state, actions };