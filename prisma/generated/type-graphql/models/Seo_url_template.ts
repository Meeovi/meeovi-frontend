import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Seo_url_template", {})
export class Seo_url_template {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  sales_channel_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  route_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  template?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_valid!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  sales_channel?: Sales_channel | null;
}
