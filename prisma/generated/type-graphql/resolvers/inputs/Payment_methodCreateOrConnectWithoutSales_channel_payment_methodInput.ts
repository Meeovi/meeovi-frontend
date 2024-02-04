import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutSales_channel_payment_methodInput } from "../inputs/Payment_methodCreateWithoutSales_channel_payment_methodInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateOrConnectWithoutSales_channel_payment_methodInput", {})
export class Payment_methodCreateOrConnectWithoutSales_channel_payment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutSales_channel_payment_methodInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutSales_channel_payment_methodInput;
}
