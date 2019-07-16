import m from 'mithril';

const Checkbox = {
    view: ({ attrs: { checked, id, onchange }, children }) =>
        m('p',
            m('input', {
                checked,
                id,
                name: id,
                type: 'checkbox',
                onchange: ({ target }) => onchange(target.checked)
            }),

            m('label.truncate.px1', { for: id }, children)
        )
};

export default Checkbox;