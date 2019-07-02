import m from 'mithril';
import Btn from './Btn';

const Controls = {
    view: ({ attrs: { state, actions } }) =>
        m('div.p1.z3.fixed.right-0.top-0',
            m(Btn, { onclick: () => actions.setShowOptions(true) }, 'Show Options'),

            state.editMode && [
                m(Btn, { onclick: actions.addColumn }, 'Add Column'),

                m(Btn, {
                    onclick: () => {
                        actions.setColumns(state.temp);
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

            !state.editMode &&
                m(Btn, {
                    onclick: () => {
                        actions.setTemp(state.columns);
                        actions.setEditMode(true);
                    }
                }, 'Edit Mode')
        )
};

export default Controls;