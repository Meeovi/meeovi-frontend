import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Payment_method } from "../models/Payment_method";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Sales_channel_payment_method", {})
export class Sales_channel_payment_method {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  payment_method_id!: Buffer;

  payment_method?: Payment_method;

  sales_channel?: Sales_channel;
}
