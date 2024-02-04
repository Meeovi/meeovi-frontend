import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_action_button_translationInput } from "../inputs/LanguageCreateWithoutApp_action_button_translationInput";
import { LanguageUpdateWithoutApp_action_button_translationInput } from "../inputs/LanguageUpdateWithoutApp_action_button_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutApp_action_button_translationInput", {})
export class LanguageUpsertWithoutApp_action_button_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_action_button_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutApp_action_button_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_action_button_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_action_button_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
