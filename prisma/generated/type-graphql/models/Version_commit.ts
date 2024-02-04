import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Version_commit_data } from "../models/Version_commit_data";
import { Version_commitCount } from "../resolvers/outputs/Version_commitCount";

@TypeGraphQL.ObjectType("Version_commit", {})
export class Version_commit {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  auto_increment!: bigint;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_merge!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  user_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  integration_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  version_commit_data?: Version_commit_data[];

  @TypeGraphQL.Field(_type => Version_commitCount, {
    nullable: true
  })
  _count?: Version_commitCount | null;
}
