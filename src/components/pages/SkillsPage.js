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
    dispatch(addSkill(skill.trim()));
    setSkill("");
  }

  return (
    <div className={styles.skillPage}>
      <h2 className={styles.heading}>Add Your Skills</h2>
      <input
      className={styles.formInput}
        name="skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Skill *"
      />

      <div className={styles.buttonList}>
        <button className={styles.deleteButton} id="delete" onClick={()=>setSkill("")}>Delete</button>
      <button className={styles.addButton} id="add_skill" onClick={handleAdd}>
        Add Skill
      </button>
      </div>
      <ul>
        {skills.map((s) => (
          <li key={s.id}>
            {s.skill}{" "}
            <button
              id="delete_skill"
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
