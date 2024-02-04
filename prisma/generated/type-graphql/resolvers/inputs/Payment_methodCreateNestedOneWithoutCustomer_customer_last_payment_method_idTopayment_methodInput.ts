import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodCreateOrConnectWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedOneWithoutCustomer_customer_last_payment_method_idTopayment_methodInput", {})
export class Payment_methodCreateNestedOneWithoutCustomer_customer_last_payment_method_idTopayment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutCustomer_customer_last_payment_method_idTopayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;
}
