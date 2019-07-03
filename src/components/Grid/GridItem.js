import m from 'mithril';

const GridItem = {
    view: ({ children }) =>
        m('div.item',
            m('div.item-content',
                children
            )
        )
};

export default GridItem;