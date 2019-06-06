import axios from "axios";

export const getCharacters = (url = "https://rickandmortyapi.com/api/character/") => dispatch => {
  dispatch({
    type: "REQUEST_CHARACTERS"
  });
  return axios
    .get(url)
    .then(({ data }) => data)
    .then(payload =>
      dispatch({
        type: "GET_CHARACTERS",
        payload
      })
    );
};

export const getCharacter = id => dispatch => {
  dispatch({
    type: "REQUEST_CHARACTERS"
  });
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(payload =>
      dispatch({
        type: "GET_CHARACTER",
        payload
      })
    );
};

export const getOriginPlanet = URL => dispatch =>
  axios.get(URL).then(({ data }) =>
    dispatch({
      type: "GET_ORIGIN_PLANET",
      payload: data
    })
  );

export const getCurrentPlanet = URL => dispatch =>
  axios.get(URL).then(({ data }) =>
    dispatch({
      type: "GET_CURRENT_PLANET",
      payload: data
    })
  );

export const getOriginalResidents = urls => dispatch => {
  dispatch({
    type: "REQUEST_ORIGINAL_RESIDENTS"
  });
  const promises = urls.map(url => axios.get(url).then(({ data }) => data));

  return Promise.all(promises).then(residents =>
    dispatch({
      type: "GET_ORIGINAL_RESIDENTS",
      payload: residents
    })
  );
};

export const getCurrentResidents = urls => dispatch => {
  dispatch({
    type: "REQUEST_CURRENT_RESIDENTS"
  });
  const promises = urls.map(url => axios.get(url).then(({ data }) => data));

  return Promise.all(promises).then(residents =>
    dispatch({
      type: "GET_CURRENT_RESIDENTS",
      payload: residents
    })
  );
};

export const clearCharacter = () => ({
  type: "CLEAR_CHARACTER"
});

export const getEpisodes = urls => dispatch => {
  dispatch({
    type: "REQUEST_EPISODES"
  });
  const promises = urls.map(url => axios.get(url).then(({ data }) => data));

  return Promise.all(promises).then(episodes =>
    dispatch({
      type: "GET_EPISODES",
      payload: episodes
    })
  );
};
