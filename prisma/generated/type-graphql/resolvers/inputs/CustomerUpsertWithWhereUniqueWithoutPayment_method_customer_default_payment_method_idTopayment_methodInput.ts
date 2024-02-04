import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerUpdateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerUpdateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpsertWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput", {})
export class CustomerUpsertWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput;
}
