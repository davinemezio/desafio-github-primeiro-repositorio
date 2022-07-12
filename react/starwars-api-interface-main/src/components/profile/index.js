import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperInfoUser>
        <div>
          <h1>Personagem</h1>
          <S.WrapperUserGeneric>
            <h3>Nome:</h3>
            <span>
              {githubState.user.name}
              </span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Gênero:</h3>
            <span>
              {githubState.user.gender}
              </span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Ano do Nascimento:</h3>
            <span>{githubState.user.birth_year}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Peso:</h3>
            <span>{githubState.user.height} libras</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Cor do Cabelo:</h3>
            <span>{githubState.user.hair_color}</span>
          </S.WrapperUserGeneric> 
          <S.WrapperUserGeneric>
            <h3>Cor dos Olhos:</h3>
            <span>{githubState.user.eye_color}</span>
          </S.WrapperUserGeneric> 
          <S.WrapperUserGeneric>
            <h3>Cor da Pele:</h3>
            <span>{githubState.user.skin_color}</span>
          </S.WrapperUserGeneric>
        </div>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
