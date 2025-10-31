// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addEducation,
//   updateEducation,
//   deleteEducation,
// } from "../../slice/resumeSlice";

// export default function EducationPage() {
//   const ed = useSelector((s) => s.resume.education);
//   const dispatch = useDispatch();
//   const [form, setForm] = React.useState({
//     courseName: "",
//     completionYear: "",
//     college: "",
//     percentage: "",
//   });

//   function handleAdd() {
//     dispatch(addEducation(form));
//     setForm({
//       courseName: "",
//       completionYear: "",
//       college: "",
//       percentage: "",
//     });
//   }

//   return (
//     <div>
//       <h2>Add your Education Details</h2>
//       <label>
//         Course
//         <input
//           name="courseName"
//           value={form.courseName}
//           onChange={(e) => setForm({ ...form, courseName: e.target.value })}
//         />
//       </label>
//       <label>
//         Year
//         <input
//           name="completionYear"
//           value={form.completionYear}
//           onChange={(e) => setForm({ ...form, completionYear: e.target.value })}
//         />
//       </label>
//       <label>
//         College
//         <input
//           name="college"
//           value={form.college}
//           onChange={(e) => setForm({ ...form, college: e.target.value })}
//         />
//       </label>
//       <label>
//         Percentage
//         <input
//           name="percentage"
//           value={form.percentage}
//           onChange={(e) => setForm({ ...form, percentage: e.target.value })}
//         />
//       </label>
//       <button id="add_education" onClick={handleAdd}>
//         Add Education
//       </button>

//       <ul>
//         {ed.map((e) => (
//           <li key={e.id}>
//             <strong>{e.courseName}</strong> — {e.college} ({e.completionYear}){" "}
//             {e.percentage}
//             <button
//               onClick={() => {
//                 const updated = prompt("Edit course name", e.courseName);
//                 if (updated != null)
//                   dispatch(updateEducation({ ...e, courseName: updated }));
//               }}
//             >
//               Edit
//             </button>
//             <button id="delete" onClick={() => dispatch(deleteEducation(e.id))}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState } from "react";
import styles from "../../styles/education.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addEducation,
  updateEducation,
  deleteEducation,
} from "../../slice/resumeSlice";

export default function EducationPage() {
  const education = useSelector((s) => s.resume.education);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleAdd() {
    if (
      !form.courseName ||
      !form.college ||
      !form.completionYear ||
      !form.percentage
    ) {
      alert("Please fill all fields before adding.");
      return;
    }

    dispatch(addEducation(form));
    // setForm({
    //   courseName: "",
    //   completionYear: "",
    //   college: "",
    //   percentage: "",
    // });
  }

  return (
    <div className={styles.educationPage}>
      <h2 className={styles.heading}>Add your Education Details</h2>

      <div className={styles.formContainer}>
        <input
          type="text"
          name="courseName"
          value={form.courseName}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Course Name *"
        />
        <input
          type="text"
          name="completionYear"
          value={form.completionYear}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Completion Year *"
        />
        <input
          type="text"
          name="college"
          value={form.college}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="College / School *"
        />

        <input
          type="text"
          name="percentage"
          value={form.percentage}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Percentage *"
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          id="delete"
          onClick={() =>
            setForm({
              courseName: "",
              completionYear: "",
              college: "",
              percentage: "",
            })
          }
          className={styles.delete}
        >
          Delete
        </button>
        <button
          id="add_education"
          onClick={handleAdd}
          className={styles.addButton}
        >
          Add Education
        </button>
      </div>


    </div>
  );
}
