import m from 'mithril';
import b from 'bss';

const StyledInput =
    'input.btn.btn-outline.mx1' +
    b`
        transition all 0.2s ease
    `.$hover`
        background-color rgba(255, 255, 255, 0.2)
    `
;

const FileInput = () => {
    let io = new FileReader();

    return {
        oninit: ({ attrs: { onLoad } }) => {
            io.onload = load => {
                onLoad(load.target.result);
                m.redraw();
            };
        },

        view: ({ attrs: { onLoad } }) =>
            m(StyledInput, {
                type: 'file',
                oninput: ev => io.readAsText(ev.target.files[0])
            })
    };
};

export default FileInput;