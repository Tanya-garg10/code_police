"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { ArrowLeft, Calendar, Clock, Shield, GitCommit, GitPullRequest, Code, HelpCircle, Network, AlertTriangle } from "lucide-react";

export default function IntroducingCodePolicePage() {
  return (
    <div className="min-h-screen bg-[#0b0e0f] text-[#c9d1d9] font-mono selection:bg-[#3fb950] selection:text-black">
      <Header />

      <main className="max-w-3xl mx-auto px-4 pt-32 pb-24">
        {/* Back navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#6e7681] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="border-b border-[#1c2528] pb-8 mb-10">
          <div className="flex items-center gap-2 text-[#56d364] mb-4">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#1f2428] border border-[#30363d]">
              Announcements
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Introducing Code-Police: Self-Healing Repositories and AI Co-Maintenance
          </h1>
          
          <div className="flex items-center gap-4 flex-wrap text-sm text-[#6e7681]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-xs font-bold text-emerald-400 border border-emerald-500/25">
                CP
              </div>
              <span className="text-[#c9d1d9] font-medium">Code-Police Core Team</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              June 9, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>
        </div>

        {/* Article Body */}
        <article className="space-y-8 text-base md:text-[17px] leading-relaxed text-[#c9d1d9]">
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            Open-source software (OSS) runs the digital world. Yet, the foundations of this ecosystem are built on a highly fragile resource: the finite time and energy of voluntary maintainers.
          </p>

          <p>
            Today, open-source maintainers face a dual crisis: a staggering rise in repository contributions paired with unprecedented levels of developer burnout. Code review backlogs stretch for months, critical security updates go unpatched, and dependency version bumps break production systems without warning.
          </p>

          <p>
            We built <strong>Code-Police</strong> to resolve this bottleneck. By introducing active, graph-aware AI co-maintenance and self-healing pull requests, Code-Police transitions repositories from passive code hosts into actively self-maintaining systems.
          </p>

          {/* Section: The Why */}
          <section className="space-y-4 pt-6 border-t border-[#1c2528] mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#ff5f56]" />
              The "Why": The Maintenance Crisis
            </h2>
            <p>
              Traditional static code analysis tools (such as linters and static analysis scanners) suffer from three fatal flaws that render them insufficient for modern collaborative engineering:
            </p>

            <div className="grid gap-4 mt-4">
              <div className="p-5 rounded-xl border border-[#1c2528] bg-[#0f1418]/60">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-[#ff5f56]">Blindspot 1</span>
                  Transitive Blast Radius
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  When a contributor changes an export signature in a file, conventional scanners only analyze that file. They remain completely blind to the fact that 12 other files importing that dependency are now broken—leaving broken builds to be caught at compile-time or runtime.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#1c2528] bg-[#0f1418]/60">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-[#ff5f56]">Blindspot 2</span>
                  Stale Merge Conflicts
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  Pull requests sit in queues. As other PRs get merged, stale branches inevitably drift. Maintainers are forced to manually request or perform rebases, creating friction and stalling velocity.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#1c2528] bg-[#0f1418]/60">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-[#ff5f56]">Blindspot 3</span>
                  Passive Reporting
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  Standard scanners print warnings. Developers must read the warning, figure out the fix, edit the file, and re-commit. This loop wastes time on trivial problems (like formatting, simple security mitigations, and readability).
                </p>
              </div>
            </div>
          </section>

          {/* Section: The How */}
          <section className="space-y-4 pt-6 border-t border-[#1c2528] mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <Network className="w-6 h-6 text-[#58a6ff]" />
              The "How": Active AI Co-Maintenance
            </h2>
            <p>
              Code-Police directly tackles these problems using an agentic, graph-aware, and cost-effective approach.
            </p>

            <h3 className="text-lg font-bold text-white mt-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-[#39c5cf]" />
              1. Graph-Aware Analysis
            </h3>
            <p>
              Code-Police builds an in-memory dependency tree of your repository. When a commit changes a file, our agent performs a **blast-radius calculation**, analyzing how changes cascade down to files that import or depend on the modified modules. By tracking imports recursively, we can provide feedback on broken interfaces before code leaves the PR branch.
            </p>

            <h3 className="text-lg font-bold text-white mt-6 flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-[#bc8cff]" />
              2. Merge Conflict Pre-Checking
            </h3>
            <p>
              Our GitHub webhook triggers merge pre-checks against target branches on every PR event. If a conflict is imminent due to concurrent updates on main, maintainers and developers are immediately alerted, allowing early resolution.
            </p>

            <h3 className="text-lg font-bold text-white mt-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#56d364]" />
              3. Self-Healing Pull Requests
            </h3>
            <p>
              Instead of just highlighting code bugs, Code-Police automatically generates fixes. Using Gemini's advanced logic model, it generates concrete patches for security flaws, performance bugs, or style drift, and opens an **Auto-fix Pull Request** directly on the branch. All developers have to do is merge.
            </p>

            {/* Mock console UI graphic */}
            <div className="term-window my-6 shadow-xl">
              <div className="term-titlebar justify-between">
                <div className="flex gap-2">
                  <span className="term-dot term-dot-red" />
                  <span className="term-dot term-dot-amber" />
                  <span className="term-dot term-dot-green" />
                </div>
                <span className="text-[#8b949e]">Auto-fix PR creation</span>
              </div>
              <div className="p-5 text-sm md:text-base leading-relaxed bg-[#0f1418] text-[#c9d1d9]">
                <div className="text-[#39c5cf] font-semibold mb-2">🤖 Code-Police Auto-Fix Triggered</div>
                <div className="text-zinc-400 mb-2">Analyzing 4 issues in `src/lib/auth.ts`...</div>
                <div className="text-emerald-400 mb-2">✓ Generated SQL Injection fix on line 32</div>
                <div className="text-emerald-400 mb-2">✓ Generated XSS mitigation on line 78</div>
                <div className="text-[#58a6ff] mb-2">PR Created: github.com/user/repo/pull/43 [code-police/auto-fix]</div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mt-6 flex items-center gap-2">
              <GitPullRequest className="w-5 h-5 text-amber-400" />
              4. Bring Your Own Key (BYOK)
            </h3>
            <p>
              Open source is about sustainability. High API usage bills can kill open source initiatives. Code-Police solves this by implementing **Bring Your Own Key (BYOK)**. Projects and contributors can securely encrypt and supply their own Gemini API keys, allowing communities to review code collectively without central billing bottlenecks.
            </p>
          </section>

          {/* Section: Getting Started */}
          <section className="space-y-4 pt-6 border-t border-[#1c2528] mt-8 bg-gradient-to-br from-[#0f1418] to-transparent p-6 rounded-2xl border border-[#1c2528]">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#56d364]" />
              Start Automating Your Reviews
            </h2>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              Code-Police is built for developers who care about software durability and maintainer velocity. Setting it up takes less than 3 minutes. Connect your GitHub repository, define your strictness profiles, and let AI protect your codebase.
            </p>
            <div className="pt-4 flex gap-4">
              <Link
                href="/dashboard"
                className="px-6 py-2.5 bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-semibold rounded-md transition-colors text-center"
              >
                Go to Dashboard
              </Link>
              <Link
                href="/"
                className="px-6 py-2.5 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#c9d1d9] text-sm font-semibold rounded-md transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
