import m from 'mithril';
import marked from 'marked';
import { state } from '../state';

const r = new marked.Renderer();
r.image = (href, title, text) => {
    let src = href;

    if (src.slice(0, 6) === 'local_') {
        const key = src.slice(6);
        src = state.files[key];
    }

    return `<img
        src="${ src }"
        title="${ title }"
        alt="${ text }"
    ></img>
    `;
};

marked.setOptions({ renderer: r });

const Markdown = {
    render: content => m.trust( marked(content) )
};

export default Markdown;
