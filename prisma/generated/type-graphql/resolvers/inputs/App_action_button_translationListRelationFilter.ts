import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationWhereInput } from "../inputs/App_action_button_translationWhereInput";

@TypeGraphQL.InputType("App_action_button_translationListRelationFilter", {})
export class App_action_button_translationListRelationFilter {
  @TypeGraphQL.Field(_type => App_action_button_translationWhereInput, {
    nullable: true
  })
  every?: App_action_button_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationWhereInput, {
    nullable: true
  })
  some?: App_action_button_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationWhereInput, {
    nullable: true
  })
  none?: App_action_button_translationWhereInput | undefined;
}
