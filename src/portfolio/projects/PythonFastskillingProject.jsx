import ProjectPage from "../ProjectPage";

function PythonFastskillingProject() {
  return (
    <ProjectPage
      name="Python Fastskilling"
      description="Learning platform for kickstart Python programming skills. Multiple lectures about base concepts and major libraries like FastApi, Pandas, Numpy, etc. Contains coding exercises. The platform is built with Python and Streamlit."
      skills={["Python", "Streamlit"]}
      projectLink="https://python-fastskilling.streamlit.app/"
      github="https://github.com/zolikon/python-fastskilling"
      images={["/pythonfastskilling_preview.png"]}
    />
  );
}

export default PythonFastskillingProject;
