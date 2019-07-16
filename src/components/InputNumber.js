import m from 'mithril';

const StyledInput =
    'input.input.bg-black.white.my1'
;

const InputNumber = {
    view: ({ attrs: { init, min, max, onchange } }) =>
        m(StyledInput, {
            min,
            max,
            type: 'number',
            onchange: ({ target: { value } }) => onchange(value),
            oncreate: ({ dom }) => dom.value = init || 0
        })
};

export default InputNumber;