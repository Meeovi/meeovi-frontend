import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutDocument_type_translationInput } from "../inputs/LanguageCreateOrConnectWithoutDocument_type_translationInput";
import { LanguageCreateWithoutDocument_type_translationInput } from "../inputs/LanguageCreateWithoutDocument_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutDocument_type_translationInput", {})
export class LanguageCreateNestedOneWithoutDocument_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutDocument_type_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutDocument_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutDocument_type_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutDocument_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
