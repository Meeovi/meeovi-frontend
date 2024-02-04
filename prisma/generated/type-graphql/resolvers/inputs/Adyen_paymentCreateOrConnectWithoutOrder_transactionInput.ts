import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentCreateWithoutOrder_transactionInput } from "../inputs/Adyen_paymentCreateWithoutOrder_transactionInput";
import { Adyen_paymentWhereUniqueInput } from "../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_paymentCreateOrConnectWithoutOrder_transactionInput", {})
export class Adyen_paymentCreateOrConnectWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Adyen_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_paymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_paymentCreateWithoutOrder_transactionInput, {
    nullable: false
  })
  create!: Adyen_paymentCreateWithoutOrder_transactionInput;
}
