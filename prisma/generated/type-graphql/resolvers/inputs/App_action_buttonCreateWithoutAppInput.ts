import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationCreateNestedManyWithoutApp_action_buttonInput } from "../inputs/App_action_button_translationCreateNestedManyWithoutApp_action_buttonInput";

@TypeGraphQL.InputType("App_action_buttonCreateWithoutAppInput", {})
export class App_action_buttonCreateWithoutAppInput {
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
    nullable: true
  })
  open_new_tab?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationCreateNestedManyWithoutApp_action_buttonInput, {
    nullable: true
  })
  app_action_button_translation?: App_action_button_translationCreateNestedManyWithoutApp_action_buttonInput | undefined;
}
