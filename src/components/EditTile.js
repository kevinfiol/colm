import m from 'mithril';

const EditTile = {
    view: ({ attrs: { index, content, deleteColumn } }) =>
        m('div.border.draggable', { id: index },
            m('button', { onclick: deleteColumn }, 'delete'),
            m('span', content)
        )
};

export default EditTile;