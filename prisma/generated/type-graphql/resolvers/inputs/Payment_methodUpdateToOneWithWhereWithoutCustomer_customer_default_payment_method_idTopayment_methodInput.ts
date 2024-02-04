import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodUpdateWithoutCustomer_customer_default_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodUpdateWithoutCustomer_customer_default_payment_method_idTopayment_methodInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpdateToOneWithWhereWithoutCustomer_customer_default_payment_method_idTopayment_methodInput", {})
export class Payment_methodUpdateToOneWithWhereWithoutCustomer_customer_default_payment_method_idTopayment_methodInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutCustomer_customer_default_payment_method_idTopayment_methodInput, {
    nullable: false
  })
  data!: Payment_methodUpdateWithoutCustomer_customer_default_payment_method_idTopayment_methodInput;
}
