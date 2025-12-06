import { Twitter, Github, Send } from "lucide-react";
const Footer = () => {
  return (
    <div className="py-10 flex flex-col md:flex-row  gap-3 md:gap-0 justify-between items-center">
      <p>© 2025 Danial Rahimian. All Rights Reserved.</p>
      <div className="flex gap-2">
        <a
          className="flex items-center gap-1"
          href="https://github.com/danialrahimian"
          target="_blank"
        >
          <Github />
          <span>github</span>
        </a>
        <a
          className="flex items-center gap-1"
          href="https://x.com/danialrahimian"
        >
          <Twitter />
          <span>twitter</span>
        </a>
        <a
          className="flex items-center gap-1"
          href="https://t.me/danialrahimian"
        >
          <Send />
          <span>telegram</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
