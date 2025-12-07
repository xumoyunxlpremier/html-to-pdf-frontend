export default function Header({
    fonts,
    styles,
    handleFont,
    editMode,
    setEditMode,
}) {
    return (
        <header style={{
            padding: "15px 30px",
        }}>
            <div style={{
                display: "flex",
                gap: "20px",
            }}>
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
                        <option value={font} key={font}>
                            {font}
                        </option>
                    ))}
                </select>

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

                <button onClick={() => alert("Hali ishlamedi brodar.")} style={{
                    padding: "8px 18px",
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",

                }}>
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

            </div>
        </header>
    );
}