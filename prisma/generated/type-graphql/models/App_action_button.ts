import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App } from "../models/App";
import { App_action_button_translation } from "../models/App_action_button_translation";
import { App_action_buttonCount } from "../resolvers/outputs/App_action_buttonCount";

@TypeGraphQL.ObjectType("App_action_button", {})
export class App_action_button {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  view!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  action!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  open_new_tab!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  app_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  app?: App;

  app_action_button_translation?: App_action_button_translation[];

  @TypeGraphQL.Field(_type => App_action_buttonCount, {
    nullable: true
  })
  _count?: App_action_buttonCount | null;
}
