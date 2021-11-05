import {EditorConfig} from "@editorjs/editorjs";
import {ComponentProps, useEffect, useRef} from "react";
import {saveByUrl, saveImage} from "../../services/api/PostApi";

interface EditorJsWrapperProps extends ComponentProps<"div"> {
    config?: EditorConfig;
    blocks: Array<any>,
}

export function EditorJsWrapper({config = {}, blocks, ...restProps}: EditorJsWrapperProps): JSX.Element {
    const elmtRef = useRef<HTMLDivElement>();

    useEffect(() => {
        if (!elmtRef.current) {
            return;
        }
        elmtRef.current.focus()
        // @ts-ignore
        let editorJs;

        (async () => {
            const {default: EditorJS} = await import("@editorjs/editorjs");
            // @ts-ignore
            const {default: Header} = await import('@editorjs/header');
            // @ts-ignore
            const {default: ImageTool } = await import('@editorjs/image');

            // @ts-ignore
            const {default: Code } = await import('@editorjs/code');

            // @ts-ignore
            const {default: Quote } = await import('@editorjs/quote');

            // @ts-ignore
            const {default: List } = await import('@editorjs/list');

            editorJs = new EditorJS({
                ...config,

                holder: elmtRef.current,
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: true,
                        config: {
                            placeholder: 'Введите заголовок'
                        },
                    },
                    Code,
                    Quote,
                    List,
                    image: {
                        class: ImageTool,
                        config: {
                            uploader: {
                                uploadByFile: async (image: File) => {
                                    const data = await saveImage(image);
                                    return data.data
                                },
                                uploadByUrl: async (url: string) => {
                                   const data = await saveByUrl(url);
                                   return data.data;
                                }
                            }
                        }
                    }
                },

                /**
                 * Previously saved data that should be rendered
                 */
                data: {
                    blocks
                },
            });
        })().catch((error): void => console.error(error));

        return (): void => {
            // @ts-ignore
            editorJs.destroy();
        };
    }, []);

    return (
        <div
            {...restProps}
            ref={(elmt): void => {
                // @ts-ignore
                elmtRef.current = elmt;
            }}
        />
    );
}
