import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_script_condition_translationInput } from "../inputs/LanguageCreateWithoutApp_script_condition_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutApp_script_condition_translationInput", {})
export class LanguageCreateOrConnectWithoutApp_script_condition_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_script_condition_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_script_condition_translationInput;
}
