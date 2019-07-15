import m from 'mithril';
import b from 'bss';
import Btn from '../Btn';
import Modal from '../Modal';
import Editor from '../Editor';

const StyledColumn =
    'div.fade-in.draggable.border.rounded.c-grab.white.overflow-hidden.mx1.p2' +
    b`
        height 10em
        max-width 35em
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
                    }, 'Save'),

                    m(Btn, {
                        onclick: () => {
                            editorContent = content;
                            isEditing = false;
                        }
                    }, 'Cancel')
                )
                :
                m(StyledColumn, { 'data-index': index },
                    m('div.flex.justify-between',
                        m('div.left.truncate',
                            m(Btn, { onclick: () => isEditing = true }, 'Edit')
                        ),

                        m('div.right.truncate',
                            m(Btn, { onclick: deleteColumn }, 'Delete')
                        )
                    ),

                    m('h3.py1.truncate.overflow-hidden', { style: { maxWidth: '8em' } }, content),
                )
            ,
    };
};

export default EditColumn;