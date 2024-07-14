import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-extrabold">Page Not Found</h1>
      <img src="/not_found.webp" className="w-1/2 object-contain rounded-3xl" alt="Page Not Found" />
      <button>
        <span className="material-symbols-outlined text-4xl" onClick={() => navigate(-1)}>
          arrow_back
        </span>
      </button>
    </div>
  );
}

export default PageNotFound;
