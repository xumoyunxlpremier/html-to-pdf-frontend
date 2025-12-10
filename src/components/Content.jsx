export default function Content({ styles, editMode, formData, handleInputChange, handleImageChange }) {
    return (
        <div style={{
            maxWidth: "900px",
            margin: "40px auto",
            padding: "60px 70px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
        }}>
            {/* Name */}
            <div style={{ marginBottom: "40px" }}>
                {editMode ? (
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        style={{
                            fontSize: "42px",
                            fontWeight: "bold",
                            padding: "10px",
                            width: "100%",
                            fontFamily: styles.defaultFont
                        }}
                    />
                ) : (
                    <h1 style={{
                        fontSize: "42px",
                        fontWeight: "bold",
                        margin: 0
                    }}>
                        {formData.name}
                    </h1>
                )}
                <hr />
            </div>

            {/* info and image */}
            <div style={{ display: "flex", justifyContent: "space-between", gap: "40px", marginBottom: "60px" }}>
                <div style={{ flex: 1 }}>
                    {/* Geburtsdatum */}
                    <div style={{ display: "flex", gap: "290px", marginBottom: "28px" }}>
                        <strong style={{
                            minWidth: "180px",
                            fontSize: "16px",
                            fontWeight: "bold"
                        }}>
                            Geburtsdatum:
                        </strong>
                        {editMode ? (
                            <input
                                type="text"
                                value={formData.birthDate}
                                onChange={(e) => handleInputChange("birthDate", e.target.value)}
                                style={{
                                    flex: 1,
                                    padding: "4px 8px",
                                    border: "1px solid #ddd",
                                    fontSize: "16px",
                                    fontFamily: styles.defaultFont
                                }}
                            />
                        ) : (
                            <span style={{ fontSize: "16px" }}>{formData.birthDate}</span>
                        )}
                    </div>

                    {/* Anschrift */}
                    <div style={{ display: "flex", gap: "290px", marginBottom: "28px" }}>
                        <strong style={{
                            minWidth: "180px",
                            fontSize: "16px",
                            fontWeight: "bold"
                        }}>
                            Anschrift:
                        </strong>
                        {editMode ? (
                            <input
                                type="text"
                                value={formData.address}
                                onChange={(e) => handleInputChange("address", e.target.value)}
                                style={{
                                    flex: 1,
                                    padding: "4px 8px",
                                    border: "1px solid #ddd",
                                    fontSize: "16px",
                                    fontFamily: styles.defaultFont
                                }}
                            />
                        ) : (
                            <span style={{ fontSize: "16px" }}>{formData.address}</span>
                        )}
                    </div>

                    {/* Telefonnummer */}
                    <div style={{ display: "flex", gap: "290px", marginBottom: "28px" }}>
                        <strong style={{
                            minWidth: "180px",
                            fontSize: "16px",
                            fontWeight: "bold"
                        }}>
                            Telefonnummer:
                        </strong>
                        {editMode ? (
                            <input
                                type="text"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                style={{
                                    flex: 1,
                                    padding: "4px 8px",
                                    border: "1px solid #ddd",
                                    fontSize: "16px",
                                    fontFamily: styles.defaultFont
                                }}
                            />
                        ) : (
                            <span style={{ fontSize: "16px" }}>{formData.phone}</span>
                        )}
                    </div>

                    {/* E-Mail-Adresse */}
                    <div style={{ display: "flex", gap: "290px", marginBottom: "28px" }}>
                        <strong style={{
                            minWidth: "180px",
                            fontSize: "16px",
                            fontWeight: "bold"
                        }}>
                            E-Mail-Adresse:
                        </strong>
                        {editMode ? (
                            <input
                                type="text"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                style={{
                                    flex: 1,
                                    padding: "4px 8px",
                                    border: "1px solid #ddd",
                                    fontSize: "16px",
                                    fontFamily: styles.defaultFont
                                }}
                            />
                        ) : (
                            <span style={{ fontSize: "16px" }}>{formData.email}</span>
                        )}
                    </div>
                </div>

                {/* Image */}
                <div style={{ flexShrink: 0, textAlign: "center" }}>
                    <img
                        src={formData.profileImage}
                        alt="Profile"
                        style={{ width: "190px", height: "auto", display: "block" }}
                    />

                    {editMode && (
                        <div style={{ marginTop: "10px" }}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "none" }}
                                id="imageUpload"
                            />
                            <label
                                htmlFor="imageUpload"
                                style={{
                                    padding: "8px 16px",
                                    background: "#05123f",
                                    color: "white",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    display: "inline-block"
                                }}
                            >
                                Change Image
                            </label>
                        </div>
                    )}
                </div>
            </div>

            {/* Berufserfahrung */}
            <div style={{ marginBottom: "50px" }}>
                <h2 style={{
                    fontSize: "28px",
                    fontWeight: "normal",
                    margin: "0 0 10px 0",
                    borderBottom: "1px solid #000",
                    paddingBottom: "8px"
                }}>
                    Berufserfahrung
                </h2>
            </div>

            {/* Bildung/Qualifikation */}
            <div style={{ marginBottom: "50px" }}>
                <h2 style={{
                    fontSize: "28px",
                    fontWeight: "normal",
                    margin: "0 0 10px 0",
                    borderBottom: "1px solid #000",
                    paddingBottom: "8px"
                }}>
                    Bildung/Qualifikation
                </h2>
            </div>

            {/* Sprachkenntnisse */}
            <div>
                <h2 style={{
                    fontSize: "28px",
                    fontWeight: "normal",
                    margin: "0 0 10px 0",
                    borderBottom: "1px solid #000",
                    paddingBottom: "8px"
                }}>
                    Sprachkenntnisse
                </h2>
            </div>
        </div>
    );
}