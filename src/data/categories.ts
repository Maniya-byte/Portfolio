// ============================================================
// CATEGORIES — Edit this file to add/remove/rename categories.
// ============================================================

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

export const categories: Category[] = [
  {
    id: "routing-switching",
    name: "Routing & Switching",
    description: "Network routing, switching, and infrastructure projects",
    icon: "Network",
  },
  {
    id: "server-admin",
    name: "Cloud & Systems Infrastructure",
    description: "Cloud deployment, server management, and virtualization projects",
    icon: "Cloud",
  },
  {
    id: "firewall-admin",
    name: "Firewall Administration",
    description: "Firewall configuration, security policies, and threat management",
    icon: "Shield",
  },
];
