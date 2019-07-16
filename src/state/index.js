import { clone } from 'ramda';
import Actions from './Actions';
import NanoID from '../services/NanoID';
import Document from '../services/Document';
import defaults from '../defaults';

const state = {
    isLoaded: false,
    showOptions: false,
    editMode: false,
    showPreview: false,
    previewX: '0px',
    previewY: '0px',
    previewContent: '',

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

const deps = {
    NanoID: NanoID(11),
    Document,
    clone,
    defaults
};

const actions = Actions(state, deps);

export { state, actions };