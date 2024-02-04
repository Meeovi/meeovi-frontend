import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentScalarWhereInput } from "../inputs/Adyen_paymentScalarWhereInput";
import { Adyen_paymentUpdateManyMutationInput } from "../inputs/Adyen_paymentUpdateManyMutationInput";

@TypeGraphQL.InputType("Adyen_paymentUpdateManyWithWhereWithoutOrder_transactionInput", {})
export class Adyen_paymentUpdateManyWithWhereWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Adyen_paymentScalarWhereInput, {
    nullable: false
  })
  where!: Adyen_paymentScalarWhereInput;

  @TypeGraphQL.Field(_type => Adyen_paymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: Adyen_paymentUpdateManyMutationInput;
}
