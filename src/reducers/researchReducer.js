import {
  GET_RESEARCHS,
  GET_RESEARCH,
  RESEARCH_ERROR,
  ADD_RESEARCH,
  UPDATE_RESEARCH,
  CHANGE_LANG,
} from "../actions/types";

const initialState = {
  researchs: [],
  research: null,
  filtered: [],
  lang: "ar",
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RESEARCHS:
      return {
        ...state,
        researchs: payload,
        loading: false,
      };
    case GET_RESEARCH:
      return {
        ...state,
        research: state.researchs.find((research) => research._id === payload),
        loading: false,
      };
    case ADD_RESEARCH:
      return {
        ...state,
        researchs: [payload, ...state.researchs],
        loading: false,
      };
    case UPDATE_RESEARCH:
      return {
        ...state,
        researchs: state.researchs.map((research) =>
          research._id === action.payload._id ? action.payload : research
        ),
        loading: false,
      };
    case CHANGE_LANG:
      return {
        ...state,
        lang: payload,
      };
    case RESEARCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
