import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutSales_channelInput } from "../inputs/Payment_methodCreateWithoutSales_channelInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateOrConnectWithoutSales_channelInput", {})
export class Payment_methodCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutSales_channelInput;
}
