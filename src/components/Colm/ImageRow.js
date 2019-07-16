import m from 'mithril';
import ConfirmBtn from '../ConfirmBtn';

const StyledRow =
    'div.flex.justify-around.items-center.my2.p1.border.rounded'
;

const ImageRow = {
    view: ({ attrs: { id, url, removeFile } }) =>
        m(StyledRow,
            m('img.rounded', { src: url, style: { height: '50px', width: '50px' } }),
            m('span.bold.center.px1', id),
            
            m('span.center',
                m('input', {
                    type: 'text',
                    style: { fontSize: '1em' },
                    value: `![](local_${id})`,
                    readonly: true,
                    onclick: ({ target }) => target.select()
                })
            ),

            m('div.right',
                m(ConfirmBtn, { onConfirm: removeFile }, 'Remove')
            )
        )
};

export default ImageRow;