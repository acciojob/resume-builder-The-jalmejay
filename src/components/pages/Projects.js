import React from "react";
import styles from "../../styles/project.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addProject, deleteProject } from "../../slice/resumeSlice";

export default function ProjectsPage() {
  const projects = useSelector((s) => (s.resume && Array.isArray(s.resume.projects) ? s.resume.projects : []));
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    projectName: "",
    techStack: "",
    description: "",
  });

  function handleAdd() {
    if (!form.projectName || !form.techStack) return;
    dispatch(
      addProject({
        name: form.projectName,
        techStack: form.techStack,
        description: form.description,
      })
    );
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
            data-cy="project-title-input"
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
            data-cy="project-tech-input"
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Description"
            data-cy="project-desc-input"
          />
        </div>
      </div>

      <div className={styles.buttonList}>
        <button
          className={styles.deleteButton}
          id="delete"
          onClick={() => setForm({ projectName: "", techStack: "", description: "" })}
          data-cy="project-clear"
        >
          DELETE
        </button>
        <button className={styles.addButton} id="add_project" onClick={handleAdd} data-cy="add_project">
          ADD PROJECT
        </button>
      </div>

      <ul className={styles.formContainer} data-cy="project-list">
        {projects.map((p) => (
          <li key={p.id} className={styles.formGroup} data-cy={`project-${p.id}`}>
            {p.id}. <strong>{p.name}</strong> — {p.techStack}
            <p>{p.description}</p>
            <button className={styles.formInput} data-cy={`delete-project-${p.id}`} onClick={() => dispatch(deleteProject(p.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
