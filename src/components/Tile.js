import m from 'mithril';

const Tile = {
    view: ({ attrs: { index, content } }) =>
        m('div.border',
            m('span', content)
        )
};

export default Tile;