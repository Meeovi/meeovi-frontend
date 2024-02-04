import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateNestedOneWithoutAppInput } from "../inputs/Acl_roleCreateNestedOneWithoutAppInput";
import { App_action_buttonCreateNestedManyWithoutAppInput } from "../inputs/App_action_buttonCreateNestedManyWithoutAppInput";
import { App_administration_snippetCreateNestedManyWithoutAppInput } from "../inputs/App_administration_snippetCreateNestedManyWithoutAppInput";
import { App_cms_blockCreateNestedManyWithoutAppInput } from "../inputs/App_cms_blockCreateNestedManyWithoutAppInput";
import { App_flow_actionCreateNestedManyWithoutAppInput } from "../inputs/App_flow_actionCreateNestedManyWithoutAppInput";
import { App_flow_eventCreateNestedManyWithoutAppInput } from "../inputs/App_flow_eventCreateNestedManyWithoutAppInput";
import { App_payment_methodCreateNestedManyWithoutAppInput } from "../inputs/App_payment_methodCreateNestedManyWithoutAppInput";
import { App_script_conditionCreateNestedManyWithoutAppInput } from "../inputs/App_script_conditionCreateNestedManyWithoutAppInput";
import { App_templateCreateNestedManyWithoutAppInput } from "../inputs/App_templateCreateNestedManyWithoutAppInput";
import { App_translationCreateNestedManyWithoutAppInput } from "../inputs/App_translationCreateNestedManyWithoutAppInput";
import { Custom_entityCreateNestedManyWithoutAppInput } from "../inputs/Custom_entityCreateNestedManyWithoutAppInput";
import { Custom_field_setCreateNestedManyWithoutAppInput } from "../inputs/Custom_field_setCreateNestedManyWithoutAppInput";
import { IntegrationCreateNestedOneWithoutAppInput } from "../inputs/IntegrationCreateNestedOneWithoutAppInput";
import { ScriptCreateNestedManyWithoutAppInput } from "../inputs/ScriptCreateNestedManyWithoutAppInput";
import { Tax_providerCreateNestedManyWithoutAppInput } from "../inputs/Tax_providerCreateNestedManyWithoutAppInput";
import { WebhookCreateNestedManyWithoutAppInput } from "../inputs/WebhookCreateNestedManyWithoutAppInput";

@TypeGraphQL.InputType("AppCreateWithoutApp_shipping_methodInput", {})
export class AppCreateWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  path!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyright?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  license?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privacy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  version!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  base_app_url?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  allow_disable?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  configurable?: boolean | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  icon?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  app_secret?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modules?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  main_module?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cookies?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allowed_hosts?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  template_load_priority?: number | undefined;

  @TypeGraphQL.Field(_type => Acl_roleCreateNestedOneWithoutAppInput, {
    nullable: false
  })
  acl_role!: Acl_roleCreateNestedOneWithoutAppInput;

  @TypeGraphQL.Field(_type => IntegrationCreateNestedOneWithoutAppInput, {
    nullable: false
  })
  integration!: IntegrationCreateNestedOneWithoutAppInput;

  @TypeGraphQL.Field(_type => App_action_buttonCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_action_button?: App_action_buttonCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_administration_snippet?: App_administration_snippetCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_cms_block?: App_cms_blockCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_flow_action?: App_flow_actionCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_flow_event?: App_flow_eventCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_script_condition?: App_script_conditionCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => App_templateCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_template?: App_templateCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => App_translationCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  app_translation?: App_translationCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  custom_entity?: Custom_entityCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  custom_field_set?: Custom_field_setCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => ScriptCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  script?: ScriptCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => Tax_providerCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  tax_provider?: Tax_providerCreateNestedManyWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => WebhookCreateNestedManyWithoutAppInput, {
    nullable: true
  })
  webhook?: WebhookCreateNestedManyWithoutAppInput | undefined;
}
