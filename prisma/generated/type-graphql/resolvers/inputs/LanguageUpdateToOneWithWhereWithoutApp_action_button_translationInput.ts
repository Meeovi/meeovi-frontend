import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutApp_action_button_translationInput } from "../inputs/LanguageUpdateWithoutApp_action_button_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutApp_action_button_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutApp_action_button_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_action_button_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutApp_action_button_translationInput;
}
