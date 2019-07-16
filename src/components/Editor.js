import m from 'mithril';
import b from 'bss';
import misbehave from 'misbehave';

const StyledCode =
    'div.code' +
    b`
        color white
        padding 1em
        overflow-x scroll
        background-color rgba(255, 255, 255, 0.2)
        min-height 25em
        width 100%
    `
;

const Editor = {
    view: ({ attrs: { editorContent, oninput } }) =>
        m('pre.overflow-auto',
            m(StyledCode, {
                contenteditable: 'true',
                autocorrect: 'off',
                autocapitalize: 'off',
                spellcheck: 'false',
                oncreate: ({ dom }) => new misbehave(dom, {
                    oninput: input => {
                        oninput(input);
                        m.redraw();
                    }
                })
            },
                m.trust(editorContent)
            )
        )
};

export default Editor;