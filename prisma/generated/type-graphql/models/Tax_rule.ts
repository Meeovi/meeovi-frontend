import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Country } from "../models/Country";
import { Tax } from "../models/Tax";
import { Tax_rule_type } from "../models/Tax_rule_type";

@TypeGraphQL.ObjectType("Tax_rule", {})
export class Tax_rule {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  tax_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  tax_rule_type_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  country_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  tax_rate?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  data?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  active_from?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  country?: Country;

  tax_rule_type?: Tax_rule_type;

  tax?: Tax;
}
