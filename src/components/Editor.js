import m from 'mithril';
import b from 'bss';
import CodeMirror from 'CodeMirror';
import markdown from 'CodeMirror/mode/markdown/markdown';
import css from 'CodeMirror/mode/css/css';
import comment from 'CodeMirror/addon/comment/comment';
import keymap from 'CodeMirror/keymap/sublime';

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
    view: ({ attrs: { editorContent, syntax, oninput } }) =>
        m('div', {
            oncreate: ({ dom }) => {
                const cm = new CodeMirror(dom, {
                    value: editorContent,
                    mode: syntax,
                    lineNumbers: true,
                    theme: 'base16-dark',
                    keyMap: 'sublime'
                });

                cm.on('change', cm => {
                    oninput(cm.getValue());
                    m.redraw();
                });
            }
        })
};

export default Editor;