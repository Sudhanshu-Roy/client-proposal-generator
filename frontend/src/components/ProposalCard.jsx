function ProposalCard({ title, description, iconClass }) {
  return (
    <div className="card p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-[#111827]">{title}</h3>
          <p className="mt-2 text-sm text-[#64748b]">{description}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-3xl ${iconClass}`}>
          ✓
        </div>
      </div>
    </div>
  );
}

export default ProposalCard;
