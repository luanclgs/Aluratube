import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
  const estilosDasHomePages = {  };
  return (
    <>
      < CSSReset />
      <StyledTimeline/>
      <div style={estilosDasHomePages}>
        <Menu/>
        <Header />
        <Timeline playlists={config.playlists} />

      </div>
    </>

  );
};

export default HomePage

function Timeline(props) {

  const playlistNames = Object.keys(props.playlists);

  return (

    <StyledTimeline>
    
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
      margin-top: 70px;
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

