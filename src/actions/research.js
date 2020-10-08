import axios from "axios";
import {
  GET_RESEARCHS,
  GET_RESEARCH,
  RESEARCH_ERROR,
  ADD_RESEARCH,
  UPDATE_RESEARCH,
  CHANGE_LANG,
} from "./types";
import { ApiUrl } from "./config";

// Get Researchs
export const getResearchs = () => async (dispatch) => {
  try {
    const res = await axios.get(`${ApiUrl}/api/researchs`);

    dispatch({
      type: GET_RESEARCHS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RESEARCH_ERROR,
      payload: { msg: err.response, status: err.response },
    });
  }
};

// Get one Research
export const getResearch = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${ApiUrl}/api/researchs/${id}`);
    dispatch({
      type: GET_RESEARCH,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RESEARCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const ChangeLang = (lang) => async (dispatch) => {
  dispatch({
    type: CHANGE_LANG,
    payload: lang,
  });
};

// Add Category
export const addAbstruct = (
  paper,
  researchName,
  abstruct,
  theHub,
  author,
  email,
  phone,
  country,
  Organization,
  Qualification,
  TypeOfParticipation,
  Degree,
  author1,
  email1,
  author2,
  email2
) => async (dispatch) => {
  const formData = new FormData();
  formData.append("Paper", paper);
  formData.append("researchName", researchName);
  formData.append("abstruct", abstruct);
  formData.append("theHub", theHub);
  formData.append("author", author);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("country", country);
  formData.append("Organization", Organization);
  formData.append("Qualification", Qualification);
  formData.append("TypeOfParticipation", TypeOfParticipation);
  formData.append("Degree", Degree);
  formData.append("author1", author1);
  formData.append("email1", email1);
  formData.append("author2", author2);
  formData.append("email2", email2);

  try {
    const res = await axios.post(`${ApiUrl}/api/researchs`, formData);
    dispatch({
      type: ADD_RESEARCH,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RESEARCH_ERROR,
      payload: { msg: err.response, status: err.response },
    });
  }
};
