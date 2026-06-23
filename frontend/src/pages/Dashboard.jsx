import { useState } from "react";
import { generateProposal } from "../services/api";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ProposalCard from "../components/ProposalCard";

function Dashboard() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [businessGoal, setBusinessGoal] = useState("");
  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const response = await generateProposal({
        website_url: websiteUrl,
        business_goal: businessGoal,
      });
      setProposal(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate proposal");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setWebsiteUrl("");
    setBusinessGoal("");
    setProposal(null);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] p-4 sm:p-6 lg:p-8">
      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <Sidebar />

        <main className="space-y-6">
          <Topbar />

          <section className="card overflow-hidden p-6 sm:p-8">
            <div className="grid gap-6 xl:grid-cols-[2fr_1fr] xl:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-[#7c3aed]">Generate a New Proposal</p>
                <h2 className="text-3xl font-bold text-[#111827]">Enter website details and business goals.</h2>
                <p className="max-w-2xl text-sm text-[#64748b]">
                  Create a polished, client-ready marketing proposal with a single request.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch">
                  <input
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="input-soft min-h-[140px] rounded-3xl border px-4 pt-4 pb-3 text-sm leading-6 outline-none focus:border-[#c084fc] focus:ring-2 focus:ring-[#ede9fe]"
                    placeholder="Website URL"
                  />
                  <textarea
                    value={businessGoal}
                    onChange={(e) => setBusinessGoal(e.target.value)}
                    className="input-soft min-h-[140px] rounded-3xl border px-4 pt-4 pb-4 text-sm leading-6 outline-none focus:border-[#c084fc] focus:ring-2 focus:ring-[#ede9fe] resize-none"
                    placeholder="Business Goal"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="btn-primary rounded-3xl px-6 py-4 text-sm font-semibold tracking-wide disabled:opacity-70"
                  >
                    {loading ? "Generating Proposal..." : "Generate Proposal"}
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn-secondary rounded-3xl px-6 py-4 text-sm font-semibold tracking-wide"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#f5f3ff] to-[#fff1f2] p-8">
                <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-white/70 blur-2xl" />
                <div className="h-full rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">Ready to launch</p>
                      <h3 className="mt-3 text-2xl font-bold text-[#111827]">Client-ready proposals in minutes</h3>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-[#0f172a]">Fast workflow</p>
                      <p className="mt-2 text-sm text-[#64748b]">Auto-generate content and structure for marketing proposals.</p>
                    </div>
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-[#0f172a]">Premium designs</p>
                      <p className="mt-2 text-sm text-[#64748b]">Modern layout with soft gradients, spacing, and visual hierarchy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {proposal && (
            <section className="space-y-6">
              <div className="grid gap-6 xl:grid-cols-3">
                <ProposalCard
                  title="Website Analysis"
                  description="A summary of your site performance and structure."
                  iconClass="bg-[#ede9fe] text-[#7c3aed]"
                />
                <ProposalCard
                  title="Strengths"
                  description="Highlighting what makes your website stand out."
                  iconClass="bg-[#dcfce7] text-[#15803d]"
                />
                <ProposalCard
                  title="Weaknesses"
                  description="Most impactful improvement opportunities."
                  iconClass="bg-[#fef3c7] text-[#b45309]"
                />
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                <div className="card p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[#111827]">Executive Summary</h3>
                      <p className="mt-2 text-sm text-[#64748b]">A concise overview of your proposal outcome.</p>
                    </div>
                    <span className="badge">Overview</span>
                  </div>
                  <p className="mt-5 text-[#475569]">{proposal.executive_summary}</p>
                </div>
                <div className="card p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[#111827]">Website Analysis</h3>
                      <p className="mt-2 text-sm text-[#64748b]">Insights from the scraped site content.</p>
                    </div>
                    <span className="badge">Insights</span>
                  </div>
                  <p className="mt-5 text-[#475569]">{proposal.website_analysis}</p>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-[#111827]">Strengths</h3>
                  <ul className="mt-5 space-y-3 text-[#475569] list-disc pl-5">
                    {proposal?.strengths?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-[#111827]">Weaknesses</h3>
                  <ul className="mt-5 space-y-3 text-[#475569] list-disc pl-5">
                    {proposal?.weaknesses?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
