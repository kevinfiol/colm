import m from 'mithril';
import b from 'bss';

const StyledColumn =
    'div.p0.m0.fade-in' +
    b`
        flex 1
        max-width 100%
    `
;

const Column = {
    view: ({ children }) => m(StyledColumn, children)
};

export default Column;