// ============================================================
// CENTRAL INDEX — aggregates all category files into one list.
// You should NOT need to edit this file.
// Edit individual category files in src/data/projects/ instead.
// ============================================================

export type { ProjectEntry } from "./projects/types";
export { categories, type Category } from "./categories";
export { profileData } from "./profile";

import { categories } from "./categories";
import type { ProjectEntry } from "./projects/types";

import routingSwitching from "./projects/routing-switching";
import serverAdmin from "./projects/server-admin";
import firewallAdmin from "./projects/firewall-admin";

// Full project type used by components
export interface Project {
  id: string;
  number: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
  projectFile?: string;
}

// Map category id → raw entries
const categoryProjects: Record<string, ProjectEntry[]> = {
  "routing-switching": routingSwitching,
  "server-admin": serverAdmin,
  "firewall-admin": firewallAdmin,
};

// Build flat project list with generated ids
export const projects: Project[] = Object.entries(categoryProjects).flatMap(
  ([categoryId, entries]) =>
    entries.map((entry, idx) => {
      // HANDLE IMAGES CORRECTLY:
      // We use base-relative paths to ensure GitHub Pages compatibility.
      let imageUrl = entry.image;
      if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('/') && !imageUrl.startsWith('.')) {
        imageUrl = `./projects/${imageUrl}`;
      }

      let projectFile = entry.projectFile;
      if (projectFile && !projectFile.startsWith('http') && !projectFile.startsWith('/') && !projectFile.startsWith('.')) {
        projectFile = `./files/${projectFile}`;
      } else if (projectFile && projectFile.startsWith('/')) {
        // Convert root-relative to base-relative
        projectFile = `.${projectFile}`;
      }

      return {
        id: `${categoryId}-${idx + 1}`,
        number: entry.number,
        title: entry.title,
        description: entry.description,
        category: categoryId,
        image: imageUrl || "",
        tags: entry.tags,
        link: entry.link,
        projectFile: projectFile,
      };
    })
);

/**
 * GUIDE: HOW TO ADD IMAGES AND FILES CORRECTLY
 * 
 * 1. IMAGES:
 *    - Place your project images in the 'public/projects/' directory.
 *    - In your project data file (e.g., routing-switching.ts), set the 'image' field 
 *      to just the filename (e.g., "my-project.jpg").
 *    - Alternatively, use a full URL (e.g., "https://example.com/image.jpg").
 * 
 * 2. FILES:
 *    - Place downloadable files (PDFs, ZIPs, etc.) in the 'public/files/' directory.
 *    - Set the 'projectFile' field to the filename (e.g., "project-report.pdf") 
 *      OR a relative path starting from root (e.g., "/files/project-report.pdf").
 * 
 * 3. LINKS:
 *    - Set the 'link' field to any external URL (e.g., "https://github.com/your-repo").
 */

