import React, { useEffect, useRef, useState } from "react";

export function Notes(){
    const titleRef = useRef(null); // Initialized safely as null for DOM refs
    const contentRef = useRef(null);

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    // 🚀 FIXED: Added the missing state variable for editing notes
    const [editId, setEditId] = useState(null);
    
    useEffect(() => {
        document.title = "Notes App";
    }, []);

    useEffect(() => {
        // 🚀 FIXED: Changed setItems to setItem
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function handleAddNote(){
        if (!titleRef.current.value || !contentRef.current.value){
            alert("Please enter both title and content.");
            return;
        }

        if (editId !== null) {
            // 🚀 FIXED: Handle saving the note if we are currently editing one
            const updatedNotes = notes.map((note) => {
                if (note.id === editId) {
                    return { ...note, title: titleRef.current.value, content: contentRef.current.value };
                }
                return note;
            });
            setNotes(updatedNotes);
            setEditId(null);
        } else {
            // 🚀 FIXED: Captured both title AND content inside the new note object
            const newNote = {
                id: Date.now(),
                title: titleRef.current.value,
                content: contentRef.current.value
            };
            setNotes([...notes, newNote]);
        }

        // clear input fields
        titleRef.current.value = "";
        contentRef.current.value = "";
    }

    function handleDelete(id) {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        if (editId === id) setEditId(null);
    }

    function handleEdit(note) {
        titleRef.current.value = note.title;
        contentRef.current.value = note.content;
        setEditId(note.id);
    }

    return (
        <section className="c1 box" style={{ color: "white" }}>
            <div className="fy box p1 b1 mb1">
                {/* 🚀 FIXED: Changed classNmae to className */}
                <h3 className="mt1 mb1 fs1">Notes App</h3>

                <input
                 ref={titleRef}
                 type="text"
                 placeholder="Enter note topic"
                 spellCheck={false}
                 className="fs1"
                 />

                 <textarea
                  ref={contentRef}
                  placeholder="Write your note..."
                  spellCheck={false}
                  className="fs1"
                  style={{ height: "7rem"}}
                  />
                  <button onClick={handleAddNote}>
                      {editId !== null ? "Save Changes" : "Add Note"}
                  </button>
            </div>
            <div className="box b1">
                <h3 className="mt1 fs1 mb2">My Notes</h3>

                {notes.map((note) => (
                   <div key={note.id} className="box p1 b1 mb1">
                    <div className="fx" style={{ justifyContent: "space-between"}}>
                        <h4
                         className="fs3 mb1"
                         style={{
                            width: "fit-content",
                            color: "yellow",
                         }}
                         >
                            Topic : {note.title}
                         </h4>
                         <h4 className="fs1">id : {note.id}</h4>
                    </div>
                    <div className="p1">
                        <p className="fs2" style={{whiteSpace: "pre-wrap"}}>
                            {note.content}
                        </p>
                        <button className="btn1 mt2" onClick={() => handleEdit(note)}>
                            Edit
                        </button>
                        <span style={{width: "0.5rem", display: "inline-block"}}></span>
                        <button className="btn1 mt2" onClick={() => handleDelete(note.id)}>
                            Delete
                        </button>
                    </div>
                   </div>
                ))}
            </div>
        </section>
    );
}