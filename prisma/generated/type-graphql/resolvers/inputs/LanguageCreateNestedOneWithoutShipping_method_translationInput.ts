import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutShipping_method_translationInput } from "../inputs/LanguageCreateOrConnectWithoutShipping_method_translationInput";
import { LanguageCreateWithoutShipping_method_translationInput } from "../inputs/LanguageCreateWithoutShipping_method_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutShipping_method_translationInput", {})
export class LanguageCreateNestedOneWithoutShipping_method_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutShipping_method_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutShipping_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutShipping_method_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutShipping_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
