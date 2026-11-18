import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export default function StudentApp() {
    const navigate = useNavigate();
    const { students, getRecords, deleteRecord } = useStudentStore();

    useEffect(() => {
        getRecords();
    }, [getRecords]);

    function logout() {
        navigate("/logout");
    }
    function addRecord() {
        navigate("/add");
    }
    function updateRecord(id) {
        navigate(`/update/${id}`);
    }

    return (
        <div className="hf bg20">
            <nav className="bg50 fxc jsb p3">
                <div>LOGO</div>
                <button onClick={logout}>Logout</button>
            </nav>
            <div className="p2">
                {students.length === 0 ? (
                    <p>No student records found.</p>
                ) : (
                    <div className="mt2 p2 bg70" style={{ width: "700px" }}>
                        <div className="fxc jsb mb1">
                            <h3>Student Examination Results</h3>
                            <button className="bg50" onClick={addRecord}>Add Student</button>
                        </div>
                        <div
                            className="fx p2 b1 br2 bg72"
                            style={{ textAlign: "left", color: "skyblue" }}
                        >
                            <span>Section</span>
                            <span>ID</span>
                            <span className="w15">Name</span>
                            <span>Marks</span>
                            <span className="sp15">Actions</span>
                        </div>
                        {students.map((student) => (
                            <div
                                key={student.id}
                                className="fx p2 bg71 mt1"
                                style={{
                                    textAlign: "left",
                                    alignItems: "center",
                                }}
                            >
                                <span>{student.section}</span>
                                <span>{student.roll_number}</span>
                                <span className="w15">{student.name}</span>
                                <span>{student.marks}</span>
                                <span className="sp15">
                                    <button className="bg50 btn1 mr1" onClick={() => updateRecord(student.id)}>Edit</button>
                                    <button className="bg31 btn1" onClick={() => deleteRecord(student.id)}>Delete</button>
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}