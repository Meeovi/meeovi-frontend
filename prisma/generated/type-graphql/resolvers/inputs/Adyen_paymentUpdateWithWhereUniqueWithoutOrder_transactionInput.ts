import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentUpdateWithoutOrder_transactionInput } from "../inputs/Adyen_paymentUpdateWithoutOrder_transactionInput";
import { Adyen_paymentWhereUniqueInput } from "../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_paymentUpdateWithWhereUniqueWithoutOrder_transactionInput", {})
export class Adyen_paymentUpdateWithWhereUniqueWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Adyen_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_paymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_paymentUpdateWithoutOrder_transactionInput, {
    nullable: false
  })
  data!: Adyen_paymentUpdateWithoutOrder_transactionInput;
}
