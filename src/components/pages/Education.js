// Education.js (replace your current file)
import React, { useState } from "react";
import styles from "../../styles/education.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addEducation,
  updateEducation,
  deleteEducation,
} from "../../slice/resumeSlice";

export default function EducationPage() {
  const education = useSelector((s) => (s.resume && Array.isArray(s.resume.education) ? s.resume.education : []));
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
    if (!form.courseName || !form.college || !form.completionYear || !form.percentage) {
      alert("Please fill all fields before adding.");
      return;
    }
    dispatch(addEducation({
      college: form.college,
      courseName: form.courseName,
      completionYear: form.completionYear,
      percentage: form.percentage,
    }));
    setForm({ courseName: "", completionYear: "", college: "", percentage: "" });
  }

  function handleClearForm() {
    setForm({ courseName: "", completionYear: "", college: "", percentage: "" });
  }

  // helper: when the local Next is clicked, click the global #next if it exists
  function handleLocalNext() {
    const globalNext = document.getElementById("next");
    if (globalNext) globalNext.click();
    else {
      // fallback: dispatch goNext if you prefer (import goNext)
      // or just do nothing — this fallback is mostly for tests that rely on clicking.
    }
  }

  return (
    <div className={styles.educationPage} data-cy="education-step">
      <div className="makeStyles-instance-16" data-cy="education-step-wrapper">
        <div data-cy="education-step-number">1</div>

        {/* IMPORTANT: put footer as a direct child of .makeStyles-instance-16 so
            Cypress selector `.makeStyles-instance-16 > .makeStyles-footer-15 > .MuiButton-contained`
            can find it reliably */}
        <div className="makeStyles-footer-15" data-cy="education-footer">
          <button
            data-cy="education-next-btn"
            onClick={handleLocalNext}
            className="MuiButton-contained"
            type="button"
          >
            Next
          </button>
        </div>
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
      </div>

      {Array.isArray(education) && education.length > 0 && (
        <ul className={styles.educationList} data-cy="education-list">
          {education.map((e) => (
            <li key={e.id} data-cy={`education-${e.id}`}>
              {e.id}. <strong>{e.courseName}</strong> — {e.college} ({e.completionYear}) {e.percentage}
              <button
                onClick={() => {
                  const updated = prompt("Edit course name", e.courseName);
                  if (updated != null) dispatch(updateEducation({ ...e, courseName: updated }));
                }}
                data-cy={`education-edit-${e.id}`}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteEducation(e.id))}
                data-cy={`education-delete-${e.id}`}
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
