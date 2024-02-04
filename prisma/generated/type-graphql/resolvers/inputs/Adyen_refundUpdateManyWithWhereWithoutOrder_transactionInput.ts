import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundScalarWhereInput } from "../inputs/Adyen_refundScalarWhereInput";
import { Adyen_refundUpdateManyMutationInput } from "../inputs/Adyen_refundUpdateManyMutationInput";

@TypeGraphQL.InputType("Adyen_refundUpdateManyWithWhereWithoutOrder_transactionInput", {})
export class Adyen_refundUpdateManyWithWhereWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Adyen_refundScalarWhereInput, {
    nullable: false
  })
  where!: Adyen_refundScalarWhereInput;

  @TypeGraphQL.Field(_type => Adyen_refundUpdateManyMutationInput, {
    nullable: false
  })
  data!: Adyen_refundUpdateManyMutationInput;
}
