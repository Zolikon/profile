import ProjectPage from "../ProjectPage";

function WorkdeskProject() {
  return (
    <ProjectPage
      name="Workdesk"
      description="Collection for my preferred devevlopment configurations, hosted on GitHub Pages."
      skills={["React", "Javascript", "TailwindCSS"]}
      projectLink="https://zolikon.github.io/"
      github="https://github.com/Zolikon/zolikon.github.io"
      images={["/workdesk_preview.png"]}
    />
  );
}

export default WorkdeskProject;
