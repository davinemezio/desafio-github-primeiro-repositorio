import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({
  loading: false,
  user: {},
  planet: {},
 // repositories: [],
 // starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
        name: undefined, 
        height: undefined, 
        mass: undefined, 
        hair_color: undefined, 
        skin_color: undefined, 
        eye_color: undefined, 
        birth_year: undefined, 
        gender: undefined, 
        homeworld: undefined, 
        created: undefined, 
        edited: undefined, 
        url: undefined,
        startships: [],
    },
    planet: {name: undefined,},
  //  repositories: [],
  //  starred: [],
  });

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`people/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            name: data.name,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            birth_year: data.birth_year,
            gender: data.gender,
            homeworld: data.homeworld,
            created: data.created,
            edited: data.edited,
            url: data.url,
            starships:[],
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };
  const getUserPlanet = (username) => {
    api.get(`planets/${username}`).then(({ dado }) => {
      setGithubState((prevState) => ({
        ...prevState,
        planet: {name: dado.name,},
      }));
    });
  };
/*
  const getUserRepos = (username) => {
    api.get(`planets/${username}`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };
*/
  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
 //   getUserRepos: useCallback((username) => getUserRepos(username), []),
 //   getUserStarred: useCallback((username) => getUserStarred(username), []),
    getUserPlanet: useCallback((username) => getUserPlanet(username), []),
  };
  
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
  
};


export default GithubProvider;
