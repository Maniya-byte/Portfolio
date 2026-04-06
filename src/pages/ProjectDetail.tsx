import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import { projects } from "@/data/portfolioData";
import ProgressiveImage from "@/components/ProgressiveImage";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <section className="section-padding flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Go Back
            </button>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto max-w-3xl"
        >
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-x-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </button>

          {/* Project Header Info */}
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              #{project.number}
            </span>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
              {project.title}
            </h1>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="category-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="mb-8">
            {project.image ? (
              <ProgressiveImage
                src={project.image}
                alt={project.title}
                containerClassName="w-full rounded-xl overflow-hidden shadow-card"
                className="w-full rounded-xl object-cover"
                style={{ maxHeight: "500px" }}
              />
            ) : (
              <div className="flex h-48 sm:h-64 w-full items-center justify-center rounded-xl bg-secondary">
                <span className="font-mono text-2xl text-muted-foreground">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg whitespace-pre-wrap break-words">
              {project.description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02]"
              >
                Visit Project <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.projectFile && project.projectFile !== "#" && (
              <a
                href={project.projectFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FileText className="h-4 w-4" /> Project File
              </a>
            )}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
