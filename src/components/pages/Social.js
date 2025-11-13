import React from "react";
import styles from "../../styles/social.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addSocial, deleteSocial } from "../../slice/resumeSlice";

export default function SocialPage() {
  const social = useSelector((s) => (s.resume && Array.isArray(s.resume.social) ? s.resume.social : []));
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  function handleAdd() {
    if (!value.trim()) return;
    // pass label and url if you want; preview expects an object
    dispatch(addSocial({ label: value, url: value }));
    setValue("");
  }

  return (
    <div className={styles.skillsocial}>
      <h2 className={styles.heading}>Add Social Links like Linkedin, github, etc</h2>

      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <input
            type="url"
            name="Social"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Social Link *"
            className={styles.formInput}
            data-cy="social-url-input"
          />
        </div>
      </div>
      <div className={styles.buttonList}>
        <button
          className={styles.deleteButton}
          id="delete"
          onClick={() => setValue("")}
          data-cy="social-clear"
        >
          Delete
        </button>
        <button
          className={styles.addButton}
          id="add_social"
          onClick={handleAdd}
          data-cy="add_social"
        >
          Add Social
        </button>
      </div>

      <ul className={styles.formContainer} data-cy="social-list">
        {social.map((s) => (
          <li key={s.id} className={styles.projectCard} data-cy={`social-${s.id}`}>
            {s.id}. {s.label || s.url}
            <button data-cy={`delete-social-${s.id}`} onClick={() => dispatch(deleteSocial(s.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
