import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Payment_methodUpdateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodUpdateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithoutCustomer_customer_last_payment_method_idTopayment_methodInput", {})
export class Payment_methodUpsertWithoutCustomer_customer_last_payment_method_idTopayment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}
