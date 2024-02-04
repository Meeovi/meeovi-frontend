import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

/**
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
@TypeGraphQL.ObjectType("Enqueue", {
  description: "This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments"
})
export class Enqueue {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  published_at!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  body?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  headers?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  properties?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  redelivered?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  queue!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priority?: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  delayed_until?: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  time_to_live?: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  delivery_id?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  redeliver_after?: bigint | null;
}
