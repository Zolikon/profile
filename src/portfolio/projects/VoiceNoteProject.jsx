import ProjectPage from "../ProjectPage";

function VoiceNoteProject() {
  return (
    <ProjectPage
      name="VoiceNote"
      description="As a test I wanted to see what the browser built-in speech recognition could do. This project converts speech to text, then allows editing and copying to clipboard. Uses React for the frontend and TailwindCSS for styling. Hosted on AWS S3."
      skills={["React", "Javascript", "TailwindCSS"]}
      projectLink="https://voicenote.zolikon.com"
      github="https://github.com/Zolikon/voicenote"
      images={["/voicenote_preview.png"]}
    />
  );
}

export default VoiceNoteProject;
