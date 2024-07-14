import ProjectPage from "../ProjectPage";

function PdfMageProject() {
  return (
    <ProjectPage
      name="Pdf Mage"
      description="Accepts multiple images to be uploaded, these can then be rearranged and merged into a single PDF file. All of this on client side. Uses React for the frontend and TailwindCSS for styling. Hosted on AWS S3."
      skills={["React", "Javascript", "TailwindCSS"]}
      projectLink="https://pdfmage.zolikon.com"
      github="https://github.com/Zolikon/pdfmage"
      images={["/pdfmage_preview.png"]}
    />
  );
}

export default PdfMageProject;
