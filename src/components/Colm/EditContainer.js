import m from 'mithril';
import b from 'bss';
import Sortable from 'sortablejs';

const StyledContainer =
    'div.mx-auto.flex.justify-center.items-center' +
    b`
        min-width 720px
    `
;

const EditContainer = {
    view: ({ attrs: { state, actions }, children }) =>
        m(StyledContainer, {
            oncreate: ({ dom }) =>
                new Sortable(dom, {
                    draggable: '.draggable',
                    onEnd: ({ oldIndex, newIndex }) => {
                        if (oldIndex !== newIndex) {
                            const temp = [...state.temp];
                            const column = temp[oldIndex];

                            temp.splice(oldIndex, 1);
                            temp.splice(newIndex, 0, column);
                            actions.setTemp(temp);

                            m.redraw();
                        }
                    }
                })
        },
            children
        )
};

export default EditContainer;