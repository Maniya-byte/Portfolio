// ============================================================
// SERVER ADMINISTRATION PROJECTS
// — Add new projects by copying a block and updating fields.
// — Images go in: public/projects/
// ============================================================

import type { ProjectEntry } from "./types";

const projects: ProjectEntry[] = [
  {
    number: 1,
    title: "Windows Server Active Directory",
    description:
      "Set up and managed Active Directory Domain Services for an organization with 300+ users, including GPO management and DNS/DHCP configuration.",
    image: "hero-1.jpg", // Place in public/projects/server-ad.jpg
    tags: ["Windows Server", "AD DS", "GPO"],
    link: "https://github.com/Maniya-byte",
    projectFile: "1.3.6-packet-tracer---configure-ssh.pka", // Place in public/files/ad-guide.pdf
  },
  
];

export default projects;
