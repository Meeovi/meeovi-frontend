import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleUpdateOneRequiredWithoutAppNestedInput } from "../inputs/Acl_roleUpdateOneRequiredWithoutAppNestedInput";
import { App_action_buttonUpdateManyWithoutAppNestedInput } from "../inputs/App_action_buttonUpdateManyWithoutAppNestedInput";
import { App_administration_snippetUpdateManyWithoutAppNestedInput } from "../inputs/App_administration_snippetUpdateManyWithoutAppNestedInput";
import { App_cms_blockUpdateManyWithoutAppNestedInput } from "../inputs/App_cms_blockUpdateManyWithoutAppNestedInput";
import { App_flow_actionUpdateManyWithoutAppNestedInput } from "../inputs/App_flow_actionUpdateManyWithoutAppNestedInput";
import { App_flow_eventUpdateManyWithoutAppNestedInput } from "../inputs/App_flow_eventUpdateManyWithoutAppNestedInput";
import { App_payment_methodUpdateManyWithoutAppNestedInput } from "../inputs/App_payment_methodUpdateManyWithoutAppNestedInput";
import { App_script_conditionUpdateManyWithoutAppNestedInput } from "../inputs/App_script_conditionUpdateManyWithoutAppNestedInput";
import { App_shipping_methodUpdateManyWithoutAppNestedInput } from "../inputs/App_shipping_methodUpdateManyWithoutAppNestedInput";
import { App_templateUpdateManyWithoutAppNestedInput } from "../inputs/App_templateUpdateManyWithoutAppNestedInput";
import { App_translationUpdateManyWithoutAppNestedInput } from "../inputs/App_translationUpdateManyWithoutAppNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { Custom_entityUpdateManyWithoutAppNestedInput } from "../inputs/Custom_entityUpdateManyWithoutAppNestedInput";
import { Custom_field_setUpdateManyWithoutAppNestedInput } from "../inputs/Custom_field_setUpdateManyWithoutAppNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ScriptUpdateManyWithoutAppNestedInput } from "../inputs/ScriptUpdateManyWithoutAppNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { Tax_providerUpdateManyWithoutAppNestedInput } from "../inputs/Tax_providerUpdateManyWithoutAppNestedInput";
import { WebhookUpdateManyWithoutAppNestedInput } from "../inputs/WebhookUpdateManyWithoutAppNestedInput";

@TypeGraphQL.InputType("AppUpdateWithoutIntegrationInput", {})
export class AppUpdateWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  path?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  author?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  copyright?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  license?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  privacy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  version?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  base_app_url?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  allow_disable?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  configurable?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  icon?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  app_secret?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  modules?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  main_module?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  cookies?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  allowed_hosts?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  template_load_priority?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpdateOneRequiredWithoutAppNestedInput, {
    nullable: true
  })
  acl_role?: Acl_roleUpdateOneRequiredWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_action_button?: App_action_buttonUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_administration_snippet?: App_administration_snippetUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_cms_block?: App_cms_blockUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_flow_action?: App_flow_actionUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_flow_event?: App_flow_eventUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_script_condition?: App_script_conditionUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_shipping_method?: App_shipping_methodUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_templateUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_template?: App_templateUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_translationUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  app_translation?: App_translationUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  custom_entity?: Custom_entityUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  custom_field_set?: Custom_field_setUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => ScriptUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  script?: ScriptUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => Tax_providerUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  tax_provider?: Tax_providerUpdateManyWithoutAppNestedInput | undefined;

  @TypeGraphQL.Field(_type => WebhookUpdateManyWithoutAppNestedInput, {
    nullable: true
  })
  webhook?: WebhookUpdateManyWithoutAppNestedInput | undefined;
}
