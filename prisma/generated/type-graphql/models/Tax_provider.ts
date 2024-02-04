import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App } from "../models/App";
import { Rule } from "../models/Rule";
import { Tax_provider_translation } from "../models/Tax_provider_translation";
import { Tax_providerCount } from "../resolvers/outputs/Tax_providerCount";

@TypeGraphQL.ObjectType("Tax_provider", {})
export class Tax_provider {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priority!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  availability_rule_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  app_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  process_url?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  app?: App | null;

  rule?: Rule | null;

  tax_provider_translation?: Tax_provider_translation[];

  @TypeGraphQL.Field(_type => Tax_providerCount, {
    nullable: true
  })
  _count?: Tax_providerCount | null;
}
