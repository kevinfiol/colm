import m from 'mithril';
import Btn from './Btn';

const ConfirmBtn = () => {
    let confirm = false;

    return {
        view: ({ attrs: { onConfirm }, children }) =>
            confirm
                ?
                [
                    m(Btn, {
                        onclick: () => {
                            onConfirm();
                            confirm = false;
                        }
                    }, 'Are you sure?'),

                    m(Btn, { onclick: () => confirm = false }, 'No')
                ]
                :
                m(Btn, { onclick: () => confirm = true }, children)
            ,
    };
};

export default ConfirmBtn;
