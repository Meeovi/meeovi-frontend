import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutApp_flow_action_translationInput } from "../inputs/LanguageCreateNestedOneWithoutApp_flow_action_translationInput";

@TypeGraphQL.InputType("App_flow_action_translationCreateWithoutApp_flow_actionInput", {})
export class App_flow_action_translationCreateWithoutApp_flow_actionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  headline?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutApp_flow_action_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutApp_flow_action_translationInput;
}
