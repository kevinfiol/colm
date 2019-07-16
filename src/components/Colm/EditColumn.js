import m from 'mithril';
import b from 'bss';
import Btn from '../Btn';
import Modal from '../Modal';
import Editor from '../Editor';

const StyledColumn =
    'div.fade-in.draggable.border.rounded.c-grab.white.overflow-hidden.mx1.p2' +
    b`
        height 12em
        max-width 35em
    `
;

const EditColumn = ({ attrs }) => {
    let content       = attrs.content;
    let isEditing     = false;
    let editorContent = content;

    return {
        view: ({ attrs: { index, saveColumn, deleteColumn, setPreviewX, setPreviewY, setShowPreview, setPreviewContent } }) =>
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
                m(StyledColumn, {
                    'data-index': index,
                    onmouseleave: () => setShowPreview(false),
                    onmouseover: ev => {
                        if (content.trim()) {
                            setPreviewX(`${ ev.pageX }px`);
                            setPreviewY(`${ ev.pageY + 10 }px`);
                            setPreviewContent(content);
                            setShowPreview(true);
                        }
                    },
                    onmousemove: ev => {
                        setPreviewX(`${ ev.pageX }px`);
                        setPreviewY(`${ ev.pageY + 10 }px`);
                    }
                },
                    m('div.flex.justify-between',
                        m('div.left.truncate',
                            m(Btn, { onclick: () => isEditing = true }, 'Edit')
                        ),

                        m('div.right.truncate',
                            m(Btn, { onclick: deleteColumn }, 'Delete')
                        )
                    ),

                    m('h3.py1.truncate.overflow-hidden', { style: { maxWidth: '8em' } }, content)
                )
            ,
    };
};

export default EditColumn;