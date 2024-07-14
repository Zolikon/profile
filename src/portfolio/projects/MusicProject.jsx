import ProjectPage from "../ProjectPage";

function MusicProject() {
  return (
    <ProjectPage
      name="Music player"
      description="This is my first published frontend project, a music player. The styling is unpolished but I left it as is for sentimental reasons. The page is hosted on AWS S3 using static website hosting."
      skills={["Angular", "Typescript"]}
      projectLink="https://music.zolikon.com"
      github="https://github.com/Zolikon/music-player"
      images={["/music_preview.png"]}
    />
  );
}

export default MusicProject;
