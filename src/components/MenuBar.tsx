import { useState, useEffect } from 'react';
import { format, addSeconds } from 'date-fns';
import { Stack, Link } from '@/components/UI';
import { FaGithub, FaInstagram, FaLinkedin, FaSteam } from "react-icons/fa";

const DATE_FORMAT = 'EEE, dd LLL HH:mm:ss';
const ICONS_CLASSES = "w-6 h-6 text-white";

const SOCIAL_MEDIA = [
  {
    href: "https://github.com/maitzeth",
    icon: <FaGithub className={ICONS_CLASSES} />,
  },
  {
    href: "https://www.instagram.com/andreivandrummer",
    icon: <FaInstagram className={ICONS_CLASSES} />,
  },
  {
    href: "https://www.linkedin.com/in/andre-ivan-mz",
    icon: <FaLinkedin className={ICONS_CLASSES} />,
  },
  {
    href: "https://steamcommunity.com/id/maitzethmz",
    icon: <FaSteam className={ICONS_CLASSES} />,
  },
]

export const MenuBar = () => {
  const [date, setDate] = useState(format(new Date(), DATE_FORMAT));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(format(addSeconds(new Date(), 1), DATE_FORMAT));
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="flex w-full px-10 h-navbar items-center justify-between bg-navbar">
      <section>
        
      </section>
      <section>
        <p className="text-sm text-white">
          {date}
        </p>
      </section>
      <section>
        <Stack direction={{ mobile: 'horizontal', desktop: 'horizontal' }} space={{ mobile: 3, desktop: 3 }}>
          {SOCIAL_MEDIA.map((social, index) => {
            return (
              <div key={`social-icon-${index}`}>
                <Link href={social.href}>
                  {social.icon}
                </Link>
              </div>
            );
          })}
        </Stack>
      </section>
    </nav>
  );
};
