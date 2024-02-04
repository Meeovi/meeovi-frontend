import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentCreateWithoutOrder_transactionInput } from "../inputs/Adyen_paymentCreateWithoutOrder_transactionInput";
import { Adyen_paymentUpdateWithoutOrder_transactionInput } from "../inputs/Adyen_paymentUpdateWithoutOrder_transactionInput";
import { Adyen_paymentWhereUniqueInput } from "../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_paymentUpsertWithWhereUniqueWithoutOrder_transactionInput", {})
export class Adyen_paymentUpsertWithWhereUniqueWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Adyen_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_paymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_paymentUpdateWithoutOrder_transactionInput, {
    nullable: false
  })
  update!: Adyen_paymentUpdateWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => Adyen_paymentCreateWithoutOrder_transactionInput, {
    nullable: false
  })
  create!: Adyen_paymentCreateWithoutOrder_transactionInput;
}
