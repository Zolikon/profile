import ProjectPage from "../ProjectPage";

function SnakeProject() {
  return (
    <ProjectPage
      name="Snake"
      description="Standard snake game. I used this project to expole signals with React. Hosted on AWS S3."
      skills={["React", "Javascript", "TailwindCSS", "Preact signals"]}
      projectLink="https://snake.zolikon.com"
      github="https://github.com/Zolikon/snake"
      images={["/snake_preview.png"]}
    />
  );
}

export default SnakeProject;
