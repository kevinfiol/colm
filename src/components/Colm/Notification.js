import m from 'mithril';
import b from 'bss';

const StyledParagraph =
    'p.white.h3.absolute.center.top-0.p3.mt-4' +
    b`
        left 50%
        transform translateX(-50%)
    `
;

const Notification = {
    view: ({ children }) => m(StyledParagraph, children)
};

export default Notification;