export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import StatsCard from "@/components/StatsCard";
import AddressLink from "@/components/AddressLink";

export default async function DashboardPage() {
  const totalObservations = await prisma.observation.count();
  const anchoredCount = await prisma.observation.count({
    where: { onchainTxHash: { not: null } },
  });
  const patternCount = await prisma.patternMemory.count();
  const agentRunCount = await prisma.agentRun.count();

  const recentObservations = await prisma.observation.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
        <p className="text-sm text-slate-500 mt-1">
          Summary of on-chain observations and memory analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Observations"
          value={totalObservations}
          subtitle="All time"
        />
        <StatsCard
          title="Anchored on Chain"
          value={anchoredCount}
          subtitle="With on-chain tx hash"
        />
        <StatsCard
          title="Pattern Memories"
          value={patternCount}
          subtitle="Detected patterns"
        />
        <StatsCard
          title="Agent Runs"
          value={agentRunCount}
          subtitle="Processing jobs"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          Recent Observations
        </h3>
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Event Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Primary Entity
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Relevance
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Created
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentObservations.map((obs) => (
                <tr key={obs.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <a
                      href={`/observations/${obs.id}`}
                      className="text-mantle-600 hover:text-mantle-800 hover:underline font-mono text-xs"
                    >
                      {obs.id.slice(0, 8)}...
                    </a>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{obs.eventType}</td>
                  <td className="px-4 py-3">
                    <AddressLink address={obs.primaryEntity} />
                  </td>
                  <td className="px-4 py-3">
                    <RelevanceBadge value={obs.relevanceScore} />
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {formatDate(obs.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RelevanceBadge({ value }: { value: number }) {
  let color = "bg-slate-100 text-slate-600";
  if (value >= 80) color = "bg-emerald-100 text-emerald-700";
  else if (value >= 50) color = "bg-amber-100 text-amber-700";
  else if (value >= 30) color = "bg-orange-100 text-orange-700";
  else color = "bg-red-100 text-red-700";

  return (
    <span
      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${color}`}
    >
      {value}/100
    </span>
  );
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
