import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutShipping_method_translationInput } from "../inputs/LanguageCreateWithoutShipping_method_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutShipping_method_translationInput", {})
export class LanguageCreateOrConnectWithoutShipping_method_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutShipping_method_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutShipping_method_translationInput;
}
