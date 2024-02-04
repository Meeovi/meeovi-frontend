import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_action_button_translationInput } from "../inputs/LanguageCreateWithoutApp_action_button_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutApp_action_button_translationInput", {})
export class LanguageCreateOrConnectWithoutApp_action_button_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_action_button_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_action_button_translationInput;
}
