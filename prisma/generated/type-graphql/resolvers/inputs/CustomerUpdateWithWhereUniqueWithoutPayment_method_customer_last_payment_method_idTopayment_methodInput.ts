import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput } from "../inputs/CustomerUpdateWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateWithWhereUniqueWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput", {})
export class CustomerUpdateWithWhereUniqueWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput;
}
