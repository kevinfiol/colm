import m from 'mithril';
import b from 'bss';

const StyledLink =
    'a.btn.btn-outline.mx1' +
    b`
        transition all 0.2s ease
    `.$hover`
        background-color rgba(255, 255, 255, 0.2)
    `
;

const BtnLink = {
    view: ({ attrs, children }) => m(StyledLink, attrs, children)
};

export default BtnLink;