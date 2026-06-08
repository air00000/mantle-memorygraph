
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Observation
 * 
 */
export type Observation = $Result.DefaultSelection<Prisma.$ObservationPayload>
/**
 * Model WalletProfile
 * 
 */
export type WalletProfile = $Result.DefaultSelection<Prisma.$WalletProfilePayload>
/**
 * Model TokenProfile
 * 
 */
export type TokenProfile = $Result.DefaultSelection<Prisma.$TokenProfilePayload>
/**
 * Model ContractProfile
 * 
 */
export type ContractProfile = $Result.DefaultSelection<Prisma.$ContractProfilePayload>
/**
 * Model PatternMemory
 * 
 */
export type PatternMemory = $Result.DefaultSelection<Prisma.$PatternMemoryPayload>
/**
 * Model AgentRun
 * 
 */
export type AgentRun = $Result.DefaultSelection<Prisma.$AgentRunPayload>
/**
 * Model MemorySnapshot
 * 
 */
export type MemorySnapshot = $Result.DefaultSelection<Prisma.$MemorySnapshotPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Observations
 * const observations = await prisma.observation.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Observations
   * const observations = await prisma.observation.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.observation`: Exposes CRUD operations for the **Observation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Observations
    * const observations = await prisma.observation.findMany()
    * ```
    */
  get observation(): Prisma.ObservationDelegate<ExtArgs>;

  /**
   * `prisma.walletProfile`: Exposes CRUD operations for the **WalletProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletProfiles
    * const walletProfiles = await prisma.walletProfile.findMany()
    * ```
    */
  get walletProfile(): Prisma.WalletProfileDelegate<ExtArgs>;

  /**
   * `prisma.tokenProfile`: Exposes CRUD operations for the **TokenProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenProfiles
    * const tokenProfiles = await prisma.tokenProfile.findMany()
    * ```
    */
  get tokenProfile(): Prisma.TokenProfileDelegate<ExtArgs>;

  /**
   * `prisma.contractProfile`: Exposes CRUD operations for the **ContractProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractProfiles
    * const contractProfiles = await prisma.contractProfile.findMany()
    * ```
    */
  get contractProfile(): Prisma.ContractProfileDelegate<ExtArgs>;

  /**
   * `prisma.patternMemory`: Exposes CRUD operations for the **PatternMemory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatternMemories
    * const patternMemories = await prisma.patternMemory.findMany()
    * ```
    */
  get patternMemory(): Prisma.PatternMemoryDelegate<ExtArgs>;

  /**
   * `prisma.agentRun`: Exposes CRUD operations for the **AgentRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentRuns
    * const agentRuns = await prisma.agentRun.findMany()
    * ```
    */
  get agentRun(): Prisma.AgentRunDelegate<ExtArgs>;

  /**
   * `prisma.memorySnapshot`: Exposes CRUD operations for the **MemorySnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemorySnapshots
    * const memorySnapshots = await prisma.memorySnapshot.findMany()
    * ```
    */
  get memorySnapshot(): Prisma.MemorySnapshotDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Observation: 'Observation',
    WalletProfile: 'WalletProfile',
    TokenProfile: 'TokenProfile',
    ContractProfile: 'ContractProfile',
    PatternMemory: 'PatternMemory',
    AgentRun: 'AgentRun',
    MemorySnapshot: 'MemorySnapshot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "observation" | "walletProfile" | "tokenProfile" | "contractProfile" | "patternMemory" | "agentRun" | "memorySnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Observation: {
        payload: Prisma.$ObservationPayload<ExtArgs>
        fields: Prisma.ObservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          findFirst: {
            args: Prisma.ObservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          findMany: {
            args: Prisma.ObservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>[]
          }
          create: {
            args: Prisma.ObservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          createMany: {
            args: Prisma.ObservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>[]
          }
          delete: {
            args: Prisma.ObservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          update: {
            args: Prisma.ObservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          deleteMany: {
            args: Prisma.ObservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ObservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          aggregate: {
            args: Prisma.ObservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObservation>
          }
          groupBy: {
            args: Prisma.ObservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObservationCountArgs<ExtArgs>
            result: $Utils.Optional<ObservationCountAggregateOutputType> | number
          }
        }
      }
      WalletProfile: {
        payload: Prisma.$WalletProfilePayload<ExtArgs>
        fields: Prisma.WalletProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload>
          }
          findFirst: {
            args: Prisma.WalletProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload>
          }
          findMany: {
            args: Prisma.WalletProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload>[]
          }
          create: {
            args: Prisma.WalletProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload>
          }
          createMany: {
            args: Prisma.WalletProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload>[]
          }
          delete: {
            args: Prisma.WalletProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload>
          }
          update: {
            args: Prisma.WalletProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload>
          }
          deleteMany: {
            args: Prisma.WalletProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletProfilePayload>
          }
          aggregate: {
            args: Prisma.WalletProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletProfile>
          }
          groupBy: {
            args: Prisma.WalletProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletProfileCountArgs<ExtArgs>
            result: $Utils.Optional<WalletProfileCountAggregateOutputType> | number
          }
        }
      }
      TokenProfile: {
        payload: Prisma.$TokenProfilePayload<ExtArgs>
        fields: Prisma.TokenProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload>
          }
          findFirst: {
            args: Prisma.TokenProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload>
          }
          findMany: {
            args: Prisma.TokenProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload>[]
          }
          create: {
            args: Prisma.TokenProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload>
          }
          createMany: {
            args: Prisma.TokenProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload>[]
          }
          delete: {
            args: Prisma.TokenProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload>
          }
          update: {
            args: Prisma.TokenProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload>
          }
          deleteMany: {
            args: Prisma.TokenProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenProfilePayload>
          }
          aggregate: {
            args: Prisma.TokenProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenProfile>
          }
          groupBy: {
            args: Prisma.TokenProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TokenProfileCountAggregateOutputType> | number
          }
        }
      }
      ContractProfile: {
        payload: Prisma.$ContractProfilePayload<ExtArgs>
        fields: Prisma.ContractProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload>
          }
          findFirst: {
            args: Prisma.ContractProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload>
          }
          findMany: {
            args: Prisma.ContractProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload>[]
          }
          create: {
            args: Prisma.ContractProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload>
          }
          createMany: {
            args: Prisma.ContractProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload>[]
          }
          delete: {
            args: Prisma.ContractProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload>
          }
          update: {
            args: Prisma.ContractProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload>
          }
          deleteMany: {
            args: Prisma.ContractProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractProfilePayload>
          }
          aggregate: {
            args: Prisma.ContractProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractProfile>
          }
          groupBy: {
            args: Prisma.ContractProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ContractProfileCountAggregateOutputType> | number
          }
        }
      }
      PatternMemory: {
        payload: Prisma.$PatternMemoryPayload<ExtArgs>
        fields: Prisma.PatternMemoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatternMemoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatternMemoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload>
          }
          findFirst: {
            args: Prisma.PatternMemoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatternMemoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload>
          }
          findMany: {
            args: Prisma.PatternMemoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload>[]
          }
          create: {
            args: Prisma.PatternMemoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload>
          }
          createMany: {
            args: Prisma.PatternMemoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatternMemoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload>[]
          }
          delete: {
            args: Prisma.PatternMemoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload>
          }
          update: {
            args: Prisma.PatternMemoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload>
          }
          deleteMany: {
            args: Prisma.PatternMemoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatternMemoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatternMemoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternMemoryPayload>
          }
          aggregate: {
            args: Prisma.PatternMemoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatternMemory>
          }
          groupBy: {
            args: Prisma.PatternMemoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatternMemoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatternMemoryCountArgs<ExtArgs>
            result: $Utils.Optional<PatternMemoryCountAggregateOutputType> | number
          }
        }
      }
      AgentRun: {
        payload: Prisma.$AgentRunPayload<ExtArgs>
        fields: Prisma.AgentRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          findFirst: {
            args: Prisma.AgentRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          findMany: {
            args: Prisma.AgentRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>[]
          }
          create: {
            args: Prisma.AgentRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          createMany: {
            args: Prisma.AgentRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>[]
          }
          delete: {
            args: Prisma.AgentRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          update: {
            args: Prisma.AgentRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          deleteMany: {
            args: Prisma.AgentRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          aggregate: {
            args: Prisma.AgentRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentRun>
          }
          groupBy: {
            args: Prisma.AgentRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentRunCountArgs<ExtArgs>
            result: $Utils.Optional<AgentRunCountAggregateOutputType> | number
          }
        }
      }
      MemorySnapshot: {
        payload: Prisma.$MemorySnapshotPayload<ExtArgs>
        fields: Prisma.MemorySnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemorySnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemorySnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload>
          }
          findFirst: {
            args: Prisma.MemorySnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemorySnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload>
          }
          findMany: {
            args: Prisma.MemorySnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload>[]
          }
          create: {
            args: Prisma.MemorySnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload>
          }
          createMany: {
            args: Prisma.MemorySnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemorySnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload>[]
          }
          delete: {
            args: Prisma.MemorySnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload>
          }
          update: {
            args: Prisma.MemorySnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload>
          }
          deleteMany: {
            args: Prisma.MemorySnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemorySnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemorySnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemorySnapshotPayload>
          }
          aggregate: {
            args: Prisma.MemorySnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemorySnapshot>
          }
          groupBy: {
            args: Prisma.MemorySnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemorySnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemorySnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<MemorySnapshotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ObservationCountOutputType
   */

  export type ObservationCountOutputType = {
    agentRuns: number
  }

  export type ObservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentRuns?: boolean | ObservationCountOutputTypeCountAgentRunsArgs
  }

  // Custom InputTypes
  /**
   * ObservationCountOutputType without action
   */
  export type ObservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObservationCountOutputType
     */
    select?: ObservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObservationCountOutputType without action
   */
  export type ObservationCountOutputTypeCountAgentRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRunWhereInput
  }


  /**
   * Count Type AgentRunCountOutputType
   */

  export type AgentRunCountOutputType = {
    observations: number
  }

  export type AgentRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    observations?: boolean | AgentRunCountOutputTypeCountObservationsArgs
  }

  // Custom InputTypes
  /**
   * AgentRunCountOutputType without action
   */
  export type AgentRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRunCountOutputType
     */
    select?: AgentRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentRunCountOutputType without action
   */
  export type AgentRunCountOutputTypeCountObservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Observation
   */

  export type AggregateObservation = {
    _count: ObservationCountAggregateOutputType | null
    _avg: ObservationAvgAggregateOutputType | null
    _sum: ObservationSumAggregateOutputType | null
    _min: ObservationMinAggregateOutputType | null
    _max: ObservationMaxAggregateOutputType | null
  }

  export type ObservationAvgAggregateOutputType = {
    blockNumber: number | null
    relevanceScore: number | null
    noveltyScore: number | null
    patternSimilarity: number | null
    contextCoverage: number | null
    onchainObservationId: number | null
  }

  export type ObservationSumAggregateOutputType = {
    blockNumber: number | null
    relevanceScore: number | null
    noveltyScore: number | null
    patternSimilarity: number | null
    contextCoverage: number | null
    onchainObservationId: number | null
  }

  export type ObservationMinAggregateOutputType = {
    id: string | null
    source: string | null
    chain: string | null
    eventType: string | null
    primaryEntity: string | null
    txHash: string | null
    blockNumber: number | null
    relevanceScore: number | null
    noveltyScore: number | null
    patternSimilarity: number | null
    contextCoverage: number | null
    summary: string | null
    observationHash: string | null
    onchainTxHash: string | null
    onchainObservationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObservationMaxAggregateOutputType = {
    id: string | null
    source: string | null
    chain: string | null
    eventType: string | null
    primaryEntity: string | null
    txHash: string | null
    blockNumber: number | null
    relevanceScore: number | null
    noveltyScore: number | null
    patternSimilarity: number | null
    contextCoverage: number | null
    summary: string | null
    observationHash: string | null
    onchainTxHash: string | null
    onchainObservationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObservationCountAggregateOutputType = {
    id: number
    source: number
    chain: number
    eventType: number
    primaryEntity: number
    relatedWallets: number
    relatedTokens: number
    relatedContracts: number
    txHash: number
    blockNumber: number
    facts: number
    rawData: number
    relevanceScore: number
    noveltyScore: number
    patternSimilarity: number
    contextCoverage: number
    summary: number
    limitations: number
    observationHash: number
    onchainTxHash: number
    onchainObservationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObservationAvgAggregateInputType = {
    blockNumber?: true
    relevanceScore?: true
    noveltyScore?: true
    patternSimilarity?: true
    contextCoverage?: true
    onchainObservationId?: true
  }

  export type ObservationSumAggregateInputType = {
    blockNumber?: true
    relevanceScore?: true
    noveltyScore?: true
    patternSimilarity?: true
    contextCoverage?: true
    onchainObservationId?: true
  }

  export type ObservationMinAggregateInputType = {
    id?: true
    source?: true
    chain?: true
    eventType?: true
    primaryEntity?: true
    txHash?: true
    blockNumber?: true
    relevanceScore?: true
    noveltyScore?: true
    patternSimilarity?: true
    contextCoverage?: true
    summary?: true
    observationHash?: true
    onchainTxHash?: true
    onchainObservationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObservationMaxAggregateInputType = {
    id?: true
    source?: true
    chain?: true
    eventType?: true
    primaryEntity?: true
    txHash?: true
    blockNumber?: true
    relevanceScore?: true
    noveltyScore?: true
    patternSimilarity?: true
    contextCoverage?: true
    summary?: true
    observationHash?: true
    onchainTxHash?: true
    onchainObservationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObservationCountAggregateInputType = {
    id?: true
    source?: true
    chain?: true
    eventType?: true
    primaryEntity?: true
    relatedWallets?: true
    relatedTokens?: true
    relatedContracts?: true
    txHash?: true
    blockNumber?: true
    facts?: true
    rawData?: true
    relevanceScore?: true
    noveltyScore?: true
    patternSimilarity?: true
    contextCoverage?: true
    summary?: true
    limitations?: true
    observationHash?: true
    onchainTxHash?: true
    onchainObservationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Observation to aggregate.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Observations
    **/
    _count?: true | ObservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObservationMaxAggregateInputType
  }

  export type GetObservationAggregateType<T extends ObservationAggregateArgs> = {
        [P in keyof T & keyof AggregateObservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObservation[P]>
      : GetScalarType<T[P], AggregateObservation[P]>
  }




  export type ObservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationWhereInput
    orderBy?: ObservationOrderByWithAggregationInput | ObservationOrderByWithAggregationInput[]
    by: ObservationScalarFieldEnum[] | ObservationScalarFieldEnum
    having?: ObservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObservationCountAggregateInputType | true
    _avg?: ObservationAvgAggregateInputType
    _sum?: ObservationSumAggregateInputType
    _min?: ObservationMinAggregateInputType
    _max?: ObservationMaxAggregateInputType
  }

  export type ObservationGroupByOutputType = {
    id: string
    source: string
    chain: string
    eventType: string
    primaryEntity: string
    relatedWallets: string[]
    relatedTokens: string[]
    relatedContracts: string[]
    txHash: string | null
    blockNumber: number | null
    facts: JsonValue
    rawData: JsonValue
    relevanceScore: number
    noveltyScore: number
    patternSimilarity: number
    contextCoverage: number
    summary: string | null
    limitations: string[]
    observationHash: string | null
    onchainTxHash: string | null
    onchainObservationId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ObservationCountAggregateOutputType | null
    _avg: ObservationAvgAggregateOutputType | null
    _sum: ObservationSumAggregateOutputType | null
    _min: ObservationMinAggregateOutputType | null
    _max: ObservationMaxAggregateOutputType | null
  }

  type GetObservationGroupByPayload<T extends ObservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObservationGroupByOutputType[P]>
            : GetScalarType<T[P], ObservationGroupByOutputType[P]>
        }
      >
    >


  export type ObservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    chain?: boolean
    eventType?: boolean
    primaryEntity?: boolean
    relatedWallets?: boolean
    relatedTokens?: boolean
    relatedContracts?: boolean
    txHash?: boolean
    blockNumber?: boolean
    facts?: boolean
    rawData?: boolean
    relevanceScore?: boolean
    noveltyScore?: boolean
    patternSimilarity?: boolean
    contextCoverage?: boolean
    summary?: boolean
    limitations?: boolean
    observationHash?: boolean
    onchainTxHash?: boolean
    onchainObservationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentRuns?: boolean | Observation$agentRunsArgs<ExtArgs>
    _count?: boolean | ObservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observation"]>

  export type ObservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    chain?: boolean
    eventType?: boolean
    primaryEntity?: boolean
    relatedWallets?: boolean
    relatedTokens?: boolean
    relatedContracts?: boolean
    txHash?: boolean
    blockNumber?: boolean
    facts?: boolean
    rawData?: boolean
    relevanceScore?: boolean
    noveltyScore?: boolean
    patternSimilarity?: boolean
    contextCoverage?: boolean
    summary?: boolean
    limitations?: boolean
    observationHash?: boolean
    onchainTxHash?: boolean
    onchainObservationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["observation"]>

  export type ObservationSelectScalar = {
    id?: boolean
    source?: boolean
    chain?: boolean
    eventType?: boolean
    primaryEntity?: boolean
    relatedWallets?: boolean
    relatedTokens?: boolean
    relatedContracts?: boolean
    txHash?: boolean
    blockNumber?: boolean
    facts?: boolean
    rawData?: boolean
    relevanceScore?: boolean
    noveltyScore?: boolean
    patternSimilarity?: boolean
    contextCoverage?: boolean
    summary?: boolean
    limitations?: boolean
    observationHash?: boolean
    onchainTxHash?: boolean
    onchainObservationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentRuns?: boolean | Observation$agentRunsArgs<ExtArgs>
    _count?: boolean | ObservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Observation"
    objects: {
      agentRuns: Prisma.$AgentRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      chain: string
      eventType: string
      primaryEntity: string
      relatedWallets: string[]
      relatedTokens: string[]
      relatedContracts: string[]
      txHash: string | null
      blockNumber: number | null
      facts: Prisma.JsonValue
      rawData: Prisma.JsonValue
      relevanceScore: number
      noveltyScore: number
      patternSimilarity: number
      contextCoverage: number
      summary: string | null
      limitations: string[]
      observationHash: string | null
      onchainTxHash: string | null
      onchainObservationId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["observation"]>
    composites: {}
  }

  type ObservationGetPayload<S extends boolean | null | undefined | ObservationDefaultArgs> = $Result.GetResult<Prisma.$ObservationPayload, S>

  type ObservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ObservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ObservationCountAggregateInputType | true
    }

  export interface ObservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Observation'], meta: { name: 'Observation' } }
    /**
     * Find zero or one Observation that matches the filter.
     * @param {ObservationFindUniqueArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObservationFindUniqueArgs>(args: SelectSubset<T, ObservationFindUniqueArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Observation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ObservationFindUniqueOrThrowArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ObservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Observation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindFirstArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObservationFindFirstArgs>(args?: SelectSubset<T, ObservationFindFirstArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Observation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindFirstOrThrowArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ObservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Observations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Observations
     * const observations = await prisma.observation.findMany()
     * 
     * // Get first 10 Observations
     * const observations = await prisma.observation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const observationWithIdOnly = await prisma.observation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObservationFindManyArgs>(args?: SelectSubset<T, ObservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Observation.
     * @param {ObservationCreateArgs} args - Arguments to create a Observation.
     * @example
     * // Create one Observation
     * const Observation = await prisma.observation.create({
     *   data: {
     *     // ... data to create a Observation
     *   }
     * })
     * 
     */
    create<T extends ObservationCreateArgs>(args: SelectSubset<T, ObservationCreateArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Observations.
     * @param {ObservationCreateManyArgs} args - Arguments to create many Observations.
     * @example
     * // Create many Observations
     * const observation = await prisma.observation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObservationCreateManyArgs>(args?: SelectSubset<T, ObservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Observations and returns the data saved in the database.
     * @param {ObservationCreateManyAndReturnArgs} args - Arguments to create many Observations.
     * @example
     * // Create many Observations
     * const observation = await prisma.observation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Observations and only return the `id`
     * const observationWithIdOnly = await prisma.observation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ObservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Observation.
     * @param {ObservationDeleteArgs} args - Arguments to delete one Observation.
     * @example
     * // Delete one Observation
     * const Observation = await prisma.observation.delete({
     *   where: {
     *     // ... filter to delete one Observation
     *   }
     * })
     * 
     */
    delete<T extends ObservationDeleteArgs>(args: SelectSubset<T, ObservationDeleteArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Observation.
     * @param {ObservationUpdateArgs} args - Arguments to update one Observation.
     * @example
     * // Update one Observation
     * const observation = await prisma.observation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObservationUpdateArgs>(args: SelectSubset<T, ObservationUpdateArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Observations.
     * @param {ObservationDeleteManyArgs} args - Arguments to filter Observations to delete.
     * @example
     * // Delete a few Observations
     * const { count } = await prisma.observation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObservationDeleteManyArgs>(args?: SelectSubset<T, ObservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Observations
     * const observation = await prisma.observation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObservationUpdateManyArgs>(args: SelectSubset<T, ObservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Observation.
     * @param {ObservationUpsertArgs} args - Arguments to update or create a Observation.
     * @example
     * // Update or create a Observation
     * const observation = await prisma.observation.upsert({
     *   create: {
     *     // ... data to create a Observation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Observation we want to update
     *   }
     * })
     */
    upsert<T extends ObservationUpsertArgs>(args: SelectSubset<T, ObservationUpsertArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationCountArgs} args - Arguments to filter Observations to count.
     * @example
     * // Count the number of Observations
     * const count = await prisma.observation.count({
     *   where: {
     *     // ... the filter for the Observations we want to count
     *   }
     * })
    **/
    count<T extends ObservationCountArgs>(
      args?: Subset<T, ObservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Observation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObservationAggregateArgs>(args: Subset<T, ObservationAggregateArgs>): Prisma.PrismaPromise<GetObservationAggregateType<T>>

    /**
     * Group by Observation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObservationGroupByArgs['orderBy'] }
        : { orderBy?: ObservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Observation model
   */
  readonly fields: ObservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Observation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agentRuns<T extends Observation$agentRunsArgs<ExtArgs> = {}>(args?: Subset<T, Observation$agentRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Observation model
   */ 
  interface ObservationFieldRefs {
    readonly id: FieldRef<"Observation", 'String'>
    readonly source: FieldRef<"Observation", 'String'>
    readonly chain: FieldRef<"Observation", 'String'>
    readonly eventType: FieldRef<"Observation", 'String'>
    readonly primaryEntity: FieldRef<"Observation", 'String'>
    readonly relatedWallets: FieldRef<"Observation", 'String[]'>
    readonly relatedTokens: FieldRef<"Observation", 'String[]'>
    readonly relatedContracts: FieldRef<"Observation", 'String[]'>
    readonly txHash: FieldRef<"Observation", 'String'>
    readonly blockNumber: FieldRef<"Observation", 'Int'>
    readonly facts: FieldRef<"Observation", 'Json'>
    readonly rawData: FieldRef<"Observation", 'Json'>
    readonly relevanceScore: FieldRef<"Observation", 'Int'>
    readonly noveltyScore: FieldRef<"Observation", 'Int'>
    readonly patternSimilarity: FieldRef<"Observation", 'Int'>
    readonly contextCoverage: FieldRef<"Observation", 'Int'>
    readonly summary: FieldRef<"Observation", 'String'>
    readonly limitations: FieldRef<"Observation", 'String[]'>
    readonly observationHash: FieldRef<"Observation", 'String'>
    readonly onchainTxHash: FieldRef<"Observation", 'String'>
    readonly onchainObservationId: FieldRef<"Observation", 'Int'>
    readonly createdAt: FieldRef<"Observation", 'DateTime'>
    readonly updatedAt: FieldRef<"Observation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Observation findUnique
   */
  export type ObservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation findUniqueOrThrow
   */
  export type ObservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation findFirst
   */
  export type ObservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     */
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation findFirstOrThrow
   */
  export type ObservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     */
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation findMany
   */
  export type ObservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observations to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation create
   */
  export type ObservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Observation.
     */
    data: XOR<ObservationCreateInput, ObservationUncheckedCreateInput>
  }

  /**
   * Observation createMany
   */
  export type ObservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Observations.
     */
    data: ObservationCreateManyInput | ObservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Observation createManyAndReturn
   */
  export type ObservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Observations.
     */
    data: ObservationCreateManyInput | ObservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Observation update
   */
  export type ObservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Observation.
     */
    data: XOR<ObservationUpdateInput, ObservationUncheckedUpdateInput>
    /**
     * Choose, which Observation to update.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation updateMany
   */
  export type ObservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Observations.
     */
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyInput>
    /**
     * Filter which Observations to update
     */
    where?: ObservationWhereInput
  }

  /**
   * Observation upsert
   */
  export type ObservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Observation to update in case it exists.
     */
    where: ObservationWhereUniqueInput
    /**
     * In case the Observation found by the `where` argument doesn't exist, create a new Observation with this data.
     */
    create: XOR<ObservationCreateInput, ObservationUncheckedCreateInput>
    /**
     * In case the Observation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObservationUpdateInput, ObservationUncheckedUpdateInput>
  }

  /**
   * Observation delete
   */
  export type ObservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter which Observation to delete.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation deleteMany
   */
  export type ObservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Observations to delete
     */
    where?: ObservationWhereInput
  }

  /**
   * Observation.agentRuns
   */
  export type Observation$agentRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    where?: AgentRunWhereInput
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    cursor?: AgentRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * Observation without action
   */
  export type ObservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
  }


  /**
   * Model WalletProfile
   */

  export type AggregateWalletProfile = {
    _count: WalletProfileCountAggregateOutputType | null
    _avg: WalletProfileAvgAggregateOutputType | null
    _sum: WalletProfileSumAggregateOutputType | null
    _min: WalletProfileMinAggregateOutputType | null
    _max: WalletProfileMaxAggregateOutputType | null
  }

  export type WalletProfileAvgAggregateOutputType = {
    observations: number | null
  }

  export type WalletProfileSumAggregateOutputType = {
    observations: number | null
  }

  export type WalletProfileMinAggregateOutputType = {
    id: string | null
    address: string | null
    observations: number | null
    summary: string | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletProfileMaxAggregateOutputType = {
    id: string | null
    address: string | null
    observations: number | null
    summary: string | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletProfileCountAggregateOutputType = {
    id: number
    address: number
    observations: number
    summary: number
    tags: number
    lastSeenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletProfileAvgAggregateInputType = {
    observations?: true
  }

  export type WalletProfileSumAggregateInputType = {
    observations?: true
  }

  export type WalletProfileMinAggregateInputType = {
    id?: true
    address?: true
    observations?: true
    summary?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletProfileMaxAggregateInputType = {
    id?: true
    address?: true
    observations?: true
    summary?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletProfileCountAggregateInputType = {
    id?: true
    address?: true
    observations?: true
    summary?: true
    tags?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletProfile to aggregate.
     */
    where?: WalletProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletProfiles to fetch.
     */
    orderBy?: WalletProfileOrderByWithRelationInput | WalletProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletProfiles
    **/
    _count?: true | WalletProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletProfileMaxAggregateInputType
  }

  export type GetWalletProfileAggregateType<T extends WalletProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletProfile[P]>
      : GetScalarType<T[P], AggregateWalletProfile[P]>
  }




  export type WalletProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletProfileWhereInput
    orderBy?: WalletProfileOrderByWithAggregationInput | WalletProfileOrderByWithAggregationInput[]
    by: WalletProfileScalarFieldEnum[] | WalletProfileScalarFieldEnum
    having?: WalletProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletProfileCountAggregateInputType | true
    _avg?: WalletProfileAvgAggregateInputType
    _sum?: WalletProfileSumAggregateInputType
    _min?: WalletProfileMinAggregateInputType
    _max?: WalletProfileMaxAggregateInputType
  }

  export type WalletProfileGroupByOutputType = {
    id: string
    address: string
    observations: number
    summary: string | null
    tags: string[]
    lastSeenAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WalletProfileCountAggregateOutputType | null
    _avg: WalletProfileAvgAggregateOutputType | null
    _sum: WalletProfileSumAggregateOutputType | null
    _min: WalletProfileMinAggregateOutputType | null
    _max: WalletProfileMaxAggregateOutputType | null
  }

  type GetWalletProfileGroupByPayload<T extends WalletProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletProfileGroupByOutputType[P]>
            : GetScalarType<T[P], WalletProfileGroupByOutputType[P]>
        }
      >
    >


  export type WalletProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    observations?: boolean
    summary?: boolean
    tags?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["walletProfile"]>

  export type WalletProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    observations?: boolean
    summary?: boolean
    tags?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["walletProfile"]>

  export type WalletProfileSelectScalar = {
    id?: boolean
    address?: boolean
    observations?: boolean
    summary?: boolean
    tags?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $WalletProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      observations: number
      summary: string | null
      tags: string[]
      lastSeenAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["walletProfile"]>
    composites: {}
  }

  type WalletProfileGetPayload<S extends boolean | null | undefined | WalletProfileDefaultArgs> = $Result.GetResult<Prisma.$WalletProfilePayload, S>

  type WalletProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletProfileCountAggregateInputType | true
    }

  export interface WalletProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletProfile'], meta: { name: 'WalletProfile' } }
    /**
     * Find zero or one WalletProfile that matches the filter.
     * @param {WalletProfileFindUniqueArgs} args - Arguments to find a WalletProfile
     * @example
     * // Get one WalletProfile
     * const walletProfile = await prisma.walletProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletProfileFindUniqueArgs>(args: SelectSubset<T, WalletProfileFindUniqueArgs<ExtArgs>>): Prisma__WalletProfileClient<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WalletProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WalletProfileFindUniqueOrThrowArgs} args - Arguments to find a WalletProfile
     * @example
     * // Get one WalletProfile
     * const walletProfile = await prisma.walletProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletProfileClient<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WalletProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletProfileFindFirstArgs} args - Arguments to find a WalletProfile
     * @example
     * // Get one WalletProfile
     * const walletProfile = await prisma.walletProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletProfileFindFirstArgs>(args?: SelectSubset<T, WalletProfileFindFirstArgs<ExtArgs>>): Prisma__WalletProfileClient<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WalletProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletProfileFindFirstOrThrowArgs} args - Arguments to find a WalletProfile
     * @example
     * // Get one WalletProfile
     * const walletProfile = await prisma.walletProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletProfileClient<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WalletProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletProfiles
     * const walletProfiles = await prisma.walletProfile.findMany()
     * 
     * // Get first 10 WalletProfiles
     * const walletProfiles = await prisma.walletProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletProfileWithIdOnly = await prisma.walletProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletProfileFindManyArgs>(args?: SelectSubset<T, WalletProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WalletProfile.
     * @param {WalletProfileCreateArgs} args - Arguments to create a WalletProfile.
     * @example
     * // Create one WalletProfile
     * const WalletProfile = await prisma.walletProfile.create({
     *   data: {
     *     // ... data to create a WalletProfile
     *   }
     * })
     * 
     */
    create<T extends WalletProfileCreateArgs>(args: SelectSubset<T, WalletProfileCreateArgs<ExtArgs>>): Prisma__WalletProfileClient<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WalletProfiles.
     * @param {WalletProfileCreateManyArgs} args - Arguments to create many WalletProfiles.
     * @example
     * // Create many WalletProfiles
     * const walletProfile = await prisma.walletProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletProfileCreateManyArgs>(args?: SelectSubset<T, WalletProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletProfiles and returns the data saved in the database.
     * @param {WalletProfileCreateManyAndReturnArgs} args - Arguments to create many WalletProfiles.
     * @example
     * // Create many WalletProfiles
     * const walletProfile = await prisma.walletProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletProfiles and only return the `id`
     * const walletProfileWithIdOnly = await prisma.walletProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WalletProfile.
     * @param {WalletProfileDeleteArgs} args - Arguments to delete one WalletProfile.
     * @example
     * // Delete one WalletProfile
     * const WalletProfile = await prisma.walletProfile.delete({
     *   where: {
     *     // ... filter to delete one WalletProfile
     *   }
     * })
     * 
     */
    delete<T extends WalletProfileDeleteArgs>(args: SelectSubset<T, WalletProfileDeleteArgs<ExtArgs>>): Prisma__WalletProfileClient<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WalletProfile.
     * @param {WalletProfileUpdateArgs} args - Arguments to update one WalletProfile.
     * @example
     * // Update one WalletProfile
     * const walletProfile = await prisma.walletProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletProfileUpdateArgs>(args: SelectSubset<T, WalletProfileUpdateArgs<ExtArgs>>): Prisma__WalletProfileClient<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WalletProfiles.
     * @param {WalletProfileDeleteManyArgs} args - Arguments to filter WalletProfiles to delete.
     * @example
     * // Delete a few WalletProfiles
     * const { count } = await prisma.walletProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletProfileDeleteManyArgs>(args?: SelectSubset<T, WalletProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletProfiles
     * const walletProfile = await prisma.walletProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletProfileUpdateManyArgs>(args: SelectSubset<T, WalletProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WalletProfile.
     * @param {WalletProfileUpsertArgs} args - Arguments to update or create a WalletProfile.
     * @example
     * // Update or create a WalletProfile
     * const walletProfile = await prisma.walletProfile.upsert({
     *   create: {
     *     // ... data to create a WalletProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletProfile we want to update
     *   }
     * })
     */
    upsert<T extends WalletProfileUpsertArgs>(args: SelectSubset<T, WalletProfileUpsertArgs<ExtArgs>>): Prisma__WalletProfileClient<$Result.GetResult<Prisma.$WalletProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WalletProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletProfileCountArgs} args - Arguments to filter WalletProfiles to count.
     * @example
     * // Count the number of WalletProfiles
     * const count = await prisma.walletProfile.count({
     *   where: {
     *     // ... the filter for the WalletProfiles we want to count
     *   }
     * })
    **/
    count<T extends WalletProfileCountArgs>(
      args?: Subset<T, WalletProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletProfileAggregateArgs>(args: Subset<T, WalletProfileAggregateArgs>): Prisma.PrismaPromise<GetWalletProfileAggregateType<T>>

    /**
     * Group by WalletProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletProfileGroupByArgs['orderBy'] }
        : { orderBy?: WalletProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletProfile model
   */
  readonly fields: WalletProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalletProfile model
   */ 
  interface WalletProfileFieldRefs {
    readonly id: FieldRef<"WalletProfile", 'String'>
    readonly address: FieldRef<"WalletProfile", 'String'>
    readonly observations: FieldRef<"WalletProfile", 'Int'>
    readonly summary: FieldRef<"WalletProfile", 'String'>
    readonly tags: FieldRef<"WalletProfile", 'String[]'>
    readonly lastSeenAt: FieldRef<"WalletProfile", 'DateTime'>
    readonly createdAt: FieldRef<"WalletProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"WalletProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletProfile findUnique
   */
  export type WalletProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * Filter, which WalletProfile to fetch.
     */
    where: WalletProfileWhereUniqueInput
  }

  /**
   * WalletProfile findUniqueOrThrow
   */
  export type WalletProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * Filter, which WalletProfile to fetch.
     */
    where: WalletProfileWhereUniqueInput
  }

  /**
   * WalletProfile findFirst
   */
  export type WalletProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * Filter, which WalletProfile to fetch.
     */
    where?: WalletProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletProfiles to fetch.
     */
    orderBy?: WalletProfileOrderByWithRelationInput | WalletProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletProfiles.
     */
    cursor?: WalletProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletProfiles.
     */
    distinct?: WalletProfileScalarFieldEnum | WalletProfileScalarFieldEnum[]
  }

  /**
   * WalletProfile findFirstOrThrow
   */
  export type WalletProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * Filter, which WalletProfile to fetch.
     */
    where?: WalletProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletProfiles to fetch.
     */
    orderBy?: WalletProfileOrderByWithRelationInput | WalletProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletProfiles.
     */
    cursor?: WalletProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletProfiles.
     */
    distinct?: WalletProfileScalarFieldEnum | WalletProfileScalarFieldEnum[]
  }

  /**
   * WalletProfile findMany
   */
  export type WalletProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * Filter, which WalletProfiles to fetch.
     */
    where?: WalletProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletProfiles to fetch.
     */
    orderBy?: WalletProfileOrderByWithRelationInput | WalletProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletProfiles.
     */
    cursor?: WalletProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletProfiles.
     */
    skip?: number
    distinct?: WalletProfileScalarFieldEnum | WalletProfileScalarFieldEnum[]
  }

  /**
   * WalletProfile create
   */
  export type WalletProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a WalletProfile.
     */
    data: XOR<WalletProfileCreateInput, WalletProfileUncheckedCreateInput>
  }

  /**
   * WalletProfile createMany
   */
  export type WalletProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletProfiles.
     */
    data: WalletProfileCreateManyInput | WalletProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletProfile createManyAndReturn
   */
  export type WalletProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WalletProfiles.
     */
    data: WalletProfileCreateManyInput | WalletProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletProfile update
   */
  export type WalletProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a WalletProfile.
     */
    data: XOR<WalletProfileUpdateInput, WalletProfileUncheckedUpdateInput>
    /**
     * Choose, which WalletProfile to update.
     */
    where: WalletProfileWhereUniqueInput
  }

  /**
   * WalletProfile updateMany
   */
  export type WalletProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletProfiles.
     */
    data: XOR<WalletProfileUpdateManyMutationInput, WalletProfileUncheckedUpdateManyInput>
    /**
     * Filter which WalletProfiles to update
     */
    where?: WalletProfileWhereInput
  }

  /**
   * WalletProfile upsert
   */
  export type WalletProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the WalletProfile to update in case it exists.
     */
    where: WalletProfileWhereUniqueInput
    /**
     * In case the WalletProfile found by the `where` argument doesn't exist, create a new WalletProfile with this data.
     */
    create: XOR<WalletProfileCreateInput, WalletProfileUncheckedCreateInput>
    /**
     * In case the WalletProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletProfileUpdateInput, WalletProfileUncheckedUpdateInput>
  }

  /**
   * WalletProfile delete
   */
  export type WalletProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
    /**
     * Filter which WalletProfile to delete.
     */
    where: WalletProfileWhereUniqueInput
  }

  /**
   * WalletProfile deleteMany
   */
  export type WalletProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletProfiles to delete
     */
    where?: WalletProfileWhereInput
  }

  /**
   * WalletProfile without action
   */
  export type WalletProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletProfile
     */
    select?: WalletProfileSelect<ExtArgs> | null
  }


  /**
   * Model TokenProfile
   */

  export type AggregateTokenProfile = {
    _count: TokenProfileCountAggregateOutputType | null
    _avg: TokenProfileAvgAggregateOutputType | null
    _sum: TokenProfileSumAggregateOutputType | null
    _min: TokenProfileMinAggregateOutputType | null
    _max: TokenProfileMaxAggregateOutputType | null
  }

  export type TokenProfileAvgAggregateOutputType = {
    observations: number | null
  }

  export type TokenProfileSumAggregateOutputType = {
    observations: number | null
  }

  export type TokenProfileMinAggregateOutputType = {
    id: string | null
    address: string | null
    symbol: string | null
    observations: number | null
    lastSeenAt: Date | null
    createdAt: Date | null
  }

  export type TokenProfileMaxAggregateOutputType = {
    id: string | null
    address: string | null
    symbol: string | null
    observations: number | null
    lastSeenAt: Date | null
    createdAt: Date | null
  }

  export type TokenProfileCountAggregateOutputType = {
    id: number
    address: number
    symbol: number
    observations: number
    lastSeenAt: number
    createdAt: number
    _all: number
  }


  export type TokenProfileAvgAggregateInputType = {
    observations?: true
  }

  export type TokenProfileSumAggregateInputType = {
    observations?: true
  }

  export type TokenProfileMinAggregateInputType = {
    id?: true
    address?: true
    symbol?: true
    observations?: true
    lastSeenAt?: true
    createdAt?: true
  }

  export type TokenProfileMaxAggregateInputType = {
    id?: true
    address?: true
    symbol?: true
    observations?: true
    lastSeenAt?: true
    createdAt?: true
  }

  export type TokenProfileCountAggregateInputType = {
    id?: true
    address?: true
    symbol?: true
    observations?: true
    lastSeenAt?: true
    createdAt?: true
    _all?: true
  }

  export type TokenProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenProfile to aggregate.
     */
    where?: TokenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenProfiles to fetch.
     */
    orderBy?: TokenProfileOrderByWithRelationInput | TokenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenProfiles
    **/
    _count?: true | TokenProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenProfileMaxAggregateInputType
  }

  export type GetTokenProfileAggregateType<T extends TokenProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenProfile[P]>
      : GetScalarType<T[P], AggregateTokenProfile[P]>
  }




  export type TokenProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenProfileWhereInput
    orderBy?: TokenProfileOrderByWithAggregationInput | TokenProfileOrderByWithAggregationInput[]
    by: TokenProfileScalarFieldEnum[] | TokenProfileScalarFieldEnum
    having?: TokenProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenProfileCountAggregateInputType | true
    _avg?: TokenProfileAvgAggregateInputType
    _sum?: TokenProfileSumAggregateInputType
    _min?: TokenProfileMinAggregateInputType
    _max?: TokenProfileMaxAggregateInputType
  }

  export type TokenProfileGroupByOutputType = {
    id: string
    address: string
    symbol: string | null
    observations: number
    lastSeenAt: Date | null
    createdAt: Date
    _count: TokenProfileCountAggregateOutputType | null
    _avg: TokenProfileAvgAggregateOutputType | null
    _sum: TokenProfileSumAggregateOutputType | null
    _min: TokenProfileMinAggregateOutputType | null
    _max: TokenProfileMaxAggregateOutputType | null
  }

  type GetTokenProfileGroupByPayload<T extends TokenProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TokenProfileGroupByOutputType[P]>
        }
      >
    >


  export type TokenProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    symbol?: boolean
    observations?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokenProfile"]>

  export type TokenProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    symbol?: boolean
    observations?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokenProfile"]>

  export type TokenProfileSelectScalar = {
    id?: boolean
    address?: boolean
    symbol?: boolean
    observations?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
  }


  export type $TokenProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      symbol: string | null
      observations: number
      lastSeenAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["tokenProfile"]>
    composites: {}
  }

  type TokenProfileGetPayload<S extends boolean | null | undefined | TokenProfileDefaultArgs> = $Result.GetResult<Prisma.$TokenProfilePayload, S>

  type TokenProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenProfileCountAggregateInputType | true
    }

  export interface TokenProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenProfile'], meta: { name: 'TokenProfile' } }
    /**
     * Find zero or one TokenProfile that matches the filter.
     * @param {TokenProfileFindUniqueArgs} args - Arguments to find a TokenProfile
     * @example
     * // Get one TokenProfile
     * const tokenProfile = await prisma.tokenProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenProfileFindUniqueArgs>(args: SelectSubset<T, TokenProfileFindUniqueArgs<ExtArgs>>): Prisma__TokenProfileClient<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TokenProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenProfileFindUniqueOrThrowArgs} args - Arguments to find a TokenProfile
     * @example
     * // Get one TokenProfile
     * const tokenProfile = await prisma.tokenProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenProfileClient<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TokenProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenProfileFindFirstArgs} args - Arguments to find a TokenProfile
     * @example
     * // Get one TokenProfile
     * const tokenProfile = await prisma.tokenProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenProfileFindFirstArgs>(args?: SelectSubset<T, TokenProfileFindFirstArgs<ExtArgs>>): Prisma__TokenProfileClient<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TokenProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenProfileFindFirstOrThrowArgs} args - Arguments to find a TokenProfile
     * @example
     * // Get one TokenProfile
     * const tokenProfile = await prisma.tokenProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenProfileClient<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TokenProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenProfiles
     * const tokenProfiles = await prisma.tokenProfile.findMany()
     * 
     * // Get first 10 TokenProfiles
     * const tokenProfiles = await prisma.tokenProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenProfileWithIdOnly = await prisma.tokenProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenProfileFindManyArgs>(args?: SelectSubset<T, TokenProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TokenProfile.
     * @param {TokenProfileCreateArgs} args - Arguments to create a TokenProfile.
     * @example
     * // Create one TokenProfile
     * const TokenProfile = await prisma.tokenProfile.create({
     *   data: {
     *     // ... data to create a TokenProfile
     *   }
     * })
     * 
     */
    create<T extends TokenProfileCreateArgs>(args: SelectSubset<T, TokenProfileCreateArgs<ExtArgs>>): Prisma__TokenProfileClient<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TokenProfiles.
     * @param {TokenProfileCreateManyArgs} args - Arguments to create many TokenProfiles.
     * @example
     * // Create many TokenProfiles
     * const tokenProfile = await prisma.tokenProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenProfileCreateManyArgs>(args?: SelectSubset<T, TokenProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenProfiles and returns the data saved in the database.
     * @param {TokenProfileCreateManyAndReturnArgs} args - Arguments to create many TokenProfiles.
     * @example
     * // Create many TokenProfiles
     * const tokenProfile = await prisma.tokenProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenProfiles and only return the `id`
     * const tokenProfileWithIdOnly = await prisma.tokenProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TokenProfile.
     * @param {TokenProfileDeleteArgs} args - Arguments to delete one TokenProfile.
     * @example
     * // Delete one TokenProfile
     * const TokenProfile = await prisma.tokenProfile.delete({
     *   where: {
     *     // ... filter to delete one TokenProfile
     *   }
     * })
     * 
     */
    delete<T extends TokenProfileDeleteArgs>(args: SelectSubset<T, TokenProfileDeleteArgs<ExtArgs>>): Prisma__TokenProfileClient<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TokenProfile.
     * @param {TokenProfileUpdateArgs} args - Arguments to update one TokenProfile.
     * @example
     * // Update one TokenProfile
     * const tokenProfile = await prisma.tokenProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenProfileUpdateArgs>(args: SelectSubset<T, TokenProfileUpdateArgs<ExtArgs>>): Prisma__TokenProfileClient<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TokenProfiles.
     * @param {TokenProfileDeleteManyArgs} args - Arguments to filter TokenProfiles to delete.
     * @example
     * // Delete a few TokenProfiles
     * const { count } = await prisma.tokenProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenProfileDeleteManyArgs>(args?: SelectSubset<T, TokenProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenProfiles
     * const tokenProfile = await prisma.tokenProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenProfileUpdateManyArgs>(args: SelectSubset<T, TokenProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenProfile.
     * @param {TokenProfileUpsertArgs} args - Arguments to update or create a TokenProfile.
     * @example
     * // Update or create a TokenProfile
     * const tokenProfile = await prisma.tokenProfile.upsert({
     *   create: {
     *     // ... data to create a TokenProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenProfile we want to update
     *   }
     * })
     */
    upsert<T extends TokenProfileUpsertArgs>(args: SelectSubset<T, TokenProfileUpsertArgs<ExtArgs>>): Prisma__TokenProfileClient<$Result.GetResult<Prisma.$TokenProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TokenProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenProfileCountArgs} args - Arguments to filter TokenProfiles to count.
     * @example
     * // Count the number of TokenProfiles
     * const count = await prisma.tokenProfile.count({
     *   where: {
     *     // ... the filter for the TokenProfiles we want to count
     *   }
     * })
    **/
    count<T extends TokenProfileCountArgs>(
      args?: Subset<T, TokenProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenProfileAggregateArgs>(args: Subset<T, TokenProfileAggregateArgs>): Prisma.PrismaPromise<GetTokenProfileAggregateType<T>>

    /**
     * Group by TokenProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenProfileGroupByArgs['orderBy'] }
        : { orderBy?: TokenProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenProfile model
   */
  readonly fields: TokenProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenProfile model
   */ 
  interface TokenProfileFieldRefs {
    readonly id: FieldRef<"TokenProfile", 'String'>
    readonly address: FieldRef<"TokenProfile", 'String'>
    readonly symbol: FieldRef<"TokenProfile", 'String'>
    readonly observations: FieldRef<"TokenProfile", 'Int'>
    readonly lastSeenAt: FieldRef<"TokenProfile", 'DateTime'>
    readonly createdAt: FieldRef<"TokenProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenProfile findUnique
   */
  export type TokenProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * Filter, which TokenProfile to fetch.
     */
    where: TokenProfileWhereUniqueInput
  }

  /**
   * TokenProfile findUniqueOrThrow
   */
  export type TokenProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * Filter, which TokenProfile to fetch.
     */
    where: TokenProfileWhereUniqueInput
  }

  /**
   * TokenProfile findFirst
   */
  export type TokenProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * Filter, which TokenProfile to fetch.
     */
    where?: TokenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenProfiles to fetch.
     */
    orderBy?: TokenProfileOrderByWithRelationInput | TokenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenProfiles.
     */
    cursor?: TokenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenProfiles.
     */
    distinct?: TokenProfileScalarFieldEnum | TokenProfileScalarFieldEnum[]
  }

  /**
   * TokenProfile findFirstOrThrow
   */
  export type TokenProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * Filter, which TokenProfile to fetch.
     */
    where?: TokenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenProfiles to fetch.
     */
    orderBy?: TokenProfileOrderByWithRelationInput | TokenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenProfiles.
     */
    cursor?: TokenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenProfiles.
     */
    distinct?: TokenProfileScalarFieldEnum | TokenProfileScalarFieldEnum[]
  }

  /**
   * TokenProfile findMany
   */
  export type TokenProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * Filter, which TokenProfiles to fetch.
     */
    where?: TokenProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenProfiles to fetch.
     */
    orderBy?: TokenProfileOrderByWithRelationInput | TokenProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenProfiles.
     */
    cursor?: TokenProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenProfiles.
     */
    skip?: number
    distinct?: TokenProfileScalarFieldEnum | TokenProfileScalarFieldEnum[]
  }

  /**
   * TokenProfile create
   */
  export type TokenProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a TokenProfile.
     */
    data: XOR<TokenProfileCreateInput, TokenProfileUncheckedCreateInput>
  }

  /**
   * TokenProfile createMany
   */
  export type TokenProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenProfiles.
     */
    data: TokenProfileCreateManyInput | TokenProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenProfile createManyAndReturn
   */
  export type TokenProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TokenProfiles.
     */
    data: TokenProfileCreateManyInput | TokenProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenProfile update
   */
  export type TokenProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a TokenProfile.
     */
    data: XOR<TokenProfileUpdateInput, TokenProfileUncheckedUpdateInput>
    /**
     * Choose, which TokenProfile to update.
     */
    where: TokenProfileWhereUniqueInput
  }

  /**
   * TokenProfile updateMany
   */
  export type TokenProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenProfiles.
     */
    data: XOR<TokenProfileUpdateManyMutationInput, TokenProfileUncheckedUpdateManyInput>
    /**
     * Filter which TokenProfiles to update
     */
    where?: TokenProfileWhereInput
  }

  /**
   * TokenProfile upsert
   */
  export type TokenProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the TokenProfile to update in case it exists.
     */
    where: TokenProfileWhereUniqueInput
    /**
     * In case the TokenProfile found by the `where` argument doesn't exist, create a new TokenProfile with this data.
     */
    create: XOR<TokenProfileCreateInput, TokenProfileUncheckedCreateInput>
    /**
     * In case the TokenProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenProfileUpdateInput, TokenProfileUncheckedUpdateInput>
  }

  /**
   * TokenProfile delete
   */
  export type TokenProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
    /**
     * Filter which TokenProfile to delete.
     */
    where: TokenProfileWhereUniqueInput
  }

  /**
   * TokenProfile deleteMany
   */
  export type TokenProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenProfiles to delete
     */
    where?: TokenProfileWhereInput
  }

  /**
   * TokenProfile without action
   */
  export type TokenProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenProfile
     */
    select?: TokenProfileSelect<ExtArgs> | null
  }


  /**
   * Model ContractProfile
   */

  export type AggregateContractProfile = {
    _count: ContractProfileCountAggregateOutputType | null
    _avg: ContractProfileAvgAggregateOutputType | null
    _sum: ContractProfileSumAggregateOutputType | null
    _min: ContractProfileMinAggregateOutputType | null
    _max: ContractProfileMaxAggregateOutputType | null
  }

  export type ContractProfileAvgAggregateOutputType = {
    observations: number | null
  }

  export type ContractProfileSumAggregateOutputType = {
    observations: number | null
  }

  export type ContractProfileMinAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    observations: number | null
    lastSeenAt: Date | null
    createdAt: Date | null
  }

  export type ContractProfileMaxAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    observations: number | null
    lastSeenAt: Date | null
    createdAt: Date | null
  }

  export type ContractProfileCountAggregateOutputType = {
    id: number
    address: number
    name: number
    observations: number
    lastSeenAt: number
    createdAt: number
    _all: number
  }


  export type ContractProfileAvgAggregateInputType = {
    observations?: true
  }

  export type ContractProfileSumAggregateInputType = {
    observations?: true
  }

  export type ContractProfileMinAggregateInputType = {
    id?: true
    address?: true
    name?: true
    observations?: true
    lastSeenAt?: true
    createdAt?: true
  }

  export type ContractProfileMaxAggregateInputType = {
    id?: true
    address?: true
    name?: true
    observations?: true
    lastSeenAt?: true
    createdAt?: true
  }

  export type ContractProfileCountAggregateInputType = {
    id?: true
    address?: true
    name?: true
    observations?: true
    lastSeenAt?: true
    createdAt?: true
    _all?: true
  }

  export type ContractProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractProfile to aggregate.
     */
    where?: ContractProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractProfiles to fetch.
     */
    orderBy?: ContractProfileOrderByWithRelationInput | ContractProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractProfiles
    **/
    _count?: true | ContractProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractProfileMaxAggregateInputType
  }

  export type GetContractProfileAggregateType<T extends ContractProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateContractProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractProfile[P]>
      : GetScalarType<T[P], AggregateContractProfile[P]>
  }




  export type ContractProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractProfileWhereInput
    orderBy?: ContractProfileOrderByWithAggregationInput | ContractProfileOrderByWithAggregationInput[]
    by: ContractProfileScalarFieldEnum[] | ContractProfileScalarFieldEnum
    having?: ContractProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractProfileCountAggregateInputType | true
    _avg?: ContractProfileAvgAggregateInputType
    _sum?: ContractProfileSumAggregateInputType
    _min?: ContractProfileMinAggregateInputType
    _max?: ContractProfileMaxAggregateInputType
  }

  export type ContractProfileGroupByOutputType = {
    id: string
    address: string
    name: string | null
    observations: number
    lastSeenAt: Date | null
    createdAt: Date
    _count: ContractProfileCountAggregateOutputType | null
    _avg: ContractProfileAvgAggregateOutputType | null
    _sum: ContractProfileSumAggregateOutputType | null
    _min: ContractProfileMinAggregateOutputType | null
    _max: ContractProfileMaxAggregateOutputType | null
  }

  type GetContractProfileGroupByPayload<T extends ContractProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ContractProfileGroupByOutputType[P]>
        }
      >
    >


  export type ContractProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    observations?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contractProfile"]>

  export type ContractProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    observations?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contractProfile"]>

  export type ContractProfileSelectScalar = {
    id?: boolean
    address?: boolean
    name?: boolean
    observations?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
  }


  export type $ContractProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      name: string | null
      observations: number
      lastSeenAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["contractProfile"]>
    composites: {}
  }

  type ContractProfileGetPayload<S extends boolean | null | undefined | ContractProfileDefaultArgs> = $Result.GetResult<Prisma.$ContractProfilePayload, S>

  type ContractProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractProfileCountAggregateInputType | true
    }

  export interface ContractProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractProfile'], meta: { name: 'ContractProfile' } }
    /**
     * Find zero or one ContractProfile that matches the filter.
     * @param {ContractProfileFindUniqueArgs} args - Arguments to find a ContractProfile
     * @example
     * // Get one ContractProfile
     * const contractProfile = await prisma.contractProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractProfileFindUniqueArgs>(args: SelectSubset<T, ContractProfileFindUniqueArgs<ExtArgs>>): Prisma__ContractProfileClient<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContractProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContractProfileFindUniqueOrThrowArgs} args - Arguments to find a ContractProfile
     * @example
     * // Get one ContractProfile
     * const contractProfile = await prisma.contractProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractProfileClient<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContractProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProfileFindFirstArgs} args - Arguments to find a ContractProfile
     * @example
     * // Get one ContractProfile
     * const contractProfile = await prisma.contractProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractProfileFindFirstArgs>(args?: SelectSubset<T, ContractProfileFindFirstArgs<ExtArgs>>): Prisma__ContractProfileClient<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContractProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProfileFindFirstOrThrowArgs} args - Arguments to find a ContractProfile
     * @example
     * // Get one ContractProfile
     * const contractProfile = await prisma.contractProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractProfileClient<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContractProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractProfiles
     * const contractProfiles = await prisma.contractProfile.findMany()
     * 
     * // Get first 10 ContractProfiles
     * const contractProfiles = await prisma.contractProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractProfileWithIdOnly = await prisma.contractProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractProfileFindManyArgs>(args?: SelectSubset<T, ContractProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContractProfile.
     * @param {ContractProfileCreateArgs} args - Arguments to create a ContractProfile.
     * @example
     * // Create one ContractProfile
     * const ContractProfile = await prisma.contractProfile.create({
     *   data: {
     *     // ... data to create a ContractProfile
     *   }
     * })
     * 
     */
    create<T extends ContractProfileCreateArgs>(args: SelectSubset<T, ContractProfileCreateArgs<ExtArgs>>): Prisma__ContractProfileClient<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContractProfiles.
     * @param {ContractProfileCreateManyArgs} args - Arguments to create many ContractProfiles.
     * @example
     * // Create many ContractProfiles
     * const contractProfile = await prisma.contractProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractProfileCreateManyArgs>(args?: SelectSubset<T, ContractProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractProfiles and returns the data saved in the database.
     * @param {ContractProfileCreateManyAndReturnArgs} args - Arguments to create many ContractProfiles.
     * @example
     * // Create many ContractProfiles
     * const contractProfile = await prisma.contractProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractProfiles and only return the `id`
     * const contractProfileWithIdOnly = await prisma.contractProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContractProfile.
     * @param {ContractProfileDeleteArgs} args - Arguments to delete one ContractProfile.
     * @example
     * // Delete one ContractProfile
     * const ContractProfile = await prisma.contractProfile.delete({
     *   where: {
     *     // ... filter to delete one ContractProfile
     *   }
     * })
     * 
     */
    delete<T extends ContractProfileDeleteArgs>(args: SelectSubset<T, ContractProfileDeleteArgs<ExtArgs>>): Prisma__ContractProfileClient<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContractProfile.
     * @param {ContractProfileUpdateArgs} args - Arguments to update one ContractProfile.
     * @example
     * // Update one ContractProfile
     * const contractProfile = await prisma.contractProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractProfileUpdateArgs>(args: SelectSubset<T, ContractProfileUpdateArgs<ExtArgs>>): Prisma__ContractProfileClient<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContractProfiles.
     * @param {ContractProfileDeleteManyArgs} args - Arguments to filter ContractProfiles to delete.
     * @example
     * // Delete a few ContractProfiles
     * const { count } = await prisma.contractProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractProfileDeleteManyArgs>(args?: SelectSubset<T, ContractProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractProfiles
     * const contractProfile = await prisma.contractProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractProfileUpdateManyArgs>(args: SelectSubset<T, ContractProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContractProfile.
     * @param {ContractProfileUpsertArgs} args - Arguments to update or create a ContractProfile.
     * @example
     * // Update or create a ContractProfile
     * const contractProfile = await prisma.contractProfile.upsert({
     *   create: {
     *     // ... data to create a ContractProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractProfile we want to update
     *   }
     * })
     */
    upsert<T extends ContractProfileUpsertArgs>(args: SelectSubset<T, ContractProfileUpsertArgs<ExtArgs>>): Prisma__ContractProfileClient<$Result.GetResult<Prisma.$ContractProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContractProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProfileCountArgs} args - Arguments to filter ContractProfiles to count.
     * @example
     * // Count the number of ContractProfiles
     * const count = await prisma.contractProfile.count({
     *   where: {
     *     // ... the filter for the ContractProfiles we want to count
     *   }
     * })
    **/
    count<T extends ContractProfileCountArgs>(
      args?: Subset<T, ContractProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractProfileAggregateArgs>(args: Subset<T, ContractProfileAggregateArgs>): Prisma.PrismaPromise<GetContractProfileAggregateType<T>>

    /**
     * Group by ContractProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractProfileGroupByArgs['orderBy'] }
        : { orderBy?: ContractProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractProfile model
   */
  readonly fields: ContractProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContractProfile model
   */ 
  interface ContractProfileFieldRefs {
    readonly id: FieldRef<"ContractProfile", 'String'>
    readonly address: FieldRef<"ContractProfile", 'String'>
    readonly name: FieldRef<"ContractProfile", 'String'>
    readonly observations: FieldRef<"ContractProfile", 'Int'>
    readonly lastSeenAt: FieldRef<"ContractProfile", 'DateTime'>
    readonly createdAt: FieldRef<"ContractProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractProfile findUnique
   */
  export type ContractProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * Filter, which ContractProfile to fetch.
     */
    where: ContractProfileWhereUniqueInput
  }

  /**
   * ContractProfile findUniqueOrThrow
   */
  export type ContractProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * Filter, which ContractProfile to fetch.
     */
    where: ContractProfileWhereUniqueInput
  }

  /**
   * ContractProfile findFirst
   */
  export type ContractProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * Filter, which ContractProfile to fetch.
     */
    where?: ContractProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractProfiles to fetch.
     */
    orderBy?: ContractProfileOrderByWithRelationInput | ContractProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractProfiles.
     */
    cursor?: ContractProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractProfiles.
     */
    distinct?: ContractProfileScalarFieldEnum | ContractProfileScalarFieldEnum[]
  }

  /**
   * ContractProfile findFirstOrThrow
   */
  export type ContractProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * Filter, which ContractProfile to fetch.
     */
    where?: ContractProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractProfiles to fetch.
     */
    orderBy?: ContractProfileOrderByWithRelationInput | ContractProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractProfiles.
     */
    cursor?: ContractProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractProfiles.
     */
    distinct?: ContractProfileScalarFieldEnum | ContractProfileScalarFieldEnum[]
  }

  /**
   * ContractProfile findMany
   */
  export type ContractProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * Filter, which ContractProfiles to fetch.
     */
    where?: ContractProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractProfiles to fetch.
     */
    orderBy?: ContractProfileOrderByWithRelationInput | ContractProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractProfiles.
     */
    cursor?: ContractProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractProfiles.
     */
    skip?: number
    distinct?: ContractProfileScalarFieldEnum | ContractProfileScalarFieldEnum[]
  }

  /**
   * ContractProfile create
   */
  export type ContractProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a ContractProfile.
     */
    data: XOR<ContractProfileCreateInput, ContractProfileUncheckedCreateInput>
  }

  /**
   * ContractProfile createMany
   */
  export type ContractProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractProfiles.
     */
    data: ContractProfileCreateManyInput | ContractProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractProfile createManyAndReturn
   */
  export type ContractProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContractProfiles.
     */
    data: ContractProfileCreateManyInput | ContractProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractProfile update
   */
  export type ContractProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a ContractProfile.
     */
    data: XOR<ContractProfileUpdateInput, ContractProfileUncheckedUpdateInput>
    /**
     * Choose, which ContractProfile to update.
     */
    where: ContractProfileWhereUniqueInput
  }

  /**
   * ContractProfile updateMany
   */
  export type ContractProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractProfiles.
     */
    data: XOR<ContractProfileUpdateManyMutationInput, ContractProfileUncheckedUpdateManyInput>
    /**
     * Filter which ContractProfiles to update
     */
    where?: ContractProfileWhereInput
  }

  /**
   * ContractProfile upsert
   */
  export type ContractProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the ContractProfile to update in case it exists.
     */
    where: ContractProfileWhereUniqueInput
    /**
     * In case the ContractProfile found by the `where` argument doesn't exist, create a new ContractProfile with this data.
     */
    create: XOR<ContractProfileCreateInput, ContractProfileUncheckedCreateInput>
    /**
     * In case the ContractProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractProfileUpdateInput, ContractProfileUncheckedUpdateInput>
  }

  /**
   * ContractProfile delete
   */
  export type ContractProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
    /**
     * Filter which ContractProfile to delete.
     */
    where: ContractProfileWhereUniqueInput
  }

  /**
   * ContractProfile deleteMany
   */
  export type ContractProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractProfiles to delete
     */
    where?: ContractProfileWhereInput
  }

  /**
   * ContractProfile without action
   */
  export type ContractProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractProfile
     */
    select?: ContractProfileSelect<ExtArgs> | null
  }


  /**
   * Model PatternMemory
   */

  export type AggregatePatternMemory = {
    _count: PatternMemoryCountAggregateOutputType | null
    _avg: PatternMemoryAvgAggregateOutputType | null
    _sum: PatternMemorySumAggregateOutputType | null
    _min: PatternMemoryMinAggregateOutputType | null
    _max: PatternMemoryMaxAggregateOutputType | null
  }

  export type PatternMemoryAvgAggregateOutputType = {
    confidence: number | null
  }

  export type PatternMemorySumAggregateOutputType = {
    confidence: number | null
  }

  export type PatternMemoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type PatternMemoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type PatternMemoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    entities: number
    observationIds: number
    confidence: number
    createdAt: number
    _all: number
  }


  export type PatternMemoryAvgAggregateInputType = {
    confidence?: true
  }

  export type PatternMemorySumAggregateInputType = {
    confidence?: true
  }

  export type PatternMemoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    confidence?: true
    createdAt?: true
  }

  export type PatternMemoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    confidence?: true
    createdAt?: true
  }

  export type PatternMemoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entities?: true
    observationIds?: true
    confidence?: true
    createdAt?: true
    _all?: true
  }

  export type PatternMemoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatternMemory to aggregate.
     */
    where?: PatternMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternMemories to fetch.
     */
    orderBy?: PatternMemoryOrderByWithRelationInput | PatternMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatternMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatternMemories
    **/
    _count?: true | PatternMemoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatternMemoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatternMemorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatternMemoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatternMemoryMaxAggregateInputType
  }

  export type GetPatternMemoryAggregateType<T extends PatternMemoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePatternMemory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatternMemory[P]>
      : GetScalarType<T[P], AggregatePatternMemory[P]>
  }




  export type PatternMemoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternMemoryWhereInput
    orderBy?: PatternMemoryOrderByWithAggregationInput | PatternMemoryOrderByWithAggregationInput[]
    by: PatternMemoryScalarFieldEnum[] | PatternMemoryScalarFieldEnum
    having?: PatternMemoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatternMemoryCountAggregateInputType | true
    _avg?: PatternMemoryAvgAggregateInputType
    _sum?: PatternMemorySumAggregateInputType
    _min?: PatternMemoryMinAggregateInputType
    _max?: PatternMemoryMaxAggregateInputType
  }

  export type PatternMemoryGroupByOutputType = {
    id: string
    name: string
    description: string
    entities: string[]
    observationIds: string[]
    confidence: number
    createdAt: Date
    _count: PatternMemoryCountAggregateOutputType | null
    _avg: PatternMemoryAvgAggregateOutputType | null
    _sum: PatternMemorySumAggregateOutputType | null
    _min: PatternMemoryMinAggregateOutputType | null
    _max: PatternMemoryMaxAggregateOutputType | null
  }

  type GetPatternMemoryGroupByPayload<T extends PatternMemoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatternMemoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatternMemoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatternMemoryGroupByOutputType[P]>
            : GetScalarType<T[P], PatternMemoryGroupByOutputType[P]>
        }
      >
    >


  export type PatternMemorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entities?: boolean
    observationIds?: boolean
    confidence?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["patternMemory"]>

  export type PatternMemorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entities?: boolean
    observationIds?: boolean
    confidence?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["patternMemory"]>

  export type PatternMemorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    entities?: boolean
    observationIds?: boolean
    confidence?: boolean
    createdAt?: boolean
  }


  export type $PatternMemoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatternMemory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      entities: string[]
      observationIds: string[]
      confidence: number
      createdAt: Date
    }, ExtArgs["result"]["patternMemory"]>
    composites: {}
  }

  type PatternMemoryGetPayload<S extends boolean | null | undefined | PatternMemoryDefaultArgs> = $Result.GetResult<Prisma.$PatternMemoryPayload, S>

  type PatternMemoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatternMemoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatternMemoryCountAggregateInputType | true
    }

  export interface PatternMemoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatternMemory'], meta: { name: 'PatternMemory' } }
    /**
     * Find zero or one PatternMemory that matches the filter.
     * @param {PatternMemoryFindUniqueArgs} args - Arguments to find a PatternMemory
     * @example
     * // Get one PatternMemory
     * const patternMemory = await prisma.patternMemory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatternMemoryFindUniqueArgs>(args: SelectSubset<T, PatternMemoryFindUniqueArgs<ExtArgs>>): Prisma__PatternMemoryClient<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PatternMemory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatternMemoryFindUniqueOrThrowArgs} args - Arguments to find a PatternMemory
     * @example
     * // Get one PatternMemory
     * const patternMemory = await prisma.patternMemory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatternMemoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PatternMemoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatternMemoryClient<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PatternMemory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternMemoryFindFirstArgs} args - Arguments to find a PatternMemory
     * @example
     * // Get one PatternMemory
     * const patternMemory = await prisma.patternMemory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatternMemoryFindFirstArgs>(args?: SelectSubset<T, PatternMemoryFindFirstArgs<ExtArgs>>): Prisma__PatternMemoryClient<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PatternMemory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternMemoryFindFirstOrThrowArgs} args - Arguments to find a PatternMemory
     * @example
     * // Get one PatternMemory
     * const patternMemory = await prisma.patternMemory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatternMemoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PatternMemoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatternMemoryClient<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PatternMemories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternMemoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatternMemories
     * const patternMemories = await prisma.patternMemory.findMany()
     * 
     * // Get first 10 PatternMemories
     * const patternMemories = await prisma.patternMemory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patternMemoryWithIdOnly = await prisma.patternMemory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatternMemoryFindManyArgs>(args?: SelectSubset<T, PatternMemoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PatternMemory.
     * @param {PatternMemoryCreateArgs} args - Arguments to create a PatternMemory.
     * @example
     * // Create one PatternMemory
     * const PatternMemory = await prisma.patternMemory.create({
     *   data: {
     *     // ... data to create a PatternMemory
     *   }
     * })
     * 
     */
    create<T extends PatternMemoryCreateArgs>(args: SelectSubset<T, PatternMemoryCreateArgs<ExtArgs>>): Prisma__PatternMemoryClient<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PatternMemories.
     * @param {PatternMemoryCreateManyArgs} args - Arguments to create many PatternMemories.
     * @example
     * // Create many PatternMemories
     * const patternMemory = await prisma.patternMemory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatternMemoryCreateManyArgs>(args?: SelectSubset<T, PatternMemoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatternMemories and returns the data saved in the database.
     * @param {PatternMemoryCreateManyAndReturnArgs} args - Arguments to create many PatternMemories.
     * @example
     * // Create many PatternMemories
     * const patternMemory = await prisma.patternMemory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatternMemories and only return the `id`
     * const patternMemoryWithIdOnly = await prisma.patternMemory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatternMemoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PatternMemoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PatternMemory.
     * @param {PatternMemoryDeleteArgs} args - Arguments to delete one PatternMemory.
     * @example
     * // Delete one PatternMemory
     * const PatternMemory = await prisma.patternMemory.delete({
     *   where: {
     *     // ... filter to delete one PatternMemory
     *   }
     * })
     * 
     */
    delete<T extends PatternMemoryDeleteArgs>(args: SelectSubset<T, PatternMemoryDeleteArgs<ExtArgs>>): Prisma__PatternMemoryClient<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PatternMemory.
     * @param {PatternMemoryUpdateArgs} args - Arguments to update one PatternMemory.
     * @example
     * // Update one PatternMemory
     * const patternMemory = await prisma.patternMemory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatternMemoryUpdateArgs>(args: SelectSubset<T, PatternMemoryUpdateArgs<ExtArgs>>): Prisma__PatternMemoryClient<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PatternMemories.
     * @param {PatternMemoryDeleteManyArgs} args - Arguments to filter PatternMemories to delete.
     * @example
     * // Delete a few PatternMemories
     * const { count } = await prisma.patternMemory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatternMemoryDeleteManyArgs>(args?: SelectSubset<T, PatternMemoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatternMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternMemoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatternMemories
     * const patternMemory = await prisma.patternMemory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatternMemoryUpdateManyArgs>(args: SelectSubset<T, PatternMemoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatternMemory.
     * @param {PatternMemoryUpsertArgs} args - Arguments to update or create a PatternMemory.
     * @example
     * // Update or create a PatternMemory
     * const patternMemory = await prisma.patternMemory.upsert({
     *   create: {
     *     // ... data to create a PatternMemory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatternMemory we want to update
     *   }
     * })
     */
    upsert<T extends PatternMemoryUpsertArgs>(args: SelectSubset<T, PatternMemoryUpsertArgs<ExtArgs>>): Prisma__PatternMemoryClient<$Result.GetResult<Prisma.$PatternMemoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PatternMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternMemoryCountArgs} args - Arguments to filter PatternMemories to count.
     * @example
     * // Count the number of PatternMemories
     * const count = await prisma.patternMemory.count({
     *   where: {
     *     // ... the filter for the PatternMemories we want to count
     *   }
     * })
    **/
    count<T extends PatternMemoryCountArgs>(
      args?: Subset<T, PatternMemoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatternMemoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatternMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternMemoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatternMemoryAggregateArgs>(args: Subset<T, PatternMemoryAggregateArgs>): Prisma.PrismaPromise<GetPatternMemoryAggregateType<T>>

    /**
     * Group by PatternMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternMemoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatternMemoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatternMemoryGroupByArgs['orderBy'] }
        : { orderBy?: PatternMemoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatternMemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternMemoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatternMemory model
   */
  readonly fields: PatternMemoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatternMemory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatternMemoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatternMemory model
   */ 
  interface PatternMemoryFieldRefs {
    readonly id: FieldRef<"PatternMemory", 'String'>
    readonly name: FieldRef<"PatternMemory", 'String'>
    readonly description: FieldRef<"PatternMemory", 'String'>
    readonly entities: FieldRef<"PatternMemory", 'String[]'>
    readonly observationIds: FieldRef<"PatternMemory", 'String[]'>
    readonly confidence: FieldRef<"PatternMemory", 'Int'>
    readonly createdAt: FieldRef<"PatternMemory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatternMemory findUnique
   */
  export type PatternMemoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * Filter, which PatternMemory to fetch.
     */
    where: PatternMemoryWhereUniqueInput
  }

  /**
   * PatternMemory findUniqueOrThrow
   */
  export type PatternMemoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * Filter, which PatternMemory to fetch.
     */
    where: PatternMemoryWhereUniqueInput
  }

  /**
   * PatternMemory findFirst
   */
  export type PatternMemoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * Filter, which PatternMemory to fetch.
     */
    where?: PatternMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternMemories to fetch.
     */
    orderBy?: PatternMemoryOrderByWithRelationInput | PatternMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatternMemories.
     */
    cursor?: PatternMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatternMemories.
     */
    distinct?: PatternMemoryScalarFieldEnum | PatternMemoryScalarFieldEnum[]
  }

  /**
   * PatternMemory findFirstOrThrow
   */
  export type PatternMemoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * Filter, which PatternMemory to fetch.
     */
    where?: PatternMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternMemories to fetch.
     */
    orderBy?: PatternMemoryOrderByWithRelationInput | PatternMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatternMemories.
     */
    cursor?: PatternMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatternMemories.
     */
    distinct?: PatternMemoryScalarFieldEnum | PatternMemoryScalarFieldEnum[]
  }

  /**
   * PatternMemory findMany
   */
  export type PatternMemoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * Filter, which PatternMemories to fetch.
     */
    where?: PatternMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternMemories to fetch.
     */
    orderBy?: PatternMemoryOrderByWithRelationInput | PatternMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatternMemories.
     */
    cursor?: PatternMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternMemories.
     */
    skip?: number
    distinct?: PatternMemoryScalarFieldEnum | PatternMemoryScalarFieldEnum[]
  }

  /**
   * PatternMemory create
   */
  export type PatternMemoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * The data needed to create a PatternMemory.
     */
    data: XOR<PatternMemoryCreateInput, PatternMemoryUncheckedCreateInput>
  }

  /**
   * PatternMemory createMany
   */
  export type PatternMemoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatternMemories.
     */
    data: PatternMemoryCreateManyInput | PatternMemoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatternMemory createManyAndReturn
   */
  export type PatternMemoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PatternMemories.
     */
    data: PatternMemoryCreateManyInput | PatternMemoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatternMemory update
   */
  export type PatternMemoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * The data needed to update a PatternMemory.
     */
    data: XOR<PatternMemoryUpdateInput, PatternMemoryUncheckedUpdateInput>
    /**
     * Choose, which PatternMemory to update.
     */
    where: PatternMemoryWhereUniqueInput
  }

  /**
   * PatternMemory updateMany
   */
  export type PatternMemoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatternMemories.
     */
    data: XOR<PatternMemoryUpdateManyMutationInput, PatternMemoryUncheckedUpdateManyInput>
    /**
     * Filter which PatternMemories to update
     */
    where?: PatternMemoryWhereInput
  }

  /**
   * PatternMemory upsert
   */
  export type PatternMemoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * The filter to search for the PatternMemory to update in case it exists.
     */
    where: PatternMemoryWhereUniqueInput
    /**
     * In case the PatternMemory found by the `where` argument doesn't exist, create a new PatternMemory with this data.
     */
    create: XOR<PatternMemoryCreateInput, PatternMemoryUncheckedCreateInput>
    /**
     * In case the PatternMemory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatternMemoryUpdateInput, PatternMemoryUncheckedUpdateInput>
  }

  /**
   * PatternMemory delete
   */
  export type PatternMemoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
    /**
     * Filter which PatternMemory to delete.
     */
    where: PatternMemoryWhereUniqueInput
  }

  /**
   * PatternMemory deleteMany
   */
  export type PatternMemoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatternMemories to delete
     */
    where?: PatternMemoryWhereInput
  }

  /**
   * PatternMemory without action
   */
  export type PatternMemoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternMemory
     */
    select?: PatternMemorySelect<ExtArgs> | null
  }


  /**
   * Model AgentRun
   */

  export type AggregateAgentRun = {
    _count: AgentRunCountAggregateOutputType | null
    _min: AgentRunMinAggregateOutputType | null
    _max: AgentRunMaxAggregateOutputType | null
  }

  export type AgentRunMinAggregateOutputType = {
    id: string | null
    observationId: string | null
    agentName: string | null
    agentRole: string | null
    modelProvider: string | null
    createdAt: Date | null
  }

  export type AgentRunMaxAggregateOutputType = {
    id: string | null
    observationId: string | null
    agentName: string | null
    agentRole: string | null
    modelProvider: string | null
    createdAt: Date | null
  }

  export type AgentRunCountAggregateOutputType = {
    id: number
    observationId: number
    agentName: number
    agentRole: number
    modelProvider: number
    input: number
    output: number
    createdAt: number
    _all: number
  }


  export type AgentRunMinAggregateInputType = {
    id?: true
    observationId?: true
    agentName?: true
    agentRole?: true
    modelProvider?: true
    createdAt?: true
  }

  export type AgentRunMaxAggregateInputType = {
    id?: true
    observationId?: true
    agentName?: true
    agentRole?: true
    modelProvider?: true
    createdAt?: true
  }

  export type AgentRunCountAggregateInputType = {
    id?: true
    observationId?: true
    agentName?: true
    agentRole?: true
    modelProvider?: true
    input?: true
    output?: true
    createdAt?: true
    _all?: true
  }

  export type AgentRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentRun to aggregate.
     */
    where?: AgentRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRuns to fetch.
     */
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentRuns
    **/
    _count?: true | AgentRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentRunMaxAggregateInputType
  }

  export type GetAgentRunAggregateType<T extends AgentRunAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentRun[P]>
      : GetScalarType<T[P], AggregateAgentRun[P]>
  }




  export type AgentRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRunWhereInput
    orderBy?: AgentRunOrderByWithAggregationInput | AgentRunOrderByWithAggregationInput[]
    by: AgentRunScalarFieldEnum[] | AgentRunScalarFieldEnum
    having?: AgentRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentRunCountAggregateInputType | true
    _min?: AgentRunMinAggregateInputType
    _max?: AgentRunMaxAggregateInputType
  }

  export type AgentRunGroupByOutputType = {
    id: string
    observationId: string | null
    agentName: string
    agentRole: string
    modelProvider: string
    input: JsonValue
    output: JsonValue
    createdAt: Date
    _count: AgentRunCountAggregateOutputType | null
    _min: AgentRunMinAggregateOutputType | null
    _max: AgentRunMaxAggregateOutputType | null
  }

  type GetAgentRunGroupByPayload<T extends AgentRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentRunGroupByOutputType[P]>
            : GetScalarType<T[P], AgentRunGroupByOutputType[P]>
        }
      >
    >


  export type AgentRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    observationId?: boolean
    agentName?: boolean
    agentRole?: boolean
    modelProvider?: boolean
    input?: boolean
    output?: boolean
    createdAt?: boolean
    observations?: boolean | AgentRun$observationsArgs<ExtArgs>
    _count?: boolean | AgentRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentRun"]>

  export type AgentRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    observationId?: boolean
    agentName?: boolean
    agentRole?: boolean
    modelProvider?: boolean
    input?: boolean
    output?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentRun"]>

  export type AgentRunSelectScalar = {
    id?: boolean
    observationId?: boolean
    agentName?: boolean
    agentRole?: boolean
    modelProvider?: boolean
    input?: boolean
    output?: boolean
    createdAt?: boolean
  }

  export type AgentRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    observations?: boolean | AgentRun$observationsArgs<ExtArgs>
    _count?: boolean | AgentRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgentRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentRun"
    objects: {
      observations: Prisma.$ObservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      observationId: string | null
      agentName: string
      agentRole: string
      modelProvider: string
      input: Prisma.JsonValue
      output: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["agentRun"]>
    composites: {}
  }

  type AgentRunGetPayload<S extends boolean | null | undefined | AgentRunDefaultArgs> = $Result.GetResult<Prisma.$AgentRunPayload, S>

  type AgentRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgentRunFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentRunCountAggregateInputType | true
    }

  export interface AgentRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentRun'], meta: { name: 'AgentRun' } }
    /**
     * Find zero or one AgentRun that matches the filter.
     * @param {AgentRunFindUniqueArgs} args - Arguments to find a AgentRun
     * @example
     * // Get one AgentRun
     * const agentRun = await prisma.agentRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentRunFindUniqueArgs>(args: SelectSubset<T, AgentRunFindUniqueArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AgentRun that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgentRunFindUniqueOrThrowArgs} args - Arguments to find a AgentRun
     * @example
     * // Get one AgentRun
     * const agentRun = await prisma.agentRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentRunFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AgentRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunFindFirstArgs} args - Arguments to find a AgentRun
     * @example
     * // Get one AgentRun
     * const agentRun = await prisma.agentRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentRunFindFirstArgs>(args?: SelectSubset<T, AgentRunFindFirstArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AgentRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunFindFirstOrThrowArgs} args - Arguments to find a AgentRun
     * @example
     * // Get one AgentRun
     * const agentRun = await prisma.agentRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentRunFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AgentRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentRuns
     * const agentRuns = await prisma.agentRun.findMany()
     * 
     * // Get first 10 AgentRuns
     * const agentRuns = await prisma.agentRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentRunWithIdOnly = await prisma.agentRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentRunFindManyArgs>(args?: SelectSubset<T, AgentRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AgentRun.
     * @param {AgentRunCreateArgs} args - Arguments to create a AgentRun.
     * @example
     * // Create one AgentRun
     * const AgentRun = await prisma.agentRun.create({
     *   data: {
     *     // ... data to create a AgentRun
     *   }
     * })
     * 
     */
    create<T extends AgentRunCreateArgs>(args: SelectSubset<T, AgentRunCreateArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AgentRuns.
     * @param {AgentRunCreateManyArgs} args - Arguments to create many AgentRuns.
     * @example
     * // Create many AgentRuns
     * const agentRun = await prisma.agentRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentRunCreateManyArgs>(args?: SelectSubset<T, AgentRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentRuns and returns the data saved in the database.
     * @param {AgentRunCreateManyAndReturnArgs} args - Arguments to create many AgentRuns.
     * @example
     * // Create many AgentRuns
     * const agentRun = await prisma.agentRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentRuns and only return the `id`
     * const agentRunWithIdOnly = await prisma.agentRun.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentRunCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AgentRun.
     * @param {AgentRunDeleteArgs} args - Arguments to delete one AgentRun.
     * @example
     * // Delete one AgentRun
     * const AgentRun = await prisma.agentRun.delete({
     *   where: {
     *     // ... filter to delete one AgentRun
     *   }
     * })
     * 
     */
    delete<T extends AgentRunDeleteArgs>(args: SelectSubset<T, AgentRunDeleteArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AgentRun.
     * @param {AgentRunUpdateArgs} args - Arguments to update one AgentRun.
     * @example
     * // Update one AgentRun
     * const agentRun = await prisma.agentRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentRunUpdateArgs>(args: SelectSubset<T, AgentRunUpdateArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AgentRuns.
     * @param {AgentRunDeleteManyArgs} args - Arguments to filter AgentRuns to delete.
     * @example
     * // Delete a few AgentRuns
     * const { count } = await prisma.agentRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentRunDeleteManyArgs>(args?: SelectSubset<T, AgentRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentRuns
     * const agentRun = await prisma.agentRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentRunUpdateManyArgs>(args: SelectSubset<T, AgentRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgentRun.
     * @param {AgentRunUpsertArgs} args - Arguments to update or create a AgentRun.
     * @example
     * // Update or create a AgentRun
     * const agentRun = await prisma.agentRun.upsert({
     *   create: {
     *     // ... data to create a AgentRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentRun we want to update
     *   }
     * })
     */
    upsert<T extends AgentRunUpsertArgs>(args: SelectSubset<T, AgentRunUpsertArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AgentRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunCountArgs} args - Arguments to filter AgentRuns to count.
     * @example
     * // Count the number of AgentRuns
     * const count = await prisma.agentRun.count({
     *   where: {
     *     // ... the filter for the AgentRuns we want to count
     *   }
     * })
    **/
    count<T extends AgentRunCountArgs>(
      args?: Subset<T, AgentRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentRunAggregateArgs>(args: Subset<T, AgentRunAggregateArgs>): Prisma.PrismaPromise<GetAgentRunAggregateType<T>>

    /**
     * Group by AgentRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentRunGroupByArgs['orderBy'] }
        : { orderBy?: AgentRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentRun model
   */
  readonly fields: AgentRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    observations<T extends AgentRun$observationsArgs<ExtArgs> = {}>(args?: Subset<T, AgentRun$observationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentRun model
   */ 
  interface AgentRunFieldRefs {
    readonly id: FieldRef<"AgentRun", 'String'>
    readonly observationId: FieldRef<"AgentRun", 'String'>
    readonly agentName: FieldRef<"AgentRun", 'String'>
    readonly agentRole: FieldRef<"AgentRun", 'String'>
    readonly modelProvider: FieldRef<"AgentRun", 'String'>
    readonly input: FieldRef<"AgentRun", 'Json'>
    readonly output: FieldRef<"AgentRun", 'Json'>
    readonly createdAt: FieldRef<"AgentRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentRun findUnique
   */
  export type AgentRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRun to fetch.
     */
    where: AgentRunWhereUniqueInput
  }

  /**
   * AgentRun findUniqueOrThrow
   */
  export type AgentRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRun to fetch.
     */
    where: AgentRunWhereUniqueInput
  }

  /**
   * AgentRun findFirst
   */
  export type AgentRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRun to fetch.
     */
    where?: AgentRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRuns to fetch.
     */
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentRuns.
     */
    cursor?: AgentRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentRuns.
     */
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * AgentRun findFirstOrThrow
   */
  export type AgentRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRun to fetch.
     */
    where?: AgentRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRuns to fetch.
     */
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentRuns.
     */
    cursor?: AgentRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentRuns.
     */
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * AgentRun findMany
   */
  export type AgentRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRuns to fetch.
     */
    where?: AgentRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRuns to fetch.
     */
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentRuns.
     */
    cursor?: AgentRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRuns.
     */
    skip?: number
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * AgentRun create
   */
  export type AgentRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentRun.
     */
    data: XOR<AgentRunCreateInput, AgentRunUncheckedCreateInput>
  }

  /**
   * AgentRun createMany
   */
  export type AgentRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentRuns.
     */
    data: AgentRunCreateManyInput | AgentRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentRun createManyAndReturn
   */
  export type AgentRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AgentRuns.
     */
    data: AgentRunCreateManyInput | AgentRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentRun update
   */
  export type AgentRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentRun.
     */
    data: XOR<AgentRunUpdateInput, AgentRunUncheckedUpdateInput>
    /**
     * Choose, which AgentRun to update.
     */
    where: AgentRunWhereUniqueInput
  }

  /**
   * AgentRun updateMany
   */
  export type AgentRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentRuns.
     */
    data: XOR<AgentRunUpdateManyMutationInput, AgentRunUncheckedUpdateManyInput>
    /**
     * Filter which AgentRuns to update
     */
    where?: AgentRunWhereInput
  }

  /**
   * AgentRun upsert
   */
  export type AgentRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentRun to update in case it exists.
     */
    where: AgentRunWhereUniqueInput
    /**
     * In case the AgentRun found by the `where` argument doesn't exist, create a new AgentRun with this data.
     */
    create: XOR<AgentRunCreateInput, AgentRunUncheckedCreateInput>
    /**
     * In case the AgentRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentRunUpdateInput, AgentRunUncheckedUpdateInput>
  }

  /**
   * AgentRun delete
   */
  export type AgentRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter which AgentRun to delete.
     */
    where: AgentRunWhereUniqueInput
  }

  /**
   * AgentRun deleteMany
   */
  export type AgentRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentRuns to delete
     */
    where?: AgentRunWhereInput
  }

  /**
   * AgentRun.observations
   */
  export type AgentRun$observationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    where?: ObservationWhereInput
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    cursor?: ObservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * AgentRun without action
   */
  export type AgentRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
  }


  /**
   * Model MemorySnapshot
   */

  export type AggregateMemorySnapshot = {
    _count: MemorySnapshotCountAggregateOutputType | null
    _min: MemorySnapshotMinAggregateOutputType | null
    _max: MemorySnapshotMaxAggregateOutputType | null
  }

  export type MemorySnapshotMinAggregateOutputType = {
    id: string | null
    memoryType: string | null
    periodStart: Date | null
    periodEnd: Date | null
    summary: string | null
    snapshotHash: string | null
    onchainTxHash: string | null
    createdAt: Date | null
  }

  export type MemorySnapshotMaxAggregateOutputType = {
    id: string | null
    memoryType: string | null
    periodStart: Date | null
    periodEnd: Date | null
    summary: string | null
    snapshotHash: string | null
    onchainTxHash: string | null
    createdAt: Date | null
  }

  export type MemorySnapshotCountAggregateOutputType = {
    id: number
    memoryType: number
    periodStart: number
    periodEnd: number
    summary: number
    snapshotHash: number
    onchainTxHash: number
    createdAt: number
    _all: number
  }


  export type MemorySnapshotMinAggregateInputType = {
    id?: true
    memoryType?: true
    periodStart?: true
    periodEnd?: true
    summary?: true
    snapshotHash?: true
    onchainTxHash?: true
    createdAt?: true
  }

  export type MemorySnapshotMaxAggregateInputType = {
    id?: true
    memoryType?: true
    periodStart?: true
    periodEnd?: true
    summary?: true
    snapshotHash?: true
    onchainTxHash?: true
    createdAt?: true
  }

  export type MemorySnapshotCountAggregateInputType = {
    id?: true
    memoryType?: true
    periodStart?: true
    periodEnd?: true
    summary?: true
    snapshotHash?: true
    onchainTxHash?: true
    createdAt?: true
    _all?: true
  }

  export type MemorySnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemorySnapshot to aggregate.
     */
    where?: MemorySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorySnapshots to fetch.
     */
    orderBy?: MemorySnapshotOrderByWithRelationInput | MemorySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemorySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemorySnapshots
    **/
    _count?: true | MemorySnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemorySnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemorySnapshotMaxAggregateInputType
  }

  export type GetMemorySnapshotAggregateType<T extends MemorySnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateMemorySnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemorySnapshot[P]>
      : GetScalarType<T[P], AggregateMemorySnapshot[P]>
  }




  export type MemorySnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemorySnapshotWhereInput
    orderBy?: MemorySnapshotOrderByWithAggregationInput | MemorySnapshotOrderByWithAggregationInput[]
    by: MemorySnapshotScalarFieldEnum[] | MemorySnapshotScalarFieldEnum
    having?: MemorySnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemorySnapshotCountAggregateInputType | true
    _min?: MemorySnapshotMinAggregateInputType
    _max?: MemorySnapshotMaxAggregateInputType
  }

  export type MemorySnapshotGroupByOutputType = {
    id: string
    memoryType: string
    periodStart: Date
    periodEnd: Date
    summary: string
    snapshotHash: string | null
    onchainTxHash: string | null
    createdAt: Date
    _count: MemorySnapshotCountAggregateOutputType | null
    _min: MemorySnapshotMinAggregateOutputType | null
    _max: MemorySnapshotMaxAggregateOutputType | null
  }

  type GetMemorySnapshotGroupByPayload<T extends MemorySnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemorySnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemorySnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemorySnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], MemorySnapshotGroupByOutputType[P]>
        }
      >
    >


  export type MemorySnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memoryType?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    summary?: boolean
    snapshotHash?: boolean
    onchainTxHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["memorySnapshot"]>

  export type MemorySnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memoryType?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    summary?: boolean
    snapshotHash?: boolean
    onchainTxHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["memorySnapshot"]>

  export type MemorySnapshotSelectScalar = {
    id?: boolean
    memoryType?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    summary?: boolean
    snapshotHash?: boolean
    onchainTxHash?: boolean
    createdAt?: boolean
  }


  export type $MemorySnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemorySnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memoryType: string
      periodStart: Date
      periodEnd: Date
      summary: string
      snapshotHash: string | null
      onchainTxHash: string | null
      createdAt: Date
    }, ExtArgs["result"]["memorySnapshot"]>
    composites: {}
  }

  type MemorySnapshotGetPayload<S extends boolean | null | undefined | MemorySnapshotDefaultArgs> = $Result.GetResult<Prisma.$MemorySnapshotPayload, S>

  type MemorySnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemorySnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemorySnapshotCountAggregateInputType | true
    }

  export interface MemorySnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemorySnapshot'], meta: { name: 'MemorySnapshot' } }
    /**
     * Find zero or one MemorySnapshot that matches the filter.
     * @param {MemorySnapshotFindUniqueArgs} args - Arguments to find a MemorySnapshot
     * @example
     * // Get one MemorySnapshot
     * const memorySnapshot = await prisma.memorySnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemorySnapshotFindUniqueArgs>(args: SelectSubset<T, MemorySnapshotFindUniqueArgs<ExtArgs>>): Prisma__MemorySnapshotClient<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MemorySnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemorySnapshotFindUniqueOrThrowArgs} args - Arguments to find a MemorySnapshot
     * @example
     * // Get one MemorySnapshot
     * const memorySnapshot = await prisma.memorySnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemorySnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, MemorySnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemorySnapshotClient<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MemorySnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorySnapshotFindFirstArgs} args - Arguments to find a MemorySnapshot
     * @example
     * // Get one MemorySnapshot
     * const memorySnapshot = await prisma.memorySnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemorySnapshotFindFirstArgs>(args?: SelectSubset<T, MemorySnapshotFindFirstArgs<ExtArgs>>): Prisma__MemorySnapshotClient<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MemorySnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorySnapshotFindFirstOrThrowArgs} args - Arguments to find a MemorySnapshot
     * @example
     * // Get one MemorySnapshot
     * const memorySnapshot = await prisma.memorySnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemorySnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, MemorySnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemorySnapshotClient<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MemorySnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorySnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemorySnapshots
     * const memorySnapshots = await prisma.memorySnapshot.findMany()
     * 
     * // Get first 10 MemorySnapshots
     * const memorySnapshots = await prisma.memorySnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memorySnapshotWithIdOnly = await prisma.memorySnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemorySnapshotFindManyArgs>(args?: SelectSubset<T, MemorySnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MemorySnapshot.
     * @param {MemorySnapshotCreateArgs} args - Arguments to create a MemorySnapshot.
     * @example
     * // Create one MemorySnapshot
     * const MemorySnapshot = await prisma.memorySnapshot.create({
     *   data: {
     *     // ... data to create a MemorySnapshot
     *   }
     * })
     * 
     */
    create<T extends MemorySnapshotCreateArgs>(args: SelectSubset<T, MemorySnapshotCreateArgs<ExtArgs>>): Prisma__MemorySnapshotClient<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MemorySnapshots.
     * @param {MemorySnapshotCreateManyArgs} args - Arguments to create many MemorySnapshots.
     * @example
     * // Create many MemorySnapshots
     * const memorySnapshot = await prisma.memorySnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemorySnapshotCreateManyArgs>(args?: SelectSubset<T, MemorySnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemorySnapshots and returns the data saved in the database.
     * @param {MemorySnapshotCreateManyAndReturnArgs} args - Arguments to create many MemorySnapshots.
     * @example
     * // Create many MemorySnapshots
     * const memorySnapshot = await prisma.memorySnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemorySnapshots and only return the `id`
     * const memorySnapshotWithIdOnly = await prisma.memorySnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemorySnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, MemorySnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MemorySnapshot.
     * @param {MemorySnapshotDeleteArgs} args - Arguments to delete one MemorySnapshot.
     * @example
     * // Delete one MemorySnapshot
     * const MemorySnapshot = await prisma.memorySnapshot.delete({
     *   where: {
     *     // ... filter to delete one MemorySnapshot
     *   }
     * })
     * 
     */
    delete<T extends MemorySnapshotDeleteArgs>(args: SelectSubset<T, MemorySnapshotDeleteArgs<ExtArgs>>): Prisma__MemorySnapshotClient<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MemorySnapshot.
     * @param {MemorySnapshotUpdateArgs} args - Arguments to update one MemorySnapshot.
     * @example
     * // Update one MemorySnapshot
     * const memorySnapshot = await prisma.memorySnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemorySnapshotUpdateArgs>(args: SelectSubset<T, MemorySnapshotUpdateArgs<ExtArgs>>): Prisma__MemorySnapshotClient<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MemorySnapshots.
     * @param {MemorySnapshotDeleteManyArgs} args - Arguments to filter MemorySnapshots to delete.
     * @example
     * // Delete a few MemorySnapshots
     * const { count } = await prisma.memorySnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemorySnapshotDeleteManyArgs>(args?: SelectSubset<T, MemorySnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemorySnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorySnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemorySnapshots
     * const memorySnapshot = await prisma.memorySnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemorySnapshotUpdateManyArgs>(args: SelectSubset<T, MemorySnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemorySnapshot.
     * @param {MemorySnapshotUpsertArgs} args - Arguments to update or create a MemorySnapshot.
     * @example
     * // Update or create a MemorySnapshot
     * const memorySnapshot = await prisma.memorySnapshot.upsert({
     *   create: {
     *     // ... data to create a MemorySnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemorySnapshot we want to update
     *   }
     * })
     */
    upsert<T extends MemorySnapshotUpsertArgs>(args: SelectSubset<T, MemorySnapshotUpsertArgs<ExtArgs>>): Prisma__MemorySnapshotClient<$Result.GetResult<Prisma.$MemorySnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MemorySnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorySnapshotCountArgs} args - Arguments to filter MemorySnapshots to count.
     * @example
     * // Count the number of MemorySnapshots
     * const count = await prisma.memorySnapshot.count({
     *   where: {
     *     // ... the filter for the MemorySnapshots we want to count
     *   }
     * })
    **/
    count<T extends MemorySnapshotCountArgs>(
      args?: Subset<T, MemorySnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemorySnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemorySnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorySnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemorySnapshotAggregateArgs>(args: Subset<T, MemorySnapshotAggregateArgs>): Prisma.PrismaPromise<GetMemorySnapshotAggregateType<T>>

    /**
     * Group by MemorySnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemorySnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemorySnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemorySnapshotGroupByArgs['orderBy'] }
        : { orderBy?: MemorySnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemorySnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemorySnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemorySnapshot model
   */
  readonly fields: MemorySnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemorySnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemorySnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemorySnapshot model
   */ 
  interface MemorySnapshotFieldRefs {
    readonly id: FieldRef<"MemorySnapshot", 'String'>
    readonly memoryType: FieldRef<"MemorySnapshot", 'String'>
    readonly periodStart: FieldRef<"MemorySnapshot", 'DateTime'>
    readonly periodEnd: FieldRef<"MemorySnapshot", 'DateTime'>
    readonly summary: FieldRef<"MemorySnapshot", 'String'>
    readonly snapshotHash: FieldRef<"MemorySnapshot", 'String'>
    readonly onchainTxHash: FieldRef<"MemorySnapshot", 'String'>
    readonly createdAt: FieldRef<"MemorySnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemorySnapshot findUnique
   */
  export type MemorySnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MemorySnapshot to fetch.
     */
    where: MemorySnapshotWhereUniqueInput
  }

  /**
   * MemorySnapshot findUniqueOrThrow
   */
  export type MemorySnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MemorySnapshot to fetch.
     */
    where: MemorySnapshotWhereUniqueInput
  }

  /**
   * MemorySnapshot findFirst
   */
  export type MemorySnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MemorySnapshot to fetch.
     */
    where?: MemorySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorySnapshots to fetch.
     */
    orderBy?: MemorySnapshotOrderByWithRelationInput | MemorySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemorySnapshots.
     */
    cursor?: MemorySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemorySnapshots.
     */
    distinct?: MemorySnapshotScalarFieldEnum | MemorySnapshotScalarFieldEnum[]
  }

  /**
   * MemorySnapshot findFirstOrThrow
   */
  export type MemorySnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MemorySnapshot to fetch.
     */
    where?: MemorySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorySnapshots to fetch.
     */
    orderBy?: MemorySnapshotOrderByWithRelationInput | MemorySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemorySnapshots.
     */
    cursor?: MemorySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemorySnapshots.
     */
    distinct?: MemorySnapshotScalarFieldEnum | MemorySnapshotScalarFieldEnum[]
  }

  /**
   * MemorySnapshot findMany
   */
  export type MemorySnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MemorySnapshots to fetch.
     */
    where?: MemorySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemorySnapshots to fetch.
     */
    orderBy?: MemorySnapshotOrderByWithRelationInput | MemorySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemorySnapshots.
     */
    cursor?: MemorySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemorySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemorySnapshots.
     */
    skip?: number
    distinct?: MemorySnapshotScalarFieldEnum | MemorySnapshotScalarFieldEnum[]
  }

  /**
   * MemorySnapshot create
   */
  export type MemorySnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * The data needed to create a MemorySnapshot.
     */
    data: XOR<MemorySnapshotCreateInput, MemorySnapshotUncheckedCreateInput>
  }

  /**
   * MemorySnapshot createMany
   */
  export type MemorySnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemorySnapshots.
     */
    data: MemorySnapshotCreateManyInput | MemorySnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemorySnapshot createManyAndReturn
   */
  export type MemorySnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MemorySnapshots.
     */
    data: MemorySnapshotCreateManyInput | MemorySnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemorySnapshot update
   */
  export type MemorySnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * The data needed to update a MemorySnapshot.
     */
    data: XOR<MemorySnapshotUpdateInput, MemorySnapshotUncheckedUpdateInput>
    /**
     * Choose, which MemorySnapshot to update.
     */
    where: MemorySnapshotWhereUniqueInput
  }

  /**
   * MemorySnapshot updateMany
   */
  export type MemorySnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemorySnapshots.
     */
    data: XOR<MemorySnapshotUpdateManyMutationInput, MemorySnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MemorySnapshots to update
     */
    where?: MemorySnapshotWhereInput
  }

  /**
   * MemorySnapshot upsert
   */
  export type MemorySnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * The filter to search for the MemorySnapshot to update in case it exists.
     */
    where: MemorySnapshotWhereUniqueInput
    /**
     * In case the MemorySnapshot found by the `where` argument doesn't exist, create a new MemorySnapshot with this data.
     */
    create: XOR<MemorySnapshotCreateInput, MemorySnapshotUncheckedCreateInput>
    /**
     * In case the MemorySnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemorySnapshotUpdateInput, MemorySnapshotUncheckedUpdateInput>
  }

  /**
   * MemorySnapshot delete
   */
  export type MemorySnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
    /**
     * Filter which MemorySnapshot to delete.
     */
    where: MemorySnapshotWhereUniqueInput
  }

  /**
   * MemorySnapshot deleteMany
   */
  export type MemorySnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemorySnapshots to delete
     */
    where?: MemorySnapshotWhereInput
  }

  /**
   * MemorySnapshot without action
   */
  export type MemorySnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemorySnapshot
     */
    select?: MemorySnapshotSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ObservationScalarFieldEnum: {
    id: 'id',
    source: 'source',
    chain: 'chain',
    eventType: 'eventType',
    primaryEntity: 'primaryEntity',
    relatedWallets: 'relatedWallets',
    relatedTokens: 'relatedTokens',
    relatedContracts: 'relatedContracts',
    txHash: 'txHash',
    blockNumber: 'blockNumber',
    facts: 'facts',
    rawData: 'rawData',
    relevanceScore: 'relevanceScore',
    noveltyScore: 'noveltyScore',
    patternSimilarity: 'patternSimilarity',
    contextCoverage: 'contextCoverage',
    summary: 'summary',
    limitations: 'limitations',
    observationHash: 'observationHash',
    onchainTxHash: 'onchainTxHash',
    onchainObservationId: 'onchainObservationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObservationScalarFieldEnum = (typeof ObservationScalarFieldEnum)[keyof typeof ObservationScalarFieldEnum]


  export const WalletProfileScalarFieldEnum: {
    id: 'id',
    address: 'address',
    observations: 'observations',
    summary: 'summary',
    tags: 'tags',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletProfileScalarFieldEnum = (typeof WalletProfileScalarFieldEnum)[keyof typeof WalletProfileScalarFieldEnum]


  export const TokenProfileScalarFieldEnum: {
    id: 'id',
    address: 'address',
    symbol: 'symbol',
    observations: 'observations',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt'
  };

  export type TokenProfileScalarFieldEnum = (typeof TokenProfileScalarFieldEnum)[keyof typeof TokenProfileScalarFieldEnum]


  export const ContractProfileScalarFieldEnum: {
    id: 'id',
    address: 'address',
    name: 'name',
    observations: 'observations',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt'
  };

  export type ContractProfileScalarFieldEnum = (typeof ContractProfileScalarFieldEnum)[keyof typeof ContractProfileScalarFieldEnum]


  export const PatternMemoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    entities: 'entities',
    observationIds: 'observationIds',
    confidence: 'confidence',
    createdAt: 'createdAt'
  };

  export type PatternMemoryScalarFieldEnum = (typeof PatternMemoryScalarFieldEnum)[keyof typeof PatternMemoryScalarFieldEnum]


  export const AgentRunScalarFieldEnum: {
    id: 'id',
    observationId: 'observationId',
    agentName: 'agentName',
    agentRole: 'agentRole',
    modelProvider: 'modelProvider',
    input: 'input',
    output: 'output',
    createdAt: 'createdAt'
  };

  export type AgentRunScalarFieldEnum = (typeof AgentRunScalarFieldEnum)[keyof typeof AgentRunScalarFieldEnum]


  export const MemorySnapshotScalarFieldEnum: {
    id: 'id',
    memoryType: 'memoryType',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    summary: 'summary',
    snapshotHash: 'snapshotHash',
    onchainTxHash: 'onchainTxHash',
    createdAt: 'createdAt'
  };

  export type MemorySnapshotScalarFieldEnum = (typeof MemorySnapshotScalarFieldEnum)[keyof typeof MemorySnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ObservationWhereInput = {
    AND?: ObservationWhereInput | ObservationWhereInput[]
    OR?: ObservationWhereInput[]
    NOT?: ObservationWhereInput | ObservationWhereInput[]
    id?: StringFilter<"Observation"> | string
    source?: StringFilter<"Observation"> | string
    chain?: StringFilter<"Observation"> | string
    eventType?: StringFilter<"Observation"> | string
    primaryEntity?: StringFilter<"Observation"> | string
    relatedWallets?: StringNullableListFilter<"Observation">
    relatedTokens?: StringNullableListFilter<"Observation">
    relatedContracts?: StringNullableListFilter<"Observation">
    txHash?: StringNullableFilter<"Observation"> | string | null
    blockNumber?: IntNullableFilter<"Observation"> | number | null
    facts?: JsonFilter<"Observation">
    rawData?: JsonFilter<"Observation">
    relevanceScore?: IntFilter<"Observation"> | number
    noveltyScore?: IntFilter<"Observation"> | number
    patternSimilarity?: IntFilter<"Observation"> | number
    contextCoverage?: IntFilter<"Observation"> | number
    summary?: StringNullableFilter<"Observation"> | string | null
    limitations?: StringNullableListFilter<"Observation">
    observationHash?: StringNullableFilter<"Observation"> | string | null
    onchainTxHash?: StringNullableFilter<"Observation"> | string | null
    onchainObservationId?: IntNullableFilter<"Observation"> | number | null
    createdAt?: DateTimeFilter<"Observation"> | Date | string
    updatedAt?: DateTimeFilter<"Observation"> | Date | string
    agentRuns?: AgentRunListRelationFilter
  }

  export type ObservationOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    chain?: SortOrder
    eventType?: SortOrder
    primaryEntity?: SortOrder
    relatedWallets?: SortOrder
    relatedTokens?: SortOrder
    relatedContracts?: SortOrder
    txHash?: SortOrderInput | SortOrder
    blockNumber?: SortOrderInput | SortOrder
    facts?: SortOrder
    rawData?: SortOrder
    relevanceScore?: SortOrder
    noveltyScore?: SortOrder
    patternSimilarity?: SortOrder
    contextCoverage?: SortOrder
    summary?: SortOrderInput | SortOrder
    limitations?: SortOrder
    observationHash?: SortOrderInput | SortOrder
    onchainTxHash?: SortOrderInput | SortOrder
    onchainObservationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentRuns?: AgentRunOrderByRelationAggregateInput
  }

  export type ObservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObservationWhereInput | ObservationWhereInput[]
    OR?: ObservationWhereInput[]
    NOT?: ObservationWhereInput | ObservationWhereInput[]
    source?: StringFilter<"Observation"> | string
    chain?: StringFilter<"Observation"> | string
    eventType?: StringFilter<"Observation"> | string
    primaryEntity?: StringFilter<"Observation"> | string
    relatedWallets?: StringNullableListFilter<"Observation">
    relatedTokens?: StringNullableListFilter<"Observation">
    relatedContracts?: StringNullableListFilter<"Observation">
    txHash?: StringNullableFilter<"Observation"> | string | null
    blockNumber?: IntNullableFilter<"Observation"> | number | null
    facts?: JsonFilter<"Observation">
    rawData?: JsonFilter<"Observation">
    relevanceScore?: IntFilter<"Observation"> | number
    noveltyScore?: IntFilter<"Observation"> | number
    patternSimilarity?: IntFilter<"Observation"> | number
    contextCoverage?: IntFilter<"Observation"> | number
    summary?: StringNullableFilter<"Observation"> | string | null
    limitations?: StringNullableListFilter<"Observation">
    observationHash?: StringNullableFilter<"Observation"> | string | null
    onchainTxHash?: StringNullableFilter<"Observation"> | string | null
    onchainObservationId?: IntNullableFilter<"Observation"> | number | null
    createdAt?: DateTimeFilter<"Observation"> | Date | string
    updatedAt?: DateTimeFilter<"Observation"> | Date | string
    agentRuns?: AgentRunListRelationFilter
  }, "id">

  export type ObservationOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    chain?: SortOrder
    eventType?: SortOrder
    primaryEntity?: SortOrder
    relatedWallets?: SortOrder
    relatedTokens?: SortOrder
    relatedContracts?: SortOrder
    txHash?: SortOrderInput | SortOrder
    blockNumber?: SortOrderInput | SortOrder
    facts?: SortOrder
    rawData?: SortOrder
    relevanceScore?: SortOrder
    noveltyScore?: SortOrder
    patternSimilarity?: SortOrder
    contextCoverage?: SortOrder
    summary?: SortOrderInput | SortOrder
    limitations?: SortOrder
    observationHash?: SortOrderInput | SortOrder
    onchainTxHash?: SortOrderInput | SortOrder
    onchainObservationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ObservationCountOrderByAggregateInput
    _avg?: ObservationAvgOrderByAggregateInput
    _max?: ObservationMaxOrderByAggregateInput
    _min?: ObservationMinOrderByAggregateInput
    _sum?: ObservationSumOrderByAggregateInput
  }

  export type ObservationScalarWhereWithAggregatesInput = {
    AND?: ObservationScalarWhereWithAggregatesInput | ObservationScalarWhereWithAggregatesInput[]
    OR?: ObservationScalarWhereWithAggregatesInput[]
    NOT?: ObservationScalarWhereWithAggregatesInput | ObservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Observation"> | string
    source?: StringWithAggregatesFilter<"Observation"> | string
    chain?: StringWithAggregatesFilter<"Observation"> | string
    eventType?: StringWithAggregatesFilter<"Observation"> | string
    primaryEntity?: StringWithAggregatesFilter<"Observation"> | string
    relatedWallets?: StringNullableListFilter<"Observation">
    relatedTokens?: StringNullableListFilter<"Observation">
    relatedContracts?: StringNullableListFilter<"Observation">
    txHash?: StringNullableWithAggregatesFilter<"Observation"> | string | null
    blockNumber?: IntNullableWithAggregatesFilter<"Observation"> | number | null
    facts?: JsonWithAggregatesFilter<"Observation">
    rawData?: JsonWithAggregatesFilter<"Observation">
    relevanceScore?: IntWithAggregatesFilter<"Observation"> | number
    noveltyScore?: IntWithAggregatesFilter<"Observation"> | number
    patternSimilarity?: IntWithAggregatesFilter<"Observation"> | number
    contextCoverage?: IntWithAggregatesFilter<"Observation"> | number
    summary?: StringNullableWithAggregatesFilter<"Observation"> | string | null
    limitations?: StringNullableListFilter<"Observation">
    observationHash?: StringNullableWithAggregatesFilter<"Observation"> | string | null
    onchainTxHash?: StringNullableWithAggregatesFilter<"Observation"> | string | null
    onchainObservationId?: IntNullableWithAggregatesFilter<"Observation"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Observation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Observation"> | Date | string
  }

  export type WalletProfileWhereInput = {
    AND?: WalletProfileWhereInput | WalletProfileWhereInput[]
    OR?: WalletProfileWhereInput[]
    NOT?: WalletProfileWhereInput | WalletProfileWhereInput[]
    id?: StringFilter<"WalletProfile"> | string
    address?: StringFilter<"WalletProfile"> | string
    observations?: IntFilter<"WalletProfile"> | number
    summary?: StringNullableFilter<"WalletProfile"> | string | null
    tags?: StringNullableListFilter<"WalletProfile">
    lastSeenAt?: DateTimeNullableFilter<"WalletProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"WalletProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WalletProfile"> | Date | string
  }

  export type WalletProfileOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    observations?: SortOrder
    summary?: SortOrderInput | SortOrder
    tags?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: WalletProfileWhereInput | WalletProfileWhereInput[]
    OR?: WalletProfileWhereInput[]
    NOT?: WalletProfileWhereInput | WalletProfileWhereInput[]
    observations?: IntFilter<"WalletProfile"> | number
    summary?: StringNullableFilter<"WalletProfile"> | string | null
    tags?: StringNullableListFilter<"WalletProfile">
    lastSeenAt?: DateTimeNullableFilter<"WalletProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"WalletProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WalletProfile"> | Date | string
  }, "id" | "address">

  export type WalletProfileOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    observations?: SortOrder
    summary?: SortOrderInput | SortOrder
    tags?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletProfileCountOrderByAggregateInput
    _avg?: WalletProfileAvgOrderByAggregateInput
    _max?: WalletProfileMaxOrderByAggregateInput
    _min?: WalletProfileMinOrderByAggregateInput
    _sum?: WalletProfileSumOrderByAggregateInput
  }

  export type WalletProfileScalarWhereWithAggregatesInput = {
    AND?: WalletProfileScalarWhereWithAggregatesInput | WalletProfileScalarWhereWithAggregatesInput[]
    OR?: WalletProfileScalarWhereWithAggregatesInput[]
    NOT?: WalletProfileScalarWhereWithAggregatesInput | WalletProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WalletProfile"> | string
    address?: StringWithAggregatesFilter<"WalletProfile"> | string
    observations?: IntWithAggregatesFilter<"WalletProfile"> | number
    summary?: StringNullableWithAggregatesFilter<"WalletProfile"> | string | null
    tags?: StringNullableListFilter<"WalletProfile">
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"WalletProfile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WalletProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WalletProfile"> | Date | string
  }

  export type TokenProfileWhereInput = {
    AND?: TokenProfileWhereInput | TokenProfileWhereInput[]
    OR?: TokenProfileWhereInput[]
    NOT?: TokenProfileWhereInput | TokenProfileWhereInput[]
    id?: StringFilter<"TokenProfile"> | string
    address?: StringFilter<"TokenProfile"> | string
    symbol?: StringNullableFilter<"TokenProfile"> | string | null
    observations?: IntFilter<"TokenProfile"> | number
    lastSeenAt?: DateTimeNullableFilter<"TokenProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"TokenProfile"> | Date | string
  }

  export type TokenProfileOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    symbol?: SortOrderInput | SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type TokenProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: TokenProfileWhereInput | TokenProfileWhereInput[]
    OR?: TokenProfileWhereInput[]
    NOT?: TokenProfileWhereInput | TokenProfileWhereInput[]
    symbol?: StringNullableFilter<"TokenProfile"> | string | null
    observations?: IntFilter<"TokenProfile"> | number
    lastSeenAt?: DateTimeNullableFilter<"TokenProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"TokenProfile"> | Date | string
  }, "id" | "address">

  export type TokenProfileOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    symbol?: SortOrderInput | SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TokenProfileCountOrderByAggregateInput
    _avg?: TokenProfileAvgOrderByAggregateInput
    _max?: TokenProfileMaxOrderByAggregateInput
    _min?: TokenProfileMinOrderByAggregateInput
    _sum?: TokenProfileSumOrderByAggregateInput
  }

  export type TokenProfileScalarWhereWithAggregatesInput = {
    AND?: TokenProfileScalarWhereWithAggregatesInput | TokenProfileScalarWhereWithAggregatesInput[]
    OR?: TokenProfileScalarWhereWithAggregatesInput[]
    NOT?: TokenProfileScalarWhereWithAggregatesInput | TokenProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenProfile"> | string
    address?: StringWithAggregatesFilter<"TokenProfile"> | string
    symbol?: StringNullableWithAggregatesFilter<"TokenProfile"> | string | null
    observations?: IntWithAggregatesFilter<"TokenProfile"> | number
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"TokenProfile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TokenProfile"> | Date | string
  }

  export type ContractProfileWhereInput = {
    AND?: ContractProfileWhereInput | ContractProfileWhereInput[]
    OR?: ContractProfileWhereInput[]
    NOT?: ContractProfileWhereInput | ContractProfileWhereInput[]
    id?: StringFilter<"ContractProfile"> | string
    address?: StringFilter<"ContractProfile"> | string
    name?: StringNullableFilter<"ContractProfile"> | string | null
    observations?: IntFilter<"ContractProfile"> | number
    lastSeenAt?: DateTimeNullableFilter<"ContractProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"ContractProfile"> | Date | string
  }

  export type ContractProfileOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrderInput | SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ContractProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: ContractProfileWhereInput | ContractProfileWhereInput[]
    OR?: ContractProfileWhereInput[]
    NOT?: ContractProfileWhereInput | ContractProfileWhereInput[]
    name?: StringNullableFilter<"ContractProfile"> | string | null
    observations?: IntFilter<"ContractProfile"> | number
    lastSeenAt?: DateTimeNullableFilter<"ContractProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"ContractProfile"> | Date | string
  }, "id" | "address">

  export type ContractProfileOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrderInput | SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContractProfileCountOrderByAggregateInput
    _avg?: ContractProfileAvgOrderByAggregateInput
    _max?: ContractProfileMaxOrderByAggregateInput
    _min?: ContractProfileMinOrderByAggregateInput
    _sum?: ContractProfileSumOrderByAggregateInput
  }

  export type ContractProfileScalarWhereWithAggregatesInput = {
    AND?: ContractProfileScalarWhereWithAggregatesInput | ContractProfileScalarWhereWithAggregatesInput[]
    OR?: ContractProfileScalarWhereWithAggregatesInput[]
    NOT?: ContractProfileScalarWhereWithAggregatesInput | ContractProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContractProfile"> | string
    address?: StringWithAggregatesFilter<"ContractProfile"> | string
    name?: StringNullableWithAggregatesFilter<"ContractProfile"> | string | null
    observations?: IntWithAggregatesFilter<"ContractProfile"> | number
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"ContractProfile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContractProfile"> | Date | string
  }

  export type PatternMemoryWhereInput = {
    AND?: PatternMemoryWhereInput | PatternMemoryWhereInput[]
    OR?: PatternMemoryWhereInput[]
    NOT?: PatternMemoryWhereInput | PatternMemoryWhereInput[]
    id?: StringFilter<"PatternMemory"> | string
    name?: StringFilter<"PatternMemory"> | string
    description?: StringFilter<"PatternMemory"> | string
    entities?: StringNullableListFilter<"PatternMemory">
    observationIds?: StringNullableListFilter<"PatternMemory">
    confidence?: IntFilter<"PatternMemory"> | number
    createdAt?: DateTimeFilter<"PatternMemory"> | Date | string
  }

  export type PatternMemoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entities?: SortOrder
    observationIds?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type PatternMemoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatternMemoryWhereInput | PatternMemoryWhereInput[]
    OR?: PatternMemoryWhereInput[]
    NOT?: PatternMemoryWhereInput | PatternMemoryWhereInput[]
    name?: StringFilter<"PatternMemory"> | string
    description?: StringFilter<"PatternMemory"> | string
    entities?: StringNullableListFilter<"PatternMemory">
    observationIds?: StringNullableListFilter<"PatternMemory">
    confidence?: IntFilter<"PatternMemory"> | number
    createdAt?: DateTimeFilter<"PatternMemory"> | Date | string
  }, "id">

  export type PatternMemoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entities?: SortOrder
    observationIds?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    _count?: PatternMemoryCountOrderByAggregateInput
    _avg?: PatternMemoryAvgOrderByAggregateInput
    _max?: PatternMemoryMaxOrderByAggregateInput
    _min?: PatternMemoryMinOrderByAggregateInput
    _sum?: PatternMemorySumOrderByAggregateInput
  }

  export type PatternMemoryScalarWhereWithAggregatesInput = {
    AND?: PatternMemoryScalarWhereWithAggregatesInput | PatternMemoryScalarWhereWithAggregatesInput[]
    OR?: PatternMemoryScalarWhereWithAggregatesInput[]
    NOT?: PatternMemoryScalarWhereWithAggregatesInput | PatternMemoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatternMemory"> | string
    name?: StringWithAggregatesFilter<"PatternMemory"> | string
    description?: StringWithAggregatesFilter<"PatternMemory"> | string
    entities?: StringNullableListFilter<"PatternMemory">
    observationIds?: StringNullableListFilter<"PatternMemory">
    confidence?: IntWithAggregatesFilter<"PatternMemory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PatternMemory"> | Date | string
  }

  export type AgentRunWhereInput = {
    AND?: AgentRunWhereInput | AgentRunWhereInput[]
    OR?: AgentRunWhereInput[]
    NOT?: AgentRunWhereInput | AgentRunWhereInput[]
    id?: StringFilter<"AgentRun"> | string
    observationId?: StringNullableFilter<"AgentRun"> | string | null
    agentName?: StringFilter<"AgentRun"> | string
    agentRole?: StringFilter<"AgentRun"> | string
    modelProvider?: StringFilter<"AgentRun"> | string
    input?: JsonFilter<"AgentRun">
    output?: JsonFilter<"AgentRun">
    createdAt?: DateTimeFilter<"AgentRun"> | Date | string
    observations?: ObservationListRelationFilter
  }

  export type AgentRunOrderByWithRelationInput = {
    id?: SortOrder
    observationId?: SortOrderInput | SortOrder
    agentName?: SortOrder
    agentRole?: SortOrder
    modelProvider?: SortOrder
    input?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    observations?: ObservationOrderByRelationAggregateInput
  }

  export type AgentRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentRunWhereInput | AgentRunWhereInput[]
    OR?: AgentRunWhereInput[]
    NOT?: AgentRunWhereInput | AgentRunWhereInput[]
    observationId?: StringNullableFilter<"AgentRun"> | string | null
    agentName?: StringFilter<"AgentRun"> | string
    agentRole?: StringFilter<"AgentRun"> | string
    modelProvider?: StringFilter<"AgentRun"> | string
    input?: JsonFilter<"AgentRun">
    output?: JsonFilter<"AgentRun">
    createdAt?: DateTimeFilter<"AgentRun"> | Date | string
    observations?: ObservationListRelationFilter
  }, "id">

  export type AgentRunOrderByWithAggregationInput = {
    id?: SortOrder
    observationId?: SortOrderInput | SortOrder
    agentName?: SortOrder
    agentRole?: SortOrder
    modelProvider?: SortOrder
    input?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    _count?: AgentRunCountOrderByAggregateInput
    _max?: AgentRunMaxOrderByAggregateInput
    _min?: AgentRunMinOrderByAggregateInput
  }

  export type AgentRunScalarWhereWithAggregatesInput = {
    AND?: AgentRunScalarWhereWithAggregatesInput | AgentRunScalarWhereWithAggregatesInput[]
    OR?: AgentRunScalarWhereWithAggregatesInput[]
    NOT?: AgentRunScalarWhereWithAggregatesInput | AgentRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentRun"> | string
    observationId?: StringNullableWithAggregatesFilter<"AgentRun"> | string | null
    agentName?: StringWithAggregatesFilter<"AgentRun"> | string
    agentRole?: StringWithAggregatesFilter<"AgentRun"> | string
    modelProvider?: StringWithAggregatesFilter<"AgentRun"> | string
    input?: JsonWithAggregatesFilter<"AgentRun">
    output?: JsonWithAggregatesFilter<"AgentRun">
    createdAt?: DateTimeWithAggregatesFilter<"AgentRun"> | Date | string
  }

  export type MemorySnapshotWhereInput = {
    AND?: MemorySnapshotWhereInput | MemorySnapshotWhereInput[]
    OR?: MemorySnapshotWhereInput[]
    NOT?: MemorySnapshotWhereInput | MemorySnapshotWhereInput[]
    id?: StringFilter<"MemorySnapshot"> | string
    memoryType?: StringFilter<"MemorySnapshot"> | string
    periodStart?: DateTimeFilter<"MemorySnapshot"> | Date | string
    periodEnd?: DateTimeFilter<"MemorySnapshot"> | Date | string
    summary?: StringFilter<"MemorySnapshot"> | string
    snapshotHash?: StringNullableFilter<"MemorySnapshot"> | string | null
    onchainTxHash?: StringNullableFilter<"MemorySnapshot"> | string | null
    createdAt?: DateTimeFilter<"MemorySnapshot"> | Date | string
  }

  export type MemorySnapshotOrderByWithRelationInput = {
    id?: SortOrder
    memoryType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    summary?: SortOrder
    snapshotHash?: SortOrderInput | SortOrder
    onchainTxHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type MemorySnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemorySnapshotWhereInput | MemorySnapshotWhereInput[]
    OR?: MemorySnapshotWhereInput[]
    NOT?: MemorySnapshotWhereInput | MemorySnapshotWhereInput[]
    memoryType?: StringFilter<"MemorySnapshot"> | string
    periodStart?: DateTimeFilter<"MemorySnapshot"> | Date | string
    periodEnd?: DateTimeFilter<"MemorySnapshot"> | Date | string
    summary?: StringFilter<"MemorySnapshot"> | string
    snapshotHash?: StringNullableFilter<"MemorySnapshot"> | string | null
    onchainTxHash?: StringNullableFilter<"MemorySnapshot"> | string | null
    createdAt?: DateTimeFilter<"MemorySnapshot"> | Date | string
  }, "id">

  export type MemorySnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    memoryType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    summary?: SortOrder
    snapshotHash?: SortOrderInput | SortOrder
    onchainTxHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MemorySnapshotCountOrderByAggregateInput
    _max?: MemorySnapshotMaxOrderByAggregateInput
    _min?: MemorySnapshotMinOrderByAggregateInput
  }

  export type MemorySnapshotScalarWhereWithAggregatesInput = {
    AND?: MemorySnapshotScalarWhereWithAggregatesInput | MemorySnapshotScalarWhereWithAggregatesInput[]
    OR?: MemorySnapshotScalarWhereWithAggregatesInput[]
    NOT?: MemorySnapshotScalarWhereWithAggregatesInput | MemorySnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemorySnapshot"> | string
    memoryType?: StringWithAggregatesFilter<"MemorySnapshot"> | string
    periodStart?: DateTimeWithAggregatesFilter<"MemorySnapshot"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"MemorySnapshot"> | Date | string
    summary?: StringWithAggregatesFilter<"MemorySnapshot"> | string
    snapshotHash?: StringNullableWithAggregatesFilter<"MemorySnapshot"> | string | null
    onchainTxHash?: StringNullableWithAggregatesFilter<"MemorySnapshot"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MemorySnapshot"> | Date | string
  }

  export type ObservationCreateInput = {
    id?: string
    source: string
    chain: string
    eventType: string
    primaryEntity: string
    relatedWallets?: ObservationCreaterelatedWalletsInput | string[]
    relatedTokens?: ObservationCreaterelatedTokensInput | string[]
    relatedContracts?: ObservationCreaterelatedContractsInput | string[]
    txHash?: string | null
    blockNumber?: number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: number
    noveltyScore?: number
    patternSimilarity?: number
    contextCoverage?: number
    summary?: string | null
    limitations?: ObservationCreatelimitationsInput | string[]
    observationHash?: string | null
    onchainTxHash?: string | null
    onchainObservationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agentRuns?: AgentRunCreateNestedManyWithoutObservationsInput
  }

  export type ObservationUncheckedCreateInput = {
    id?: string
    source: string
    chain: string
    eventType: string
    primaryEntity: string
    relatedWallets?: ObservationCreaterelatedWalletsInput | string[]
    relatedTokens?: ObservationCreaterelatedTokensInput | string[]
    relatedContracts?: ObservationCreaterelatedContractsInput | string[]
    txHash?: string | null
    blockNumber?: number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: number
    noveltyScore?: number
    patternSimilarity?: number
    contextCoverage?: number
    summary?: string | null
    limitations?: ObservationCreatelimitationsInput | string[]
    observationHash?: string | null
    onchainTxHash?: string | null
    onchainObservationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agentRuns?: AgentRunUncheckedCreateNestedManyWithoutObservationsInput
  }

  export type ObservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    primaryEntity?: StringFieldUpdateOperationsInput | string
    relatedWallets?: ObservationUpdaterelatedWalletsInput | string[]
    relatedTokens?: ObservationUpdaterelatedTokensInput | string[]
    relatedContracts?: ObservationUpdaterelatedContractsInput | string[]
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: IntFieldUpdateOperationsInput | number
    noveltyScore?: IntFieldUpdateOperationsInput | number
    patternSimilarity?: IntFieldUpdateOperationsInput | number
    contextCoverage?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    limitations?: ObservationUpdatelimitationsInput | string[]
    observationHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainObservationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRuns?: AgentRunUpdateManyWithoutObservationsNestedInput
  }

  export type ObservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    primaryEntity?: StringFieldUpdateOperationsInput | string
    relatedWallets?: ObservationUpdaterelatedWalletsInput | string[]
    relatedTokens?: ObservationUpdaterelatedTokensInput | string[]
    relatedContracts?: ObservationUpdaterelatedContractsInput | string[]
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: IntFieldUpdateOperationsInput | number
    noveltyScore?: IntFieldUpdateOperationsInput | number
    patternSimilarity?: IntFieldUpdateOperationsInput | number
    contextCoverage?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    limitations?: ObservationUpdatelimitationsInput | string[]
    observationHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainObservationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRuns?: AgentRunUncheckedUpdateManyWithoutObservationsNestedInput
  }

  export type ObservationCreateManyInput = {
    id?: string
    source: string
    chain: string
    eventType: string
    primaryEntity: string
    relatedWallets?: ObservationCreaterelatedWalletsInput | string[]
    relatedTokens?: ObservationCreaterelatedTokensInput | string[]
    relatedContracts?: ObservationCreaterelatedContractsInput | string[]
    txHash?: string | null
    blockNumber?: number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: number
    noveltyScore?: number
    patternSimilarity?: number
    contextCoverage?: number
    summary?: string | null
    limitations?: ObservationCreatelimitationsInput | string[]
    observationHash?: string | null
    onchainTxHash?: string | null
    onchainObservationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    primaryEntity?: StringFieldUpdateOperationsInput | string
    relatedWallets?: ObservationUpdaterelatedWalletsInput | string[]
    relatedTokens?: ObservationUpdaterelatedTokensInput | string[]
    relatedContracts?: ObservationUpdaterelatedContractsInput | string[]
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: IntFieldUpdateOperationsInput | number
    noveltyScore?: IntFieldUpdateOperationsInput | number
    patternSimilarity?: IntFieldUpdateOperationsInput | number
    contextCoverage?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    limitations?: ObservationUpdatelimitationsInput | string[]
    observationHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainObservationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    primaryEntity?: StringFieldUpdateOperationsInput | string
    relatedWallets?: ObservationUpdaterelatedWalletsInput | string[]
    relatedTokens?: ObservationUpdaterelatedTokensInput | string[]
    relatedContracts?: ObservationUpdaterelatedContractsInput | string[]
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: IntFieldUpdateOperationsInput | number
    noveltyScore?: IntFieldUpdateOperationsInput | number
    patternSimilarity?: IntFieldUpdateOperationsInput | number
    contextCoverage?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    limitations?: ObservationUpdatelimitationsInput | string[]
    observationHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainObservationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletProfileCreateInput = {
    id?: string
    address: string
    observations?: number
    summary?: string | null
    tags?: WalletProfileCreatetagsInput | string[]
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletProfileUncheckedCreateInput = {
    id?: string
    address: string
    observations?: number
    summary?: string | null
    tags?: WalletProfileCreatetagsInput | string[]
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    observations?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: WalletProfileUpdatetagsInput | string[]
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    observations?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: WalletProfileUpdatetagsInput | string[]
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletProfileCreateManyInput = {
    id?: string
    address: string
    observations?: number
    summary?: string | null
    tags?: WalletProfileCreatetagsInput | string[]
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    observations?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: WalletProfileUpdatetagsInput | string[]
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    observations?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: WalletProfileUpdatetagsInput | string[]
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenProfileCreateInput = {
    id?: string
    address: string
    symbol?: string | null
    observations?: number
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TokenProfileUncheckedCreateInput = {
    id?: string
    address: string
    symbol?: string | null
    observations?: number
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TokenProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: IntFieldUpdateOperationsInput | number
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: IntFieldUpdateOperationsInput | number
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenProfileCreateManyInput = {
    id?: string
    address: string
    symbol?: string | null
    observations?: number
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TokenProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: IntFieldUpdateOperationsInput | number
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: IntFieldUpdateOperationsInput | number
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractProfileCreateInput = {
    id?: string
    address: string
    name?: string | null
    observations?: number
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContractProfileUncheckedCreateInput = {
    id?: string
    address: string
    name?: string | null
    observations?: number
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContractProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: IntFieldUpdateOperationsInput | number
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: IntFieldUpdateOperationsInput | number
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractProfileCreateManyInput = {
    id?: string
    address: string
    name?: string | null
    observations?: number
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContractProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: IntFieldUpdateOperationsInput | number
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: IntFieldUpdateOperationsInput | number
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternMemoryCreateInput = {
    id?: string
    name: string
    description: string
    entities?: PatternMemoryCreateentitiesInput | string[]
    observationIds?: PatternMemoryCreateobservationIdsInput | string[]
    confidence?: number
    createdAt?: Date | string
  }

  export type PatternMemoryUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    entities?: PatternMemoryCreateentitiesInput | string[]
    observationIds?: PatternMemoryCreateobservationIdsInput | string[]
    confidence?: number
    createdAt?: Date | string
  }

  export type PatternMemoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entities?: PatternMemoryUpdateentitiesInput | string[]
    observationIds?: PatternMemoryUpdateobservationIdsInput | string[]
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternMemoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entities?: PatternMemoryUpdateentitiesInput | string[]
    observationIds?: PatternMemoryUpdateobservationIdsInput | string[]
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternMemoryCreateManyInput = {
    id?: string
    name: string
    description: string
    entities?: PatternMemoryCreateentitiesInput | string[]
    observationIds?: PatternMemoryCreateobservationIdsInput | string[]
    confidence?: number
    createdAt?: Date | string
  }

  export type PatternMemoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entities?: PatternMemoryUpdateentitiesInput | string[]
    observationIds?: PatternMemoryUpdateobservationIdsInput | string[]
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternMemoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    entities?: PatternMemoryUpdateentitiesInput | string[]
    observationIds?: PatternMemoryUpdateobservationIdsInput | string[]
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunCreateInput = {
    id?: string
    observationId?: string | null
    agentName: string
    agentRole: string
    modelProvider: string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    observations?: ObservationCreateNestedManyWithoutAgentRunsInput
  }

  export type AgentRunUncheckedCreateInput = {
    id?: string
    observationId?: string | null
    agentName: string
    agentRole: string
    modelProvider: string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    observations?: ObservationUncheckedCreateNestedManyWithoutAgentRunsInput
  }

  export type AgentRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationId?: NullableStringFieldUpdateOperationsInput | string | null
    agentName?: StringFieldUpdateOperationsInput | string
    agentRole?: StringFieldUpdateOperationsInput | string
    modelProvider?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: ObservationUpdateManyWithoutAgentRunsNestedInput
  }

  export type AgentRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationId?: NullableStringFieldUpdateOperationsInput | string | null
    agentName?: StringFieldUpdateOperationsInput | string
    agentRole?: StringFieldUpdateOperationsInput | string
    modelProvider?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: ObservationUncheckedUpdateManyWithoutAgentRunsNestedInput
  }

  export type AgentRunCreateManyInput = {
    id?: string
    observationId?: string | null
    agentName: string
    agentRole: string
    modelProvider: string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationId?: NullableStringFieldUpdateOperationsInput | string | null
    agentName?: StringFieldUpdateOperationsInput | string
    agentRole?: StringFieldUpdateOperationsInput | string
    modelProvider?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationId?: NullableStringFieldUpdateOperationsInput | string | null
    agentName?: StringFieldUpdateOperationsInput | string
    agentRole?: StringFieldUpdateOperationsInput | string
    modelProvider?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorySnapshotCreateInput = {
    id?: string
    memoryType: string
    periodStart: Date | string
    periodEnd: Date | string
    summary: string
    snapshotHash?: string | null
    onchainTxHash?: string | null
    createdAt?: Date | string
  }

  export type MemorySnapshotUncheckedCreateInput = {
    id?: string
    memoryType: string
    periodStart: Date | string
    periodEnd: Date | string
    summary: string
    snapshotHash?: string | null
    onchainTxHash?: string | null
    createdAt?: Date | string
  }

  export type MemorySnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryType?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    snapshotHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorySnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryType?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    snapshotHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorySnapshotCreateManyInput = {
    id?: string
    memoryType: string
    periodStart: Date | string
    periodEnd: Date | string
    summary: string
    snapshotHash?: string | null
    onchainTxHash?: string | null
    createdAt?: Date | string
  }

  export type MemorySnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryType?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    snapshotHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemorySnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryType?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    snapshotHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AgentRunListRelationFilter = {
    every?: AgentRunWhereInput
    some?: AgentRunWhereInput
    none?: AgentRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObservationCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    chain?: SortOrder
    eventType?: SortOrder
    primaryEntity?: SortOrder
    relatedWallets?: SortOrder
    relatedTokens?: SortOrder
    relatedContracts?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    facts?: SortOrder
    rawData?: SortOrder
    relevanceScore?: SortOrder
    noveltyScore?: SortOrder
    patternSimilarity?: SortOrder
    contextCoverage?: SortOrder
    summary?: SortOrder
    limitations?: SortOrder
    observationHash?: SortOrder
    onchainTxHash?: SortOrder
    onchainObservationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObservationAvgOrderByAggregateInput = {
    blockNumber?: SortOrder
    relevanceScore?: SortOrder
    noveltyScore?: SortOrder
    patternSimilarity?: SortOrder
    contextCoverage?: SortOrder
    onchainObservationId?: SortOrder
  }

  export type ObservationMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    chain?: SortOrder
    eventType?: SortOrder
    primaryEntity?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    relevanceScore?: SortOrder
    noveltyScore?: SortOrder
    patternSimilarity?: SortOrder
    contextCoverage?: SortOrder
    summary?: SortOrder
    observationHash?: SortOrder
    onchainTxHash?: SortOrder
    onchainObservationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObservationMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    chain?: SortOrder
    eventType?: SortOrder
    primaryEntity?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    relevanceScore?: SortOrder
    noveltyScore?: SortOrder
    patternSimilarity?: SortOrder
    contextCoverage?: SortOrder
    summary?: SortOrder
    observationHash?: SortOrder
    onchainTxHash?: SortOrder
    onchainObservationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObservationSumOrderByAggregateInput = {
    blockNumber?: SortOrder
    relevanceScore?: SortOrder
    noveltyScore?: SortOrder
    patternSimilarity?: SortOrder
    contextCoverage?: SortOrder
    onchainObservationId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WalletProfileCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    observations?: SortOrder
    summary?: SortOrder
    tags?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletProfileAvgOrderByAggregateInput = {
    observations?: SortOrder
  }

  export type WalletProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    observations?: SortOrder
    summary?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletProfileMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    observations?: SortOrder
    summary?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletProfileSumOrderByAggregateInput = {
    observations?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TokenProfileCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    symbol?: SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenProfileAvgOrderByAggregateInput = {
    observations?: SortOrder
  }

  export type TokenProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    symbol?: SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenProfileMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    symbol?: SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenProfileSumOrderByAggregateInput = {
    observations?: SortOrder
  }

  export type ContractProfileCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractProfileAvgOrderByAggregateInput = {
    observations?: SortOrder
  }

  export type ContractProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractProfileMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    observations?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractProfileSumOrderByAggregateInput = {
    observations?: SortOrder
  }

  export type PatternMemoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entities?: SortOrder
    observationIds?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type PatternMemoryAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type PatternMemoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type PatternMemoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type PatternMemorySumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type ObservationListRelationFilter = {
    every?: ObservationWhereInput
    some?: ObservationWhereInput
    none?: ObservationWhereInput
  }

  export type ObservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentRunCountOrderByAggregateInput = {
    id?: SortOrder
    observationId?: SortOrder
    agentName?: SortOrder
    agentRole?: SortOrder
    modelProvider?: SortOrder
    input?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentRunMaxOrderByAggregateInput = {
    id?: SortOrder
    observationId?: SortOrder
    agentName?: SortOrder
    agentRole?: SortOrder
    modelProvider?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentRunMinOrderByAggregateInput = {
    id?: SortOrder
    observationId?: SortOrder
    agentName?: SortOrder
    agentRole?: SortOrder
    modelProvider?: SortOrder
    createdAt?: SortOrder
  }

  export type MemorySnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    memoryType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    summary?: SortOrder
    snapshotHash?: SortOrder
    onchainTxHash?: SortOrder
    createdAt?: SortOrder
  }

  export type MemorySnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    memoryType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    summary?: SortOrder
    snapshotHash?: SortOrder
    onchainTxHash?: SortOrder
    createdAt?: SortOrder
  }

  export type MemorySnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    memoryType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    summary?: SortOrder
    snapshotHash?: SortOrder
    onchainTxHash?: SortOrder
    createdAt?: SortOrder
  }

  export type ObservationCreaterelatedWalletsInput = {
    set: string[]
  }

  export type ObservationCreaterelatedTokensInput = {
    set: string[]
  }

  export type ObservationCreaterelatedContractsInput = {
    set: string[]
  }

  export type ObservationCreatelimitationsInput = {
    set: string[]
  }

  export type AgentRunCreateNestedManyWithoutObservationsInput = {
    create?: XOR<AgentRunCreateWithoutObservationsInput, AgentRunUncheckedCreateWithoutObservationsInput> | AgentRunCreateWithoutObservationsInput[] | AgentRunUncheckedCreateWithoutObservationsInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutObservationsInput | AgentRunCreateOrConnectWithoutObservationsInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
  }

  export type AgentRunUncheckedCreateNestedManyWithoutObservationsInput = {
    create?: XOR<AgentRunCreateWithoutObservationsInput, AgentRunUncheckedCreateWithoutObservationsInput> | AgentRunCreateWithoutObservationsInput[] | AgentRunUncheckedCreateWithoutObservationsInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutObservationsInput | AgentRunCreateOrConnectWithoutObservationsInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ObservationUpdaterelatedWalletsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ObservationUpdaterelatedTokensInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ObservationUpdaterelatedContractsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ObservationUpdatelimitationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AgentRunUpdateManyWithoutObservationsNestedInput = {
    create?: XOR<AgentRunCreateWithoutObservationsInput, AgentRunUncheckedCreateWithoutObservationsInput> | AgentRunCreateWithoutObservationsInput[] | AgentRunUncheckedCreateWithoutObservationsInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutObservationsInput | AgentRunCreateOrConnectWithoutObservationsInput[]
    upsert?: AgentRunUpsertWithWhereUniqueWithoutObservationsInput | AgentRunUpsertWithWhereUniqueWithoutObservationsInput[]
    set?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    disconnect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    delete?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    update?: AgentRunUpdateWithWhereUniqueWithoutObservationsInput | AgentRunUpdateWithWhereUniqueWithoutObservationsInput[]
    updateMany?: AgentRunUpdateManyWithWhereWithoutObservationsInput | AgentRunUpdateManyWithWhereWithoutObservationsInput[]
    deleteMany?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
  }

  export type AgentRunUncheckedUpdateManyWithoutObservationsNestedInput = {
    create?: XOR<AgentRunCreateWithoutObservationsInput, AgentRunUncheckedCreateWithoutObservationsInput> | AgentRunCreateWithoutObservationsInput[] | AgentRunUncheckedCreateWithoutObservationsInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutObservationsInput | AgentRunCreateOrConnectWithoutObservationsInput[]
    upsert?: AgentRunUpsertWithWhereUniqueWithoutObservationsInput | AgentRunUpsertWithWhereUniqueWithoutObservationsInput[]
    set?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    disconnect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    delete?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    update?: AgentRunUpdateWithWhereUniqueWithoutObservationsInput | AgentRunUpdateWithWhereUniqueWithoutObservationsInput[]
    updateMany?: AgentRunUpdateManyWithWhereWithoutObservationsInput | AgentRunUpdateManyWithWhereWithoutObservationsInput[]
    deleteMany?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
  }

  export type WalletProfileCreatetagsInput = {
    set: string[]
  }

  export type WalletProfileUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatternMemoryCreateentitiesInput = {
    set: string[]
  }

  export type PatternMemoryCreateobservationIdsInput = {
    set: string[]
  }

  export type PatternMemoryUpdateentitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PatternMemoryUpdateobservationIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ObservationCreateNestedManyWithoutAgentRunsInput = {
    create?: XOR<ObservationCreateWithoutAgentRunsInput, ObservationUncheckedCreateWithoutAgentRunsInput> | ObservationCreateWithoutAgentRunsInput[] | ObservationUncheckedCreateWithoutAgentRunsInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutAgentRunsInput | ObservationCreateOrConnectWithoutAgentRunsInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ObservationUncheckedCreateNestedManyWithoutAgentRunsInput = {
    create?: XOR<ObservationCreateWithoutAgentRunsInput, ObservationUncheckedCreateWithoutAgentRunsInput> | ObservationCreateWithoutAgentRunsInput[] | ObservationUncheckedCreateWithoutAgentRunsInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutAgentRunsInput | ObservationCreateOrConnectWithoutAgentRunsInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ObservationUpdateManyWithoutAgentRunsNestedInput = {
    create?: XOR<ObservationCreateWithoutAgentRunsInput, ObservationUncheckedCreateWithoutAgentRunsInput> | ObservationCreateWithoutAgentRunsInput[] | ObservationUncheckedCreateWithoutAgentRunsInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutAgentRunsInput | ObservationCreateOrConnectWithoutAgentRunsInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutAgentRunsInput | ObservationUpsertWithWhereUniqueWithoutAgentRunsInput[]
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutAgentRunsInput | ObservationUpdateWithWhereUniqueWithoutAgentRunsInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutAgentRunsInput | ObservationUpdateManyWithWhereWithoutAgentRunsInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type ObservationUncheckedUpdateManyWithoutAgentRunsNestedInput = {
    create?: XOR<ObservationCreateWithoutAgentRunsInput, ObservationUncheckedCreateWithoutAgentRunsInput> | ObservationCreateWithoutAgentRunsInput[] | ObservationUncheckedCreateWithoutAgentRunsInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutAgentRunsInput | ObservationCreateOrConnectWithoutAgentRunsInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutAgentRunsInput | ObservationUpsertWithWhereUniqueWithoutAgentRunsInput[]
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutAgentRunsInput | ObservationUpdateWithWhereUniqueWithoutAgentRunsInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutAgentRunsInput | ObservationUpdateManyWithWhereWithoutAgentRunsInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AgentRunCreateWithoutObservationsInput = {
    id?: string
    observationId?: string | null
    agentName: string
    agentRole: string
    modelProvider: string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentRunUncheckedCreateWithoutObservationsInput = {
    id?: string
    observationId?: string | null
    agentName: string
    agentRole: string
    modelProvider: string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AgentRunCreateOrConnectWithoutObservationsInput = {
    where: AgentRunWhereUniqueInput
    create: XOR<AgentRunCreateWithoutObservationsInput, AgentRunUncheckedCreateWithoutObservationsInput>
  }

  export type AgentRunUpsertWithWhereUniqueWithoutObservationsInput = {
    where: AgentRunWhereUniqueInput
    update: XOR<AgentRunUpdateWithoutObservationsInput, AgentRunUncheckedUpdateWithoutObservationsInput>
    create: XOR<AgentRunCreateWithoutObservationsInput, AgentRunUncheckedCreateWithoutObservationsInput>
  }

  export type AgentRunUpdateWithWhereUniqueWithoutObservationsInput = {
    where: AgentRunWhereUniqueInput
    data: XOR<AgentRunUpdateWithoutObservationsInput, AgentRunUncheckedUpdateWithoutObservationsInput>
  }

  export type AgentRunUpdateManyWithWhereWithoutObservationsInput = {
    where: AgentRunScalarWhereInput
    data: XOR<AgentRunUpdateManyMutationInput, AgentRunUncheckedUpdateManyWithoutObservationsInput>
  }

  export type AgentRunScalarWhereInput = {
    AND?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
    OR?: AgentRunScalarWhereInput[]
    NOT?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
    id?: StringFilter<"AgentRun"> | string
    observationId?: StringNullableFilter<"AgentRun"> | string | null
    agentName?: StringFilter<"AgentRun"> | string
    agentRole?: StringFilter<"AgentRun"> | string
    modelProvider?: StringFilter<"AgentRun"> | string
    input?: JsonFilter<"AgentRun">
    output?: JsonFilter<"AgentRun">
    createdAt?: DateTimeFilter<"AgentRun"> | Date | string
  }

  export type ObservationCreateWithoutAgentRunsInput = {
    id?: string
    source: string
    chain: string
    eventType: string
    primaryEntity: string
    relatedWallets?: ObservationCreaterelatedWalletsInput | string[]
    relatedTokens?: ObservationCreaterelatedTokensInput | string[]
    relatedContracts?: ObservationCreaterelatedContractsInput | string[]
    txHash?: string | null
    blockNumber?: number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: number
    noveltyScore?: number
    patternSimilarity?: number
    contextCoverage?: number
    summary?: string | null
    limitations?: ObservationCreatelimitationsInput | string[]
    observationHash?: string | null
    onchainTxHash?: string | null
    onchainObservationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObservationUncheckedCreateWithoutAgentRunsInput = {
    id?: string
    source: string
    chain: string
    eventType: string
    primaryEntity: string
    relatedWallets?: ObservationCreaterelatedWalletsInput | string[]
    relatedTokens?: ObservationCreaterelatedTokensInput | string[]
    relatedContracts?: ObservationCreaterelatedContractsInput | string[]
    txHash?: string | null
    blockNumber?: number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: number
    noveltyScore?: number
    patternSimilarity?: number
    contextCoverage?: number
    summary?: string | null
    limitations?: ObservationCreatelimitationsInput | string[]
    observationHash?: string | null
    onchainTxHash?: string | null
    onchainObservationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObservationCreateOrConnectWithoutAgentRunsInput = {
    where: ObservationWhereUniqueInput
    create: XOR<ObservationCreateWithoutAgentRunsInput, ObservationUncheckedCreateWithoutAgentRunsInput>
  }

  export type ObservationUpsertWithWhereUniqueWithoutAgentRunsInput = {
    where: ObservationWhereUniqueInput
    update: XOR<ObservationUpdateWithoutAgentRunsInput, ObservationUncheckedUpdateWithoutAgentRunsInput>
    create: XOR<ObservationCreateWithoutAgentRunsInput, ObservationUncheckedCreateWithoutAgentRunsInput>
  }

  export type ObservationUpdateWithWhereUniqueWithoutAgentRunsInput = {
    where: ObservationWhereUniqueInput
    data: XOR<ObservationUpdateWithoutAgentRunsInput, ObservationUncheckedUpdateWithoutAgentRunsInput>
  }

  export type ObservationUpdateManyWithWhereWithoutAgentRunsInput = {
    where: ObservationScalarWhereInput
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyWithoutAgentRunsInput>
  }

  export type ObservationScalarWhereInput = {
    AND?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
    OR?: ObservationScalarWhereInput[]
    NOT?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
    id?: StringFilter<"Observation"> | string
    source?: StringFilter<"Observation"> | string
    chain?: StringFilter<"Observation"> | string
    eventType?: StringFilter<"Observation"> | string
    primaryEntity?: StringFilter<"Observation"> | string
    relatedWallets?: StringNullableListFilter<"Observation">
    relatedTokens?: StringNullableListFilter<"Observation">
    relatedContracts?: StringNullableListFilter<"Observation">
    txHash?: StringNullableFilter<"Observation"> | string | null
    blockNumber?: IntNullableFilter<"Observation"> | number | null
    facts?: JsonFilter<"Observation">
    rawData?: JsonFilter<"Observation">
    relevanceScore?: IntFilter<"Observation"> | number
    noveltyScore?: IntFilter<"Observation"> | number
    patternSimilarity?: IntFilter<"Observation"> | number
    contextCoverage?: IntFilter<"Observation"> | number
    summary?: StringNullableFilter<"Observation"> | string | null
    limitations?: StringNullableListFilter<"Observation">
    observationHash?: StringNullableFilter<"Observation"> | string | null
    onchainTxHash?: StringNullableFilter<"Observation"> | string | null
    onchainObservationId?: IntNullableFilter<"Observation"> | number | null
    createdAt?: DateTimeFilter<"Observation"> | Date | string
    updatedAt?: DateTimeFilter<"Observation"> | Date | string
  }

  export type AgentRunUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationId?: NullableStringFieldUpdateOperationsInput | string | null
    agentName?: StringFieldUpdateOperationsInput | string
    agentRole?: StringFieldUpdateOperationsInput | string
    modelProvider?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunUncheckedUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationId?: NullableStringFieldUpdateOperationsInput | string | null
    agentName?: StringFieldUpdateOperationsInput | string
    agentRole?: StringFieldUpdateOperationsInput | string
    modelProvider?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunUncheckedUpdateManyWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    observationId?: NullableStringFieldUpdateOperationsInput | string | null
    agentName?: StringFieldUpdateOperationsInput | string
    agentRole?: StringFieldUpdateOperationsInput | string
    modelProvider?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObservationUpdateWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    primaryEntity?: StringFieldUpdateOperationsInput | string
    relatedWallets?: ObservationUpdaterelatedWalletsInput | string[]
    relatedTokens?: ObservationUpdaterelatedTokensInput | string[]
    relatedContracts?: ObservationUpdaterelatedContractsInput | string[]
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: IntFieldUpdateOperationsInput | number
    noveltyScore?: IntFieldUpdateOperationsInput | number
    patternSimilarity?: IntFieldUpdateOperationsInput | number
    contextCoverage?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    limitations?: ObservationUpdatelimitationsInput | string[]
    observationHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainObservationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObservationUncheckedUpdateWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    primaryEntity?: StringFieldUpdateOperationsInput | string
    relatedWallets?: ObservationUpdaterelatedWalletsInput | string[]
    relatedTokens?: ObservationUpdaterelatedTokensInput | string[]
    relatedContracts?: ObservationUpdaterelatedContractsInput | string[]
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: IntFieldUpdateOperationsInput | number
    noveltyScore?: IntFieldUpdateOperationsInput | number
    patternSimilarity?: IntFieldUpdateOperationsInput | number
    contextCoverage?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    limitations?: ObservationUpdatelimitationsInput | string[]
    observationHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainObservationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObservationUncheckedUpdateManyWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    primaryEntity?: StringFieldUpdateOperationsInput | string
    relatedWallets?: ObservationUpdaterelatedWalletsInput | string[]
    relatedTokens?: ObservationUpdaterelatedTokensInput | string[]
    relatedContracts?: ObservationUpdaterelatedContractsInput | string[]
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    facts?: JsonNullValueInput | InputJsonValue
    rawData?: JsonNullValueInput | InputJsonValue
    relevanceScore?: IntFieldUpdateOperationsInput | number
    noveltyScore?: IntFieldUpdateOperationsInput | number
    patternSimilarity?: IntFieldUpdateOperationsInput | number
    contextCoverage?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    limitations?: ObservationUpdatelimitationsInput | string[]
    observationHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    onchainObservationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ObservationCountOutputTypeDefaultArgs instead
     */
    export type ObservationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObservationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentRunCountOutputTypeDefaultArgs instead
     */
    export type AgentRunCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentRunCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ObservationDefaultArgs instead
     */
    export type ObservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WalletProfileDefaultArgs instead
     */
    export type WalletProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenProfileDefaultArgs instead
     */
    export type TokenProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractProfileDefaultArgs instead
     */
    export type ContractProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatternMemoryDefaultArgs instead
     */
    export type PatternMemoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatternMemoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentRunDefaultArgs instead
     */
    export type AgentRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentRunDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemorySnapshotDefaultArgs instead
     */
    export type MemorySnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemorySnapshotDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}