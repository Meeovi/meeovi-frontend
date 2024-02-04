import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleRelationFilter } from "../inputs/Acl_roleRelationFilter";
import { AppWhereInput } from "../inputs/AppWhereInput";
import { App_action_buttonListRelationFilter } from "../inputs/App_action_buttonListRelationFilter";
import { App_administration_snippetListRelationFilter } from "../inputs/App_administration_snippetListRelationFilter";
import { App_cms_blockListRelationFilter } from "../inputs/App_cms_blockListRelationFilter";
import { App_flow_actionListRelationFilter } from "../inputs/App_flow_actionListRelationFilter";
import { App_flow_eventListRelationFilter } from "../inputs/App_flow_eventListRelationFilter";
import { App_payment_methodListRelationFilter } from "../inputs/App_payment_methodListRelationFilter";
import { App_script_conditionListRelationFilter } from "../inputs/App_script_conditionListRelationFilter";
import { App_shipping_methodListRelationFilter } from "../inputs/App_shipping_methodListRelationFilter";
import { App_templateListRelationFilter } from "../inputs/App_templateListRelationFilter";
import { App_translationListRelationFilter } from "../inputs/App_translationListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { Custom_entityListRelationFilter } from "../inputs/Custom_entityListRelationFilter";
import { Custom_field_setListRelationFilter } from "../inputs/Custom_field_setListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { IntegrationRelationFilter } from "../inputs/IntegrationRelationFilter";
import { ScriptListRelationFilter } from "../inputs/ScriptListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Tax_providerListRelationFilter } from "../inputs/Tax_providerListRelationFilter";
import { WebhookListRelationFilter } from "../inputs/WebhookListRelationFilter";

@TypeGraphQL.InputType("AppWhereUniqueInput", {})
export class AppWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => [AppWhereInput], {
    nullable: true
  })
  AND?: AppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereInput], {
    nullable: true
  })
  OR?: AppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereInput], {
    nullable: true
  })
  NOT?: AppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  path?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  author?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  copyright?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  license?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  privacy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  version?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  base_app_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  allow_disable?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  configurable?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  icon?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  app_secret?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  modules?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  main_module?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  cookies?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  allowed_hosts?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  integration_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  acl_role_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  template_load_priority?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Acl_roleRelationFilter, {
    nullable: true
  })
  acl_role?: Acl_roleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntegrationRelationFilter, {
    nullable: true
  })
  integration?: IntegrationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonListRelationFilter, {
    nullable: true
  })
  app_action_button?: App_action_buttonListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetListRelationFilter, {
    nullable: true
  })
  app_administration_snippet?: App_administration_snippetListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockListRelationFilter, {
    nullable: true
  })
  app_cms_block?: App_cms_blockListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionListRelationFilter, {
    nullable: true
  })
  app_flow_action?: App_flow_actionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventListRelationFilter, {
    nullable: true
  })
  app_flow_event?: App_flow_eventListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodListRelationFilter, {
    nullable: true
  })
  app_payment_method?: App_payment_methodListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionListRelationFilter, {
    nullable: true
  })
  app_script_condition?: App_script_conditionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodListRelationFilter, {
    nullable: true
  })
  app_shipping_method?: App_shipping_methodListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_templateListRelationFilter, {
    nullable: true
  })
  app_template?: App_templateListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_translationListRelationFilter, {
    nullable: true
  })
  app_translation?: App_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Custom_entityListRelationFilter, {
    nullable: true
  })
  custom_entity?: Custom_entityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setListRelationFilter, {
    nullable: true
  })
  custom_field_set?: Custom_field_setListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ScriptListRelationFilter, {
    nullable: true
  })
  script?: ScriptListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Tax_providerListRelationFilter, {
    nullable: true
  })
  tax_provider?: Tax_providerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WebhookListRelationFilter, {
    nullable: true
  })
  webhook?: WebhookListRelationFilter | undefined;
}
