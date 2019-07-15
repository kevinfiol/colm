import m from 'mithril';
import b from 'bss';
import Btn from '../Btn';
import BrowserStorage from '../../services/BrowserStorage';

const StyledControls = autohideMenu =>
    'div.p1.z3.fixed.right-0.top-0.white' +
    b`
        opacity ${autohideMenu ? '0' : '100'}
    `.$hover`
        opacity 100
    `
;

const Controls = {
    view: ({ attrs: { state, actions } }) =>
        m(StyledControls(state.options.autohideMenu),
            state.editMode && [
                m(Btn, {
                    onclick: () => {
                        actions.setColumns(state.temp);
                        BrowserStorage.saveToStorage({ columns: state.columns });
                        actions.setEditMode(false);
                    }
                }, 'Save'),

                m(Btn, {
                    onclick: () => {
                        actions.setTemp([]);
                        actions.setEditMode(false);
                    }
                }, 'Cancel')
            ],

            !state.editMode && [
                m(Btn, { onclick: () => actions.setShowOptions(true) }, 'Show Options'),

                m(Btn, {
                    onclick: () => {
                        actions.setTemp(state.columns);
                        actions.setEditMode(true);
                    }
                }, 'Edit Mode')
            ]
        )
};

export default Controls;