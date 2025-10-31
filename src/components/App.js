import React, { useEffect } from "react";
import "./../styles/App.css";
import Navber from "./Navber";
import { useSelector, useDispatch } from "react-redux";
import ProfilePage from "./pages/ProfilePage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import SocialPage from "./pages/SocialPage";
import PreviewPage from "./pages/PreviewPage";
import { preview } from "../slice/resumeSlice";
import {
  goBack,
  goNext,
  saveToLocal,
  loadFromLocal,
} from "../slice/resumeSlice";
const App = () => {
  const page = useSelector((s) => s.resume.page);
  const mode = useSelector((s) => s.resume.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromLocal());
  }, [dispatch]);

  const pages = [
    <ProfilePage key={0} />,
    <EducationPage key={1} />,
    <SkillsPage key={2} />,
    <ProjectsPage key={3} />,
    <SocialPage key={4} />,
  ];

  function handlePreview() {
    dispatch(preview());
  }

  return (
    <div>
      {mode==="edit" && (
        <div>
          {/* Do not remove the main div */}
          <Navber />
          <div className="container">
            <div className="form-area">{pages[page]}</div>
          </div>

          <div className="buttons-lists">
            <button
              id="back"
              className="resume-button"
              onClick={() => dispatch(goBack())}
              disabled={page === 0}
            >
              Back
            </button>
            {page < pages.length - 1 ? (
              <button
                className="resume-button"
                id="next"
                onClick={() => dispatch(goNext())}
              >
                Next
              </button>
            ) : (
              <button
                className="resume-button"
                id="save_continue"
                onClick={() => {
                  dispatch(saveToLocal());
                  alert("Saved locally.");
                }}
              >
                Save
              </button>
            )}
            <button
              className="resume-button"
              onClick={() => {
                dispatch(saveToLocal());
                alert("Saved locally.");
                handlePreview();
              }}
            >
              Save to local
            </button>
          </div>
        </div>
      )}
      {mode === "preview" && (
        <div>
          <PreviewPage />
        </div>
      )}
    </div>
  );
};

export default App;
