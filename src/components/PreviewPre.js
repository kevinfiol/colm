import m from 'mithril';

const StyledPreviewPre =
    'pre.p2.z4.absolute.white.bg-black.overflow-hidden'
;

const PreviewPre = {
    view: ({ attrs: { x, y }, children }) =>
        m(StyledPreviewPre, { style: { left: x, top: y } }, children)
};

export default PreviewPre;