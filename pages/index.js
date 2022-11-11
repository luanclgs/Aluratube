import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import React from "react";

function HomePage() {
  const estilosDasHomePages = {

  };
  const [valorDoFiltro, setValorDoFiltro]= React.useState("")
  return (
    <>
      < CSSReset />
      <StyledTimeline />
      <div style={estilosDasHomePages}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro}
          playlists={config.playlists} />

      </div>
    </>

  );
};

export default HomePage

function Timeline({ searchValue, ...props }) {

  const playlistNames = Object.keys(props.playlists);

  return (

    <StyledTimeline>

      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)

              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}</div>
          </section>
        )
      })}
    </StyledTimeline>
  );

};

const StyledHeader = styled.div`
 img.profile {
      width: 120px;
      height:120px;
      border-radius: 50%;
     
 }
 .user-info{
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 36px;
  gap:16px;
 }
 img.banner {
  display: flex;
      width: 100%;
      height:350px;
      margin :0px
 }


 `;
function Header() {
  return (
    <StyledHeader>
      <img className="banner" src={`https://www.unasus.gov.br/uploads/noticia/jogo_1.jpg`} />
      <section className="user-info">
        <img className="profile" src={`http://github.com/${config.github}.png`} />

        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  );

};

