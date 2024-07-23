import ProjectPage from "../ProjectPage";

function TalemageProject() {
  return (
    <ProjectPage
      name="TaleMage"
      description="A tale generator for children using OpenAI's GPT-3. The user can select a can select target audience, genre, and content. Backend is python hosted in AWS Lambda (different repository). Frontend is React with TailwindCSS."
      skills={["React", "Javascript", "TailwindCSS", "OpenAI", "Python"]}
      projectLink="https://talemage.zolikon.com"
      github="https://github.com/Zolikon/talemage"
      images={["/talemage_preview.png"]}
    />
  );
}

export default TalemageProject;
