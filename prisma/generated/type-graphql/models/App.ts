import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Acl_role } from "../models/Acl_role";
import { App_action_button } from "../models/App_action_button";
import { App_administration_snippet } from "../models/App_administration_snippet";
import { App_cms_block } from "../models/App_cms_block";
import { App_flow_action } from "../models/App_flow_action";
import { App_flow_event } from "../models/App_flow_event";
import { App_payment_method } from "../models/App_payment_method";
import { App_script_condition } from "../models/App_script_condition";
import { App_shipping_method } from "../models/App_shipping_method";
import { App_template } from "../models/App_template";
import { App_translation } from "../models/App_translation";
import { Custom_entity } from "../models/Custom_entity";
import { Custom_field_set } from "../models/Custom_field_set";
import { Integration } from "../models/Integration";
import { Script } from "../models/Script";
import { Tax_provider } from "../models/Tax_provider";
import { Webhook } from "../models/Webhook";
import { AppCount } from "../resolvers/outputs/AppCount";

@TypeGraphQL.ObjectType("App", {})
export class App {
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
  author?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyright?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  license?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privacy?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  version!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  base_app_url?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  allow_disable!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  configurable!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  icon?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  app_secret?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modules?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  main_module?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cookies?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allowed_hosts?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  integration_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  acl_role_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  template_load_priority?: number | null;

  acl_role?: Acl_role;

  integration?: Integration;

  app_action_button?: App_action_button[];

  app_administration_snippet?: App_administration_snippet[];

  app_cms_block?: App_cms_block[];

  app_flow_action?: App_flow_action[];

  app_flow_event?: App_flow_event[];

  app_payment_method?: App_payment_method[];

  app_script_condition?: App_script_condition[];

  app_shipping_method?: App_shipping_method[];

  app_template?: App_template[];

  app_translation?: App_translation[];

  custom_entity?: Custom_entity[];

  custom_field_set?: Custom_field_set[];

  script?: Script[];

  tax_provider?: Tax_provider[];

  webhook?: Webhook[];

  @TypeGraphQL.Field(_type => AppCount, {
    nullable: true
  })
  _count?: AppCount | null;
}
