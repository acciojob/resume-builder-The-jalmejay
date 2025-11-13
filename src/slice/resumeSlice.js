import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  profile: {
    fname: '',
    lname: '',
    phone: '',
    address: '',
    img: '',
    url: '',
  },

  education: [],
  nextEducationId: 1,

  skills: [],
  nextSkillId: 1,

  projects: [],
  nextProjectId: 1,

  social: [],
  nextSocialId: 1,

  mode: "edit",
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    // Profile
    setProfile(state, action) {
      state.profile = { ...state.profile, ...action.payload };
    },

    // ----------------- EDUCATION -----------------
    addEducation: {
      reducer(state, action) {
        const id = state.nextEducationId++;
        state.education.push({ id, ...action.payload });
      },
      prepare(payload) {
        return { payload }; // no ID here
      },
    },
    updateEducation(state, action) {
      const idx = state.education.findIndex(e => e.id === action.payload.id);
      if (idx >= 0) state.education[idx] = action.payload;
    },
    deleteEducation(state, action) {
      state.education = state.education.filter(e => e.id !== action.payload);
    },

    // ----------------- SKILLS -----------------
    addSkill: {
      reducer(state, action) {
        const id = state.nextSkillId++;
        state.skills.push({ id, skill: action.payload });
      },
      prepare(skill) {
        return { payload: skill };
      },
    },
    deleteSkill(state, action) {
      state.skills = state.skills.filter(s => s.id !== action.payload);
    },

    // ----------------- PROJECTS -----------------
    addProject: {
      reducer(state, action) {
        const id = state.nextProjectId++;
        state.projects.push({ id, ...action.payload });
      },
      prepare(payload) {
        return { payload };
      },
    },
    updateProject(state, action) {
      const idx = state.projects.findIndex(p => p.id === action.payload.id);
      if (idx >= 0) state.projects[idx] = action.payload;
    },
    deleteProject(state, action) {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },

    // ----------------- SOCIAL -----------------
    addSocial: {
      reducer(state, action) {
        const id = state.nextSocialId++;
        state.social.push({ id, ...action.payload });
      },
      prepare(payload) {
        return { payload };
      },
    },
    deleteSocial(state, action) {
      state.social = state.social.filter(s => s.id !== action.payload);
    },

    // ----------------- PAGE / NAVIGATION -----------------
    goNext(state) {
      if (state.page < 4) state.page += 1;
    },
    goBack(state) {
      if (state.page > 0) state.page -= 1;
    },
    gotoPage(state, action) {
      state.page = action.payload;
    },

    // ----------------- LOCAL STORAGE -----------------
    saveToLocal(state) {
      try {
        localStorage.setItem('resumeData', JSON.stringify(state));
        state.page = 0;
      } catch (e) {}
    },
    loadFromLocal(state) {
      try {
        const raw = localStorage.getItem('resumeData');
        if (raw) {
        const parsed = JSON.parse(raw);
        return { ...state, ...parsed };
        }
      } catch (e) {}
    },

    // ----------------- RESET / MODE -----------------
    reset() {
      return initialState;
    },
    edit(state) {
      state.mode = "edit";
    },
    preview(state) {
      state.mode = "preview";
    },
  },
});

export const {
  setProfile,
  addEducation,
  updateEducation,
  deleteEducation,

  addSkill,
  deleteSkill,

  addProject,
  updateProject,
  deleteProject,

  addSocial,
  deleteSocial,

  goNext,
  goBack,
  gotoPage,

  saveToLocal,
  loadFromLocal,

  reset,
  edit,
  preview,
} = resumeSlice.actions;

export default resumeSlice.reducer;
