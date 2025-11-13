import React from "react";
import styles from "../../styles/skill.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addSkill, deleteSkill } from "../../slice/resumeSlice";

export default function SkillsPage() {
  const skills = useSelector((s) => s.resume.skills);
  const dispatch = useDispatch();
  const [skill, setSkill] = React.useState("");

  function handleAdd() {
    if (!skill.trim()) return;
    // dispatch a plain string; your slice should add id on reducer side
    dispatch(addSkill(skill.trim()));
    setSkill("");
  }

  return (
    <div className={styles.skillPage}>
      <h2 className={styles.heading}>Add Your Skills</h2>

      {/* stable selector for tests to type into */}
      <input
        className={styles.formInput}
        name="skill"
        value={skill}
        data-cy="skill-1"
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Skill *"
      />

      <div className={styles.buttonList}>
        {/* use data-cy for test selection if needed */}
        <button
          className={styles.deleteButton}
          data-cy="skill-clear"
          onClick={() => setSkill("")}
        >
          Delete
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
        {skills.map((s,index) => (
          // ensure list items expose a stable data-cy like "skill-<id>"
          <li key={index} data-cy={`skill-${s.id}`}>
            {s.skill}{" "}
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
