import m from 'mithril';
import Document from '../../services/Document';
import BrowserStorage from '../../services/BrowserStorage';
import Btn from '../Btn';
import InputNumber from '../InputNumber';
import ColorPicker from '../ColorPicker';
import Editor from '../Editor';
import Checkbox from '../Checkbox';
import FileImport from './FileImport';
import LocalImages from './LocalImages';

const Options = ({ attrs: { state, actions } }) => {
    let options = {...state.options};

    const saveChanges = () => {
        actions.setWidth(options.width);
        actions.setHeight(options.height);
        actions.setBgColor(options.bgColor);
        actions.setFontColor(options.fontColor);
        actions.setCustomCss(options.customCss);
        actions.setAutohideMenu(options.autohideMenu);
        actions.setShowOptions(false);

        // Document Changes
        Document.setInnerText('#colm-custom-styles', options.customCss);

        // Save To Storage
        BrowserStorage.saveToStorage({ options });
    };

    const cancelChanges = () => actions.setShowOptions(false);

    return {
        view: ({ attrs: { state, actions } }) =>
            m('div',
                m('h1', 'Options'),

                m('h3', 'Autohide Menu'),
                m(Checkbox, {
                    id: 'autohide-menu',
                    checked: options.autohideMenu,
                    onchange: a => options.autohideMenu = a
                },
                    'Note: While hidden, hover over the top-right corner of the screen to access menu.'
                ),

                m('h3', 'Width %'),
                m(InputNumber, {
                    init: options.width, min: 0, max: 100,
                    onchange: w => options.width = w
                }),

                m('h3', 'Height %'),
                m(InputNumber, {
                    init: options.height, min: 0, max: 100,
                    onchange: h => options.height = h
                }),

                m('h3', 'Background Color'),
                m(ColorPicker, {
                    init: options.bgColor,
                    onchange: c => options.bgColor = c
                }),

                m('h3', 'Font Color'),
                m(ColorPicker, {
                    init: options.fontColor,
                    onchange: c => options.fontColor = c
                }),

                m('h3', 'Custom CSS'),
                m(Editor, {
                    editorContent: options.customCss,
                    oninput: c => options.customCss = c
                }),

                m('h3', 'Import / Export Settings'),
                m(FileImport, { state, actions }),

                m('h3', 'Local Images'),
                m(LocalImages, { state, actions }),

                m('hr'),

                m('div',
                    m(Btn, { onclick: saveChanges }, 'Save Changes'),
                    m(Btn, { onclick: cancelChanges }, 'Cancel')
                )
            )
    };
};

export default Options;