// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import {
// //   addEducation,
// //   updateEducation,
// //   deleteEducation,
// // } from "../../slice/resumeSlice";

// // export default function EducationPage() {
// //   const ed = useSelector((s) => s.resume.education);
// //   const dispatch = useDispatch();
// //   const [form, setForm] = React.useState({
// //     courseName: "",
// //     completionYear: "",
// //     college: "",
// //     percentage: "",
// //   });

// //   function handleAdd() {
// //     dispatch(addEducation(form));
// //     setForm({
// //       courseName: "",
// //       completionYear: "",
// //       college: "",
// //       percentage: "",
// //     });
// //   }

// //   return (
// //     <div>
// //       <h2>Add your Education Details</h2>
// //       <label>
// //         Course
// //         <input
// //           name="courseName"
// //           value={form.courseName}
// //           onChange={(e) => setForm({ ...form, courseName: e.target.value })}
// //         />
// //       </label>
// //       <label>
// //         Year
// //         <input
// //           name="completionYear"
// //           value={form.completionYear}
// //           onChange={(e) => setForm({ ...form, completionYear: e.target.value })}
// //         />
// //       </label>
// //       <label>
// //         College
// //         <input
// //           name="college"
// //           value={form.college}
// //           onChange={(e) => setForm({ ...form, college: e.target.value })}
// //         />
// //       </label>
// //       <label>
// //         Percentage
// //         <input
// //           name="percentage"
// //           value={form.percentage}
// //           onChange={(e) => setForm({ ...form, percentage: e.target.value })}
// //         />
// //       </label>
// //       <button id="add_education" onClick={handleAdd}>
// //         Add Education
// //       </button>

// //       <ul>
// //         {ed.map((e) => (
// //           <li key={e.id}>
// //             <strong>{e.courseName}</strong> — {e.college} ({e.completionYear}){" "}
// //             {e.percentage}
// //             <button
// //               onClick={() => {
// //                 const updated = prompt("Edit course name", e.courseName);
// //                 if (updated != null)
// //                   dispatch(updateEducation({ ...e, courseName: updated }));
// //               }}
// //             >
// //               Edit
// //             </button>
// //             <button id="delete" onClick={() => dispatch(deleteEducation(e.id))}>
// //               Delete
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import styles from "../../styles/education.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addEducation,
//   updateEducation,
//   deleteEducation,
// } from "../../slice/resumeSlice";

// export default function EducationPage() {
//   const education = useSelector((s) => s.resume.education);
//   const dispatch = useDispatch();

//   const [form, setForm] = useState({
//     courseName: "",
//     completionYear: "",
//     college: "",
//     percentage: "",
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   }

//   function handleAdd() {
//     if (
//       !form.courseName ||
//       !form.college ||
//       !form.completionYear ||
//       !form.percentage
//     ) {
//       alert("Please fill all fields before adding.");
//       return;
//     }
//     alert("your data is save");
//     dispatch(addEducation(form));
//     // setForm({
//     //   courseName: "",
//     //   completionYear: "",
//     //   college: "",
//     //   percentage: "",
//     // });
//   }

//   return (
//     <div className={styles.educationPage}>
//       <h2 className={styles.heading}>Add your Education Details</h2>

//       <div className={styles.formContainer}>
//         <input
//           type="text"
//           name="courseName"
//           value={form.courseName}
//           onChange={handleChange}
//           className={styles.formInput}
//           placeholder="Course Name *"
//         />
//         <input
//           type="text"
//           name="completionYear"
//           value={form.completionYear}
//           onChange={handleChange}
//           className={styles.formInput}
//           placeholder="Completion Year *"
//         />
//         <input
//           type="text"
//           name="college"
//           value={form.college}
//           onChange={handleChange}
//           className={styles.formInput}
//           placeholder="College / School *"
//         />

//         <input
//           type="text"
//           name="percentage"
//           value={form.percentage}
//           onChange={handleChange}
//           className={styles.formInput}
//           placeholder="Percentage *"
//         />
//       </div>

//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button
//           id="delete"
//           onClick={() =>
//             setForm({
//               courseName: "",
//               completionYear: "",
//               college: "",
//               percentage: "",
//             })
//           }
//           className={styles.delete}
//         >
//           Delete
//         </button>
//         <button
//           id="add_education"
//           type="button"
//           onClick={handleAdd}
//           className={styles.addButton}
//         >
//           Add Education
//         </button>
//         <div className="makeStyles-instance-16">
//           <div className="makeStyles-footer-15">
//             <button
//               data-cy="education-next-btn"
//               onClick={() => alert("Next button clicked")}
//               className="MuiButton-contained"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
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
    setForm((prev) => ({ ...prev, [name]: value }));
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
    alert("your data is save");
    dispatch(addEducation(form));

  }

  function handleClearForm() {
    setForm({
      courseName: "",
      completionYear: "",
      college: "",
      percentage: "",
    });
  }

  return (
    <div className={styles.educationPage} data-cy="education-step">
      <div className="makeStyles-instance-16" data-cy="education-step-wrapper">
        <div data-cy="education-step-number">1</div>
      </div>

      <h2 className={styles.heading}>Add your Education Details</h2>

      <div className={styles.formContainer} data-cy="education-form">
        <input
          type="text"
          name="courseName"
          value={form.courseName}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Course Name *"
          data-cy="input-courseName"
        />
        <input
          type="text"
          name="completionYear"
          value={form.completionYear}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Completion Year *"
          data-cy="input-completionYear"
        />
        <input
          type="text"
          name="college"
          value={form.college}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="College / School *"
          data-cy="input-college"
        />
        <input
          type="text"
          name="percentage"
          value={form.percentage}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Percentage *"
          data-cy="input-percentage"
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          id="delete"
          onClick={handleClearForm}
          className={styles.delete}
          data-cy="education-delete-btn"
        >
          Delete
        </button>

        <button
          id="add_education"
          type="button"
          onClick={handleAdd}
          className={styles.addButton}
          data-cy="education-add-btn"
        >
          Add Education
        </button>

        {/* Footer wrapper for Next button — stable data-cy and matching class structure */}
        <div className="makeStyles-footer-15" data-cy="education-footer">
          <button
            data-cy="education-next-btn"
            onClick={() => alert("Next button clicked")}
            className="MuiButton-contained"
            type="button"
          >
            Next
          </button>
        </div>
      </div>

      {/* Render list of existing education entries (optional) */}
      {Array.isArray(education) && education.length > 0 && (
        <ul className={styles.educationList} data-cy="education-list">
          {education.map((e) => (
            <li key={e.id || `${e.courseName}-${e.completionYear}`}>
              <strong>{e.courseName}</strong> — {e.college} ({e.completionYear}){" "}
              {e.percentage}
              <button
                onClick={() => {
                  const updated = prompt("Edit course name", e.courseName);
                  if (updated != null)
                    dispatch(updateEducation({ ...e, courseName: updated }));
                }}
                data-cy={`education-edit-${e.id || e.courseName}`}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteEducation(e.id))}
                data-cy={`education-delete-${e.id || e.courseName}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
