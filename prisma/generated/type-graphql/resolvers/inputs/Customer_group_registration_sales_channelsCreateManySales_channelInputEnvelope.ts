import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsCreateManySales_channelInput } from "../inputs/Customer_group_registration_sales_channelsCreateManySales_channelInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsCreateManySales_channelInputEnvelope", {})
export class Customer_group_registration_sales_channelsCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsCreateManySales_channelInput], {
    nullable: false
  })
  data!: Customer_group_registration_sales_channelsCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
