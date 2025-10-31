// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addSocial, deleteSocial } from "../../slice/resumeSlice";

// export default function SocialPage() {
//   const social = useSelector((s) => s.resume.social);
//   const dispatch = useDispatch();
//   const [value, setValue] = React.useState("");

//   function handleAdd() {
//     if (!value.trim()) return;
//     dispatch(addSocial({ label: value }));
//     setValue("");
//   }

//   return (
//     <div>
//       <h2>Social Media</h2>
//       <input
//         name="Social"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="e.g. https://github.com/you"
//       />
//       <button id="add_social" onClick={handleAdd}>
//         Add
//       </button>
//       <ul>
//         {social.map((s) => (
//           <li key={s.id}>
//             {s.label}{" "}
//             <button onClick={() => dispatch(deleteSocial(s.id))}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from "react";
import styles from "../../styles/social.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addSocial, deleteSocial } from "../../slice/resumeSlice";

export default function SocialPage() {
  const social = useSelector((s) => s.resume.social);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  function handleAdd() {
    if (!value.trim()) return;
    dispatch(addSocial({ label: value }));
    setValue("");
  }

  return (
    <div className={styles.skillsocial}>
      <h2 className={styles.heading}>
        Add Social Links like Linkedin, github, etc
      </h2>

      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <input
            type="url"
            name="social"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Social Link *"
            className={styles.formInput}
          />
        </div>
      </div>
      <div className={styles.buttonList}>
        <button
          className={styles.deleteButton}
          id="delete"
          onClick={() => setValue("")}
        >
          Delete
        </button>
        <button
          className={styles.addButton}
          id="add_social"
          onClick={handleAdd}
        >
          Add Skill
        </button>
      </div>

      <ul className={styles.formContainer}>
        {social.map((s) => (
          <li key={s.id} className={styles.projectCard}>
            {s.label}
            <button onClick={() => dispatch(deleteSocial(s.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
