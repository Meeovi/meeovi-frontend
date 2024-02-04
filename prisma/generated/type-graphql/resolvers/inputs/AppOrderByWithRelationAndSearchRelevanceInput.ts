import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Acl_roleOrderByWithRelationAndSearchRelevanceInput";
import { AppOrderByRelevanceInput } from "../inputs/AppOrderByRelevanceInput";
import { App_action_buttonOrderByRelationAggregateInput } from "../inputs/App_action_buttonOrderByRelationAggregateInput";
import { App_administration_snippetOrderByRelationAggregateInput } from "../inputs/App_administration_snippetOrderByRelationAggregateInput";
import { App_cms_blockOrderByRelationAggregateInput } from "../inputs/App_cms_blockOrderByRelationAggregateInput";
import { App_flow_actionOrderByRelationAggregateInput } from "../inputs/App_flow_actionOrderByRelationAggregateInput";
import { App_flow_eventOrderByRelationAggregateInput } from "../inputs/App_flow_eventOrderByRelationAggregateInput";
import { App_payment_methodOrderByRelationAggregateInput } from "../inputs/App_payment_methodOrderByRelationAggregateInput";
import { App_script_conditionOrderByRelationAggregateInput } from "../inputs/App_script_conditionOrderByRelationAggregateInput";
import { App_shipping_methodOrderByRelationAggregateInput } from "../inputs/App_shipping_methodOrderByRelationAggregateInput";
import { App_templateOrderByRelationAggregateInput } from "../inputs/App_templateOrderByRelationAggregateInput";
import { App_translationOrderByRelationAggregateInput } from "../inputs/App_translationOrderByRelationAggregateInput";
import { Custom_entityOrderByRelationAggregateInput } from "../inputs/Custom_entityOrderByRelationAggregateInput";
import { Custom_field_setOrderByRelationAggregateInput } from "../inputs/Custom_field_setOrderByRelationAggregateInput";
import { IntegrationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/IntegrationOrderByWithRelationAndSearchRelevanceInput";
import { ScriptOrderByRelationAggregateInput } from "../inputs/ScriptOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Tax_providerOrderByRelationAggregateInput } from "../inputs/Tax_providerOrderByRelationAggregateInput";
import { WebhookOrderByRelationAggregateInput } from "../inputs/WebhookOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AppOrderByWithRelationAndSearchRelevanceInput", {})
export class AppOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  author?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  copyright?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  license?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  privacy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  base_app_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_disable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  configurable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  icon?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_secret?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  modules?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  main_module?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cookies?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  allowed_hosts?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integration_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  acl_role_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  template_load_priority?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  acl_role?: Acl_roleOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  integration?: IntegrationOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonOrderByRelationAggregateInput, {
    nullable: true
  })
  app_action_button?: App_action_buttonOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetOrderByRelationAggregateInput, {
    nullable: true
  })
  app_administration_snippet?: App_administration_snippetOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockOrderByRelationAggregateInput, {
    nullable: true
  })
  app_cms_block?: App_cms_blockOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionOrderByRelationAggregateInput, {
    nullable: true
  })
  app_flow_action?: App_flow_actionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventOrderByRelationAggregateInput, {
    nullable: true
  })
  app_flow_event?: App_flow_eventOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionOrderByRelationAggregateInput, {
    nullable: true
  })
  app_script_condition?: App_script_conditionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  app_shipping_method?: App_shipping_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_templateOrderByRelationAggregateInput, {
    nullable: true
  })
  app_template?: App_templateOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  app_translation?: App_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityOrderByRelationAggregateInput, {
    nullable: true
  })
  custom_entity?: Custom_entityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setOrderByRelationAggregateInput, {
    nullable: true
  })
  custom_field_set?: Custom_field_setOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ScriptOrderByRelationAggregateInput, {
    nullable: true
  })
  script?: ScriptOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_providerOrderByRelationAggregateInput, {
    nullable: true
  })
  tax_provider?: Tax_providerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WebhookOrderByRelationAggregateInput, {
    nullable: true
  })
  webhook?: WebhookOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: AppOrderByRelevanceInput | undefined;
}
