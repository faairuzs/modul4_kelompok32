import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [members, setMembers] = useState([
    "1. Fairuzsyah Naufal Fikri",
    "2. Renaldy Andara",
    "3. M Ghulam Abdul",
    "4. Daffa Abyasha",
  ]);

  const [search, setSearch] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    const filtered = members.filter((member) =>
      member.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredMembers(filtered);
  }, [search, members]);

  return (
    <div className="Main">
      <h2
        style={{
          borderRadius: "20px",
          fontSize: "40px",
          color: "white",
        }}
      >
        Tugas Kelompok Genap | Kel 32
      </h2>

      <div class="input-group mb-3 mt-3">
        <input
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Cari anggota..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        {filteredMembers.length === 0 ? (
          <div>Tidak ada anggota yang cocok</div>
        ) : (
          filteredMembers.map((member, index) => (
            <div key={index}>{member}</div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
