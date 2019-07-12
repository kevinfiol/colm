import m from 'mithril';
import b from 'bss';
import Btn from '../Btn';
import Modal from '../Modal';
import Editor from '../Editor';

const StyledColumn =
    'div.fade-in.draggable.border.rounded.c-grab.white.overflow-hidden.mx1' +
    b`
        height 10em
        max-width 20em
    `
;

const EditColumn = () => {
    let content    = null;
    let isEditing  = false;
    let editorContent = '';

    return {
        oninit: ({ attrs }) => {
            content = attrs.content;
            editorContent = content;
        },

        view: ({ attrs: { index, saveColumn, deleteColumn } }) =>
            isEditing
                ?
                m(Modal,
                    m(Editor, { editorContent, oninput: input => editorContent = input }),

                    m(Btn, {
                        onclick: () => {
                            content = editorContent;
                            saveColumn(content);
                            isEditing = false;
                        }
                    }, 'save'),

                    m(Btn, {
                        onclick: () => {
                            editorContent = content;
                            isEditing = false;
                        }
                    }, 'cancel')
                )
                :
                m(StyledColumn, { 'data-index': index },
                    m(Btn, { onclick: () => isEditing = true }, 'edit'),
                    m(Btn, { onclick: deleteColumn }, 'delete'),
                    m('span', content)
                )
            ,
    };
};

export default EditColumn;