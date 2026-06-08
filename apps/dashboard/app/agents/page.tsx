export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

export default async function AgentsPage() {
  const agentRuns = await prisma.agentRun.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Agent Runs</h2>
        <p className="text-sm text-slate-500 mt-1">
          Log of AI agent processing runs and their outputs.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Agent Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Model
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Observation
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Created
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {agentRuns.map((run) => (
              <tr key={run.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-mono text-xs text-slate-500">
                  {run.id.slice(0, 10)}...
                </td>
                <td className="px-4 py-3 text-slate-700 font-medium">
                  {run.agentName}
                </td>
                <td className="px-4 py-3 text-slate-500">{run.agentRole}</td>
                <td className="px-4 py-3 text-slate-500">{run.modelProvider}</td>
                <td className="px-4 py-3">
                  {run.observationId ? (
                    <a
                      href={`/observations/${run.observationId}`}
                      className="text-mantle-600 hover:text-mantle-800 hover:underline text-xs font-mono"
                    >
                      {run.observationId.slice(0, 8)}...
                    </a>
                  ) : (
                    <span className="text-slate-400 text-xs">-</span>
                  )}
                </td>
                <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                  {new Date(run.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {agentRuns.length === 0 && (
        <p className="text-sm text-slate-400">No agent runs found.</p>
      )}
    </div>
  );
}
