import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <div className="flex gap-4 h-[90%] w-full overflow-y-auto flex-wrap items-center justify-center my-4">
      <ProjectCard name="Music" description="First ever frontend project, a music player" image="/music_preview.png" />
      <ProjectCard
        name="TextMage"
        description="Text converter using filters and transformations"
        image="/textmage_preview.png"
      />
      <ProjectCard name="PdfMage" description="Merges images into a PDF file" image="/pdfmage_preview.png" />
      <ProjectCard
        name="VoiceNote"
        description="Converts speech to text, then edit and copy to clipboard"
        image="/voicenote_preview.png"
      />
      <ProjectCard name="Snake" description="Snake game" image="/snake_preview.png" />
      <ProjectCard name="TaleMage" description="AI-supported tale generator" image="/talemage_preview.png" />
      <ProjectCard name="Minesweeper" description="Classic minesweeper" image="/minesweeper_preview.png" />
    </div>
  );
}

export default Portfolio;
