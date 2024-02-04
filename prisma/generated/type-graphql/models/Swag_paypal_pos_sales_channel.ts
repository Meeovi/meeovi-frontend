import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product_stream } from "../models/Product_stream";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Swag_paypal_pos_sales_channel", {})
export class Swag_paypal_pos_sales_channel {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_stream_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  api_key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media_domain?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  webhook_signing_key?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  sync_prices!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  replace!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  product_stream?: Product_stream | null;

  sales_channel?: Sales_channel;
}
