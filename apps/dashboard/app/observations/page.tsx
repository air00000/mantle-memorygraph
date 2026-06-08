export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import AddressLink from "@/components/AddressLink";

export default async function ObservationsPage() {
  const observations = await prisma.observation.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Observations</h2>
        <p className="text-sm text-slate-500 mt-1">
          Recent on-chain observations and events.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
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
                  Source
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Primary Entity
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Relevance
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Anchored
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Created
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {observations.map((obs) => (
                <tr key={obs.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <a
                      href={`/observations/${obs.id}`}
                      className="text-mantle-600 hover:text-mantle-800 hover:underline font-mono text-xs"
                    >
                      {obs.id.slice(0, 10)}...
                    </a>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{obs.eventType}</td>
                  <td className="px-4 py-3 text-slate-500">{obs.source}</td>
                  <td className="px-4 py-3">
                    <AddressLink address={obs.primaryEntity} />
                  </td>
                  <td className="px-4 py-3">
                    <RelevanceBadge value={obs.relevanceScore} />
                  </td>
                  <td className="px-4 py-3">
                    {obs.onchainTxHash ? (
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                        Yes
                      </span>
                    ) : (
                      <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                        No
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
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
