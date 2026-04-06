// ============================================================
// FIREWALL ADMINISTRATION PROJECTS
// — Add new projects by copying a block and updating fields.
// — Images go in: public/projects/
// ============================================================

import type { ProjectEntry } from "./types";

const projects: ProjectEntry[] = [
  {
    number: 1,
    title: "FortiGate VPN Configuration",
    description:
      "Implemented site-to-site IPSec VPN tunnels using FortiGate firewalls connecting multiple branch offices to headquarters.",
    image: "fortigate-vpn.jpg", // Place in public/projects/fortigate-vpn.jpg
    tags: ["Fortinet", "VPN", "IPSec"],
    link: "https://github.com",
    projectFile: "/files/fortigate-config.pdf",
  },
];

export default projects;
