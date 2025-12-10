import { useState, useRef } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fonts = ["Georgia", "Arial", "Courier New", "Tahoma", "Times New Roman"];

export default function App() {
    const contentRef = useRef(null);

    const [styles, setStyles] = useState({
        defaultFont: "Georgia",
    });

    const [editMode, setEditMode] = useState(false);

    const [formData, setFormData] = useState({
        name: "Max Mustermann",
        birthDate: "tag.monat.jahr",
        address: "Straße, Stadt, PLZ",
        phone: "+998999999999",
        email: "max@gmail.com",
        profileImage: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
    });

    function handleFont(value) {
        setStyles({ ...styles, defaultFont: value });
    }

    function handleInputChange(field, value) {
        setFormData({ ...formData, [field]: value });
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profileImage: reader.result });
                toast.success("Image changed successfully!");
            };
            reader.readAsDataURL(file);
        }
    }

    async function handleGeneratePDF() {
        if (editMode) {
            toast.warning("Please turn off edit mode first!");
            return;
        }

      

        const response = await fetch('http://localhost:4000/generate-pdf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ html: contentRef.current.innerHTML })
        });

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'rezume.pdf';
        link.click();
        URL.revokeObjectURL(url);
        toast.success("Downloaded successfully!");
    }

    return (
        <div style={{ fontFamily: styles.defaultFont }}>
            <ToastContainer />
            <Header
                fonts={fonts}
                styles={styles}
                handleFont={handleFont}
                editMode={editMode}
                setEditMode={setEditMode}
                handleGeneratePDF={handleGeneratePDF}
            />
            <div ref={contentRef}>
                <Content
                    styles={styles}
                    editMode={editMode}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleImageChange={handleImageChange}
                />
            </div>
        </div>
    );
}