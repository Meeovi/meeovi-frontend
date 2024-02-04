import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutPayment_method_translationInput } from "../inputs/Payment_methodCreateWithoutPayment_method_translationInput";
import { Payment_methodUpdateWithoutPayment_method_translationInput } from "../inputs/Payment_methodUpdateWithoutPayment_method_translationInput";
import { Payment_methodWhereInput } from "../inputs/Payment_methodWhereInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithoutPayment_method_translationInput", {})
export class Payment_methodUpsertWithoutPayment_method_translationInput {
  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutPayment_method_translationInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutPayment_method_translationInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutPayment_method_translationInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutPayment_method_translationInput;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}
