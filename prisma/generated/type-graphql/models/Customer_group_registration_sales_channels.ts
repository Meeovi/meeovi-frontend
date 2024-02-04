import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer_group } from "../models/Customer_group";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Customer_group_registration_sales_channels", {})
export class Customer_group_registration_sales_channels {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  customer_group_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  customer_group?: Customer_group;

  sales_channel?: Sales_channel;
}
