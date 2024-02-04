import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Landing_page } from "../models/Landing_page";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Landing_page_sales_channel", {})
export class Landing_page_sales_channel {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  landing_page_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  landing_page_version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  landing_page?: Landing_page;

  sales_channel?: Sales_channel;
}
