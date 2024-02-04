import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationScalarWhereInput } from "../inputs/Payment_method_translationScalarWhereInput";
import { Payment_method_translationUpdateManyMutationInput } from "../inputs/Payment_method_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Payment_method_translationUpdateManyWithWhereWithoutPayment_methodInput", {})
export class Payment_method_translationUpdateManyWithWhereWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => Payment_method_translationScalarWhereInput, {
    nullable: false
  })
  where!: Payment_method_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Payment_method_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Payment_method_translationUpdateManyMutationInput;
}
