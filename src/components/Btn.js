import m from 'mithril';
import b from 'bss';

const StyledBtn =
    'button.btn.btn-outline.mx1' +
    b`
        transition all 0.2s ease
    `.$hover`
        background-color rgba(255, 255, 255, 0.2)
    `
;

const Btn = {
    view: ({ attrs, children }) => m(StyledBtn, attrs, children)
};

export default Btn;