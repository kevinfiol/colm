import 'ace-css/css/ace.min.css';
import './styles/grid.css';
import './styles/main.css';

import m from 'mithril';
import Packery from 'packery';
import Draggabilly from 'draggabilly';
import { state, actions } from './state';

import Controls from './components/Controls';
import Tile from './components/Tile';
import EditTile from './components/EditTile';

import GridContainer from './components/Grid/GridContainer';
import GridItem from './components/Grid/GridItem';

const App = {
    view: ({ attrs: { state, actions } }) =>
        m('div.flex.items-center.width-100.height-100',
            
            m(Controls, { state, actions }),

            // m('div.grid', { oncreate: ({ dom }) => new Muuri(dom) }, 'test'),

            m(GridContainer, {
                oncreate: ({ dom }) => {
                    const packery = new Packery(dom, {
                        itemSelector: '.grid-item',
                        columnWidth: 100
                    });

                    packery.getItemElements().forEach(el => {
                        const draggie = new Draggabilly(el);
                        packery.bindDraggabillyEvents(draggie);
                    });
                }
            },
                m('div.grid-item', 'one'),
                m('div.grid-item', 'one'),
                m('div.grid-item', 'one'),
                m('div.grid-item', 'one'),
                m('div.grid-item', 'one'),
                m('div.grid-item', 'one'),
            ),

            // Container
            // m('div.flex.border.mx-auto.grid.columns-4.mt4',
            //     state.editMode &&
            //         state.temp.map((content, index) =>
            //             m(EditTile, {
            //                 key: content,
            //                 deleteColumn: () => actions.deleteColumn(index),
            //                 index,
            //                 content,
            //             })
            //         )
            //     ,

            //     !state.editMode &&
            //         state.columns.map((content, index) =>
            //             m(Tile, {
            //                 key: content,
            //                 index,
            //                 content
            //             })
            //         )
            //     ,
            // )
        )
};

m.mount(document.getElementById('app'), {
    view: () => m(App, { state, actions })
});