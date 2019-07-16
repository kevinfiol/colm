import m from 'mithril';
import b from 'bss';

const StyledModal =
    'div.animated.fadeIn.p4.z4.fixed.left-0.right-0.top-0.bottom-0.white.overflow-auto' +
    b`
        animation-duration 0.1s
        background-color rgba(255, 255, 255, 0.1)
    `
;

const StyledInnerContainer =
    'div.animated.zoomIn.p3.pb4.clearfix.max-width-4.mx-auto.bg-black.rounded' +
    b`
        animation-duration 0.2s
        min-height 384px
    `
;

const Modal = {
    onbeforeremove: ({ dom }) => {
        dom.classList.add('fade-out');
        return new Promise(res => dom.addEventListener('animationend', res));
    },

    view: ({ children }) =>
        m(StyledModal,
            m(StyledInnerContainer, children)
        )
};

export default Modal;