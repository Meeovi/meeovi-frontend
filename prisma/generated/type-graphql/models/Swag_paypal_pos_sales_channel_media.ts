import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media } from "../models/Media";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Swag_paypal_pos_sales_channel_media", {})
export class Swag_paypal_pos_sales_channel_media {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  media_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lookup_key?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  media?: Media;

  sales_channel?: Sales_channel;
}
