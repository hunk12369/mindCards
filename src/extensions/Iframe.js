import { Node, mergeAttributes } from '@tiptap/core';

export const Iframe = Node.create({
  name: 'iframe',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      width: {
        default: '560',
      },
      height: {
        default: '315',
      },
      frameborder: {
        default: '0',
      },
      allowfullscreen: {
        default: true,
        parseHTML: () => true,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'iframe',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['iframe', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },

  addNodeView() {
    return ({ HTMLAttributes }) => {
      const iframe = document.createElement('iframe');
      Object.entries(HTMLAttributes).forEach(([key, value]) => {
        iframe.setAttribute(key, value);
      });
      return iframe;
    };
  },
});
