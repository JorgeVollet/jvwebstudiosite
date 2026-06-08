import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/projects";
import ShowcaseFrame from "@/components/ShowcaseFrame";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Projeto não encontrado" };
  return {
    title: `${p.client} — Portfólio`,
    description: p.desc,
  };
}

export default function ProjectShowcase({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return <ShowcaseFrame project={project} />;
}
