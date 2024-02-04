import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EnqueueCreateManyInput", {})
export class EnqueueCreateManyInput {
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
  body?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  headers?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  properties?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  redelivered?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  queue!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priority?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  delayed_until?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  time_to_live?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  delivery_id?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  redeliver_after?: bigint | undefined;
}
