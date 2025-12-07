import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

const fonts = ["Georgia", "Arial", "Courier New", "Tahoma", "Times New Roman"];

export default function App() {
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
    });

    function handleFont(value) {
        setStyles({ ...styles, defaultFont: value });
    }

    
    function handleInputChange(field, value) {
        setFormData({ ...formData, [field]: value });// tanlangan value yani name, tel email... oshalardi ozgartiradi, har bir field uchun alohida funksiya yoki hammasiga alohida alohida else if yozishni orniga.
    }

    return (
        <div style={{ fontFamily: styles.defaultFont, }}>
            <Header
                fonts={fonts}
                styles={styles}
                handleFont={handleFont}
                editMode={editMode}
                setEditMode={setEditMode}
            />
            <Content
                styles={styles}
                editMode={editMode}
                formData={formData}
                handleInputChange={handleInputChange}
            />
        </div>
    );
}