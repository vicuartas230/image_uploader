import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ['JPG', 'PNG', 'GIF'];

export function DragDrop() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <FileUploader handleChange={handleChange} name='file' types={fileTypes} label='File should be...' />
    );
}
