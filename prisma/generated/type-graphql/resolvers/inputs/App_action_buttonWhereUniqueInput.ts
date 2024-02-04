import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppRelationFilter } from "../inputs/AppRelationFilter";
import { App_action_buttonWhereInput } from "../inputs/App_action_buttonWhereInput";
import { App_action_button_translationListRelationFilter } from "../inputs/App_action_button_translationListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { app_action_buttonActionApp_idCompoundUniqueInput } from "../inputs/app_action_buttonActionApp_idCompoundUniqueInput";

@TypeGraphQL.InputType("App_action_buttonWhereUniqueInput", {})
export class App_action_buttonWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => app_action_buttonActionApp_idCompoundUniqueInput, {
    nullable: true
  })
  action_app_id?: app_action_buttonActionApp_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonWhereInput], {
    nullable: true
  })
  AND?: App_action_buttonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonWhereInput], {
    nullable: true
  })
  OR?: App_action_buttonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonWhereInput], {
    nullable: true
  })
  NOT?: App_action_buttonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  entity?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  view?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  action?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  open_new_tab?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AppRelationFilter, {
    nullable: true
  })
  app?: AppRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationListRelationFilter, {
    nullable: true
  })
  app_action_button_translation?: App_action_button_translationListRelationFilter | undefined;
}
