export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 space-y-6">

      {/* Top Bar */}
      <div className="flex justify-between items-center bg-card p-4 rounded-xl border border-border">
        <div className="flex gap-4">
          <select className="bg-bg border border-border px-3 py-2 rounded">
            <option>jio-hcmp-gp</option>
            <option>jio-hcmp-gre</option>
            <option>jio-hcmp-at</option>
          </select>

          <select className="bg-bg border border-border px-3 py-2 rounded">
            <option>NIC PROD</option>
            <option>Replica</option>
            <option>JPL</option>
          </select>
        </div>

        <div className="text-sm">
          Build #1024{" "}
          <span className="text-primary font-semibold">
            [RUNNING]
          </span>
        </div>
      </div>

      {/* Production Banner */}
      <div className="bg-fail/80 text-white p-4 rounded-xl">
        PRODUCTION SAFETY WARNING — Write operations restricted.
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {["Last Build", "Success Rate", "Avg Deploy Time", "Last Artifact"].map(
          (item) => (
            <div
              key={item}
              className="bg-card p-4 rounded-xl border border-border"
            >
              <div className="text-sm text-gray-400">{item}</div>
              <div className="text-lg font-semibold mt-2">Value</div>
            </div>
          )
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-4 items-center">
        <button className="bg-primary px-5 py-2 rounded-lg font-semibold">
          ▶ Run Pipeline
        </button>

        <button className="bg-card border border-border px-4 py-2 rounded-lg">
          Dry Run
        </button>

        <select className="bg-card border border-border px-3 py-2 rounded">
          <option>Service: gp</option>
          <option>gre</option>
          <option>at</option>
          <option>all</option>
        </select>
      </div>

    </div>
  );
}
