import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";

const SocialMediaComponents = () => {
  return (
    <div className="hidden sm:flex items-center gap-3 text-zinc-300">
      <Link aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61556465727180" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <FacebookOutlined style={{ fontSize: "22px" }} />
      </Link>

      <Link aria-label="Instagram" href="https://www.instagram.com/personaltrainingzurich/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <InstagramOutlined style={{ fontSize: "22px" }} />
      </Link>
      <Link aria-label="LinkedIn" href="http://www.linkedin.com/in/carlo-k-copeta-b96754152" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <LinkedinOutlined style={{ fontSize: "22px" }} />
      </Link>
    </div>
  );
};

export default SocialMediaComponents;
