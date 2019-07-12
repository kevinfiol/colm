import m from 'mithril';
import marked from 'marked';

const r = new marked.Renderer();
marked.setOptions({ renderer: r });

const Markdown = {
    render: content => m.trust( marked(content) )
};

export default Markdown;
