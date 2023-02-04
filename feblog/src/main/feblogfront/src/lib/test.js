import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import '@toast-ui/editor/dist/i18n/ko-kr';
import { useRef } from 'react';

function EditorBox() {
    const editorRef = useRef();

    const onChange = () => {
        const data = editorRef.current.getInstance().getMarkdown();
        console.log(data);
    };

    return (
        <div>
            <div></div>
            <div>
                <Editor
                    initialValue="hello react editor world!"
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="wysiwyg"
                    useCommandShortcut={false}
                    hideModeSwitch="true"
                    plugins={[colorSyntax]}
                    language="ko-KR"
                    ref={editorRef}
                    onChange={onChange}
                />

            </div>
        </div>
    );
}

export default EditorBox;
