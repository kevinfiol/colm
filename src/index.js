import 'ace-css/css/ace.min.css';
import './styles/animate.css';
import './styles/main.css';

import m from 'mithril';
import Document from './services/Document';
import BrowserStorage from './services/BrowserStorage';
import Markdown from './services/Markdown';
import { state, actions } from './state';

import Modal from './components/Modal';
import Controls from './components/Colm/Controls';
import Notification from './components/Colm/Notification';
import Options from './components/Colm/Options';

import ColumnContainer from './components/Colm/ColumnContainer';
import Column from './components/Colm/Column';
import EditContainer from './components/Colm/EditContainer';
import EditColumn from './components/Colm/EditColumn';

const Colm = {
    view: ({ attrs: { state, actions } }) =>
        m('div.flex.items-center.width-100.height-100', {
            style: { backgroundColor: state.options.bgColor }
        },
            m(Controls, { state, actions }),

            state.editMode &&
                m(Notification,
                    'Click and drag to reorder columns while in edit mode.'
                )
            ,

            !state.editMode &&
                m(ColumnContainer, {
                    width: state.options.width,
                    height: state.options.height,
                    fontColor: state.options.fontColor
                },
                    state.columns.map(({ key, content }) =>
                        m(Column, { key }, Markdown.render(content))
                    )
                )
            ,

            state.editMode &&
                m(EditContainer, { state, actions },
                    state.temp.map(({ key, content }, index) =>
                        m(EditColumn, {
                            key,
                            index,
                            content,
                            saveColumn: content => actions.editTempColumn(index, content),
                            deleteColumn: () => actions.deleteTempColumn(index)
                        })
                    )
                )
            ,

            state.showOptions &&
                m(Modal,
                    m(Options, { state, actions })
                )
            ,
        )
};

const App = {
    oninit: ({ attrs: { state, actions } }) => {
        BrowserStorage.getAll()
            .then(obj => {
                if (Object.keys(obj) < 1) {
                    actions.setDefaults();

                    BrowserStorage.saveToStorage({
                        columns: state.columns,
                        options: state.options
                    });
                } else {
                    actions.loadFromObject(obj);
                }
            })
            .finally(() => {
                actions.setIsLoaded(true);
                m.redraw();
            })
        ;
    },

    view: ({ attrs: { state, actions } }) => {
        return state.isLoaded && m(Colm, { state, actions });
    }
};

m.mount(document.getElementById('app'), {
    view: () => m(App, { state, actions })
});