import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInput";

@TypeGraphQL.InputType("CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInputEnvelope", {})
export class CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInput], {
    nullable: false
  })
  data!: CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
