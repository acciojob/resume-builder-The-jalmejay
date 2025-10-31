import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/preview.module.css";
import { reset, edit } from "../slice/resumeSlice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumePreview() {
  const dispatch = useDispatch();
  const resumeRef = useRef();
  const resume = useSelector((s) => s.resume);
  const { profile, education, skills, projects, Social } = resume;
  function handleReset() {
    dispatch(reset());
  }
  function handleEdit() {
    dispatch(edit());
  }

  // async function handleDownload() {
  //   const input = resumeRef.current;
  //   const canvas = await html2canvas(input, { scale: 2 });
  //   const imgData = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF("p", "mm", "a4");
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("resume.pdf");
  // }

  function handleDownload() {
    const input = resumeRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  }
  

  return (
    <div className={styles.resumePreview}>
      <header className={styles.header}>
        <p className={styles.status}>
          All steps completed - your resume is ready!!
        </p>
        <div className={styles.buttons}>
          <button onClick={() => handleReset()} className={styles.btnReset}>
            RESET
          </button>
          <button onClick={handleEdit} className={styles.btnEdit}>
            EDIT
          </button>
        </div>
        <button onClick={handleDownload} className={styles.downloadButton}>
          DOWNLOAD / PREVIEW
        </button>
      </header>
      
      <div className={styles.content}  ref={resumeRef}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          {profile?.url && (
            <img
              src={profile.url}
              alt="Profile"
              className={styles.profileImage}
            />
          )}

          <h3 className={styles.sectionTitle}>Skills</h3>
          <ul>
            {skills.map((s, i) => (
              <li key={s.id || i}>{s.skill}</li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h1 className={styles.name}>
            {profile?.fname} {profile?.lname}
          </h1>
          <p>Address: {profile?.address}</p>
          <p>Phone Number: {profile?.phone}</p>

          <section className={styles.section}>
            <h2>Education</h2>
            {education.map((e) => (
              <div key={e.id} className={styles.eduItem}>
                <strong>{e.college}</strong> — {e.courseName} (
                {e.completionYear})<div>Percentage: {e.percentage}%</div>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h2>Mini Projects</h2>
            {projects.map((p) => (
              <div key={p.id} className={styles.projectItem}>
                <strong>{p.name}</strong>
                <div>{p.description}</div>
                <div>Tech Stack: {p.techStack}</div>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h2>Social Links</h2>
            <ul>
              {Social.map((s, i) => (
                <li key={i}>
                  {console.log(s)}
                  <a href={s} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
