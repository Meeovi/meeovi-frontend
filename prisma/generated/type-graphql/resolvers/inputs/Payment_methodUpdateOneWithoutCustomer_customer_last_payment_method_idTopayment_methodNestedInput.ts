import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodCreateOrConnectWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Payment_methodUpdateToOneWithWhereWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodUpdateToOneWithWhereWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Payment_methodUpsertWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodUpsertWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateOneWithoutCustomer_customer_last_payment_method_idTopayment_methodNestedInput", {})
export class Payment_methodUpdateOneWithoutCustomer_customer_last_payment_method_idTopayment_methodNestedInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutCustomer_customer_last_payment_method_idTopayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutCustomer_customer_last_payment_method_idTopayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpsertWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  upsert?: Payment_methodUpsertWithoutCustomer_customer_last_payment_method_idTopayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  disconnect?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  delete?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateToOneWithWhereWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  update?: Payment_methodUpdateToOneWithWhereWithoutCustomer_customer_last_payment_method_idTopayment_methodInput | undefined;
}
