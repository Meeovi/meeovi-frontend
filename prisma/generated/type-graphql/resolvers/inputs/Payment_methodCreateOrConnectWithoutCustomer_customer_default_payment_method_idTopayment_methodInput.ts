import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutCustomer_customer_default_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodCreateWithoutCustomer_customer_default_payment_method_idTopayment_methodInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateOrConnectWithoutCustomer_customer_default_payment_method_idTopayment_methodInput", {})
export class Payment_methodCreateOrConnectWithoutCustomer_customer_default_payment_method_idTopayment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutCustomer_customer_default_payment_method_idTopayment_methodInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutCustomer_customer_default_payment_method_idTopayment_methodInput;
}
