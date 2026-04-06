import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Network, Cloud, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects, profileData } from "@/data/portfolioData";
import profilePhoto from "@/assets/profile-photo.jpg";
import ProgressiveImage from "@/components/ProgressiveImage";
import WavingRobot from "@/components/WavingRobot";

const iconMap: Record<string, React.ElementType> = {
  Network,
  Cloud,
  Shield,
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <Layout>
      <WavingRobot />
      {/* Hero Carousel */}
      <section className="section-padding pb-0">
        <div className="mx-auto max-w-6xl">
          <HeroCarousel />
        </div>
      </section>

      {/* Profile / Hero Section */}
      <section className="section-padding overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary to-orange-400 opacity-20 blur-2xl" />
            <div className="relative">
              <ProgressiveImage
                src={profilePhoto}
                alt={profileData.name}
                containerClassName="h-56 w-56 md:h-64 md:w-64 overflow-hidden rounded-3xl border-4 border-background shadow-2xl"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                <Shield className="h-6 w-6" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block font-mono text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4"
            >
              Network & Systems Professional
            </motion.span>
            
            <h1 className="text-4xl font-black leading-[1.1] md:text-5xl lg:text-7xl mb-6 tracking-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Curiosity. </span>Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Security.</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to my portfolio! I have a genuine love for the mechanics of how the world connects. My enthusiasm for networking and cybersecurity drives me to constantly learn, adapt, and build IT infrastructures that don't just work, but excel. Take a look around my projects to see how I translate this passion into high-performance results.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Cisco", "AWS", "Azure", "Fortinet", "Windows Server", "Linux", "VPN", "TCP/IP" ].map((skill) => (
                <span key={skill} className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold text-primary uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:opacity-90 hover:scale-105"
              >
                View My Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-sm font-bold transition-all hover:bg-muted"
              >
                About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-black md:text-5xl mb-4">Core Expertise</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specialized domains where I translate complex technical theories into robust, scalable infrastructure solutions.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Network;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/projects?category=${cat.id}`}
                    className="group relative flex flex-col items-center gap-6 rounded-3xl border border-primary/10 bg-card p-10 text-center transition-all hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-10 w-10" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100 uppercase tracking-widest">
                      View Projects <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          >
            <div>
              <h2 className="text-4xl font-black md:text-5xl mb-2">Portfolio Highlights</h2>
              <p className="text-muted-foreground">Practical implementations of modern networking and security standards.</p>
            </div>
            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              All Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => navigate(`/projects/${project.id}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

