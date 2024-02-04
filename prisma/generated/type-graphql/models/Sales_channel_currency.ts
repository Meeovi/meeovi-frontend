import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Currency } from "../models/Currency";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Sales_channel_currency", {})
export class Sales_channel_currency {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  currency_id!: Buffer;

  currency?: Currency;

  sales_channel?: Sales_channel;
}
