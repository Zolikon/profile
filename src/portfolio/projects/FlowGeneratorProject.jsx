import ProjectPage from "../ProjectPage";

function FlowGeneratorProject() {
  return (
    <ProjectPage
      name="Flow Generator"
      description="Desktop application to generate flows either with PlantUML or AI."
      skills={["React", "ElectronJS", "NodeJs"]}
      github="https://github.com/Zolikon/flow-generator"
      images={["/flow_generator_preview.png"]}
    />
  );
}

export default FlowGeneratorProject;
