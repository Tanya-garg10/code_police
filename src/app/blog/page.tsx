"use client";

import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { ArrowRight, BookOpen, Clock, Calendar, Shield, Cpu, GitPullRequest } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: React.ReactNode;
  iconColor: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: "introducing-code-police",
    title: "Introducing Code-Police: Self-Healing Repositories and AI Co-Maintenance",
    excerpt: "Open-source software is facing a maintenance crisis. Learn how we are building Code-Police to automate PR reviews, pre-check merge conflicts, map transitive dependency blast-radii, and auto-generate code fixes to save maintainers from burnout.",
    category: "Announcements",
    date: "June 9, 2026",
    readTime: "6 min read",
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    iconColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    featured: true,
  },
  {
    slug: "measuring-blast-radius",
    title: "Measuring the Blast Radius: The Hidden Risks of Transitive Dependencies",
    excerpt: "Why minor dependency updates can break major application flows, and how static dependency-graph aware analysis helps prevent production incidents before merging.",
    category: "Engineering",
    date: "June 4, 2026",
    readTime: "4 min read",
    icon: <Cpu className="w-5 h-5 text-violet-400" />,
    iconColor: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  },
  {
    slug: "solving-maintainer-burnout",
    title: "Solving Developer Burnout with Agentic AI Co-Maintainers",
    excerpt: "How automated code correction (Self-Healing PRs) and Bring Your Own Key (BYOK) configurations can scale open source maintenance without sacrificing communities' sustainability.",
    category: "Productivity",
    date: "May 28, 2026",
    readTime: "5 min read",
    icon: <GitPullRequest className="w-5 h-5 text-amber-400" />,
    iconColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
];

export default function BlogIndexPage() {
  const featuredPost = blogPosts.find((p) => p.featured)!;
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#0b0e0f] text-[#c9d1d9] font-mono selection:bg-[#3fb950] selection:text-black">
      <Header />

      <main className="max-w-4xl mx-auto px-4 pt-32 pb-24">
        {/* Blog Header */}
        <div className="border-b border-[#1c2528] pb-12 mb-12">
          <div className="flex items-center gap-2 text-[#56d364] mb-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">Code-Police Publication</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            The Code-Police Blog
          </h1>
          <p className="text-[#6e7681] text-lg max-w-2xl leading-relaxed">
            Insights, engineering updates, and architectural designs on building self-healing code, managing blast radiuses, and scaling open-source maintenance.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-xs font-semibold text-[#6e7681] tracking-wider uppercase mb-4">Featured Story</h2>
            <div className="group relative border border-[#1c2528] rounded-2xl bg-[#0f1418] overflow-hidden hover:border-[#30363d] transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Shield className="w-32 h-32 text-emerald-500" />
              </div>
              <div className="p-8 md:p-10 relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#1f2428] border border-[#30363d] text-[#56d364]">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-[#6e7681] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="text-xs text-[#6e7681] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#56d364] transition-colors mb-4 leading-tight max-w-2xl">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-[#8b949e] text-base leading-relaxed mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#1c2528] mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-xs font-bold text-emerald-400 border border-emerald-500/25">
                      CP
                    </div>
                    <span className="text-xs text-zinc-300 font-medium">Code-Police Core Team</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-[#56d364] hover:text-[#39c5cf] transition-colors font-bold group/link"
                  >
                    Read Article 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div>
          <h2 className="text-xs font-semibold text-[#6e7681] tracking-wider uppercase mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.slug}
                className="group flex flex-col justify-between p-6 border border-[#1c2528] rounded-xl bg-[#0f1418] hover:border-[#30363d] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-1.5 rounded-lg border ${post.iconColor}`}>
                      {post.icon}
                    </div>
                    <span className="text-xs font-semibold text-[#8b949e] ml-1">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#56d364] transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#1a2123] mt-4 text-xs text-[#6e7681]">
                  <span>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#56d364] hover:text-[#39c5cf] font-bold transition-colors group/link"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
