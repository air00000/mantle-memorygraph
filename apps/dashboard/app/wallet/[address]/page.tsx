export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AddressLink from "@/components/AddressLink";

interface Props {
  params: { address: string };
}

export default async function WalletProfilePage({ params }: Props) {
  const walletProfile = await prisma.walletProfile.findUnique({
    where: { address: params.address },
  });

  const observations = await prisma.observation.findMany({
    where: { relatedWallets: { has: params.address } },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  if (!walletProfile && observations.length === 0) {
    notFound();
  }

  const observationCount = walletProfile?.observations ?? observations.length;

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Wallet Profile
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Address: <AddressLink address={params.address} truncate={false} />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-xs text-slate-500">Observations</p>
          <p className="text-2xl font-semibold text-slate-900 mt-1">
            {observationCount}
          </p>
        </div>
        {walletProfile?.lastSeenAt && (
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-xs text-slate-500">Last Seen</p>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              {new Date(walletProfile.lastSeenAt).toLocaleDateString()}
            </p>
          </div>
        )}
        {walletProfile?.tags && walletProfile.tags.length > 0 && (
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-xs text-slate-500">Tags</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {walletProfile.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-2 py-1 rounded text-xs bg-slate-100 text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          Related Observations
        </h3>
        {observations.length > 0 ? (
          <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                    Event Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
                    Relevance
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">
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
                    <td className="px-4 py-3 text-slate-700">
                      {obs.eventType}
                    </td>
                    <td className="px-4 py-3">
                      <RelevanceBadge value={obs.relevanceScore} />
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      {new Date(obs.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm text-slate-400">No observations found.</p>
        )}
      </div>

      <a
        href="/observations"
        className="inline-flex text-sm text-mantle-600 hover:text-mantle-800 hover:underline"
      >
        &larr; Back to Observations
      </a>
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
