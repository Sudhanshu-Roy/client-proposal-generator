const navItems = [
  { label: "Dashboard" },
  { label: "New Proposal" },
  { label: "Proposal History" },
  { label: "Favorites" },
  { label: "Analytics" },
  { label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="hidden xl:flex h-full flex-col gap-6 p-6 card min-w-[300px]">
      <div className="space-y-4">
        <div className="rounded-3xl bg-gradient-to-br from-[#ede9fe] to-[#eef2ff] p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#c4b5fd] text-xl font-bold text-white">
              P
            </div>
            <div>
              <p className="text-sm font-semibold text-[#53389e]">PropoAI</p>
              <p className="text-xs text-[#7c3aed]">AI Proposal Generator</p>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="nav-link flex w-full items-center gap-3 rounded-3xl px-4 py-4 text-left text-sm font-semibold text-slate-700 transition hover:bg-violet-50"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-white shadow-sm text-violet-600">
                {item.label.charAt(0)}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="rounded-[28px] bg-gradient-to-b from-[#fdf2f8] to-[#fef3c7] p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-[#a855f7]">
          <span>Upgrade to Pro</span>
          <span className="badge">PRO</span>
        </div>
        <p className="text-sm text-[#475569]">Unlock export to PDF, branded templates, and analytics dashboards.</p>
        <button className="btn-primary mt-5 w-full rounded-3xl px-4 py-3 text-sm">Upgrade Now</button>
      </div>

      <div className="rounded-[28px] bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#c4b5fd] to-[#a78bfa] text-xl font-bold text-white">
            R
          </div>
          <div>
            <p className="font-semibold text-[#111827]">Rahul Sharma</p>
            <p className="text-sm text-[#64748b]">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
