import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateWithoutSales_channelInput } from "../inputs/Customer_groupCreateWithoutSales_channelInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupCreateOrConnectWithoutSales_channelInput", {})
export class Customer_groupCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_groupWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Customer_groupCreateWithoutSales_channelInput;
}
