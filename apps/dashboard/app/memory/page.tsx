export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

export default async function MemoryPage() {
  const snapshots = await prisma.memorySnapshot.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Memory Snapshots
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Periodic aggregations of on-chain observations and patterns.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Period Start
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Period End
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Summary
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
            {snapshots.map((snap) => (
              <tr key={snap.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-700 font-medium">
                  {snap.memoryType}
                </td>
                <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                  {new Date(snap.periodStart).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                  {new Date(snap.periodEnd).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-slate-700 max-w-sm truncate">
                  {snap.summary}
                </td>
                <td className="px-4 py-3">
                  {snap.onchainTxHash ? (
                    <a
                      href={`https://explorer.sepolia.mantle.xyz/tx/${snap.onchainTxHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mantle-600 hover:text-mantle-800 hover:underline text-xs"
                    >
                      Yes
                    </a>
                  ) : (
                    <span className="text-slate-400 text-xs">No</span>
                  )}
                </td>
                <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                  {new Date(snap.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {snapshots.length === 0 && (
        <p className="text-sm text-slate-400">
          No memory snapshots found.
        </p>
      )}
    </div>
  );
}
