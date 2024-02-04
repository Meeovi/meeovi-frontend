import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCreateWithoutLanguageInput } from "../inputs/Payment_method_translationCreateWithoutLanguageInput";
import { Payment_method_translationUpdateWithoutLanguageInput } from "../inputs/Payment_method_translationUpdateWithoutLanguageInput";
import { Payment_method_translationWhereUniqueInput } from "../inputs/Payment_method_translationWhereUniqueInput";

@TypeGraphQL.InputType("Payment_method_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Payment_method_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Payment_method_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_method_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_method_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Payment_method_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Payment_method_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Payment_method_translationCreateWithoutLanguageInput;
}
