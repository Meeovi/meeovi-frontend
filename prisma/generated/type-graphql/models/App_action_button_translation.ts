import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_action_button } from "../models/App_action_button";
import { Language } from "../models/Language";

@TypeGraphQL.ObjectType("App_action_button_translation", {})
export class App_action_button_translation {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  app_action_button_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  app_action_button?: App_action_button;

  language?: Language;
}
