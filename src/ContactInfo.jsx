import { useImmutableLocalStorage } from "./useLocalStorage";

function ContactInfo() {
  const isVerfied = useImmutableLocalStorage("verified");

  if (!isVerfied()) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 text-2xl w-10 ">
      <a href="mailto:pozsonyizoli@gmail.com" className="p-2">
        <span className="material-symbols-outlined text-light-text">email</span>
      </a>
      <a
        href="https://www.linkedin.com/in/zolt%C3%A1n-pozsonyi-5677b698/"
        className="p-2"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/linkedin.svg" />
      </a>
      <a href="https://github.com/Zolikon" className="p-2" target="_blank" rel="noreferrer">
        <img src="/github.svg" />
      </a>
    </div>
  );
}

export default ContactInfo;
