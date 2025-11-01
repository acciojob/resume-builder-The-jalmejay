import { createSlice } from '@reduxjs/toolkit';

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 9);

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
  skills: [],
  projects: [],
  social: [],
  mode: "edit",
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = { ...state.profile, ...action.payload };
    },

    // Education
    addEducation: {
      reducer(state, action) {
        state.education.push(action.payload);
      },
      prepare(payload) {
        return { payload: { id: generateId(), ...payload } };
      },
    },
    updateEducation(state, action) {
      const idx = state.education.findIndex(e => e.id === action.payload.id);
      if (idx >= 0) state.education[idx] = action.payload;
    },
    deleteEducation(state, action) {
      state.education = state.education.filter(e => e.id !== action.payload);
    },

    // Skills
    addSkill: {
      reducer(state, action) {
        state.skills.push(action.payload);
      },
      prepare(skill) {
        return { payload: { id: generateId(), skill } };
      },
    },
    deleteSkill(state, action) {
      state.skills = state.skills.filter(s => s.id !== action.payload);
    },

    // Projects
    addProject: {
      reducer(state, action) {
        state.projects.push(action.payload);
      },
      prepare(payload) {
        return { payload: { id: generateId(), ...payload } };
      },
    },
    updateProject(state, action) {
      const idx = state.projects.findIndex(p => p.id === action.payload.id);
      if (idx >= 0) state.projects[idx] = action.payload;
    },
    deleteProject(state, action) {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },

    // Social
    addSocial: {
      reducer(state, action) {
        state.social.push(action.payload);
      },
      prepare(payload) {
        return { payload: { id: generateId(), ...payload } };
      },
    },
    deleteSocial(state, action) {
      state.social = state.social.filter(s => s.id !== action.payload);
    },

    // Navigation
    goNext(state) {
      if (state.page < 4) state.page += 1;
    },
    goBack(state) {
      if (state.page > 0) state.page -= 1;
    },
    gotoPage(state, action) {
      state.page = action.payload;
    },

    // Local Storage
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

    // Reset / Modes
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
