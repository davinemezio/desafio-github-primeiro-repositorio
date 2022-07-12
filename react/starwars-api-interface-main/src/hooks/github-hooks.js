import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
 // const { githubState, getUser, getUserRepos, getUserStarred, getUserPlanet } = useContext(
  const { githubState, getUser, getUserPlanet } = useContext(
    GithubContext
  );

//  return { githubState, getUser, getUserRepos, getUserStarred, getUserPlanet };
  return { githubState, getUser, getUserPlanet };
};

export default useGithub;
