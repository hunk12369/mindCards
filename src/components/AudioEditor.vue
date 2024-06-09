<script setup>
import { ref } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@/extensions/FontFamily";
import TextAlign from "@tiptap/extension-text-align";
import { Iframe } from '@/extensions/Iframe';
import { Color } from "@tiptap/extension-color";
import { Icon } from "@iconify/vue";

const front = useEditor({
  editorProps: {
    attributes: {
      class:
        "border border-purpleP p-4 min-h-[20rem] max-h-[20rem] overflow-y-auto outline-none rounded-ee-md rounded-es-md prose max-w-none",
    },
  },
  content: "<p>Escribe...🔀</p>",
  extensions: [
    StarterKit,
    TextStyle,
    FontFamily,
    Color,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Iframe,
  ],
});

const back = useEditor({
  editorProps: {
    attributes: {
      class:
        "border border-purpleP p-4 min-h-[20rem] max-h-[20rem] overflow-y-auto outline-none rounded-ee-md rounded-es-md prose max-w-none",
    },
  },
  content: "<p>Escribe... 🔀</p>",
  extensions: [
    StarterKit,
    TextStyle,
    FontFamily,
    Color,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
  ],
});

const isOpenFront = ref(false);
const isOpenBack = ref(false);
const selectedFontFront = ref("Inter");
const selectedFontBack = ref("Inter");
const fonts = ref([
  "Arial",
  "Comic Sans MS",
  "Courier New",
  "Georgia",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Inter",
  "serif",
  "monospace",
  "cursive",
]);

const toggleDropdownFront = () => {
  isOpenFront.value = !isOpenFront.value;
};

const toggleDropdownBack = () => {
  isOpenBack.value = !isOpenBack.value;
};

const selectFontFront = (font) => {
  selectedFontFront.value = font;
  if (front.value) {
    front.value.chain().focus().setFontFamily(font).run();
    isOpenFront.value = false;
  } else {
    console.error("Front editor is not initialized");
  }
};

const selectFontBack = (font) => {
  selectedFontBack.value = font;
  if (back.value) {
    back.value.chain().focus().setFontFamily(font).run();
    isOpenBack.value = false;
  } else {
    console.error("Back editor is not initialized");
  }
};
const insertYoutubeVideo = () => {
  const url = prompt('Ingrese la URL del video de YouTube:');
  if (url && front.value) {
    const videoId = new URL(url).searchParams.get('v');
    if (videoId) {
      const src = `https://www.youtube.com/embed/${videoId}`;
      front.value.commands.insertContent({
        type: 'iframe',
        attrs: { src, width: '560', height: '315', frameborder: '0', allowfullscreen: true },
      });
    } else {
      alert('URL no válida');
    }
  }
};  
 
 
</script>

<template>
  <div class="container-editor h-full p-8 gap-2 flex flex-col">
    <div class="front-container">
      <span class="font-bold text-24px text-purpleP">Adelante</span>
      <section
        v-if="front"
        class="btns flex items-center flex-wrap gap-x-3 border rounded-ss-md rounded-se-md border-purpleP p-2 bg-purpleP text-white justify-center"
      >
        
        <div class="flex items-center gap-2">
          
            <button
            @click="front.chain().focus().undo().run()"
            :disabled="!front.can().chain().focus().undo().run()"
          >
            <Icon
              icon="material-symbols:undo"
              width="24"
              height="24"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().redo().run()"
            :disabled="!front.can().chain().focus().redo().run()"
          >
            <Icon
              icon="material-symbols:redo"
              width="24"
              height="24"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <div class=" inline-block">
            <button
              @click="toggleDropdownFront"
              class="bg-white border border-purpleP rounded-lg text-purpleP font-medium p-2 flex items-center hover:bg-purpleP hover:text-white"
            >
              {{ selectedFontFront }}
              <span class="ml-2">
                <Icon
                  icon="iconamoon:arrow-down-2-light"
                  width="16"
                  height="16"
                />
              </span>
            </button>
            <div
              v-if="isOpenFront"
              class="absolute bg-white border border-purpleP rounded-lg text-purpleP font-medium p-2 mt-1 inline-block shadow-lg z-10"
            >
              <ul class="list-none p-0 m-0">
                <li
                  v-for="(font, index) in fonts"
                  :key="index"
                  @click="selectFontFront(font)"
                  class="bg-white rounded-lg text-purpleP font-medium p-2 hover:bg-purpleP hover:text-white cursor-pointer"
                >
                  {{ font }}
                </li>
              </ul>
            </div>
          </div>
          <input
            type="color"
            @input="front.chain().focus().setColor($event.target.value).run()"
            :value="front.getAttributes('textStyle').color"
          />
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="front.chain().focus().toggleBold().run()"
            :disabled="!front.can().chain().focus().toggleBold().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': front.isActive('bold'),
            }"
            class="p-1"
          >
            <Icon
              icon="octicon:bold-16"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().toggleItalic().run()"
            :disabled="!front.can().chain().focus().toggleItalic().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': front.isActive('italic'),
            }"
            class="p-1"
          >
            <Icon
              icon="gravity-ui:italic"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().toggleStrike().run()"
            :disabled="!front.can().chain().focus().toggleStrike().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': front.isActive('strike'),
            }"
          >
            <Icon
              icon="gravity-ui:strikethrough"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="front.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': front.isActive(
                'heading',
                {
                  level: 1,
                }
              ),
            }"
          >
            <Icon
              icon="icon-park-outline:h1"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': front.isActive(
                'heading',
                {
                  level: 2,
                }
              ),
            }"
          >
            <Icon
              icon="icon-park-outline:h2"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': front.isActive(
                'heading',
                {
                  level: 3,
                }
              ),
            }"
          >
            <Icon
              icon="icon-park-outline:h3"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="front.chain().focus().toggleBulletList().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': front.isActive(
                'bulletList'
              ),
            }"
          >
            <Icon
              icon="fe:list-bullet"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().toggleOrderedList().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': front.isActive(
                'orderedList'
              ),
            }"
          >
            <Icon
              icon="octicon:list-ordered-16"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="front.chain().focus().setTextAlign('left').run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': front.isActive({
                textAlign: 'left',
              }),
            }"
            class="p-1"
          >
            <Icon
              icon="mdi:format-align-left"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().setTextAlign('center').run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': front.isActive({
                textAlign: 'center',
              }),
            }"
            class="p-1"
          >
            <Icon
              icon="mdi:format-align-center"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().setTextAlign('right').run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': front.isActive({
                textAlign: 'right',
              }),
            }"
            class="p-1"
          >
            <Icon
              icon="mdi:format-align-right"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="front.chain().focus().setTextAlign('justify').run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': front.isActive({
                textAlign: 'justify',
              }),
            }"
            class="p-1"
          >
            <Icon
              icon="mdi:format-align-justify"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
          <button @click="insertYoutubeVideo">
                <Icon icon="material-symbols-light:youtube-activity" width="30" height="30"  style="color: #fff" />
            </button>  
        </div>
      </section >
      <editor-content :editor="front" />
    </div>
    <div class="back-container">
      <span class="font-bold text-24px text-purpleP">Atrás</span>
      <section
        v-if="back"
        class="btns flex items-center flex-wrap gap-x-3 border rounded-ss-md rounded-se-md border-purpleP p-2 bg-purpleP text-white justify-center"
      >
        <div class="flex items-center gap-2">
          <button
            @click="back.chain().focus().undo().run()"
            :disabled="!back.can().chain().focus().undo().run()"
          >
            <Icon
              icon="material-symbols:undo"
              width="24"
              height="24"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().redo().run()"
            :disabled="!back.can().chain().focus().redo().run()"
          >
            <Icon
              icon="material-symbols:redo"
              width="24"
              height="24"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="inline-block">
            <button
              @click="toggleDropdownBack"
              class="bg-white border border-purpleP rounded-lg text-purpleP font-medium p-2 flex items-center hover:bg-purpleP hover:text-white"
            >
              {{ selectedFontBack }}
              <span class="ml-2">
                <Icon
                  icon="iconamoon:arrow-down-2-light"
                  width="16"
                  height="16"
                />
              </span>
            </button>
            <div
              v-if="isOpenBack"
              class="absolute bg-white border border-purpleP rounded-lg text-purpleP font-medium p-2 mt-1 inline-block shadow-lg z-10"
            >
              <ul class="list-none p-0 m-0">
                <li
                  v-for="(font, index) in fonts"
                  :key="index"
                  @click="selectFontBack(font)"
                  class="bg-white rounded-lg text-purpleP font-medium p-2 hover:bg-purpleP hover:text-white cursor-pointer"
                >
                  {{ font }}
                </li>
              </ul>
            </div>
          </div>
          <input
            type="color"
            @input="back.chain().focus().setColor($event.target.value).run()"
            :value="back.getAttributes('textStyle').color"
          />
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="back.chain().focus().toggleBold().run()"
            :disabled="!back.can().chain().focus().toggleBold().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': back.isActive('bold'),
            }"
            class="p-1"
          >
            <Icon
              icon="octicon:bold-16"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().toggleItalic().run()"
            :disabled="!back.can().chain().focus().toggleItalic().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': back.isActive('italic'),
            }"
            class="p-1"
          >
            <Icon
              icon="gravity-ui:italic"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().toggleStrike().run()"
            :disabled="!back.can().chain().focus().toggleStrike().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': back.isActive('strike'),
            }"
          >
            <Icon
              icon="gravity-ui:strikethrough"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="back.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': back.isActive(
                'heading',
                {
                  level: 1,
                }
              ),
            }"
          >
            <Icon
              icon="icon-park-outline:h1"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': back.isActive(
                'heading',
                {
                  level: 2,
                }
              ),
            }"
          >
            <Icon
              icon="icon-park-outline:h2"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': back.isActive(
                'heading',
                {
                  level: 3,
                }
              ),
            }"
          >
            <Icon
              icon="icon-park-outline:h3"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="back.chain().focus().toggleBulletList().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': back.isActive(
                'bulletList'
              ),
            }"
          >
            <Icon
              icon="fe:list-bullet"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().toggleOrderedList().run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md p-1': back.isActive(
                'orderedList'
              ),
            }"
          >
            <Icon
              icon="octicon:list-ordered-16"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <span>|</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="back.chain().focus().setTextAlign('left').run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': back.isActive({
                textAlign: 'left',
              }),
            }"
            class="p-1"
          >
            <Icon
              icon="mdi:format-align-left"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().setTextAlign('center').run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': back.isActive({
                textAlign: 'center',
              }),
            }"
            class="p-1"
          >
            <Icon
              icon="mdi:format-align-center"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().setTextAlign('right').run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': back.isActive({
                textAlign: 'right',
              }),
            }"
            class="p-1"
          >
            <Icon
              icon="mdi:format-align-right"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
          <button
            @click="back.chain().focus().setTextAlign('justify').run()"
            :class="{
              'bg-white bg-opacity-20 rounded-md': back.isActive({
                textAlign: 'justify',
              }),
            }"
            class="p-1"
          >
            <Icon
              icon="mdi:format-align-justify"
              width="16"
              height="16"
              style="color: #fff;"
            />
          </button>
        </div>
      </section>
      <editor-content :editor="back" />
    </div>
  </div>
</template>
