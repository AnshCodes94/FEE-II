import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudentStore } from "./useStudentStore";

export function UpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, updateStudent, isLoading } = useStudentStore();

  const [formData, setFormData] = useState({
    roll_number: "",
    name: "",
    section: "",
    marks: "",
  });

  useEffect(() => {
    const currentStudent = students.find(
      (student) => String(student.id) === String(id)
    );
    if (currentStudent) {
      setFormData({
        roll_number: currentStudent.roll_number,
        name: currentStudent.name,
        section: currentStudent.section,
        marks: currentStudent.marks,
      });
    }
  }, [id, students]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { ...formData, marks: Number(formData.marks) };
    await updateStudent(id, updatedData);
    navigate("/studentsApp");
  };

  return (
    <div
      className="hf fyc p3 bg71"
      style={{ position: "fixed", top: "0", left: "0", width: "100%" }}
    >
      <h2>Update Record</h2>
      <form
        onSubmit={handleSubmit}
        className="bg70 p4 br2 fy"
        style={{ width: "275px" }}
      >
        <input
          type="text"
          name="roll_number"
          placeholder="Roll Number"
          value={formData.roll_number}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="section"
          placeholder="Section"
          value={formData.section}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={formData.marks}
          onChange={handleChange}
          required
        />

        <div className="fx mt1">
          <button type="submit" className="bg50" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </button>
          <button
            type="button"
            className="bg31"
            onClick={() => navigate("/studentsApp")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}