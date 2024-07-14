import ProjectPage from "../ProjectPage";

function MinesweeperProject() {
  return (
    <ProjectPage
      name="Minesweeper"
      description="As an effort to keep my python skills sharp but still doing something fun, I created a minesweeper game. This game is a desktop app using PySide6 for the GUI."
      skills={["Python", "PySide6"]}
      github="https://github.com/Zolikon/minesweeper"
      images={["/minesweeper_preview.png"]}
    />
  );
}

export default MinesweeperProject;
