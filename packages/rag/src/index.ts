import { PrismaClient } from "@alphacouncil/database";

const prisma = new PrismaClient();

/**
 * Find related observations and patterns for a given context.
 */
export async function findContext(params: {
  primaryEntity: string;
  relatedWallets?: string[];
  relatedTokens?: string[];
  eventType?: string;
}): Promise<{
  pastObservations: Array<Record<string, unknown>>;
  patterns: Array<Record<string, unknown>>;
}> {
  const { primaryEntity, relatedWallets, relatedTokens, eventType } = params;

  const pastObservations = await prisma.observation.findMany({
    where: {
      OR: [
        { primaryEntity },
        ...(Array.isArray(relatedWallets)
          ? relatedWallets.map((addr) => ({
              relatedWallets: { has: addr },
            }))
          : []),
        ...(Array.isArray(relatedTokens)
          ? relatedTokens.map((addr) => ({
              relatedTokens: { has: addr },
            }))
          : []),
        ...(eventType ? [{ eventType }] : []),
      ],
    },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  const entitySet = new Set<string>([primaryEntity]);
  if (Array.isArray(relatedWallets)) {
    relatedWallets.forEach((w) => entitySet.add(w.toLowerCase()));
  }
  if (Array.isArray(relatedTokens)) {
    relatedTokens.forEach((t) => entitySet.add(t.toLowerCase()));
  }
  const entityList = Array.from(entitySet);

  const patterns = await prisma.patternMemory.findMany({
    where: {
      entities: {
        hasSome: entityList,
      },
    },
    orderBy: { confidence: "desc" },
    take: 10,
  });

  return { pastObservations, patterns };
}

/**
 * Get wallet profile and observations for a given address.
 */
export async function findWalletContext(address: string): Promise<{
  profile: Record<string, unknown> | null;
  observations: Array<Record<string, unknown>>;
}> {
  const profile = await prisma.walletProfile.findUnique({
    where: { address: address.toLowerCase() },
  });

  const observations = await prisma.observation.findMany({
    where: {
      OR: [
        { primaryEntity: address.toLowerCase() },
        { relatedWallets: { has: address.toLowerCase() } },
      ],
    },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return { profile, observations };
}

/**
 * Get token profile and observations for a given address.
 */
export async function findTokenContext(address: string): Promise<{
  profile: Record<string, unknown> | null;
  observations: Array<Record<string, unknown>>;
}> {
  const profile = await prisma.tokenProfile.findUnique({
    where: { address: address.toLowerCase() },
  });

  const observations = await prisma.observation.findMany({
    where: {
      OR: [
        { primaryEntity: address.toLowerCase() },
        { relatedTokens: { has: address.toLowerCase() } },
      ],
    },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return { profile, observations };
}

/**
 * Find patterns by entity overlap, ordered by confidence descending.
 */
export async function findPatternsForEntities(
  entities: string[]
): Promise<Array<Record<string, unknown>>> {
  if (!Array.isArray(entities) || entities.length === 0) {
    return [];
  }

  const normalizedEntities = entities.map((e) => e.toLowerCase());

  return prisma.patternMemory.findMany({
    where: {
      entities: {
        hasSome: normalizedEntities,
      },
    },
    orderBy: { confidence: "desc" },
    take: 10,
  });
}
