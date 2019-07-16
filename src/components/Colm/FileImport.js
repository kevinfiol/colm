import m from 'mithril';
import Btn from '../Btn';
import BtnLink from '../BtnLink';
import ConfirmBtn from '../ConfirmBtn';
import FileInput from '../FileInput';
import BrowserStorage from '../../services/BrowserStorage';

const FileImport = ({ attrs: { state } }) => {
    let data = null;

    let url = URL.createObjectURL(
        new Blob([
            JSON.stringify({ columns: state.columns, options: state.options })
        ], { type: 'application/json' })
    );

    return {
        view: ({ attrs: { state, actions } }) =>
            m('div',
                m(FileInput, { onLoad: res => data = res }),

                m(Btn, {
                    disabled: !data,
                    onclick: () => {
                        if (data) {
                            const obj = JSON.parse(data);
                            actions.loadFromObject(obj);

                            BrowserStorage.saveToStorage(obj).then(() => {
                                actions.setShowOptions(false);
                                m.redraw();
                            });
                        }
                    }
                }, 'Load'),

                m(BtnLink, {
                    download: `${ Date.now() }-colm-config.json`,
                    href: url
                }, 'Export'),

                m(ConfirmBtn, {
                    onConfirm: () => {
                        BrowserStorage.clearData().then(() => {
                            actions.setDefaults();
                            return BrowserStorage.saveToStorage({
                                columns: state.columns,
                                options: state.options
                            });
                        }).then(() => {
                            actions.setShowOptions(false);
                            m.redraw();
                        });
                    }
                }, 'Restore Defaults')
            )
    };
};

export default FileImport;