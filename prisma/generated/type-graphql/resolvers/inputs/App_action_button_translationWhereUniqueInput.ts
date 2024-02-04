import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonRelationFilter } from "../inputs/App_action_buttonRelationFilter";
import { App_action_button_translationWhereInput } from "../inputs/App_action_button_translationWhereInput";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { app_action_button_translationApp_action_button_idLanguage_idCompoundUniqueInput } from "../inputs/app_action_button_translationApp_action_button_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("App_action_button_translationWhereUniqueInput", {})
export class App_action_button_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => app_action_button_translationApp_action_button_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  app_action_button_id_language_id?: app_action_button_translationApp_action_button_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationWhereInput], {
    nullable: true
  })
  AND?: App_action_button_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationWhereInput], {
    nullable: true
  })
  OR?: App_action_button_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationWhereInput], {
    nullable: true
  })
  NOT?: App_action_button_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_action_button_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonRelationFilter, {
    nullable: true
  })
  app_action_button?: App_action_buttonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
