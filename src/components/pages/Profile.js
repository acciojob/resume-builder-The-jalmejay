import React from "react";
import styles from "../../styles/profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../slice/resumeSlice";

export default function ProfilePage() {
  const profile = useSelector((s) => s.resume.profile);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "img") {
      const file = e.target.files[0];
      dispatch(setProfile({ [name]: URL.createObjectURL(file) }));
    } else dispatch(setProfile({ [name]: value }));
  }

  return (
    <div className={styles.profilePage}>
      <h2 className={styles.heading}>Add your profile details</h2>
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="fname"
            id="fname"
            value={profile.fname}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="First name"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="lname"
            id="lname"
            value={profile.lname}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Last name"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="phone"
            id="phone"
            value={profile.phone}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Phone number"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="address"
            id="address"
            value={profile.address}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="Address"
          />
        </div>
        {/* <div>
        <input type="file" id="img" name="img" className={styles.formInput} accept="image/*" />
        </div> */}
      </div>
      <div className={styles.ProfileImage}>
        <label className={styles.pILabel} htmlFor="img">
          Profile Image
        </label>
        <br></br>
        {/* <input
          type="file"
          id="img"
          name="img"
          className={styles.formInput}
          accept="image/*"
          onChange={handleChange}
        /> */}
        <input
          type="text"
          name="url"
          id="url"
          value={profile.url}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="url"
        />
      </div>
    </div>
  );
}
