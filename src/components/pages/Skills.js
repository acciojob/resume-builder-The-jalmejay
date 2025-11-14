// src/components/pages/Skills.js
import React from "react";
import styles from "../../styles/skill.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addSkill, deleteSkill } from "../../slice/resumeSlice";

export default function SkillsPage() {
  const skills = useSelector((s) =>
    s.resume && Array.isArray(s.resume.skills) ? s.resume.skills : []
  );
  const dispatch = useDispatch();
  const [skill, setSkill] = React.useState("");

  function handleAdd() {
    const text = skill.trim();
    if (!text) return;
    dispatch(addSkill(text)); // reducer generates numeric id
    setSkill("");
  }

  return (
    <div className={styles.skillPage}>
      <h2 className={styles.heading}>Add Your Skills</h2>

      <input
        className={styles.formInput}
        name="skill"
        value={skill}
        data-cy="skill-input"
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Skill *"
      />

      <div className={styles.buttonList}>
        <button
          className={styles.deleteButton}
          data-cy="skill-clear"
          onClick={() => setSkill("")}
        >
          Clear
        </button>

        <button
          className={styles.addButton}
          data-cy="add_skill"
          id="add_skill"
          onClick={handleAdd}
        >
          Add Skill
        </button>
      </div>

      <ul>
        {skills.map((s) => (
          <li key={s.id} data-cy={`skill-${s.id}`}>
            {s.id}. {s.skill}
            <button
              data-cy={`delete-skill-${s.id}`}
              onClick={() => dispatch(deleteSkill(s.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
