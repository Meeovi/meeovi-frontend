import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Promotion } from "../models/Promotion";

@TypeGraphQL.ObjectType("Promotion_individual_code", {})
export class Promotion_individual_code {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  promotion_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payload?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  promotion?: Promotion;
}
