import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sales_channel } from "../models/Sales_channel";
import { Theme } from "../models/Theme";

@TypeGraphQL.ObjectType("Theme_sales_channel", {})
export class Theme_sales_channel {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  theme_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  sales_channel?: Sales_channel;

  theme?: Theme;
}
