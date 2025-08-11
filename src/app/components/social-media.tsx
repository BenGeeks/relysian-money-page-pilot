import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";

const SocialMediaComponents = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 text-zinc-300">
      <Link aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61556465727180" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <div className="flex justify-center items-center p-2 rounded-full bg-[#3b5999] text-xl">
          <FacebookOutlined />
        </div>
      </Link>

      <Link aria-label="Instagram" href="https://www.instagram.com/personaltrainingzurich/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <div className="flex justify-center items-center p-2 rounded-full bg-[#e4405f] text-xl">
          <InstagramOutlined />
        </div>
      </Link>
      <Link aria-label="LinkedIn" href="http://www.linkedin.com/in/carlo-k-copeta-b96754152" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <div className="flex justify-center items-center p-2 rounded-full bg-[#0077b5] text-xl">
          <LinkedinOutlined />
        </div>
      </Link>
    </div>
  );
};

export default SocialMediaComponents;
