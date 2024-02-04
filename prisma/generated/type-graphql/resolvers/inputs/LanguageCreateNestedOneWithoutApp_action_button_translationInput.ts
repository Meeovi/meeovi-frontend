import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_action_button_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_action_button_translationInput";
import { LanguageCreateWithoutApp_action_button_translationInput } from "../inputs/LanguageCreateWithoutApp_action_button_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutApp_action_button_translationInput", {})
export class LanguageCreateNestedOneWithoutApp_action_button_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_action_button_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_action_button_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_action_button_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_action_button_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
