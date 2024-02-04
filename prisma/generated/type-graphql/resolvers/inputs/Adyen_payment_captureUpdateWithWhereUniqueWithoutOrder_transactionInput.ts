import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureUpdateWithoutOrder_transactionInput } from "../inputs/Adyen_payment_captureUpdateWithoutOrder_transactionInput";
import { Adyen_payment_captureWhereUniqueInput } from "../inputs/Adyen_payment_captureWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_payment_captureUpdateWithWhereUniqueWithoutOrder_transactionInput", {})
export class Adyen_payment_captureUpdateWithWhereUniqueWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_payment_captureWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_payment_captureUpdateWithoutOrder_transactionInput, {
    nullable: false
  })
  data!: Adyen_payment_captureUpdateWithoutOrder_transactionInput;
}
