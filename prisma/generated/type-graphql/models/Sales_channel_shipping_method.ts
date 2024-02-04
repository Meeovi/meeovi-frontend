import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sales_channel } from "../models/Sales_channel";
import { Shipping_method } from "../models/Shipping_method";

@TypeGraphQL.ObjectType("Sales_channel_shipping_method", {})
export class Sales_channel_shipping_method {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  shipping_method_id!: Buffer;

  sales_channel?: Sales_channel;

  shipping_method?: Shipping_method;
}
