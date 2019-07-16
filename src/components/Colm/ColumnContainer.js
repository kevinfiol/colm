import m from 'mithril';
import b from 'bss';

const StyledContainer = (width, height, fontColor) =>
    'div.column-container.mx-auto.flex.justify-center.items-center' +
    b`
        min-width 720px
        width ${width}%
        height ${height}%
        color ${fontColor}
    `
;

const ColumnContainer = {
    view: ({ attrs: { width, height, fontColor }, children }) =>
        m(StyledContainer(width, height, fontColor),
            children
        )
};

export default ColumnContainer;