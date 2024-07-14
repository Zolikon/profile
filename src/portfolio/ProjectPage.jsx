import PropTypes from "prop-types";
import { useRef, useState } from "react";

function ProjectPage({ name, description, skills, github, projectLink, images = [] }) {
  const dialogRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);

  function openImageViewer(index) {
    setSelectedImage(index);
    dialogRef.current.showModal();
  }

  function closeImageViewer() {
    dialogRef.current.close();
  }

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-between h-4/5">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-xl">{description}</p>
        <div className="flex flex-col  items-center gap-2">
          <p className="text-xl">Technologies used:</p>
          <div className="flex gap-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 bg-green-500 dark:bg-purple-400 rounded-md select-none">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-teal-500 dark:bg-cyan-400 dark:text-stone-600 rounded-md"
            >
              Repository
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-teal-500 dark:bg-cyan-400 dark:text-stone-600 rounded-md"
            >
              Live version
            </a>
          )}
        </div>
        <div className="flex gap-2 items-center justify-center">
          {images.map((image, index) => (
            <img
              key={image}
              onClick={() => openImageViewer(index)}
              src={image}
              alt="project image"
              className="rounded-xl object-contain w-4/5 h-4/5 cursor-pointer"
            />
          ))}
        </div>
      </div>
      <dialog ref={dialogRef}>
        <div className="flex flex-col w-[80vw] h-[80vh] items-center justify-center gap-4 bg-light-bg-to dark:bg-dark-bg-to">
          <img
            src={images[selectedImage]}
            alt="project image"
            className="rounded-xl object-contain w-2/3 h-2/3 aspect-square "
          />
          <button
            className="p-2 bg-teal-500 dark:bg-cyan-400 dark:text-stone-600 rounded-md"
            onClick={closeImageViewer}
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

ProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  github: PropTypes.string,
  projectLink: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectPage;
