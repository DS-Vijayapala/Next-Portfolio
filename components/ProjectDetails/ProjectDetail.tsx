"use client";

import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Clock,
  Layers,
  Code2,
  Sparkles,
  ShieldCheck,
  Gauge,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  bgImage: string;
  images?: string[];
  technologies: string[];
  github?: string;
  live?: string;
  date: string;
  project_status?: boolean;
  architecture?: string;
  frammework?: string;
}

const ProjectDetailPage = ({ project }: { project: Project }) => {
  const {
    title,
    description,
    bgImage,
    images,
    technologies,
    github,
    live,
    date,
    project_status,
    architecture,
    frammework,
  } = project;
  const galleryImages = (images && images.length > 0 ? images : [bgImage]).slice(0, 5);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="theme-bg-orb theme-bg-orb-1" />
      <div className="theme-bg-orb theme-bg-orb-2" />
      <div className="theme-bg-grid" />

      <div className="relative z-10 w-full px-4 py-12 sm:px-10 lg:px-[12%]">
        <Link
          href="/all-projects"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-violet-300"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-xl shadow-black/30">
              <div className="relative px-4 pb-4 pt-6 sm:px-6 sm:pb-6">
                <Carousel opts={{ loop: galleryImages.length > 1 }} className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={`${image}-${index}`}>
                        <div className="relative h-56 overflow-hidden rounded-xl border border-slate-700/70 sm:h-72">
                          <img
                            src={image}
                            alt={`${title} screenshot ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {galleryImages.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-violet-500/20" />
                      <CarouselNext className="right-2 border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-violet-500/20" />
                    </>
                  )}
                </Carousel>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${
                      project_status
                        ? "border-emerald-500/30 bg-emerald-500/20 text-emerald-300"
                        : "border-amber-500/30 bg-amber-500/20 text-amber-300"
                    }`}
                  >
                    {project_status ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Clock className="h-3.5 w-3.5" />
                        Ongoing
                      </>
                    )}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/15 px-3 py-1.5 text-xs font-medium text-violet-300">
                    <Layers className="h-3.5 w-3.5" />
                    {architecture}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/15 px-3 py-1.5 text-xs font-medium text-purple-300">
                    <Code2 className="h-3.5 w-3.5" />
                    {frammework}
                  </span>
                </div>

                <h1 className="text-xl font-semibold leading-tight text-slate-100">{title}</h1>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-600/60 bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  )}

                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-slate-800/35 p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="rounded-lg border border-violet-500/25 bg-violet-500/10 p-2">
                  <Sparkles className="h-4 w-4 text-violet-400" />
                </div>
                <h2 className="text-xl font-semibold text-slate-100">About This Project</h2>
              </div>

              <div
                className="project-description text-sm leading-8 text-slate-300 text-justify"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-slate-800/35 p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="rounded-lg border border-purple-500/25 bg-purple-500/10 p-2">
                  <Code2 className="h-4 w-4 text-purple-400" />
                </div>
                <h2 className="text-xl font-semibold text-slate-100">Tech Stack</h2>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-slate-600/50 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-800/35 p-5 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-slate-100">Project Highlights</h3>

              <div className="space-y-3">
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/60 p-3">
                  <div className="mb-1 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300">
                    <Layers className="h-4 w-4" />
                    Architecture
                  </div>
                  <p className="text-sm text-slate-400">
                    Designed with {architecture} principles for clear separation and maintainability.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-800/60 p-3">
                  <div className="mb-1 inline-flex items-center gap-1.5 text-sm font-medium text-purple-300">
                    <Gauge className="h-4 w-4" />
                    Performance
                  </div>
                  <p className="text-sm text-slate-400">
                    Optimized UI structure and component layering for responsive real-world usage.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-700/50 bg-slate-800/60 p-3">
                  <div className="mb-1 inline-flex items-center gap-1.5 text-sm font-medium text-pink-300">
                    <ShieldCheck className="h-4 w-4" />
                    Production Quality
                  </div>
                  <p className="text-sm text-slate-400">
                    Built with maintainable standards, scalable structure, and practical deployment focus.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
