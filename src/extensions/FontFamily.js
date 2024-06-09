import { Mark, mergeAttributes } from '@tiptap/core';

const FontFamily = Mark.create({
    name: 'fontFamily',

    addOptions(){
        return {
            types: ['textStyle'],
            fontFamily: ['Arial', 'Comic Sans MS', 'Courier New', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'],
        };
    },
    addAttributes(){
        return {
            fontFamily: {
                default: null,
                parseHTML: element => element.style.fontFamily,
                renderHTML: attributes => {
                    if (!attributes.fontFamily) {
                        return{};
                    }
                    return {
                        style: `font-family: ${attributes.fontFamily}`,
                    };
                },
            },
        };
    },
    parseHTML() {
        return [
            {
                tag: 'span',
                getAttrs: element => element.style.fontFamily && null,
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['span', mergeAttributes (this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setFontFamily: fontFamily => ({ commands }) => {
                return commands.setMark(this.name, {fontFamily});
            },
            unsetFontFamily: () => ({ commands }) => {
                return commands.unsetMark(this.name);
            },
        };
    },
});

export default FontFamily;