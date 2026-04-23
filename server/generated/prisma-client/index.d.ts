
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model MatchResultSubmission
 * 
 */
export type MatchResultSubmission = $Result.DefaultSelection<Prisma.$MatchResultSubmissionPayload>
/**
 * Model Dispute
 * 
 */
export type Dispute = $Result.DefaultSelection<Prisma.$DisputePayload>
/**
 * Model IngestionEvent
 * 
 */
export type IngestionEvent = $Result.DefaultSelection<Prisma.$IngestionEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchResultSubmission`: Exposes CRUD operations for the **MatchResultSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchResultSubmissions
    * const matchResultSubmissions = await prisma.matchResultSubmission.findMany()
    * ```
    */
  get matchResultSubmission(): Prisma.MatchResultSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispute`: Exposes CRUD operations for the **Dispute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disputes
    * const disputes = await prisma.dispute.findMany()
    * ```
    */
  get dispute(): Prisma.DisputeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingestionEvent`: Exposes CRUD operations for the **IngestionEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestionEvents
    * const ingestionEvents = await prisma.ingestionEvent.findMany()
    * ```
    */
  get ingestionEvent(): Prisma.IngestionEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Tournament: 'Tournament',
    Match: 'Match',
    MatchResultSubmission: 'MatchResultSubmission',
    Dispute: 'Dispute',
    IngestionEvent: 'IngestionEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tournament" | "match" | "matchResultSubmission" | "dispute" | "ingestionEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      MatchResultSubmission: {
        payload: Prisma.$MatchResultSubmissionPayload<ExtArgs>
        fields: Prisma.MatchResultSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchResultSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchResultSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>
          }
          findFirst: {
            args: Prisma.MatchResultSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchResultSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>
          }
          findMany: {
            args: Prisma.MatchResultSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>[]
          }
          create: {
            args: Prisma.MatchResultSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>
          }
          createMany: {
            args: Prisma.MatchResultSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchResultSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>[]
          }
          delete: {
            args: Prisma.MatchResultSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>
          }
          update: {
            args: Prisma.MatchResultSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.MatchResultSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchResultSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchResultSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.MatchResultSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultSubmissionPayload>
          }
          aggregate: {
            args: Prisma.MatchResultSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchResultSubmission>
          }
          groupBy: {
            args: Prisma.MatchResultSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchResultSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchResultSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<MatchResultSubmissionCountAggregateOutputType> | number
          }
        }
      }
      Dispute: {
        payload: Prisma.$DisputePayload<ExtArgs>
        fields: Prisma.DisputeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisputeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisputeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findFirst: {
            args: Prisma.DisputeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisputeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findMany: {
            args: Prisma.DisputeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          create: {
            args: Prisma.DisputeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          createMany: {
            args: Prisma.DisputeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisputeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          delete: {
            args: Prisma.DisputeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          update: {
            args: Prisma.DisputeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          deleteMany: {
            args: Prisma.DisputeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisputeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisputeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          upsert: {
            args: Prisma.DisputeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          aggregate: {
            args: Prisma.DisputeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispute>
          }
          groupBy: {
            args: Prisma.DisputeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisputeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisputeCountArgs<ExtArgs>
            result: $Utils.Optional<DisputeCountAggregateOutputType> | number
          }
        }
      }
      IngestionEvent: {
        payload: Prisma.$IngestionEventPayload<ExtArgs>
        fields: Prisma.IngestionEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngestionEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngestionEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>
          }
          findFirst: {
            args: Prisma.IngestionEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngestionEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>
          }
          findMany: {
            args: Prisma.IngestionEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>[]
          }
          create: {
            args: Prisma.IngestionEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>
          }
          createMany: {
            args: Prisma.IngestionEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngestionEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>[]
          }
          delete: {
            args: Prisma.IngestionEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>
          }
          update: {
            args: Prisma.IngestionEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>
          }
          deleteMany: {
            args: Prisma.IngestionEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngestionEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngestionEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>[]
          }
          upsert: {
            args: Prisma.IngestionEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestionEventPayload>
          }
          aggregate: {
            args: Prisma.IngestionEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngestionEvent>
          }
          groupBy: {
            args: Prisma.IngestionEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngestionEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngestionEventCountArgs<ExtArgs>
            result: $Utils.Optional<IngestionEventCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tournament?: TournamentOmit
    match?: MatchOmit
    matchResultSubmission?: MatchResultSubmissionOmit
    dispute?: DisputeOmit
    ingestionEvent?: IngestionEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submissions: number
    reviews: number
    disputes: number
    disputeResolutions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    disputes?: boolean | UserCountOutputTypeCountDisputesArgs
    disputeResolutions?: boolean | UserCountOutputTypeCountDisputeResolutionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDisputeResolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    matches: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | TournamentCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    submissions: number
    disputes: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | MatchCountOutputTypeCountSubmissionsArgs
    disputes?: boolean | MatchCountOutputTypeCountDisputesArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultSubmissionWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    displayName: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    displayName: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    displayName: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    displayName: string
    email: string
    passwordHash: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    disputes?: boolean | User$disputesArgs<ExtArgs>
    disputeResolutions?: boolean | User$disputeResolutionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    displayName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayName" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    disputes?: boolean | User$disputesArgs<ExtArgs>
    disputeResolutions?: boolean | User$disputeResolutionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      submissions: Prisma.$MatchResultSubmissionPayload<ExtArgs>[]
      reviews: Prisma.$MatchResultSubmissionPayload<ExtArgs>[]
      disputes: Prisma.$DisputePayload<ExtArgs>[]
      disputeResolutions: Prisma.$DisputePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayName: string
      email: string
      passwordHash: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disputes<T extends User$disputesArgs<ExtArgs> = {}>(args?: Subset<T, User$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disputeResolutions<T extends User$disputeResolutionsArgs<ExtArgs> = {}>(args?: Subset<T, User$disputeResolutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    where?: MatchResultSubmissionWhereInput
    orderBy?: MatchResultSubmissionOrderByWithRelationInput | MatchResultSubmissionOrderByWithRelationInput[]
    cursor?: MatchResultSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchResultSubmissionScalarFieldEnum | MatchResultSubmissionScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    where?: MatchResultSubmissionWhereInput
    orderBy?: MatchResultSubmissionOrderByWithRelationInput | MatchResultSubmissionOrderByWithRelationInput[]
    cursor?: MatchResultSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchResultSubmissionScalarFieldEnum | MatchResultSubmissionScalarFieldEnum[]
  }

  /**
   * User.disputes
   */
  export type User$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * User.disputeResolutions
   */
  export type User$disputeResolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    name: string | null
    league: string | null
    format: string | null
    status: string | null
    season: string | null
    startsAt: Date | null
    createdAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    league: string | null
    format: string | null
    status: string | null
    season: string | null
    startsAt: Date | null
    createdAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    league: number
    format: number
    status: number
    season: number
    startsAt: number
    createdAt: number
    _all: number
  }


  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    league?: true
    format?: true
    status?: true
    season?: true
    startsAt?: true
    createdAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    league?: true
    format?: true
    status?: true
    season?: true
    startsAt?: true
    createdAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    league?: true
    format?: true
    status?: true
    season?: true
    startsAt?: true
    createdAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    name: string
    league: string
    format: string
    status: string
    season: string
    startsAt: Date
    createdAt: Date
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    league?: boolean
    format?: boolean
    status?: boolean
    season?: boolean
    startsAt?: boolean
    createdAt?: boolean
    matches?: boolean | Tournament$matchesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    league?: boolean
    format?: boolean
    status?: boolean
    season?: boolean
    startsAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    league?: boolean
    format?: boolean
    status?: boolean
    season?: boolean
    startsAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    league?: boolean
    format?: boolean
    status?: boolean
    season?: boolean
    startsAt?: boolean
    createdAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "league" | "format" | "status" | "season" | "startsAt" | "createdAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | Tournament$matchesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      league: string
      format: string
      status: string
      season: string
      startsAt: Date
      createdAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches<T extends Tournament$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly league: FieldRef<"Tournament", 'String'>
    readonly format: FieldRef<"Tournament", 'String'>
    readonly status: FieldRef<"Tournament", 'String'>
    readonly season: FieldRef<"Tournament", 'String'>
    readonly startsAt: FieldRef<"Tournament", 'DateTime'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.matches
   */
  export type Tournament$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchSumAggregateOutputType = {
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    homeTeam: string | null
    awayTeam: string | null
    homeScore: number | null
    awayScore: number | null
    status: string | null
    stage: string | null
    scheduledAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    homeTeam: string | null
    awayTeam: string | null
    homeScore: number | null
    awayScore: number | null
    status: string | null
    stage: string | null
    scheduledAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    tournamentId: number
    homeTeam: number
    awayTeam: number
    homeScore: number
    awayScore: number
    status: number
    stage: number
    scheduledAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    homeScore?: true
    awayScore?: true
  }

  export type MatchSumAggregateInputType = {
    homeScore?: true
    awayScore?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    tournamentId?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
    status?: true
    stage?: true
    scheduledAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
    status?: true
    stage?: true
    scheduledAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    tournamentId?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
    status?: true
    stage?: true
    scheduledAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    tournamentId: string
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
    status: string
    stage: string | null
    scheduledAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    stage?: boolean
    scheduledAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    submissions?: boolean | Match$submissionsArgs<ExtArgs>
    disputes?: boolean | Match$disputesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    stage?: boolean
    scheduledAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    stage?: boolean
    scheduledAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    stage?: boolean
    scheduledAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "homeTeam" | "awayTeam" | "homeScore" | "awayScore" | "status" | "stage" | "scheduledAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    submissions?: boolean | Match$submissionsArgs<ExtArgs>
    disputes?: boolean | Match$disputesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      submissions: Prisma.$MatchResultSubmissionPayload<ExtArgs>[]
      disputes: Prisma.$DisputePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tournamentId: string
      homeTeam: string
      awayTeam: string
      homeScore: number
      awayScore: number
      status: string
      stage: string | null
      scheduledAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Match$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Match$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disputes<T extends Match$disputesArgs<ExtArgs> = {}>(args?: Subset<T, Match$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly tournamentId: FieldRef<"Match", 'String'>
    readonly homeTeam: FieldRef<"Match", 'String'>
    readonly awayTeam: FieldRef<"Match", 'String'>
    readonly homeScore: FieldRef<"Match", 'Int'>
    readonly awayScore: FieldRef<"Match", 'Int'>
    readonly status: FieldRef<"Match", 'String'>
    readonly stage: FieldRef<"Match", 'String'>
    readonly scheduledAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.submissions
   */
  export type Match$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    where?: MatchResultSubmissionWhereInput
    orderBy?: MatchResultSubmissionOrderByWithRelationInput | MatchResultSubmissionOrderByWithRelationInput[]
    cursor?: MatchResultSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchResultSubmissionScalarFieldEnum | MatchResultSubmissionScalarFieldEnum[]
  }

  /**
   * Match.disputes
   */
  export type Match$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model MatchResultSubmission
   */

  export type AggregateMatchResultSubmission = {
    _count: MatchResultSubmissionCountAggregateOutputType | null
    _avg: MatchResultSubmissionAvgAggregateOutputType | null
    _sum: MatchResultSubmissionSumAggregateOutputType | null
    _min: MatchResultSubmissionMinAggregateOutputType | null
    _max: MatchResultSubmissionMaxAggregateOutputType | null
  }

  export type MatchResultSubmissionAvgAggregateOutputType = {
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchResultSubmissionSumAggregateOutputType = {
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchResultSubmissionMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    submittedById: string | null
    homeScore: number | null
    awayScore: number | null
    evidenceUrl: string | null
    status: string | null
    reviewedById: string | null
    reviewedAt: Date | null
    createdAt: Date | null
  }

  export type MatchResultSubmissionMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    submittedById: string | null
    homeScore: number | null
    awayScore: number | null
    evidenceUrl: string | null
    status: string | null
    reviewedById: string | null
    reviewedAt: Date | null
    createdAt: Date | null
  }

  export type MatchResultSubmissionCountAggregateOutputType = {
    id: number
    matchId: number
    submittedById: number
    homeScore: number
    awayScore: number
    evidenceUrl: number
    status: number
    reviewedById: number
    reviewedAt: number
    createdAt: number
    _all: number
  }


  export type MatchResultSubmissionAvgAggregateInputType = {
    homeScore?: true
    awayScore?: true
  }

  export type MatchResultSubmissionSumAggregateInputType = {
    homeScore?: true
    awayScore?: true
  }

  export type MatchResultSubmissionMinAggregateInputType = {
    id?: true
    matchId?: true
    submittedById?: true
    homeScore?: true
    awayScore?: true
    evidenceUrl?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
  }

  export type MatchResultSubmissionMaxAggregateInputType = {
    id?: true
    matchId?: true
    submittedById?: true
    homeScore?: true
    awayScore?: true
    evidenceUrl?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
  }

  export type MatchResultSubmissionCountAggregateInputType = {
    id?: true
    matchId?: true
    submittedById?: true
    homeScore?: true
    awayScore?: true
    evidenceUrl?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MatchResultSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchResultSubmission to aggregate.
     */
    where?: MatchResultSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResultSubmissions to fetch.
     */
    orderBy?: MatchResultSubmissionOrderByWithRelationInput | MatchResultSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchResultSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResultSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResultSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchResultSubmissions
    **/
    _count?: true | MatchResultSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchResultSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchResultSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchResultSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchResultSubmissionMaxAggregateInputType
  }

  export type GetMatchResultSubmissionAggregateType<T extends MatchResultSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchResultSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchResultSubmission[P]>
      : GetScalarType<T[P], AggregateMatchResultSubmission[P]>
  }




  export type MatchResultSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultSubmissionWhereInput
    orderBy?: MatchResultSubmissionOrderByWithAggregationInput | MatchResultSubmissionOrderByWithAggregationInput[]
    by: MatchResultSubmissionScalarFieldEnum[] | MatchResultSubmissionScalarFieldEnum
    having?: MatchResultSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchResultSubmissionCountAggregateInputType | true
    _avg?: MatchResultSubmissionAvgAggregateInputType
    _sum?: MatchResultSubmissionSumAggregateInputType
    _min?: MatchResultSubmissionMinAggregateInputType
    _max?: MatchResultSubmissionMaxAggregateInputType
  }

  export type MatchResultSubmissionGroupByOutputType = {
    id: string
    matchId: string
    submittedById: string
    homeScore: number
    awayScore: number
    evidenceUrl: string | null
    status: string
    reviewedById: string | null
    reviewedAt: Date | null
    createdAt: Date
    _count: MatchResultSubmissionCountAggregateOutputType | null
    _avg: MatchResultSubmissionAvgAggregateOutputType | null
    _sum: MatchResultSubmissionSumAggregateOutputType | null
    _min: MatchResultSubmissionMinAggregateOutputType | null
    _max: MatchResultSubmissionMaxAggregateOutputType | null
  }

  type GetMatchResultSubmissionGroupByPayload<T extends MatchResultSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchResultSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchResultSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchResultSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], MatchResultSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type MatchResultSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    submittedById?: boolean
    homeScore?: boolean
    awayScore?: boolean
    evidenceUrl?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    submittedBy?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | MatchResultSubmission$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["matchResultSubmission"]>

  export type MatchResultSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    submittedById?: boolean
    homeScore?: boolean
    awayScore?: boolean
    evidenceUrl?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    submittedBy?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | MatchResultSubmission$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["matchResultSubmission"]>

  export type MatchResultSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    submittedById?: boolean
    homeScore?: boolean
    awayScore?: boolean
    evidenceUrl?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    submittedBy?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | MatchResultSubmission$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["matchResultSubmission"]>

  export type MatchResultSubmissionSelectScalar = {
    id?: boolean
    matchId?: boolean
    submittedById?: boolean
    homeScore?: boolean
    awayScore?: boolean
    evidenceUrl?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
  }

  export type MatchResultSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "submittedById" | "homeScore" | "awayScore" | "evidenceUrl" | "status" | "reviewedById" | "reviewedAt" | "createdAt", ExtArgs["result"]["matchResultSubmission"]>
  export type MatchResultSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    submittedBy?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | MatchResultSubmission$reviewedByArgs<ExtArgs>
  }
  export type MatchResultSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    submittedBy?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | MatchResultSubmission$reviewedByArgs<ExtArgs>
  }
  export type MatchResultSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    submittedBy?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | MatchResultSubmission$reviewedByArgs<ExtArgs>
  }

  export type $MatchResultSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchResultSubmission"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      submittedBy: Prisma.$UserPayload<ExtArgs>
      reviewedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      submittedById: string
      homeScore: number
      awayScore: number
      evidenceUrl: string | null
      status: string
      reviewedById: string | null
      reviewedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["matchResultSubmission"]>
    composites: {}
  }

  type MatchResultSubmissionGetPayload<S extends boolean | null | undefined | MatchResultSubmissionDefaultArgs> = $Result.GetResult<Prisma.$MatchResultSubmissionPayload, S>

  type MatchResultSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchResultSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchResultSubmissionCountAggregateInputType | true
    }

  export interface MatchResultSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchResultSubmission'], meta: { name: 'MatchResultSubmission' } }
    /**
     * Find zero or one MatchResultSubmission that matches the filter.
     * @param {MatchResultSubmissionFindUniqueArgs} args - Arguments to find a MatchResultSubmission
     * @example
     * // Get one MatchResultSubmission
     * const matchResultSubmission = await prisma.matchResultSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchResultSubmissionFindUniqueArgs>(args: SelectSubset<T, MatchResultSubmissionFindUniqueArgs<ExtArgs>>): Prisma__MatchResultSubmissionClient<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchResultSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchResultSubmissionFindUniqueOrThrowArgs} args - Arguments to find a MatchResultSubmission
     * @example
     * // Get one MatchResultSubmission
     * const matchResultSubmission = await prisma.matchResultSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchResultSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchResultSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchResultSubmissionClient<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchResultSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultSubmissionFindFirstArgs} args - Arguments to find a MatchResultSubmission
     * @example
     * // Get one MatchResultSubmission
     * const matchResultSubmission = await prisma.matchResultSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchResultSubmissionFindFirstArgs>(args?: SelectSubset<T, MatchResultSubmissionFindFirstArgs<ExtArgs>>): Prisma__MatchResultSubmissionClient<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchResultSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultSubmissionFindFirstOrThrowArgs} args - Arguments to find a MatchResultSubmission
     * @example
     * // Get one MatchResultSubmission
     * const matchResultSubmission = await prisma.matchResultSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchResultSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchResultSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchResultSubmissionClient<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchResultSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchResultSubmissions
     * const matchResultSubmissions = await prisma.matchResultSubmission.findMany()
     * 
     * // Get first 10 MatchResultSubmissions
     * const matchResultSubmissions = await prisma.matchResultSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchResultSubmissionWithIdOnly = await prisma.matchResultSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchResultSubmissionFindManyArgs>(args?: SelectSubset<T, MatchResultSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchResultSubmission.
     * @param {MatchResultSubmissionCreateArgs} args - Arguments to create a MatchResultSubmission.
     * @example
     * // Create one MatchResultSubmission
     * const MatchResultSubmission = await prisma.matchResultSubmission.create({
     *   data: {
     *     // ... data to create a MatchResultSubmission
     *   }
     * })
     * 
     */
    create<T extends MatchResultSubmissionCreateArgs>(args: SelectSubset<T, MatchResultSubmissionCreateArgs<ExtArgs>>): Prisma__MatchResultSubmissionClient<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchResultSubmissions.
     * @param {MatchResultSubmissionCreateManyArgs} args - Arguments to create many MatchResultSubmissions.
     * @example
     * // Create many MatchResultSubmissions
     * const matchResultSubmission = await prisma.matchResultSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchResultSubmissionCreateManyArgs>(args?: SelectSubset<T, MatchResultSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchResultSubmissions and returns the data saved in the database.
     * @param {MatchResultSubmissionCreateManyAndReturnArgs} args - Arguments to create many MatchResultSubmissions.
     * @example
     * // Create many MatchResultSubmissions
     * const matchResultSubmission = await prisma.matchResultSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchResultSubmissions and only return the `id`
     * const matchResultSubmissionWithIdOnly = await prisma.matchResultSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchResultSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchResultSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchResultSubmission.
     * @param {MatchResultSubmissionDeleteArgs} args - Arguments to delete one MatchResultSubmission.
     * @example
     * // Delete one MatchResultSubmission
     * const MatchResultSubmission = await prisma.matchResultSubmission.delete({
     *   where: {
     *     // ... filter to delete one MatchResultSubmission
     *   }
     * })
     * 
     */
    delete<T extends MatchResultSubmissionDeleteArgs>(args: SelectSubset<T, MatchResultSubmissionDeleteArgs<ExtArgs>>): Prisma__MatchResultSubmissionClient<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchResultSubmission.
     * @param {MatchResultSubmissionUpdateArgs} args - Arguments to update one MatchResultSubmission.
     * @example
     * // Update one MatchResultSubmission
     * const matchResultSubmission = await prisma.matchResultSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchResultSubmissionUpdateArgs>(args: SelectSubset<T, MatchResultSubmissionUpdateArgs<ExtArgs>>): Prisma__MatchResultSubmissionClient<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchResultSubmissions.
     * @param {MatchResultSubmissionDeleteManyArgs} args - Arguments to filter MatchResultSubmissions to delete.
     * @example
     * // Delete a few MatchResultSubmissions
     * const { count } = await prisma.matchResultSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchResultSubmissionDeleteManyArgs>(args?: SelectSubset<T, MatchResultSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchResultSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchResultSubmissions
     * const matchResultSubmission = await prisma.matchResultSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchResultSubmissionUpdateManyArgs>(args: SelectSubset<T, MatchResultSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchResultSubmissions and returns the data updated in the database.
     * @param {MatchResultSubmissionUpdateManyAndReturnArgs} args - Arguments to update many MatchResultSubmissions.
     * @example
     * // Update many MatchResultSubmissions
     * const matchResultSubmission = await prisma.matchResultSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchResultSubmissions and only return the `id`
     * const matchResultSubmissionWithIdOnly = await prisma.matchResultSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchResultSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchResultSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchResultSubmission.
     * @param {MatchResultSubmissionUpsertArgs} args - Arguments to update or create a MatchResultSubmission.
     * @example
     * // Update or create a MatchResultSubmission
     * const matchResultSubmission = await prisma.matchResultSubmission.upsert({
     *   create: {
     *     // ... data to create a MatchResultSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchResultSubmission we want to update
     *   }
     * })
     */
    upsert<T extends MatchResultSubmissionUpsertArgs>(args: SelectSubset<T, MatchResultSubmissionUpsertArgs<ExtArgs>>): Prisma__MatchResultSubmissionClient<$Result.GetResult<Prisma.$MatchResultSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchResultSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultSubmissionCountArgs} args - Arguments to filter MatchResultSubmissions to count.
     * @example
     * // Count the number of MatchResultSubmissions
     * const count = await prisma.matchResultSubmission.count({
     *   where: {
     *     // ... the filter for the MatchResultSubmissions we want to count
     *   }
     * })
    **/
    count<T extends MatchResultSubmissionCountArgs>(
      args?: Subset<T, MatchResultSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchResultSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchResultSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchResultSubmissionAggregateArgs>(args: Subset<T, MatchResultSubmissionAggregateArgs>): Prisma.PrismaPromise<GetMatchResultSubmissionAggregateType<T>>

    /**
     * Group by MatchResultSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultSubmissionGroupByArgs} args - Group by arguments.
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
      T extends MatchResultSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchResultSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: MatchResultSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchResultSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchResultSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchResultSubmission model
   */
  readonly fields: MatchResultSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchResultSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchResultSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submittedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewedBy<T extends MatchResultSubmission$reviewedByArgs<ExtArgs> = {}>(args?: Subset<T, MatchResultSubmission$reviewedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchResultSubmission model
   */
  interface MatchResultSubmissionFieldRefs {
    readonly id: FieldRef<"MatchResultSubmission", 'String'>
    readonly matchId: FieldRef<"MatchResultSubmission", 'String'>
    readonly submittedById: FieldRef<"MatchResultSubmission", 'String'>
    readonly homeScore: FieldRef<"MatchResultSubmission", 'Int'>
    readonly awayScore: FieldRef<"MatchResultSubmission", 'Int'>
    readonly evidenceUrl: FieldRef<"MatchResultSubmission", 'String'>
    readonly status: FieldRef<"MatchResultSubmission", 'String'>
    readonly reviewedById: FieldRef<"MatchResultSubmission", 'String'>
    readonly reviewedAt: FieldRef<"MatchResultSubmission", 'DateTime'>
    readonly createdAt: FieldRef<"MatchResultSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchResultSubmission findUnique
   */
  export type MatchResultSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which MatchResultSubmission to fetch.
     */
    where: MatchResultSubmissionWhereUniqueInput
  }

  /**
   * MatchResultSubmission findUniqueOrThrow
   */
  export type MatchResultSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which MatchResultSubmission to fetch.
     */
    where: MatchResultSubmissionWhereUniqueInput
  }

  /**
   * MatchResultSubmission findFirst
   */
  export type MatchResultSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which MatchResultSubmission to fetch.
     */
    where?: MatchResultSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResultSubmissions to fetch.
     */
    orderBy?: MatchResultSubmissionOrderByWithRelationInput | MatchResultSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchResultSubmissions.
     */
    cursor?: MatchResultSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResultSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResultSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchResultSubmissions.
     */
    distinct?: MatchResultSubmissionScalarFieldEnum | MatchResultSubmissionScalarFieldEnum[]
  }

  /**
   * MatchResultSubmission findFirstOrThrow
   */
  export type MatchResultSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which MatchResultSubmission to fetch.
     */
    where?: MatchResultSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResultSubmissions to fetch.
     */
    orderBy?: MatchResultSubmissionOrderByWithRelationInput | MatchResultSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchResultSubmissions.
     */
    cursor?: MatchResultSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResultSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResultSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchResultSubmissions.
     */
    distinct?: MatchResultSubmissionScalarFieldEnum | MatchResultSubmissionScalarFieldEnum[]
  }

  /**
   * MatchResultSubmission findMany
   */
  export type MatchResultSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which MatchResultSubmissions to fetch.
     */
    where?: MatchResultSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResultSubmissions to fetch.
     */
    orderBy?: MatchResultSubmissionOrderByWithRelationInput | MatchResultSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchResultSubmissions.
     */
    cursor?: MatchResultSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResultSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResultSubmissions.
     */
    skip?: number
    distinct?: MatchResultSubmissionScalarFieldEnum | MatchResultSubmissionScalarFieldEnum[]
  }

  /**
   * MatchResultSubmission create
   */
  export type MatchResultSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchResultSubmission.
     */
    data: XOR<MatchResultSubmissionCreateInput, MatchResultSubmissionUncheckedCreateInput>
  }

  /**
   * MatchResultSubmission createMany
   */
  export type MatchResultSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchResultSubmissions.
     */
    data: MatchResultSubmissionCreateManyInput | MatchResultSubmissionCreateManyInput[]
  }

  /**
   * MatchResultSubmission createManyAndReturn
   */
  export type MatchResultSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many MatchResultSubmissions.
     */
    data: MatchResultSubmissionCreateManyInput | MatchResultSubmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchResultSubmission update
   */
  export type MatchResultSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchResultSubmission.
     */
    data: XOR<MatchResultSubmissionUpdateInput, MatchResultSubmissionUncheckedUpdateInput>
    /**
     * Choose, which MatchResultSubmission to update.
     */
    where: MatchResultSubmissionWhereUniqueInput
  }

  /**
   * MatchResultSubmission updateMany
   */
  export type MatchResultSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchResultSubmissions.
     */
    data: XOR<MatchResultSubmissionUpdateManyMutationInput, MatchResultSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which MatchResultSubmissions to update
     */
    where?: MatchResultSubmissionWhereInput
    /**
     * Limit how many MatchResultSubmissions to update.
     */
    limit?: number
  }

  /**
   * MatchResultSubmission updateManyAndReturn
   */
  export type MatchResultSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update MatchResultSubmissions.
     */
    data: XOR<MatchResultSubmissionUpdateManyMutationInput, MatchResultSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which MatchResultSubmissions to update
     */
    where?: MatchResultSubmissionWhereInput
    /**
     * Limit how many MatchResultSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchResultSubmission upsert
   */
  export type MatchResultSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchResultSubmission to update in case it exists.
     */
    where: MatchResultSubmissionWhereUniqueInput
    /**
     * In case the MatchResultSubmission found by the `where` argument doesn't exist, create a new MatchResultSubmission with this data.
     */
    create: XOR<MatchResultSubmissionCreateInput, MatchResultSubmissionUncheckedCreateInput>
    /**
     * In case the MatchResultSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchResultSubmissionUpdateInput, MatchResultSubmissionUncheckedUpdateInput>
  }

  /**
   * MatchResultSubmission delete
   */
  export type MatchResultSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
    /**
     * Filter which MatchResultSubmission to delete.
     */
    where: MatchResultSubmissionWhereUniqueInput
  }

  /**
   * MatchResultSubmission deleteMany
   */
  export type MatchResultSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchResultSubmissions to delete
     */
    where?: MatchResultSubmissionWhereInput
    /**
     * Limit how many MatchResultSubmissions to delete.
     */
    limit?: number
  }

  /**
   * MatchResultSubmission.reviewedBy
   */
  export type MatchResultSubmission$reviewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MatchResultSubmission without action
   */
  export type MatchResultSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResultSubmission
     */
    select?: MatchResultSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResultSubmission
     */
    omit?: MatchResultSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Dispute
   */

  export type AggregateDispute = {
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  export type DisputeMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    createdById: string | null
    reason: string | null
    status: string | null
    resolutionNotes: string | null
    resolvedById: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type DisputeMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    createdById: string | null
    reason: string | null
    status: string | null
    resolutionNotes: string | null
    resolvedById: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type DisputeCountAggregateOutputType = {
    id: number
    matchId: number
    createdById: number
    reason: number
    status: number
    resolutionNotes: number
    resolvedById: number
    createdAt: number
    resolvedAt: number
    _all: number
  }


  export type DisputeMinAggregateInputType = {
    id?: true
    matchId?: true
    createdById?: true
    reason?: true
    status?: true
    resolutionNotes?: true
    resolvedById?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type DisputeMaxAggregateInputType = {
    id?: true
    matchId?: true
    createdById?: true
    reason?: true
    status?: true
    resolutionNotes?: true
    resolvedById?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type DisputeCountAggregateInputType = {
    id?: true
    matchId?: true
    createdById?: true
    reason?: true
    status?: true
    resolutionNotes?: true
    resolvedById?: true
    createdAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type DisputeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispute to aggregate.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disputes
    **/
    _count?: true | DisputeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisputeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisputeMaxAggregateInputType
  }

  export type GetDisputeAggregateType<T extends DisputeAggregateArgs> = {
        [P in keyof T & keyof AggregateDispute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispute[P]>
      : GetScalarType<T[P], AggregateDispute[P]>
  }




  export type DisputeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithAggregationInput | DisputeOrderByWithAggregationInput[]
    by: DisputeScalarFieldEnum[] | DisputeScalarFieldEnum
    having?: DisputeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisputeCountAggregateInputType | true
    _min?: DisputeMinAggregateInputType
    _max?: DisputeMaxAggregateInputType
  }

  export type DisputeGroupByOutputType = {
    id: string
    matchId: string
    createdById: string
    reason: string
    status: string
    resolutionNotes: string | null
    resolvedById: string | null
    createdAt: Date
    resolvedAt: Date | null
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  type GetDisputeGroupByPayload<T extends DisputeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisputeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisputeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisputeGroupByOutputType[P]>
            : GetScalarType<T[P], DisputeGroupByOutputType[P]>
        }
      >
    >


  export type DisputeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    createdById?: boolean
    reason?: boolean
    status?: boolean
    resolutionNotes?: boolean
    resolvedById?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    createdById?: boolean
    reason?: boolean
    status?: boolean
    resolutionNotes?: boolean
    resolvedById?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    createdById?: boolean
    reason?: boolean
    status?: boolean
    resolutionNotes?: boolean
    resolvedById?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectScalar = {
    id?: boolean
    matchId?: boolean
    createdById?: boolean
    reason?: boolean
    status?: boolean
    resolutionNotes?: boolean
    resolvedById?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }

  export type DisputeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "createdById" | "reason" | "status" | "resolutionNotes" | "resolvedById" | "createdAt" | "resolvedAt", ExtArgs["result"]["dispute"]>
  export type DisputeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }
  export type DisputeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }
  export type DisputeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }

  export type $DisputePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispute"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      resolvedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      createdById: string
      reason: string
      status: string
      resolutionNotes: string | null
      resolvedById: string | null
      createdAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["dispute"]>
    composites: {}
  }

  type DisputeGetPayload<S extends boolean | null | undefined | DisputeDefaultArgs> = $Result.GetResult<Prisma.$DisputePayload, S>

  type DisputeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisputeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisputeCountAggregateInputType | true
    }

  export interface DisputeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispute'], meta: { name: 'Dispute' } }
    /**
     * Find zero or one Dispute that matches the filter.
     * @param {DisputeFindUniqueArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisputeFindUniqueArgs>(args: SelectSubset<T, DisputeFindUniqueArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisputeFindUniqueOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisputeFindUniqueOrThrowArgs>(args: SelectSubset<T, DisputeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisputeFindFirstArgs>(args?: SelectSubset<T, DisputeFindFirstArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisputeFindFirstOrThrowArgs>(args?: SelectSubset<T, DisputeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disputes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disputes
     * const disputes = await prisma.dispute.findMany()
     * 
     * // Get first 10 Disputes
     * const disputes = await prisma.dispute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disputeWithIdOnly = await prisma.dispute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisputeFindManyArgs>(args?: SelectSubset<T, DisputeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispute.
     * @param {DisputeCreateArgs} args - Arguments to create a Dispute.
     * @example
     * // Create one Dispute
     * const Dispute = await prisma.dispute.create({
     *   data: {
     *     // ... data to create a Dispute
     *   }
     * })
     * 
     */
    create<T extends DisputeCreateArgs>(args: SelectSubset<T, DisputeCreateArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disputes.
     * @param {DisputeCreateManyArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const dispute = await prisma.dispute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisputeCreateManyArgs>(args?: SelectSubset<T, DisputeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disputes and returns the data saved in the database.
     * @param {DisputeCreateManyAndReturnArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const dispute = await prisma.dispute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disputes and only return the `id`
     * const disputeWithIdOnly = await prisma.dispute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisputeCreateManyAndReturnArgs>(args?: SelectSubset<T, DisputeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dispute.
     * @param {DisputeDeleteArgs} args - Arguments to delete one Dispute.
     * @example
     * // Delete one Dispute
     * const Dispute = await prisma.dispute.delete({
     *   where: {
     *     // ... filter to delete one Dispute
     *   }
     * })
     * 
     */
    delete<T extends DisputeDeleteArgs>(args: SelectSubset<T, DisputeDeleteArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispute.
     * @param {DisputeUpdateArgs} args - Arguments to update one Dispute.
     * @example
     * // Update one Dispute
     * const dispute = await prisma.dispute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisputeUpdateArgs>(args: SelectSubset<T, DisputeUpdateArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disputes.
     * @param {DisputeDeleteManyArgs} args - Arguments to filter Disputes to delete.
     * @example
     * // Delete a few Disputes
     * const { count } = await prisma.dispute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisputeDeleteManyArgs>(args?: SelectSubset<T, DisputeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disputes
     * const dispute = await prisma.dispute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisputeUpdateManyArgs>(args: SelectSubset<T, DisputeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes and returns the data updated in the database.
     * @param {DisputeUpdateManyAndReturnArgs} args - Arguments to update many Disputes.
     * @example
     * // Update many Disputes
     * const dispute = await prisma.dispute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disputes and only return the `id`
     * const disputeWithIdOnly = await prisma.dispute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisputeUpdateManyAndReturnArgs>(args: SelectSubset<T, DisputeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dispute.
     * @param {DisputeUpsertArgs} args - Arguments to update or create a Dispute.
     * @example
     * // Update or create a Dispute
     * const dispute = await prisma.dispute.upsert({
     *   create: {
     *     // ... data to create a Dispute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispute we want to update
     *   }
     * })
     */
    upsert<T extends DisputeUpsertArgs>(args: SelectSubset<T, DisputeUpsertArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeCountArgs} args - Arguments to filter Disputes to count.
     * @example
     * // Count the number of Disputes
     * const count = await prisma.dispute.count({
     *   where: {
     *     // ... the filter for the Disputes we want to count
     *   }
     * })
    **/
    count<T extends DisputeCountArgs>(
      args?: Subset<T, DisputeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisputeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisputeAggregateArgs>(args: Subset<T, DisputeAggregateArgs>): Prisma.PrismaPromise<GetDisputeAggregateType<T>>

    /**
     * Group by Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeGroupByArgs} args - Group by arguments.
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
      T extends DisputeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisputeGroupByArgs['orderBy'] }
        : { orderBy?: DisputeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisputeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispute model
   */
  readonly fields: DisputeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisputeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resolvedBy<T extends Dispute$resolvedByArgs<ExtArgs> = {}>(args?: Subset<T, Dispute$resolvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dispute model
   */
  interface DisputeFieldRefs {
    readonly id: FieldRef<"Dispute", 'String'>
    readonly matchId: FieldRef<"Dispute", 'String'>
    readonly createdById: FieldRef<"Dispute", 'String'>
    readonly reason: FieldRef<"Dispute", 'String'>
    readonly status: FieldRef<"Dispute", 'String'>
    readonly resolutionNotes: FieldRef<"Dispute", 'String'>
    readonly resolvedById: FieldRef<"Dispute", 'String'>
    readonly createdAt: FieldRef<"Dispute", 'DateTime'>
    readonly resolvedAt: FieldRef<"Dispute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dispute findUnique
   */
  export type DisputeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute findUniqueOrThrow
   */
  export type DisputeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute findFirst
   */
  export type DisputeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute findFirstOrThrow
   */
  export type DisputeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute findMany
   */
  export type DisputeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Disputes to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute create
   */
  export type DisputeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispute.
     */
    data: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
  }

  /**
   * Dispute createMany
   */
  export type DisputeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
  }

  /**
   * Dispute createManyAndReturn
   */
  export type DisputeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispute update
   */
  export type DisputeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispute.
     */
    data: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
    /**
     * Choose, which Dispute to update.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute updateMany
   */
  export type DisputeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disputes.
     */
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyInput>
    /**
     * Filter which Disputes to update
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to update.
     */
    limit?: number
  }

  /**
   * Dispute updateManyAndReturn
   */
  export type DisputeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * The data used to update Disputes.
     */
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyInput>
    /**
     * Filter which Disputes to update
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispute upsert
   */
  export type DisputeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispute to update in case it exists.
     */
    where: DisputeWhereUniqueInput
    /**
     * In case the Dispute found by the `where` argument doesn't exist, create a new Dispute with this data.
     */
    create: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
    /**
     * In case the Dispute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
  }

  /**
   * Dispute delete
   */
  export type DisputeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter which Dispute to delete.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute deleteMany
   */
  export type DisputeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disputes to delete
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to delete.
     */
    limit?: number
  }

  /**
   * Dispute.resolvedBy
   */
  export type Dispute$resolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Dispute without action
   */
  export type DisputeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
  }


  /**
   * Model IngestionEvent
   */

  export type AggregateIngestionEvent = {
    _count: IngestionEventCountAggregateOutputType | null
    _min: IngestionEventMinAggregateOutputType | null
    _max: IngestionEventMaxAggregateOutputType | null
  }

  export type IngestionEventMinAggregateOutputType = {
    id: string | null
    source: string | null
    eventType: string | null
    status: string | null
    error: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type IngestionEventMaxAggregateOutputType = {
    id: string | null
    source: string | null
    eventType: string | null
    status: string | null
    error: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type IngestionEventCountAggregateOutputType = {
    id: number
    source: number
    eventType: number
    payload: number
    status: number
    error: number
    createdAt: number
    processedAt: number
    _all: number
  }


  export type IngestionEventMinAggregateInputType = {
    id?: true
    source?: true
    eventType?: true
    status?: true
    error?: true
    createdAt?: true
    processedAt?: true
  }

  export type IngestionEventMaxAggregateInputType = {
    id?: true
    source?: true
    eventType?: true
    status?: true
    error?: true
    createdAt?: true
    processedAt?: true
  }

  export type IngestionEventCountAggregateInputType = {
    id?: true
    source?: true
    eventType?: true
    payload?: true
    status?: true
    error?: true
    createdAt?: true
    processedAt?: true
    _all?: true
  }

  export type IngestionEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestionEvent to aggregate.
     */
    where?: IngestionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionEvents to fetch.
     */
    orderBy?: IngestionEventOrderByWithRelationInput | IngestionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngestionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngestionEvents
    **/
    _count?: true | IngestionEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngestionEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngestionEventMaxAggregateInputType
  }

  export type GetIngestionEventAggregateType<T extends IngestionEventAggregateArgs> = {
        [P in keyof T & keyof AggregateIngestionEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngestionEvent[P]>
      : GetScalarType<T[P], AggregateIngestionEvent[P]>
  }




  export type IngestionEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestionEventWhereInput
    orderBy?: IngestionEventOrderByWithAggregationInput | IngestionEventOrderByWithAggregationInput[]
    by: IngestionEventScalarFieldEnum[] | IngestionEventScalarFieldEnum
    having?: IngestionEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngestionEventCountAggregateInputType | true
    _min?: IngestionEventMinAggregateInputType
    _max?: IngestionEventMaxAggregateInputType
  }

  export type IngestionEventGroupByOutputType = {
    id: string
    source: string
    eventType: string
    payload: JsonValue
    status: string
    error: string | null
    createdAt: Date
    processedAt: Date | null
    _count: IngestionEventCountAggregateOutputType | null
    _min: IngestionEventMinAggregateOutputType | null
    _max: IngestionEventMaxAggregateOutputType | null
  }

  type GetIngestionEventGroupByPayload<T extends IngestionEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngestionEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngestionEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngestionEventGroupByOutputType[P]>
            : GetScalarType<T[P], IngestionEventGroupByOutputType[P]>
        }
      >
    >


  export type IngestionEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    eventType?: boolean
    payload?: boolean
    status?: boolean
    error?: boolean
    createdAt?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["ingestionEvent"]>

  export type IngestionEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    eventType?: boolean
    payload?: boolean
    status?: boolean
    error?: boolean
    createdAt?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["ingestionEvent"]>

  export type IngestionEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    eventType?: boolean
    payload?: boolean
    status?: boolean
    error?: boolean
    createdAt?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["ingestionEvent"]>

  export type IngestionEventSelectScalar = {
    id?: boolean
    source?: boolean
    eventType?: boolean
    payload?: boolean
    status?: boolean
    error?: boolean
    createdAt?: boolean
    processedAt?: boolean
  }

  export type IngestionEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "eventType" | "payload" | "status" | "error" | "createdAt" | "processedAt", ExtArgs["result"]["ingestionEvent"]>

  export type $IngestionEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngestionEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      eventType: string
      payload: Prisma.JsonValue
      status: string
      error: string | null
      createdAt: Date
      processedAt: Date | null
    }, ExtArgs["result"]["ingestionEvent"]>
    composites: {}
  }

  type IngestionEventGetPayload<S extends boolean | null | undefined | IngestionEventDefaultArgs> = $Result.GetResult<Prisma.$IngestionEventPayload, S>

  type IngestionEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngestionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngestionEventCountAggregateInputType | true
    }

  export interface IngestionEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestionEvent'], meta: { name: 'IngestionEvent' } }
    /**
     * Find zero or one IngestionEvent that matches the filter.
     * @param {IngestionEventFindUniqueArgs} args - Arguments to find a IngestionEvent
     * @example
     * // Get one IngestionEvent
     * const ingestionEvent = await prisma.ingestionEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngestionEventFindUniqueArgs>(args: SelectSubset<T, IngestionEventFindUniqueArgs<ExtArgs>>): Prisma__IngestionEventClient<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngestionEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngestionEventFindUniqueOrThrowArgs} args - Arguments to find a IngestionEvent
     * @example
     * // Get one IngestionEvent
     * const ingestionEvent = await prisma.ingestionEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngestionEventFindUniqueOrThrowArgs>(args: SelectSubset<T, IngestionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngestionEventClient<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngestionEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionEventFindFirstArgs} args - Arguments to find a IngestionEvent
     * @example
     * // Get one IngestionEvent
     * const ingestionEvent = await prisma.ingestionEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngestionEventFindFirstArgs>(args?: SelectSubset<T, IngestionEventFindFirstArgs<ExtArgs>>): Prisma__IngestionEventClient<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngestionEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionEventFindFirstOrThrowArgs} args - Arguments to find a IngestionEvent
     * @example
     * // Get one IngestionEvent
     * const ingestionEvent = await prisma.ingestionEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngestionEventFindFirstOrThrowArgs>(args?: SelectSubset<T, IngestionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngestionEventClient<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngestionEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngestionEvents
     * const ingestionEvents = await prisma.ingestionEvent.findMany()
     * 
     * // Get first 10 IngestionEvents
     * const ingestionEvents = await prisma.ingestionEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingestionEventWithIdOnly = await prisma.ingestionEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngestionEventFindManyArgs>(args?: SelectSubset<T, IngestionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngestionEvent.
     * @param {IngestionEventCreateArgs} args - Arguments to create a IngestionEvent.
     * @example
     * // Create one IngestionEvent
     * const IngestionEvent = await prisma.ingestionEvent.create({
     *   data: {
     *     // ... data to create a IngestionEvent
     *   }
     * })
     * 
     */
    create<T extends IngestionEventCreateArgs>(args: SelectSubset<T, IngestionEventCreateArgs<ExtArgs>>): Prisma__IngestionEventClient<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngestionEvents.
     * @param {IngestionEventCreateManyArgs} args - Arguments to create many IngestionEvents.
     * @example
     * // Create many IngestionEvents
     * const ingestionEvent = await prisma.ingestionEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngestionEventCreateManyArgs>(args?: SelectSubset<T, IngestionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngestionEvents and returns the data saved in the database.
     * @param {IngestionEventCreateManyAndReturnArgs} args - Arguments to create many IngestionEvents.
     * @example
     * // Create many IngestionEvents
     * const ingestionEvent = await prisma.ingestionEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngestionEvents and only return the `id`
     * const ingestionEventWithIdOnly = await prisma.ingestionEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngestionEventCreateManyAndReturnArgs>(args?: SelectSubset<T, IngestionEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngestionEvent.
     * @param {IngestionEventDeleteArgs} args - Arguments to delete one IngestionEvent.
     * @example
     * // Delete one IngestionEvent
     * const IngestionEvent = await prisma.ingestionEvent.delete({
     *   where: {
     *     // ... filter to delete one IngestionEvent
     *   }
     * })
     * 
     */
    delete<T extends IngestionEventDeleteArgs>(args: SelectSubset<T, IngestionEventDeleteArgs<ExtArgs>>): Prisma__IngestionEventClient<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngestionEvent.
     * @param {IngestionEventUpdateArgs} args - Arguments to update one IngestionEvent.
     * @example
     * // Update one IngestionEvent
     * const ingestionEvent = await prisma.ingestionEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngestionEventUpdateArgs>(args: SelectSubset<T, IngestionEventUpdateArgs<ExtArgs>>): Prisma__IngestionEventClient<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngestionEvents.
     * @param {IngestionEventDeleteManyArgs} args - Arguments to filter IngestionEvents to delete.
     * @example
     * // Delete a few IngestionEvents
     * const { count } = await prisma.ingestionEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngestionEventDeleteManyArgs>(args?: SelectSubset<T, IngestionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngestionEvents
     * const ingestionEvent = await prisma.ingestionEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngestionEventUpdateManyArgs>(args: SelectSubset<T, IngestionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestionEvents and returns the data updated in the database.
     * @param {IngestionEventUpdateManyAndReturnArgs} args - Arguments to update many IngestionEvents.
     * @example
     * // Update many IngestionEvents
     * const ingestionEvent = await prisma.ingestionEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngestionEvents and only return the `id`
     * const ingestionEventWithIdOnly = await prisma.ingestionEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngestionEventUpdateManyAndReturnArgs>(args: SelectSubset<T, IngestionEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngestionEvent.
     * @param {IngestionEventUpsertArgs} args - Arguments to update or create a IngestionEvent.
     * @example
     * // Update or create a IngestionEvent
     * const ingestionEvent = await prisma.ingestionEvent.upsert({
     *   create: {
     *     // ... data to create a IngestionEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngestionEvent we want to update
     *   }
     * })
     */
    upsert<T extends IngestionEventUpsertArgs>(args: SelectSubset<T, IngestionEventUpsertArgs<ExtArgs>>): Prisma__IngestionEventClient<$Result.GetResult<Prisma.$IngestionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngestionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionEventCountArgs} args - Arguments to filter IngestionEvents to count.
     * @example
     * // Count the number of IngestionEvents
     * const count = await prisma.ingestionEvent.count({
     *   where: {
     *     // ... the filter for the IngestionEvents we want to count
     *   }
     * })
    **/
    count<T extends IngestionEventCountArgs>(
      args?: Subset<T, IngestionEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngestionEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngestionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngestionEventAggregateArgs>(args: Subset<T, IngestionEventAggregateArgs>): Prisma.PrismaPromise<GetIngestionEventAggregateType<T>>

    /**
     * Group by IngestionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestionEventGroupByArgs} args - Group by arguments.
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
      T extends IngestionEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngestionEventGroupByArgs['orderBy'] }
        : { orderBy?: IngestionEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngestionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngestionEvent model
   */
  readonly fields: IngestionEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngestionEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngestionEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IngestionEvent model
   */
  interface IngestionEventFieldRefs {
    readonly id: FieldRef<"IngestionEvent", 'String'>
    readonly source: FieldRef<"IngestionEvent", 'String'>
    readonly eventType: FieldRef<"IngestionEvent", 'String'>
    readonly payload: FieldRef<"IngestionEvent", 'Json'>
    readonly status: FieldRef<"IngestionEvent", 'String'>
    readonly error: FieldRef<"IngestionEvent", 'String'>
    readonly createdAt: FieldRef<"IngestionEvent", 'DateTime'>
    readonly processedAt: FieldRef<"IngestionEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IngestionEvent findUnique
   */
  export type IngestionEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * Filter, which IngestionEvent to fetch.
     */
    where: IngestionEventWhereUniqueInput
  }

  /**
   * IngestionEvent findUniqueOrThrow
   */
  export type IngestionEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * Filter, which IngestionEvent to fetch.
     */
    where: IngestionEventWhereUniqueInput
  }

  /**
   * IngestionEvent findFirst
   */
  export type IngestionEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * Filter, which IngestionEvent to fetch.
     */
    where?: IngestionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionEvents to fetch.
     */
    orderBy?: IngestionEventOrderByWithRelationInput | IngestionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestionEvents.
     */
    cursor?: IngestionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestionEvents.
     */
    distinct?: IngestionEventScalarFieldEnum | IngestionEventScalarFieldEnum[]
  }

  /**
   * IngestionEvent findFirstOrThrow
   */
  export type IngestionEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * Filter, which IngestionEvent to fetch.
     */
    where?: IngestionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionEvents to fetch.
     */
    orderBy?: IngestionEventOrderByWithRelationInput | IngestionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestionEvents.
     */
    cursor?: IngestionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestionEvents.
     */
    distinct?: IngestionEventScalarFieldEnum | IngestionEventScalarFieldEnum[]
  }

  /**
   * IngestionEvent findMany
   */
  export type IngestionEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * Filter, which IngestionEvents to fetch.
     */
    where?: IngestionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestionEvents to fetch.
     */
    orderBy?: IngestionEventOrderByWithRelationInput | IngestionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngestionEvents.
     */
    cursor?: IngestionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestionEvents.
     */
    skip?: number
    distinct?: IngestionEventScalarFieldEnum | IngestionEventScalarFieldEnum[]
  }

  /**
   * IngestionEvent create
   */
  export type IngestionEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * The data needed to create a IngestionEvent.
     */
    data: XOR<IngestionEventCreateInput, IngestionEventUncheckedCreateInput>
  }

  /**
   * IngestionEvent createMany
   */
  export type IngestionEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngestionEvents.
     */
    data: IngestionEventCreateManyInput | IngestionEventCreateManyInput[]
  }

  /**
   * IngestionEvent createManyAndReturn
   */
  export type IngestionEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * The data used to create many IngestionEvents.
     */
    data: IngestionEventCreateManyInput | IngestionEventCreateManyInput[]
  }

  /**
   * IngestionEvent update
   */
  export type IngestionEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * The data needed to update a IngestionEvent.
     */
    data: XOR<IngestionEventUpdateInput, IngestionEventUncheckedUpdateInput>
    /**
     * Choose, which IngestionEvent to update.
     */
    where: IngestionEventWhereUniqueInput
  }

  /**
   * IngestionEvent updateMany
   */
  export type IngestionEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngestionEvents.
     */
    data: XOR<IngestionEventUpdateManyMutationInput, IngestionEventUncheckedUpdateManyInput>
    /**
     * Filter which IngestionEvents to update
     */
    where?: IngestionEventWhereInput
    /**
     * Limit how many IngestionEvents to update.
     */
    limit?: number
  }

  /**
   * IngestionEvent updateManyAndReturn
   */
  export type IngestionEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * The data used to update IngestionEvents.
     */
    data: XOR<IngestionEventUpdateManyMutationInput, IngestionEventUncheckedUpdateManyInput>
    /**
     * Filter which IngestionEvents to update
     */
    where?: IngestionEventWhereInput
    /**
     * Limit how many IngestionEvents to update.
     */
    limit?: number
  }

  /**
   * IngestionEvent upsert
   */
  export type IngestionEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * The filter to search for the IngestionEvent to update in case it exists.
     */
    where: IngestionEventWhereUniqueInput
    /**
     * In case the IngestionEvent found by the `where` argument doesn't exist, create a new IngestionEvent with this data.
     */
    create: XOR<IngestionEventCreateInput, IngestionEventUncheckedCreateInput>
    /**
     * In case the IngestionEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngestionEventUpdateInput, IngestionEventUncheckedUpdateInput>
  }

  /**
   * IngestionEvent delete
   */
  export type IngestionEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
    /**
     * Filter which IngestionEvent to delete.
     */
    where: IngestionEventWhereUniqueInput
  }

  /**
   * IngestionEvent deleteMany
   */
  export type IngestionEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestionEvents to delete
     */
    where?: IngestionEventWhereInput
    /**
     * Limit how many IngestionEvents to delete.
     */
    limit?: number
  }

  /**
   * IngestionEvent without action
   */
  export type IngestionEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestionEvent
     */
    select?: IngestionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngestionEvent
     */
    omit?: IngestionEventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    league: 'league',
    format: 'format',
    status: 'status',
    season: 'season',
    startsAt: 'startsAt',
    createdAt: 'createdAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    status: 'status',
    stage: 'stage',
    scheduledAt: 'scheduledAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const MatchResultSubmissionScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    submittedById: 'submittedById',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    evidenceUrl: 'evidenceUrl',
    status: 'status',
    reviewedById: 'reviewedById',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt'
  };

  export type MatchResultSubmissionScalarFieldEnum = (typeof MatchResultSubmissionScalarFieldEnum)[keyof typeof MatchResultSubmissionScalarFieldEnum]


  export const DisputeScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    createdById: 'createdById',
    reason: 'reason',
    status: 'status',
    resolutionNotes: 'resolutionNotes',
    resolvedById: 'resolvedById',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
  };

  export type DisputeScalarFieldEnum = (typeof DisputeScalarFieldEnum)[keyof typeof DisputeScalarFieldEnum]


  export const IngestionEventScalarFieldEnum: {
    id: 'id',
    source: 'source',
    eventType: 'eventType',
    payload: 'payload',
    status: 'status',
    error: 'error',
    createdAt: 'createdAt',
    processedAt: 'processedAt'
  };

  export type IngestionEventScalarFieldEnum = (typeof IngestionEventScalarFieldEnum)[keyof typeof IngestionEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    submissions?: MatchResultSubmissionListRelationFilter
    reviews?: MatchResultSubmissionListRelationFilter
    disputes?: DisputeListRelationFilter
    disputeResolutions?: DisputeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    submissions?: MatchResultSubmissionOrderByRelationAggregateInput
    reviews?: MatchResultSubmissionOrderByRelationAggregateInput
    disputes?: DisputeOrderByRelationAggregateInput
    disputeResolutions?: DisputeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    submissions?: MatchResultSubmissionListRelationFilter
    reviews?: MatchResultSubmissionListRelationFilter
    disputes?: DisputeListRelationFilter
    disputeResolutions?: DisputeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    league?: StringFilter<"Tournament"> | string
    format?: StringFilter<"Tournament"> | string
    status?: StringFilter<"Tournament"> | string
    season?: StringFilter<"Tournament"> | string
    startsAt?: DateTimeFilter<"Tournament"> | Date | string
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    matches?: MatchListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    league?: SortOrder
    format?: SortOrder
    status?: SortOrder
    season?: SortOrder
    startsAt?: SortOrder
    createdAt?: SortOrder
    matches?: MatchOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    league?: StringFilter<"Tournament"> | string
    format?: StringFilter<"Tournament"> | string
    status?: StringFilter<"Tournament"> | string
    season?: StringFilter<"Tournament"> | string
    startsAt?: DateTimeFilter<"Tournament"> | Date | string
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    matches?: MatchListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    league?: SortOrder
    format?: SortOrder
    status?: SortOrder
    season?: SortOrder
    startsAt?: SortOrder
    createdAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    name?: StringWithAggregatesFilter<"Tournament"> | string
    league?: StringWithAggregatesFilter<"Tournament"> | string
    format?: StringWithAggregatesFilter<"Tournament"> | string
    status?: StringWithAggregatesFilter<"Tournament"> | string
    season?: StringWithAggregatesFilter<"Tournament"> | string
    startsAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    tournamentId?: StringFilter<"Match"> | string
    homeTeam?: StringFilter<"Match"> | string
    awayTeam?: StringFilter<"Match"> | string
    homeScore?: IntFilter<"Match"> | number
    awayScore?: IntFilter<"Match"> | number
    status?: StringFilter<"Match"> | string
    stage?: StringNullableFilter<"Match"> | string | null
    scheduledAt?: DateTimeFilter<"Match"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    submissions?: MatchResultSubmissionListRelationFilter
    disputes?: DisputeListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    stage?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    submissions?: MatchResultSubmissionOrderByRelationAggregateInput
    disputes?: DisputeOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    tournamentId?: StringFilter<"Match"> | string
    homeTeam?: StringFilter<"Match"> | string
    awayTeam?: StringFilter<"Match"> | string
    homeScore?: IntFilter<"Match"> | number
    awayScore?: IntFilter<"Match"> | number
    status?: StringFilter<"Match"> | string
    stage?: StringNullableFilter<"Match"> | string | null
    scheduledAt?: DateTimeFilter<"Match"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    submissions?: MatchResultSubmissionListRelationFilter
    disputes?: DisputeListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    stage?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    tournamentId?: StringWithAggregatesFilter<"Match"> | string
    homeTeam?: StringWithAggregatesFilter<"Match"> | string
    awayTeam?: StringWithAggregatesFilter<"Match"> | string
    homeScore?: IntWithAggregatesFilter<"Match"> | number
    awayScore?: IntWithAggregatesFilter<"Match"> | number
    status?: StringWithAggregatesFilter<"Match"> | string
    stage?: StringNullableWithAggregatesFilter<"Match"> | string | null
    scheduledAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type MatchResultSubmissionWhereInput = {
    AND?: MatchResultSubmissionWhereInput | MatchResultSubmissionWhereInput[]
    OR?: MatchResultSubmissionWhereInput[]
    NOT?: MatchResultSubmissionWhereInput | MatchResultSubmissionWhereInput[]
    id?: StringFilter<"MatchResultSubmission"> | string
    matchId?: StringFilter<"MatchResultSubmission"> | string
    submittedById?: StringFilter<"MatchResultSubmission"> | string
    homeScore?: IntFilter<"MatchResultSubmission"> | number
    awayScore?: IntFilter<"MatchResultSubmission"> | number
    evidenceUrl?: StringNullableFilter<"MatchResultSubmission"> | string | null
    status?: StringFilter<"MatchResultSubmission"> | string
    reviewedById?: StringNullableFilter<"MatchResultSubmission"> | string | null
    reviewedAt?: DateTimeNullableFilter<"MatchResultSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"MatchResultSubmission"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    submittedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MatchResultSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    submittedById?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    evidenceUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    submittedBy?: UserOrderByWithRelationInput
    reviewedBy?: UserOrderByWithRelationInput
  }

  export type MatchResultSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchResultSubmissionWhereInput | MatchResultSubmissionWhereInput[]
    OR?: MatchResultSubmissionWhereInput[]
    NOT?: MatchResultSubmissionWhereInput | MatchResultSubmissionWhereInput[]
    matchId?: StringFilter<"MatchResultSubmission"> | string
    submittedById?: StringFilter<"MatchResultSubmission"> | string
    homeScore?: IntFilter<"MatchResultSubmission"> | number
    awayScore?: IntFilter<"MatchResultSubmission"> | number
    evidenceUrl?: StringNullableFilter<"MatchResultSubmission"> | string | null
    status?: StringFilter<"MatchResultSubmission"> | string
    reviewedById?: StringNullableFilter<"MatchResultSubmission"> | string | null
    reviewedAt?: DateTimeNullableFilter<"MatchResultSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"MatchResultSubmission"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    submittedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MatchResultSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    submittedById?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    evidenceUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MatchResultSubmissionCountOrderByAggregateInput
    _avg?: MatchResultSubmissionAvgOrderByAggregateInput
    _max?: MatchResultSubmissionMaxOrderByAggregateInput
    _min?: MatchResultSubmissionMinOrderByAggregateInput
    _sum?: MatchResultSubmissionSumOrderByAggregateInput
  }

  export type MatchResultSubmissionScalarWhereWithAggregatesInput = {
    AND?: MatchResultSubmissionScalarWhereWithAggregatesInput | MatchResultSubmissionScalarWhereWithAggregatesInput[]
    OR?: MatchResultSubmissionScalarWhereWithAggregatesInput[]
    NOT?: MatchResultSubmissionScalarWhereWithAggregatesInput | MatchResultSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchResultSubmission"> | string
    matchId?: StringWithAggregatesFilter<"MatchResultSubmission"> | string
    submittedById?: StringWithAggregatesFilter<"MatchResultSubmission"> | string
    homeScore?: IntWithAggregatesFilter<"MatchResultSubmission"> | number
    awayScore?: IntWithAggregatesFilter<"MatchResultSubmission"> | number
    evidenceUrl?: StringNullableWithAggregatesFilter<"MatchResultSubmission"> | string | null
    status?: StringWithAggregatesFilter<"MatchResultSubmission"> | string
    reviewedById?: StringNullableWithAggregatesFilter<"MatchResultSubmission"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"MatchResultSubmission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MatchResultSubmission"> | Date | string
  }

  export type DisputeWhereInput = {
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    id?: StringFilter<"Dispute"> | string
    matchId?: StringFilter<"Dispute"> | string
    createdById?: StringFilter<"Dispute"> | string
    reason?: StringFilter<"Dispute"> | string
    status?: StringFilter<"Dispute"> | string
    resolutionNotes?: StringNullableFilter<"Dispute"> | string | null
    resolvedById?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Dispute"> | Date | string | null
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    resolvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DisputeOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdById?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    resolutionNotes?: SortOrderInput | SortOrder
    resolvedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    match?: MatchOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    resolvedBy?: UserOrderByWithRelationInput
  }

  export type DisputeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    matchId?: StringFilter<"Dispute"> | string
    createdById?: StringFilter<"Dispute"> | string
    reason?: StringFilter<"Dispute"> | string
    status?: StringFilter<"Dispute"> | string
    resolutionNotes?: StringNullableFilter<"Dispute"> | string | null
    resolvedById?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Dispute"> | Date | string | null
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    resolvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type DisputeOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdById?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    resolutionNotes?: SortOrderInput | SortOrder
    resolvedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: DisputeCountOrderByAggregateInput
    _max?: DisputeMaxOrderByAggregateInput
    _min?: DisputeMinOrderByAggregateInput
  }

  export type DisputeScalarWhereWithAggregatesInput = {
    AND?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    OR?: DisputeScalarWhereWithAggregatesInput[]
    NOT?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispute"> | string
    matchId?: StringWithAggregatesFilter<"Dispute"> | string
    createdById?: StringWithAggregatesFilter<"Dispute"> | string
    reason?: StringWithAggregatesFilter<"Dispute"> | string
    status?: StringWithAggregatesFilter<"Dispute"> | string
    resolutionNotes?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    resolvedById?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Dispute"> | Date | string | null
  }

  export type IngestionEventWhereInput = {
    AND?: IngestionEventWhereInput | IngestionEventWhereInput[]
    OR?: IngestionEventWhereInput[]
    NOT?: IngestionEventWhereInput | IngestionEventWhereInput[]
    id?: StringFilter<"IngestionEvent"> | string
    source?: StringFilter<"IngestionEvent"> | string
    eventType?: StringFilter<"IngestionEvent"> | string
    payload?: JsonFilter<"IngestionEvent">
    status?: StringFilter<"IngestionEvent"> | string
    error?: StringNullableFilter<"IngestionEvent"> | string | null
    createdAt?: DateTimeFilter<"IngestionEvent"> | Date | string
    processedAt?: DateTimeNullableFilter<"IngestionEvent"> | Date | string | null
  }

  export type IngestionEventOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
  }

  export type IngestionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngestionEventWhereInput | IngestionEventWhereInput[]
    OR?: IngestionEventWhereInput[]
    NOT?: IngestionEventWhereInput | IngestionEventWhereInput[]
    source?: StringFilter<"IngestionEvent"> | string
    eventType?: StringFilter<"IngestionEvent"> | string
    payload?: JsonFilter<"IngestionEvent">
    status?: StringFilter<"IngestionEvent"> | string
    error?: StringNullableFilter<"IngestionEvent"> | string | null
    createdAt?: DateTimeFilter<"IngestionEvent"> | Date | string
    processedAt?: DateTimeNullableFilter<"IngestionEvent"> | Date | string | null
  }, "id">

  export type IngestionEventOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    _count?: IngestionEventCountOrderByAggregateInput
    _max?: IngestionEventMaxOrderByAggregateInput
    _min?: IngestionEventMinOrderByAggregateInput
  }

  export type IngestionEventScalarWhereWithAggregatesInput = {
    AND?: IngestionEventScalarWhereWithAggregatesInput | IngestionEventScalarWhereWithAggregatesInput[]
    OR?: IngestionEventScalarWhereWithAggregatesInput[]
    NOT?: IngestionEventScalarWhereWithAggregatesInput | IngestionEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IngestionEvent"> | string
    source?: StringWithAggregatesFilter<"IngestionEvent"> | string
    eventType?: StringWithAggregatesFilter<"IngestionEvent"> | string
    payload?: JsonWithAggregatesFilter<"IngestionEvent">
    status?: StringWithAggregatesFilter<"IngestionEvent"> | string
    error?: StringNullableWithAggregatesFilter<"IngestionEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IngestionEvent"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"IngestionEvent"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    submissions?: MatchResultSubmissionCreateNestedManyWithoutSubmittedByInput
    reviews?: MatchResultSubmissionCreateNestedManyWithoutReviewedByInput
    disputes?: DisputeCreateNestedManyWithoutCreatedByInput
    disputeResolutions?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    submissions?: MatchResultSubmissionUncheckedCreateNestedManyWithoutSubmittedByInput
    reviews?: MatchResultSubmissionUncheckedCreateNestedManyWithoutReviewedByInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutCreatedByInput
    disputeResolutions?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUpdateManyWithoutSubmittedByNestedInput
    reviews?: MatchResultSubmissionUpdateManyWithoutReviewedByNestedInput
    disputes?: DisputeUpdateManyWithoutCreatedByNestedInput
    disputeResolutions?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUncheckedUpdateManyWithoutSubmittedByNestedInput
    reviews?: MatchResultSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutCreatedByNestedInput
    disputeResolutions?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentCreateInput = {
    id?: string
    name: string
    league: string
    format?: string
    status?: string
    season?: string
    startsAt: Date | string
    createdAt?: Date | string
    matches?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    name: string
    league: string
    format?: string
    status?: string
    season?: string
    startsAt: Date | string
    createdAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    name: string
    league: string
    format?: string
    status?: string
    season?: string
    startsAt: Date | string
    createdAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    submissions?: MatchResultSubmissionCreateNestedManyWithoutMatchInput
    disputes?: DisputeCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    tournamentId: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
    submissions?: MatchResultSubmissionUncheckedCreateNestedManyWithoutMatchInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    submissions?: MatchResultSubmissionUpdateManyWithoutMatchNestedInput
    disputes?: DisputeUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUncheckedUpdateManyWithoutMatchNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    tournamentId: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionCreateInput = {
    id?: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutSubmissionsInput
    submittedBy: UserCreateNestedOneWithoutSubmissionsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewsInput
  }

  export type MatchResultSubmissionUncheckedCreateInput = {
    id?: string
    matchId: string
    submittedById: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchResultSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutSubmissionsNestedInput
    submittedBy?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type MatchResultSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    submittedById?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionCreateManyInput = {
    id?: string
    matchId: string
    submittedById: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchResultSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    submittedById?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeCreateInput = {
    id?: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    match: MatchCreateNestedOneWithoutDisputesInput
    createdBy: UserCreateNestedOneWithoutDisputesInput
    resolvedBy?: UserCreateNestedOneWithoutDisputeResolutionsInput
  }

  export type DisputeUncheckedCreateInput = {
    id?: string
    matchId: string
    createdById: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    resolvedById?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: MatchUpdateOneRequiredWithoutDisputesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDisputesNestedInput
    resolvedBy?: UserUpdateOneWithoutDisputeResolutionsNestedInput
  }

  export type DisputeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeCreateManyInput = {
    id?: string
    matchId: string
    createdById: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    resolvedById?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IngestionEventCreateInput = {
    id?: string
    source: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    error?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type IngestionEventUncheckedCreateInput = {
    id?: string
    source: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    error?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type IngestionEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IngestionEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IngestionEventCreateManyInput = {
    id?: string
    source: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    status?: string
    error?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type IngestionEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IngestionEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MatchResultSubmissionListRelationFilter = {
    every?: MatchResultSubmissionWhereInput
    some?: MatchResultSubmissionWhereInput
    none?: MatchResultSubmissionWhereInput
  }

  export type DisputeListRelationFilter = {
    every?: DisputeWhereInput
    some?: DisputeWhereInput
    none?: DisputeWhereInput
  }

  export type MatchResultSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisputeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league?: SortOrder
    format?: SortOrder
    status?: SortOrder
    season?: SortOrder
    startsAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league?: SortOrder
    format?: SortOrder
    status?: SortOrder
    season?: SortOrder
    startsAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    league?: SortOrder
    format?: SortOrder
    status?: SortOrder
    season?: SortOrder
    startsAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    scheduledAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    scheduledAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    stage?: SortOrder
    scheduledAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MatchResultSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    submittedById?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    evidenceUrl?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchResultSubmissionAvgOrderByAggregateInput = {
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchResultSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    submittedById?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    evidenceUrl?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchResultSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    submittedById?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    evidenceUrl?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchResultSubmissionSumOrderByAggregateInput = {
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DisputeCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdById?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    resolutionNotes?: SortOrder
    resolvedById?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type DisputeMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdById?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    resolutionNotes?: SortOrder
    resolvedById?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type DisputeMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdById?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    resolutionNotes?: SortOrder
    resolvedById?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IngestionEventCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type IngestionEventMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type IngestionEventMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type MatchResultSubmissionCreateNestedManyWithoutSubmittedByInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutSubmittedByInput, MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput> | MatchResultSubmissionCreateWithoutSubmittedByInput[] | MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput | MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput[]
    createMany?: MatchResultSubmissionCreateManySubmittedByInputEnvelope
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
  }

  export type MatchResultSubmissionCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutReviewedByInput, MatchResultSubmissionUncheckedCreateWithoutReviewedByInput> | MatchResultSubmissionCreateWithoutReviewedByInput[] | MatchResultSubmissionUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutReviewedByInput | MatchResultSubmissionCreateOrConnectWithoutReviewedByInput[]
    createMany?: MatchResultSubmissionCreateManyReviewedByInputEnvelope
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
  }

  export type DisputeCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DisputeCreateWithoutCreatedByInput, DisputeUncheckedCreateWithoutCreatedByInput> | DisputeCreateWithoutCreatedByInput[] | DisputeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutCreatedByInput | DisputeCreateOrConnectWithoutCreatedByInput[]
    createMany?: DisputeCreateManyCreatedByInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type DisputeCreateNestedManyWithoutResolvedByInput = {
    create?: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput> | DisputeCreateWithoutResolvedByInput[] | DisputeUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutResolvedByInput | DisputeCreateOrConnectWithoutResolvedByInput[]
    createMany?: DisputeCreateManyResolvedByInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type MatchResultSubmissionUncheckedCreateNestedManyWithoutSubmittedByInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutSubmittedByInput, MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput> | MatchResultSubmissionCreateWithoutSubmittedByInput[] | MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput | MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput[]
    createMany?: MatchResultSubmissionCreateManySubmittedByInputEnvelope
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
  }

  export type MatchResultSubmissionUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutReviewedByInput, MatchResultSubmissionUncheckedCreateWithoutReviewedByInput> | MatchResultSubmissionCreateWithoutReviewedByInput[] | MatchResultSubmissionUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutReviewedByInput | MatchResultSubmissionCreateOrConnectWithoutReviewedByInput[]
    createMany?: MatchResultSubmissionCreateManyReviewedByInputEnvelope
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DisputeCreateWithoutCreatedByInput, DisputeUncheckedCreateWithoutCreatedByInput> | DisputeCreateWithoutCreatedByInput[] | DisputeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutCreatedByInput | DisputeCreateOrConnectWithoutCreatedByInput[]
    createMany?: DisputeCreateManyCreatedByInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutResolvedByInput = {
    create?: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput> | DisputeCreateWithoutResolvedByInput[] | DisputeUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutResolvedByInput | DisputeCreateOrConnectWithoutResolvedByInput[]
    createMany?: DisputeCreateManyResolvedByInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MatchResultSubmissionUpdateManyWithoutSubmittedByNestedInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutSubmittedByInput, MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput> | MatchResultSubmissionCreateWithoutSubmittedByInput[] | MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput | MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput[]
    upsert?: MatchResultSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput | MatchResultSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput[]
    createMany?: MatchResultSubmissionCreateManySubmittedByInputEnvelope
    set?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    disconnect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    delete?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    update?: MatchResultSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput | MatchResultSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput[]
    updateMany?: MatchResultSubmissionUpdateManyWithWhereWithoutSubmittedByInput | MatchResultSubmissionUpdateManyWithWhereWithoutSubmittedByInput[]
    deleteMany?: MatchResultSubmissionScalarWhereInput | MatchResultSubmissionScalarWhereInput[]
  }

  export type MatchResultSubmissionUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutReviewedByInput, MatchResultSubmissionUncheckedCreateWithoutReviewedByInput> | MatchResultSubmissionCreateWithoutReviewedByInput[] | MatchResultSubmissionUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutReviewedByInput | MatchResultSubmissionCreateOrConnectWithoutReviewedByInput[]
    upsert?: MatchResultSubmissionUpsertWithWhereUniqueWithoutReviewedByInput | MatchResultSubmissionUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: MatchResultSubmissionCreateManyReviewedByInputEnvelope
    set?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    disconnect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    delete?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    update?: MatchResultSubmissionUpdateWithWhereUniqueWithoutReviewedByInput | MatchResultSubmissionUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: MatchResultSubmissionUpdateManyWithWhereWithoutReviewedByInput | MatchResultSubmissionUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: MatchResultSubmissionScalarWhereInput | MatchResultSubmissionScalarWhereInput[]
  }

  export type DisputeUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DisputeCreateWithoutCreatedByInput, DisputeUncheckedCreateWithoutCreatedByInput> | DisputeCreateWithoutCreatedByInput[] | DisputeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutCreatedByInput | DisputeCreateOrConnectWithoutCreatedByInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutCreatedByInput | DisputeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DisputeCreateManyCreatedByInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutCreatedByInput | DisputeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutCreatedByInput | DisputeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type DisputeUpdateManyWithoutResolvedByNestedInput = {
    create?: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput> | DisputeCreateWithoutResolvedByInput[] | DisputeUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutResolvedByInput | DisputeCreateOrConnectWithoutResolvedByInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutResolvedByInput | DisputeUpsertWithWhereUniqueWithoutResolvedByInput[]
    createMany?: DisputeCreateManyResolvedByInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutResolvedByInput | DisputeUpdateWithWhereUniqueWithoutResolvedByInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutResolvedByInput | DisputeUpdateManyWithWhereWithoutResolvedByInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type MatchResultSubmissionUncheckedUpdateManyWithoutSubmittedByNestedInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutSubmittedByInput, MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput> | MatchResultSubmissionCreateWithoutSubmittedByInput[] | MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput | MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput[]
    upsert?: MatchResultSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput | MatchResultSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput[]
    createMany?: MatchResultSubmissionCreateManySubmittedByInputEnvelope
    set?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    disconnect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    delete?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    update?: MatchResultSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput | MatchResultSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput[]
    updateMany?: MatchResultSubmissionUpdateManyWithWhereWithoutSubmittedByInput | MatchResultSubmissionUpdateManyWithWhereWithoutSubmittedByInput[]
    deleteMany?: MatchResultSubmissionScalarWhereInput | MatchResultSubmissionScalarWhereInput[]
  }

  export type MatchResultSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutReviewedByInput, MatchResultSubmissionUncheckedCreateWithoutReviewedByInput> | MatchResultSubmissionCreateWithoutReviewedByInput[] | MatchResultSubmissionUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutReviewedByInput | MatchResultSubmissionCreateOrConnectWithoutReviewedByInput[]
    upsert?: MatchResultSubmissionUpsertWithWhereUniqueWithoutReviewedByInput | MatchResultSubmissionUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: MatchResultSubmissionCreateManyReviewedByInputEnvelope
    set?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    disconnect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    delete?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    update?: MatchResultSubmissionUpdateWithWhereUniqueWithoutReviewedByInput | MatchResultSubmissionUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: MatchResultSubmissionUpdateManyWithWhereWithoutReviewedByInput | MatchResultSubmissionUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: MatchResultSubmissionScalarWhereInput | MatchResultSubmissionScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DisputeCreateWithoutCreatedByInput, DisputeUncheckedCreateWithoutCreatedByInput> | DisputeCreateWithoutCreatedByInput[] | DisputeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutCreatedByInput | DisputeCreateOrConnectWithoutCreatedByInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutCreatedByInput | DisputeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DisputeCreateManyCreatedByInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutCreatedByInput | DisputeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutCreatedByInput | DisputeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutResolvedByNestedInput = {
    create?: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput> | DisputeCreateWithoutResolvedByInput[] | DisputeUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutResolvedByInput | DisputeCreateOrConnectWithoutResolvedByInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutResolvedByInput | DisputeUpsertWithWhereUniqueWithoutResolvedByInput[]
    createMany?: DisputeCreateManyResolvedByInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutResolvedByInput | DisputeUpdateWithWhereUniqueWithoutResolvedByInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutResolvedByInput | DisputeUpdateManyWithWhereWithoutResolvedByInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type MatchCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutMatchesInput = {
    create?: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchesInput
    connect?: TournamentWhereUniqueInput
  }

  export type MatchResultSubmissionCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutMatchInput, MatchResultSubmissionUncheckedCreateWithoutMatchInput> | MatchResultSubmissionCreateWithoutMatchInput[] | MatchResultSubmissionUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutMatchInput | MatchResultSubmissionCreateOrConnectWithoutMatchInput[]
    createMany?: MatchResultSubmissionCreateManyMatchInputEnvelope
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
  }

  export type DisputeCreateNestedManyWithoutMatchInput = {
    create?: XOR<DisputeCreateWithoutMatchInput, DisputeUncheckedCreateWithoutMatchInput> | DisputeCreateWithoutMatchInput[] | DisputeUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutMatchInput | DisputeCreateOrConnectWithoutMatchInput[]
    createMany?: DisputeCreateManyMatchInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type MatchResultSubmissionUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutMatchInput, MatchResultSubmissionUncheckedCreateWithoutMatchInput> | MatchResultSubmissionCreateWithoutMatchInput[] | MatchResultSubmissionUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutMatchInput | MatchResultSubmissionCreateOrConnectWithoutMatchInput[]
    createMany?: MatchResultSubmissionCreateManyMatchInputEnvelope
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<DisputeCreateWithoutMatchInput, DisputeUncheckedCreateWithoutMatchInput> | DisputeCreateWithoutMatchInput[] | DisputeUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutMatchInput | DisputeCreateOrConnectWithoutMatchInput[]
    createMany?: DisputeCreateManyMatchInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TournamentUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchesInput
    upsert?: TournamentUpsertWithoutMatchesInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutMatchesInput, TournamentUpdateWithoutMatchesInput>, TournamentUncheckedUpdateWithoutMatchesInput>
  }

  export type MatchResultSubmissionUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutMatchInput, MatchResultSubmissionUncheckedCreateWithoutMatchInput> | MatchResultSubmissionCreateWithoutMatchInput[] | MatchResultSubmissionUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutMatchInput | MatchResultSubmissionCreateOrConnectWithoutMatchInput[]
    upsert?: MatchResultSubmissionUpsertWithWhereUniqueWithoutMatchInput | MatchResultSubmissionUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchResultSubmissionCreateManyMatchInputEnvelope
    set?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    disconnect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    delete?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    update?: MatchResultSubmissionUpdateWithWhereUniqueWithoutMatchInput | MatchResultSubmissionUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchResultSubmissionUpdateManyWithWhereWithoutMatchInput | MatchResultSubmissionUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchResultSubmissionScalarWhereInput | MatchResultSubmissionScalarWhereInput[]
  }

  export type DisputeUpdateManyWithoutMatchNestedInput = {
    create?: XOR<DisputeCreateWithoutMatchInput, DisputeUncheckedCreateWithoutMatchInput> | DisputeCreateWithoutMatchInput[] | DisputeUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutMatchInput | DisputeCreateOrConnectWithoutMatchInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutMatchInput | DisputeUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: DisputeCreateManyMatchInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutMatchInput | DisputeUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutMatchInput | DisputeUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type MatchResultSubmissionUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchResultSubmissionCreateWithoutMatchInput, MatchResultSubmissionUncheckedCreateWithoutMatchInput> | MatchResultSubmissionCreateWithoutMatchInput[] | MatchResultSubmissionUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchResultSubmissionCreateOrConnectWithoutMatchInput | MatchResultSubmissionCreateOrConnectWithoutMatchInput[]
    upsert?: MatchResultSubmissionUpsertWithWhereUniqueWithoutMatchInput | MatchResultSubmissionUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchResultSubmissionCreateManyMatchInputEnvelope
    set?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    disconnect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    delete?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    connect?: MatchResultSubmissionWhereUniqueInput | MatchResultSubmissionWhereUniqueInput[]
    update?: MatchResultSubmissionUpdateWithWhereUniqueWithoutMatchInput | MatchResultSubmissionUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchResultSubmissionUpdateManyWithWhereWithoutMatchInput | MatchResultSubmissionUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchResultSubmissionScalarWhereInput | MatchResultSubmissionScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<DisputeCreateWithoutMatchInput, DisputeUncheckedCreateWithoutMatchInput> | DisputeCreateWithoutMatchInput[] | DisputeUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutMatchInput | DisputeCreateOrConnectWithoutMatchInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutMatchInput | DisputeUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: DisputeCreateManyMatchInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutMatchInput | DisputeUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutMatchInput | DisputeUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type MatchCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<MatchCreateWithoutSubmissionsInput, MatchUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutSubmissionsInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MatchUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<MatchCreateWithoutSubmissionsInput, MatchUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutSubmissionsInput
    upsert?: MatchUpsertWithoutSubmissionsInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutSubmissionsInput, MatchUpdateWithoutSubmissionsInput>, MatchUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type MatchCreateNestedOneWithoutDisputesInput = {
    create?: XOR<MatchCreateWithoutDisputesInput, MatchUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutDisputesInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDisputesInput = {
    create?: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisputesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDisputeResolutionsInput = {
    create?: XOR<UserCreateWithoutDisputeResolutionsInput, UserUncheckedCreateWithoutDisputeResolutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisputeResolutionsInput
    connect?: UserWhereUniqueInput
  }

  export type MatchUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: XOR<MatchCreateWithoutDisputesInput, MatchUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutDisputesInput
    upsert?: MatchUpsertWithoutDisputesInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutDisputesInput, MatchUpdateWithoutDisputesInput>, MatchUncheckedUpdateWithoutDisputesInput>
  }

  export type UserUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisputesInput
    upsert?: UserUpsertWithoutDisputesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDisputesInput, UserUpdateWithoutDisputesInput>, UserUncheckedUpdateWithoutDisputesInput>
  }

  export type UserUpdateOneWithoutDisputeResolutionsNestedInput = {
    create?: XOR<UserCreateWithoutDisputeResolutionsInput, UserUncheckedCreateWithoutDisputeResolutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisputeResolutionsInput
    upsert?: UserUpsertWithoutDisputeResolutionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDisputeResolutionsInput, UserUpdateWithoutDisputeResolutionsInput>, UserUncheckedUpdateWithoutDisputeResolutionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MatchResultSubmissionCreateWithoutSubmittedByInput = {
    id?: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutSubmissionsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewsInput
  }

  export type MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput = {
    id?: string
    matchId: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchResultSubmissionCreateOrConnectWithoutSubmittedByInput = {
    where: MatchResultSubmissionWhereUniqueInput
    create: XOR<MatchResultSubmissionCreateWithoutSubmittedByInput, MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput>
  }

  export type MatchResultSubmissionCreateManySubmittedByInputEnvelope = {
    data: MatchResultSubmissionCreateManySubmittedByInput | MatchResultSubmissionCreateManySubmittedByInput[]
  }

  export type MatchResultSubmissionCreateWithoutReviewedByInput = {
    id?: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutSubmissionsInput
    submittedBy: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type MatchResultSubmissionUncheckedCreateWithoutReviewedByInput = {
    id?: string
    matchId: string
    submittedById: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchResultSubmissionCreateOrConnectWithoutReviewedByInput = {
    where: MatchResultSubmissionWhereUniqueInput
    create: XOR<MatchResultSubmissionCreateWithoutReviewedByInput, MatchResultSubmissionUncheckedCreateWithoutReviewedByInput>
  }

  export type MatchResultSubmissionCreateManyReviewedByInputEnvelope = {
    data: MatchResultSubmissionCreateManyReviewedByInput | MatchResultSubmissionCreateManyReviewedByInput[]
  }

  export type DisputeCreateWithoutCreatedByInput = {
    id?: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    match: MatchCreateNestedOneWithoutDisputesInput
    resolvedBy?: UserCreateNestedOneWithoutDisputeResolutionsInput
  }

  export type DisputeUncheckedCreateWithoutCreatedByInput = {
    id?: string
    matchId: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    resolvedById?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeCreateOrConnectWithoutCreatedByInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutCreatedByInput, DisputeUncheckedCreateWithoutCreatedByInput>
  }

  export type DisputeCreateManyCreatedByInputEnvelope = {
    data: DisputeCreateManyCreatedByInput | DisputeCreateManyCreatedByInput[]
  }

  export type DisputeCreateWithoutResolvedByInput = {
    id?: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    match: MatchCreateNestedOneWithoutDisputesInput
    createdBy: UserCreateNestedOneWithoutDisputesInput
  }

  export type DisputeUncheckedCreateWithoutResolvedByInput = {
    id?: string
    matchId: string
    createdById: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeCreateOrConnectWithoutResolvedByInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput>
  }

  export type DisputeCreateManyResolvedByInputEnvelope = {
    data: DisputeCreateManyResolvedByInput | DisputeCreateManyResolvedByInput[]
  }

  export type MatchResultSubmissionUpsertWithWhereUniqueWithoutSubmittedByInput = {
    where: MatchResultSubmissionWhereUniqueInput
    update: XOR<MatchResultSubmissionUpdateWithoutSubmittedByInput, MatchResultSubmissionUncheckedUpdateWithoutSubmittedByInput>
    create: XOR<MatchResultSubmissionCreateWithoutSubmittedByInput, MatchResultSubmissionUncheckedCreateWithoutSubmittedByInput>
  }

  export type MatchResultSubmissionUpdateWithWhereUniqueWithoutSubmittedByInput = {
    where: MatchResultSubmissionWhereUniqueInput
    data: XOR<MatchResultSubmissionUpdateWithoutSubmittedByInput, MatchResultSubmissionUncheckedUpdateWithoutSubmittedByInput>
  }

  export type MatchResultSubmissionUpdateManyWithWhereWithoutSubmittedByInput = {
    where: MatchResultSubmissionScalarWhereInput
    data: XOR<MatchResultSubmissionUpdateManyMutationInput, MatchResultSubmissionUncheckedUpdateManyWithoutSubmittedByInput>
  }

  export type MatchResultSubmissionScalarWhereInput = {
    AND?: MatchResultSubmissionScalarWhereInput | MatchResultSubmissionScalarWhereInput[]
    OR?: MatchResultSubmissionScalarWhereInput[]
    NOT?: MatchResultSubmissionScalarWhereInput | MatchResultSubmissionScalarWhereInput[]
    id?: StringFilter<"MatchResultSubmission"> | string
    matchId?: StringFilter<"MatchResultSubmission"> | string
    submittedById?: StringFilter<"MatchResultSubmission"> | string
    homeScore?: IntFilter<"MatchResultSubmission"> | number
    awayScore?: IntFilter<"MatchResultSubmission"> | number
    evidenceUrl?: StringNullableFilter<"MatchResultSubmission"> | string | null
    status?: StringFilter<"MatchResultSubmission"> | string
    reviewedById?: StringNullableFilter<"MatchResultSubmission"> | string | null
    reviewedAt?: DateTimeNullableFilter<"MatchResultSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"MatchResultSubmission"> | Date | string
  }

  export type MatchResultSubmissionUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: MatchResultSubmissionWhereUniqueInput
    update: XOR<MatchResultSubmissionUpdateWithoutReviewedByInput, MatchResultSubmissionUncheckedUpdateWithoutReviewedByInput>
    create: XOR<MatchResultSubmissionCreateWithoutReviewedByInput, MatchResultSubmissionUncheckedCreateWithoutReviewedByInput>
  }

  export type MatchResultSubmissionUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: MatchResultSubmissionWhereUniqueInput
    data: XOR<MatchResultSubmissionUpdateWithoutReviewedByInput, MatchResultSubmissionUncheckedUpdateWithoutReviewedByInput>
  }

  export type MatchResultSubmissionUpdateManyWithWhereWithoutReviewedByInput = {
    where: MatchResultSubmissionScalarWhereInput
    data: XOR<MatchResultSubmissionUpdateManyMutationInput, MatchResultSubmissionUncheckedUpdateManyWithoutReviewedByInput>
  }

  export type DisputeUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutCreatedByInput, DisputeUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DisputeCreateWithoutCreatedByInput, DisputeUncheckedCreateWithoutCreatedByInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutCreatedByInput, DisputeUncheckedUpdateWithoutCreatedByInput>
  }

  export type DisputeUpdateManyWithWhereWithoutCreatedByInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DisputeScalarWhereInput = {
    AND?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    OR?: DisputeScalarWhereInput[]
    NOT?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    id?: StringFilter<"Dispute"> | string
    matchId?: StringFilter<"Dispute"> | string
    createdById?: StringFilter<"Dispute"> | string
    reason?: StringFilter<"Dispute"> | string
    status?: StringFilter<"Dispute"> | string
    resolutionNotes?: StringNullableFilter<"Dispute"> | string | null
    resolvedById?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Dispute"> | Date | string | null
  }

  export type DisputeUpsertWithWhereUniqueWithoutResolvedByInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutResolvedByInput, DisputeUncheckedUpdateWithoutResolvedByInput>
    create: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutResolvedByInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutResolvedByInput, DisputeUncheckedUpdateWithoutResolvedByInput>
  }

  export type DisputeUpdateManyWithWhereWithoutResolvedByInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutResolvedByInput>
  }

  export type MatchCreateWithoutTournamentInput = {
    id?: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
    submissions?: MatchResultSubmissionCreateNestedManyWithoutMatchInput
    disputes?: DisputeCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutTournamentInput = {
    id?: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
    submissions?: MatchResultSubmissionUncheckedCreateNestedManyWithoutMatchInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchCreateManyTournamentInputEnvelope = {
    data: MatchCreateManyTournamentInput | MatchCreateManyTournamentInput[]
  }

  export type MatchUpsertWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
  }

  export type MatchUpdateManyWithWhereWithoutTournamentInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTournamentInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    tournamentId?: StringFilter<"Match"> | string
    homeTeam?: StringFilter<"Match"> | string
    awayTeam?: StringFilter<"Match"> | string
    homeScore?: IntFilter<"Match"> | number
    awayScore?: IntFilter<"Match"> | number
    status?: StringFilter<"Match"> | string
    stage?: StringNullableFilter<"Match"> | string | null
    scheduledAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type TournamentCreateWithoutMatchesInput = {
    id?: string
    name: string
    league: string
    format?: string
    status?: string
    season?: string
    startsAt: Date | string
    createdAt?: Date | string
  }

  export type TournamentUncheckedCreateWithoutMatchesInput = {
    id?: string
    name: string
    league: string
    format?: string
    status?: string
    season?: string
    startsAt: Date | string
    createdAt?: Date | string
  }

  export type TournamentCreateOrConnectWithoutMatchesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
  }

  export type MatchResultSubmissionCreateWithoutMatchInput = {
    id?: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    submittedBy: UserCreateNestedOneWithoutSubmissionsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewsInput
  }

  export type MatchResultSubmissionUncheckedCreateWithoutMatchInput = {
    id?: string
    submittedById: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchResultSubmissionCreateOrConnectWithoutMatchInput = {
    where: MatchResultSubmissionWhereUniqueInput
    create: XOR<MatchResultSubmissionCreateWithoutMatchInput, MatchResultSubmissionUncheckedCreateWithoutMatchInput>
  }

  export type MatchResultSubmissionCreateManyMatchInputEnvelope = {
    data: MatchResultSubmissionCreateManyMatchInput | MatchResultSubmissionCreateManyMatchInput[]
  }

  export type DisputeCreateWithoutMatchInput = {
    id?: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutDisputesInput
    resolvedBy?: UserCreateNestedOneWithoutDisputeResolutionsInput
  }

  export type DisputeUncheckedCreateWithoutMatchInput = {
    id?: string
    createdById: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    resolvedById?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeCreateOrConnectWithoutMatchInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutMatchInput, DisputeUncheckedCreateWithoutMatchInput>
  }

  export type DisputeCreateManyMatchInputEnvelope = {
    data: DisputeCreateManyMatchInput | DisputeCreateManyMatchInput[]
  }

  export type TournamentUpsertWithoutMatchesInput = {
    update: XOR<TournamentUpdateWithoutMatchesInput, TournamentUncheckedUpdateWithoutMatchesInput>
    create: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutMatchesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutMatchesInput, TournamentUncheckedUpdateWithoutMatchesInput>
  }

  export type TournamentUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    season?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchResultSubmissionWhereUniqueInput
    update: XOR<MatchResultSubmissionUpdateWithoutMatchInput, MatchResultSubmissionUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchResultSubmissionCreateWithoutMatchInput, MatchResultSubmissionUncheckedCreateWithoutMatchInput>
  }

  export type MatchResultSubmissionUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchResultSubmissionWhereUniqueInput
    data: XOR<MatchResultSubmissionUpdateWithoutMatchInput, MatchResultSubmissionUncheckedUpdateWithoutMatchInput>
  }

  export type MatchResultSubmissionUpdateManyWithWhereWithoutMatchInput = {
    where: MatchResultSubmissionScalarWhereInput
    data: XOR<MatchResultSubmissionUpdateManyMutationInput, MatchResultSubmissionUncheckedUpdateManyWithoutMatchInput>
  }

  export type DisputeUpsertWithWhereUniqueWithoutMatchInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutMatchInput, DisputeUncheckedUpdateWithoutMatchInput>
    create: XOR<DisputeCreateWithoutMatchInput, DisputeUncheckedCreateWithoutMatchInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutMatchInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutMatchInput, DisputeUncheckedUpdateWithoutMatchInput>
  }

  export type DisputeUpdateManyWithWhereWithoutMatchInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchCreateWithoutSubmissionsInput = {
    id?: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    disputes?: DisputeCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    tournamentId: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
    disputes?: DisputeUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutSubmissionsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutSubmissionsInput, MatchUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    reviews?: MatchResultSubmissionCreateNestedManyWithoutReviewedByInput
    disputes?: DisputeCreateNestedManyWithoutCreatedByInput
    disputeResolutions?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    reviews?: MatchResultSubmissionUncheckedCreateNestedManyWithoutReviewedByInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutCreatedByInput
    disputeResolutions?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    submissions?: MatchResultSubmissionCreateNestedManyWithoutSubmittedByInput
    disputes?: DisputeCreateNestedManyWithoutCreatedByInput
    disputeResolutions?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    submissions?: MatchResultSubmissionUncheckedCreateNestedManyWithoutSubmittedByInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutCreatedByInput
    disputeResolutions?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type MatchUpsertWithoutSubmissionsInput = {
    update: XOR<MatchUpdateWithoutSubmissionsInput, MatchUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<MatchCreateWithoutSubmissionsInput, MatchUncheckedCreateWithoutSubmissionsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutSubmissionsInput, MatchUncheckedUpdateWithoutSubmissionsInput>
  }

  export type MatchUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    disputes?: DisputeUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputes?: DisputeUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: MatchResultSubmissionUpdateManyWithoutReviewedByNestedInput
    disputes?: DisputeUpdateManyWithoutCreatedByNestedInput
    disputeResolutions?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: MatchResultSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutCreatedByNestedInput
    disputeResolutions?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUpdateManyWithoutSubmittedByNestedInput
    disputes?: DisputeUpdateManyWithoutCreatedByNestedInput
    disputeResolutions?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUncheckedUpdateManyWithoutSubmittedByNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutCreatedByNestedInput
    disputeResolutions?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type MatchCreateWithoutDisputesInput = {
    id?: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    submissions?: MatchResultSubmissionCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutDisputesInput = {
    id?: string
    tournamentId: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
    submissions?: MatchResultSubmissionUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutDisputesInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutDisputesInput, MatchUncheckedCreateWithoutDisputesInput>
  }

  export type UserCreateWithoutDisputesInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    submissions?: MatchResultSubmissionCreateNestedManyWithoutSubmittedByInput
    reviews?: MatchResultSubmissionCreateNestedManyWithoutReviewedByInput
    disputeResolutions?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutDisputesInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    submissions?: MatchResultSubmissionUncheckedCreateNestedManyWithoutSubmittedByInput
    reviews?: MatchResultSubmissionUncheckedCreateNestedManyWithoutReviewedByInput
    disputeResolutions?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutDisputesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
  }

  export type UserCreateWithoutDisputeResolutionsInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    submissions?: MatchResultSubmissionCreateNestedManyWithoutSubmittedByInput
    reviews?: MatchResultSubmissionCreateNestedManyWithoutReviewedByInput
    disputes?: DisputeCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDisputeResolutionsInput = {
    id?: string
    displayName: string
    email: string
    passwordHash: string
    role?: string
    createdAt?: Date | string
    submissions?: MatchResultSubmissionUncheckedCreateNestedManyWithoutSubmittedByInput
    reviews?: MatchResultSubmissionUncheckedCreateNestedManyWithoutReviewedByInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDisputeResolutionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDisputeResolutionsInput, UserUncheckedCreateWithoutDisputeResolutionsInput>
  }

  export type MatchUpsertWithoutDisputesInput = {
    update: XOR<MatchUpdateWithoutDisputesInput, MatchUncheckedUpdateWithoutDisputesInput>
    create: XOR<MatchCreateWithoutDisputesInput, MatchUncheckedCreateWithoutDisputesInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutDisputesInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutDisputesInput, MatchUncheckedUpdateWithoutDisputesInput>
  }

  export type MatchUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    submissions?: MatchResultSubmissionUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type UserUpsertWithoutDisputesInput = {
    update: XOR<UserUpdateWithoutDisputesInput, UserUncheckedUpdateWithoutDisputesInput>
    create: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDisputesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDisputesInput, UserUncheckedUpdateWithoutDisputesInput>
  }

  export type UserUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUpdateManyWithoutSubmittedByNestedInput
    reviews?: MatchResultSubmissionUpdateManyWithoutReviewedByNestedInput
    disputeResolutions?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUncheckedUpdateManyWithoutSubmittedByNestedInput
    reviews?: MatchResultSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput
    disputeResolutions?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUpsertWithoutDisputeResolutionsInput = {
    update: XOR<UserUpdateWithoutDisputeResolutionsInput, UserUncheckedUpdateWithoutDisputeResolutionsInput>
    create: XOR<UserCreateWithoutDisputeResolutionsInput, UserUncheckedCreateWithoutDisputeResolutionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDisputeResolutionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDisputeResolutionsInput, UserUncheckedUpdateWithoutDisputeResolutionsInput>
  }

  export type UserUpdateWithoutDisputeResolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUpdateManyWithoutSubmittedByNestedInput
    reviews?: MatchResultSubmissionUpdateManyWithoutReviewedByNestedInput
    disputes?: DisputeUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDisputeResolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUncheckedUpdateManyWithoutSubmittedByNestedInput
    reviews?: MatchResultSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MatchResultSubmissionCreateManySubmittedByInput = {
    id?: string
    matchId: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchResultSubmissionCreateManyReviewedByInput = {
    id?: string
    matchId: string
    submittedById: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DisputeCreateManyCreatedByInput = {
    id?: string
    matchId: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    resolvedById?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeCreateManyResolvedByInput = {
    id?: string
    matchId: string
    createdById: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type MatchResultSubmissionUpdateWithoutSubmittedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutSubmissionsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type MatchResultSubmissionUncheckedUpdateWithoutSubmittedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionUncheckedUpdateManyWithoutSubmittedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutSubmissionsNestedInput
    submittedBy?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type MatchResultSubmissionUncheckedUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    submittedById?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionUncheckedUpdateManyWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    submittedById?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: MatchUpdateOneRequiredWithoutDisputesNestedInput
    resolvedBy?: UserUpdateOneWithoutDisputeResolutionsNestedInput
  }

  export type DisputeUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeUpdateWithoutResolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: MatchUpdateOneRequiredWithoutDisputesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDisputesNestedInput
  }

  export type DisputeUncheckedUpdateWithoutResolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeUncheckedUpdateManyWithoutResolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchCreateManyTournamentInput = {
    id?: string
    homeTeam: string
    awayTeam: string
    homeScore?: number
    awayScore?: number
    status?: string
    stage?: string | null
    scheduledAt: Date | string
  }

  export type MatchUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUpdateManyWithoutMatchNestedInput
    disputes?: DisputeUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: MatchResultSubmissionUncheckedUpdateManyWithoutMatchNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionCreateManyMatchInput = {
    id?: string
    submittedById: string
    homeScore: number
    awayScore: number
    evidenceUrl?: string | null
    status?: string
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DisputeCreateManyMatchInput = {
    id?: string
    createdById: string
    reason: string
    status?: string
    resolutionNotes?: string | null
    resolvedById?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type MatchResultSubmissionUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedBy?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type MatchResultSubmissionUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedById?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultSubmissionUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedById?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    evidenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutDisputesNestedInput
    resolvedBy?: UserUpdateOneWithoutDisputeResolutionsNestedInput
  }

  export type DisputeUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolutionNotes?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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