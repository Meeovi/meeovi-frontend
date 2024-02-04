import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutDocument_type_translationInput } from "../inputs/LanguageCreateWithoutDocument_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutDocument_type_translationInput", {})
export class LanguageCreateOrConnectWithoutDocument_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutDocument_type_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutDocument_type_translationInput;
}
