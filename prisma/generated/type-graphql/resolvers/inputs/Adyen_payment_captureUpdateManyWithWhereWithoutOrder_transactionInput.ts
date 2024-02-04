import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureScalarWhereInput } from "../inputs/Adyen_payment_captureScalarWhereInput";
import { Adyen_payment_captureUpdateManyMutationInput } from "../inputs/Adyen_payment_captureUpdateManyMutationInput";

@TypeGraphQL.InputType("Adyen_payment_captureUpdateManyWithWhereWithoutOrder_transactionInput", {})
export class Adyen_payment_captureUpdateManyWithWhereWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Adyen_payment_captureScalarWhereInput, {
    nullable: false
  })
  where!: Adyen_payment_captureScalarWhereInput;

  @TypeGraphQL.Field(_type => Adyen_payment_captureUpdateManyMutationInput, {
    nullable: false
  })
  data!: Adyen_payment_captureUpdateManyMutationInput;
}
