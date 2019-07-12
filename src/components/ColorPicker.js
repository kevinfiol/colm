import m from 'mithril';

const ColorPicker = {
    view: ({ attrs: { init, onchange } }) =>
        m('input.input', {
            type: 'color',
            onchange: ({ target: { value } }) => onchange(value),
            oncreate: ({ dom }) => dom.value = init || '#000000'
        })
};

export default ColorPicker;