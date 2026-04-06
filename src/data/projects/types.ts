// Shared type for individual project entries inside category files.

export interface ProjectEntry {
  number: number;
  title: string;
  description: string;
  image: string; // filename inside src/assets/projects/ (leave "" for placeholder)
  tags: string[];
  link?: string; // external URL
  projectFile?: string; // link to project file/document
}
