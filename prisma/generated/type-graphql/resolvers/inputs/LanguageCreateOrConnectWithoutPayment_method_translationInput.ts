import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutPayment_method_translationInput } from "../inputs/LanguageCreateWithoutPayment_method_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutPayment_method_translationInput", {})
export class LanguageCreateOrConnectWithoutPayment_method_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutPayment_method_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutPayment_method_translationInput;
}
