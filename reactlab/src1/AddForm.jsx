import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export function AddForm() {
  const navigate = useNavigate();
  const { addRecord } = useStudentStore();

  const [formData, setFormData] = useState({
    roll_number: "",
    name: "",
    section: "",
    marks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = { ...formData, marks: Number(formData.marks) };
    await addRecord(studentData);
    navigate("/studentsApp");
  };

  return (
    <div
      className="hf fyc p3 bg71"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
      }}
    >
      <h2>Add Student Record</h2>
      <form
        onSubmit={handleSubmit}
        className="fy bg70 p3 br2"
        style={{ width: "250px" }}
      >
        <button
          type="button"
          className="bg31 mb1"
          onClick={() => navigate("/studentsApp")}
          style={{ marginLeft: "auto", display: "block" }}
        >
          Cancel
        </button>
        <div>
          <input
            type="text"
            placeholder="Roll Number"
            name="roll_number"
            value={formData.roll_number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Marks"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg50 btn2 mt2">
          Add Student
        </button>
      </form>
    </div>
  );
}