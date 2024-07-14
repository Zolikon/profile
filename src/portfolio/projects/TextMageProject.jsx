import ProjectPage from "../ProjectPage";

function TextMageProject() {
  return (
    <ProjectPage
      name="TextMage"
      description="A line-by-line text converter using filters and transformations. Uses Material-UI for the UI and Context API for state management. Hosted on AWS S3."
      skills={["React", "Javascript", "MUI"]}
      projectLink="https://textmage.zolikon.com"
      github="https://github.com/Zolikon/textmage"
      images={["/textmage_preview.png"]}
    />
  );
}

export default TextMageProject;
