export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AddressLink from "@/components/AddressLink";

interface Props {
  params: { id: string };
}

export default async function ObservationDetailPage({ params }: Props) {
  const observation = await prisma.observation.findUnique({
    where: { id: params.id },
  });

  if (!observation) {
    notFound();
  }

  const facts = observation.facts as string[];

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Observation Detail
        </h2>
        <p className="text-xs font-mono text-slate-400 mt-1">
          {observation.id}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard title="Event Type" value={observation.eventType} />
        <InfoCard title="Source" value={`${observation.source} / ${observation.chain}`} />
        <InfoCard
          title="Relevance"
          value={`${observation.relevanceScore}/100`}
        />
        <InfoCard
          title="Novelty"
          value={`${observation.noveltyScore}/100`}
        />
        <InfoCard
          title="Pattern Similarity"
          value={`${observation.patternSimilarity}/100`}
        />
        <InfoCard
          title="Context Coverage"
          value={`${observation.contextCoverage}/100`}
        />
      </div>

      <Section title="Primary Entity">
        <AddressLink address={observation.primaryEntity} truncate={false} />
      </Section>

      {observation.relatedWallets.length > 0 && (
        <Section title="Related Wallets">
          <div className="flex flex-wrap gap-2">
            {observation.relatedWallets.map((addr) => (
              <AddressLink key={addr} address={addr} />
            ))}
          </div>
        </Section>
      )}

      {observation.relatedTokens.length > 0 && (
        <Section title="Related Tokens">
          <div className="flex flex-wrap gap-2">
            {observation.relatedTokens.map((addr) => (
              <AddressLink key={addr} address={addr} />
            ))}
          </div>
        </Section>
      )}

      {observation.txHash && (
        <Section title="On-Chain Verification">
          <a
            href={`https://explorer.sepolia.mantle.xyz/tx/${observation.txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mantle-600 hover:text-mantle-800 hover:underline text-sm font-mono"
          >
            {observation.txHash}
          </a>
          <p className="text-xs text-slate-400 mt-1">
            View transaction on Mantle Explorer
          </p>
        </Section>
      )}

      {observation.onchainTxHash && (
        <Section title="Anchor Transaction">
          <a
            href={`https://explorer.sepolia.mantle.xyz/tx/${observation.onchainTxHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mantle-600 hover:text-mantle-800 hover:underline text-sm font-mono"
          >
            {observation.onchainTxHash}
          </a>
          <p className="text-xs text-slate-400 mt-1">
            View anchor transaction on Mantle Explorer
          </p>
        </Section>
      )}

      {facts.length > 0 && (
        <Section title="Facts">
          <ul className="space-y-2">
            {facts.map((fact, i) => (
              <li key={i} className="text-sm text-slate-800">
                • {fact}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {observation.summary && (
        <Section title="AI Summary">
          <div className="text-sm text-slate-800 whitespace-pre-line">
            {observation.summary}
          </div>
        </Section>
      )}

      {observation.limitations.length > 0 && (
        <Section title="Limitations">
          <ul className="space-y-1">
            {observation.limitations.map((lim, i) => (
              <li key={i} className="text-sm text-slate-600">
                • {lim}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {observation.blockNumber && (
        <InfoCard
          title="Block Number"
          value={observation.blockNumber.toString()}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          title="Created"
          value={new Date(observation.createdAt).toLocaleString()}
        />
        <InfoCard
          title="Updated"
          value={new Date(observation.updatedAt).toLocaleString()}
        />
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
        <p className="text-xs text-amber-700">
          This is a neutral observation, not a trading recommendation.
        </p>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function InfoCard({
  title,
  value,
  mono = false,
}: {
  title: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs text-slate-500 mb-1">{title}</p>
      <p
        className={`text-sm font-medium text-slate-800 ${mono ? "font-mono" : ""}`}
      >
        {value}
      </p>
    </div>
  );
}
