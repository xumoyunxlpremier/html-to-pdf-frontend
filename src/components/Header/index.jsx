export default function Header({
    fonts,
    styles,
    handleFont,
    editMode,
    setEditMode,
    handleGeneratePDF,
}) {

    return (
        <header style={{ padding: "15px 30px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Font tanlash */}
                <select
                    onChange={(evt) => handleFont(evt.currentTarget.value)}
                    value={styles.defaultFont}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "14px"
                    }}
                >
                    {fonts.map((font) => (
                        <option value={font} key={font}>{font}</option>
                    ))}
                </select>

                {/* Edit mode checkbox */}
                <label style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    marginLeft: "auto",
                }}>
                    <input
                        onChange={(evt) => setEditMode(evt.currentTarget.checked)}
                        checked={editMode}
                        type="checkbox"
                        style={{ cursor: "pointer", width: "16px", height: "16px" }}
                    />
                    <span>Bearbeitungsmodus</span>
                </label>

                {/* Generate PDF button */}
                <div style={{ position: "relative" }}>
                    <button
                        onClick={handleGeneratePDF}
                        disabled={editMode}
                        style={{
                            padding: "8px 18px",
                            background: editMode ? "#f0f0f0" : "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            cursor: editMode ? "not-allowed" : "pointer",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            opacity: editMode ? 0.5 : 1,
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M13 10V3L5 14H11V21L19 10H13Z"
                                stroke="#000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Generieren
                    </button>

                    {/* Edit mode yoqilganda xabar */}
                    {editMode && (
                        <div style={{
                            position: "absolute",
                            top: "100%",
                            right: "0",
                            marginTop: "8px",
                            padding: "8px 12px",
                            background: "#fff3cd",
                            border: "1px solid #ffc107",
                            borderRadius: "6px",
                            fontSize: "13px",
                            color: "#856404",
                            whiteSpace: "nowrap",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                        }}>
                            ⚠️ Turn off edit mode first brodar!
                        </div>
                    )}
                </div>
            </div>
            
        </header>
    );
}