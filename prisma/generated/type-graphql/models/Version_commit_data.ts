import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Version_commit } from "../models/Version_commit";

@TypeGraphQL.ObjectType("Version_commit_data", {})
export class Version_commit_data {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  auto_increment!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_commit_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  action!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payload!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  user_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  integration_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  version_commit?: Version_commit;
}
