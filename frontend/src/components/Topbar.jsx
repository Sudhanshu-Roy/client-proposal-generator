function Topbar() {
  return (
    <header className="card p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
            Welcome back, Rahul!
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#111827]">
            Build a proposal your client will love.
          </h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button className="btn-secondary rounded-3xl px-5 py-3 text-sm font-semibold">Notifications</button>
          <button className="btn-primary rounded-3xl px-5 py-3 text-sm font-semibold">Credits: 12</button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
