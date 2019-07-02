import m from 'mithril';
import b from 'bss';

const StyledBtn =
    'button.btn.btn-primary.not-rounded' +
    b`
        transition all 0.2s ease
    `.$hover`
        background-color darkblue
    `
;

const Btn = {
    view: ({ attrs, children }) => m(StyledBtn, attrs, children)
};

export default Btn;