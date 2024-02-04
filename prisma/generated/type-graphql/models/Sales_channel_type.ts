import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_type_translation } from "../models/Sales_channel_type_translation";
import { Sales_channel_typeCount } from "../resolvers/outputs/Sales_channel_typeCount";

@TypeGraphQL.ObjectType("Sales_channel_type", {})
export class Sales_channel_type {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cover_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  screenshot_urls?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  sales_channel?: Sales_channel[];

  sales_channel_type_translation?: Sales_channel_type_translation[];

  @TypeGraphQL.Field(_type => Sales_channel_typeCount, {
    nullable: true
  })
  _count?: Sales_channel_typeCount | null;
}
