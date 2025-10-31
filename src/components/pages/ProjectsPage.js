// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addProject, deleteProject } from "../../slice/resumeSlice";

// export default function ProjectsPage() {
//   const projects = useSelector((s) => s.resume.projects);
//   const dispatch = useDispatch();
//   const [form, setForm] = React.useState({
//     projectName: "",
//     techStack: "",
//     description: "",
//   });

//   function handleAdd() {
//     dispatch(addProject(form));
//     setForm({ projectName: "", techStack: "", description: "" });
//   }

//   return (
//     <div>
//       <h2>Projects</h2>
//       <label>
//         Project name
//         <input
//           name="projectName"
//           value={form.projectName}
//           onChange={(e) => setForm({ ...form, projectName: e.target.value })}
//         />
//       </label>
//       <label>
//         Tech stack
//         <input
//           name="techStack"
//           value={form.techStack}
//           onChange={(e) => setForm({ ...form, techStack: e.target.value })}
//         />
//       </label>
//       <label>
//         Description
//         <input
//           name="description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />
//       </label>
//       <button id="add_project" onClick={handleAdd}>
//         Add Project
//       </button>

//       <ul>
//         {projects.map((p) => (
//           <li key={p.id}>
//             <strong>{p.projectName}</strong> — {p.techStack}
//             <p>{p.description}</p>
//             <button id="delete" onClick={() => dispatch(deleteProject(p.id))}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React from "react";
import styles from "../../styles/project.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addProject, deleteProject } from "../../slice/resumeSlice";

export default function ProjectsPage() {
  const projects = useSelector((s) => s.resume.projects);
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    projectName: "",
    techStack: "",
    description: "",
  });

  function handleAdd() {
    if (!form.projectName || !form.techStack) return; // optional validation
    dispatch(addProject(form));
    setForm({ projectName: "", techStack: "", description: "" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div className={styles.projectPage}>
      <h2 className={styles.heading}>Add your Mini Projects</h2>

      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="projectName"
            value={form.projectName}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Project Name"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Tech Stack"
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Description"
          ></textarea>
        </div>
      </div>
      <div className={styles.buttonList}>
        <button
          className={styles.deleteButton}
          id="delete"
          onClick={() =>
            setForm({
              projectName: "",
              techStack: "",
              description: "",
            })
          }
        >
          DELETE
        </button>
        <button
          className={styles.addButton}
          id="add_project"
          onClick={handleAdd}
        >
          ADD PROJECT
        </button>
      </div>
      <ul className={styles.formContainer}>
        {projects.map((p) => (
          <li key={p.id} className={styles.formGroup}>
            <strong>{p.projectName}</strong> — {p.techStack}
            <p>{p.description}</p>
            <button
              className={styles.formInput}
              onClick={() => dispatch(deleteProject(p.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
