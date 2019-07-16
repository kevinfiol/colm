import m from 'mithril';
import ImageRow from './ImageRow';
import FileInput from '../FileInput';
import Btn from '../Btn';
import NanoID from '../../services/NanoID';
import BrowserStorage from '../../services/BrowserStorage';

const LocalImages = () => {
    let inputEl = null;
    let fileToStore = null;
    let error = null;
    let nanoId = NanoID(10);

    return {
        view: ({ attrs: { state, actions } }) =>
            m('div',
                m(FileInput, {
                    oncreate: ({ dom }) => inputEl = dom,
                    onLoad: res => fileToStore = res,
                    dataType: 'dataURL',
                    checkValid: file => {
                        if (!file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
                            error = 'Image must be of .jpg, .png, or .gif format.';
                            return false;
                        }

                        return true;
                    }
                }),

                m(Btn, {
                    disabled: !fileToStore || error,
                    onclick: () => {
                        if (fileToStore !== null) {
                            let stored = false;

                            while (!stored) {
                                let id = nanoId.gen();
                                if (!(id in state.files)) {
                                    actions.setLocalFile(id, fileToStore);
                                    fileToStore = null;
                                    inputEl.value = null;

                                    stored = true;
                                    BrowserStorage.saveToStorage({ files: state.files });
                                }
                            }
                        }
                    }
                }, 'Load'),

                error && 
                    m('p.my1', error)
                ,

                Object.keys(state.files).length
                    ? Object.keys(state.files).map(id =>
                        m(ImageRow, {
                            id,
                            url: state.files[id],
                            removeFile: () => {
                                actions.removeLocalFile(id);
                                BrowserStorage.saveToStorage({ files: state.files });
                            }
                        })
                    )
                    : m('div.p3.m1.border.rounded', 'No images loaded.')
                ,
            )
    };
};

export default LocalImages;