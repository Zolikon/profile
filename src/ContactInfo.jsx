import { useImmutableLocalStorage } from "./useLocalStorage";

function ContactInfo() {
  const isVerfied = useImmutableLocalStorage("verified");

  if (!isVerfied()) {
    return null;
  }

  return (
    <div className="flex gap-2 sm:text-2xl items-center justify-center mx-auto h-[40px]">
      <a
        href="mailto:pozsonyizoli@gmail.com"
        className="p-2 h-[30px] w-[30px] hover:scale-110 flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-light-text">email</span>
      </a>
      <a
        href="https://www.linkedin.com/in/zolt%C3%A1n-pozsonyi-5677b698/"
        className="p-2 h-full hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/linkedin.svg" />
      </a>
      <a href="https://github.com/Zolikon" className="p-2 h-full hover:scale-110" target="_blank" rel="noreferrer">
        <img src="/github.svg" className="object-cover h-full" />
      </a>
    </div>
  );
}

export default ContactInfo;
