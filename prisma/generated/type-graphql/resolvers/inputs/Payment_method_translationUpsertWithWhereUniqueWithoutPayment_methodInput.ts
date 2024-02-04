import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCreateWithoutPayment_methodInput } from "../inputs/Payment_method_translationCreateWithoutPayment_methodInput";
import { Payment_method_translationUpdateWithoutPayment_methodInput } from "../inputs/Payment_method_translationUpdateWithoutPayment_methodInput";
import { Payment_method_translationWhereUniqueInput } from "../inputs/Payment_method_translationWhereUniqueInput";

@TypeGraphQL.InputType("Payment_method_translationUpsertWithWhereUniqueWithoutPayment_methodInput", {})
export class Payment_method_translationUpsertWithWhereUniqueWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => Payment_method_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_method_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_method_translationUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  update!: Payment_method_translationUpdateWithoutPayment_methodInput;

  @TypeGraphQL.Field(_type => Payment_method_translationCreateWithoutPayment_methodInput, {
    nullable: false
  })
  create!: Payment_method_translationCreateWithoutPayment_methodInput;
}
