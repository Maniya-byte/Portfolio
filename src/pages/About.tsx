import { motion } from "framer-motion";
import { 
  MapPin, Mail, Github, Linkedin, Globe, GraduationCap, 
  Award, Briefcase, Sparkles, BookOpen, Star, User,
  Calendar, Building2, CheckCircle2
} from "lucide-react";
import Layout from "@/components/Layout";
import { profileData } from "@/data/portfolioData";
import profilePhoto from "@/assets/profile-photo.jpg";
import ProgressiveImage from "@/components/ProgressiveImage";
import CvDownloadButton from "@/components/CvDownloadButton";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <section className="section-padding">
          <div className="mx-auto max-w-5xl">
            {/* Header / Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="mb-20 flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary via-primary/50 to-orange-400 blur-2xl opacity-20" />
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-orange-400 opacity-70 group-hover:opacity-100 transition duration-500" />
                  <ProgressiveImage
                    src={profilePhoto}
                    alt={profileData.name}
                    containerClassName="relative h-48 w-48 md:h-56 md:w-56 rounded-2xl border-2 border-background bg-muted shadow-2xl overflow-hidden"
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-3 -right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg border-2 border-background">
                    <User className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Available for Opportunities</span>
                </motion.div>
                
                <h1 className="text-4xl font-black md:text-6xl tracking-tight mb-6">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">{profileData.name}</span>
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  {profileData.bio}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground md:justify-start mb-8">
                  <div className="flex items-center gap-2 hover:text-primary transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{profileData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-primary transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{profileData.email}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 md:justify-start">
                  {[
                    { icon: Github, href: profileData.social.github, label: "GitHub" },
                    { icon: Linkedin, href: profileData.social.linkedin, label: "LinkedIn" },
                    { icon: Globe, href: profileData.social.website, label: "Portfolio" }
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted/50 border border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid gap-16 lg:grid-cols-12">
              {/* Main Column: Experience, Education, Certifications */}
              <div className="lg:col-span-8 space-y-20">
                {/* Experience */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center gap-3 mb-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">Experience</h2>
                  </div>

                  <div className="relative border-l-2 border-primary/10 ml-6 space-y-12 pb-4">
                    {profileData.experience.map((exp, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="relative pl-10"
                      >
                        <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-glow" />
                        <div className="group relative rounded-3xl border border-primary/10 bg-muted/30 p-8 transition-all hover:bg-muted/50 hover:border-primary/30">
                          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                              <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                                <Building2 className="h-4 w-4 shrink-0" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                            </div>
                            <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider h-fit whitespace-nowrap">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base">
                            {exp.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center gap-3 mb-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">Education</h2>
                  </div>

                  <div className="space-y-6">
                    {profileData.education.map((edu, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="group flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-primary/10 bg-muted/30 hover:bg-muted/50 transition-all"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-background border border-primary/10 shadow-sm">
                          <BookOpen className="h-7 w-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{edu.degree}</h3>
                            <span className="hidden md:block text-muted-foreground">•</span>
                            <span className="text-sm font-semibold text-primary/80 whitespace-nowrap">{edu.period}</span>
                          </div>
                          <p className="text-lg font-medium mb-2">{edu.institution}</p>
                          <div className="inline-flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-1 text-sm font-bold text-primary w-fit">
                            <Star className="h-3.5 w-3.5 fill-current" />
                            {edu.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center gap-3 mb-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Award className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">Certifications</h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {profileData.certifications.map((cert, i) => (
                      <motion.div 
                        key={i} 
                        variants={itemVariants}
                        className="group relative p-6 rounded-2xl border border-primary/10 bg-muted/30 hover:bg-muted/50 transition-all hover:border-primary/30 flex flex-col justify-between gap-3"
                      >
                        <h4 className="font-bold text-base md:text-lg leading-tight group-hover:text-primary transition-colors">{cert.name}</h4>
                        <div className="text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-2 mt-auto pt-2 border-t border-primary/5">
                          <span className="font-medium">{cert.issuer}</span>
                          {cert.year && (
                            <span className="flex items-center gap-1 text-primary font-bold bg-primary/5 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider whitespace-nowrap">
                              <CheckCircle2 className="h-3 w-3" />
                              {cert.year}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar Column: Skills & CTA */}
              <div className="lg:col-span-4 space-y-12">
                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-primary/10 bg-muted/30 p-8"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                      <Star className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold">Skills</h2>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 rounded-xl bg-background border border-primary/10 text-sm font-medium hover:border-primary/40 hover:text-primary transition-all cursor-default shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-3xl bg-primary p-1 text-center shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary via-orange-500 to-yellow-400" />
                  <div className="relative rounded-[calc(1.5rem-1px)] bg-background p-8">
                    <h3 className="text-xl font-bold mb-4">Need my full profile?</h3>
                    <p className="text-sm text-muted-foreground mb-8">
                      Download my comprehensive CV for in-depth details about my background.
                    </p>
                    <CvDownloadButton />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
