import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationWhereInput } from "../inputs/App_flow_action_translationWhereInput";

@TypeGraphQL.InputType("App_flow_action_translationListRelationFilter", {})
export class App_flow_action_translationListRelationFilter {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereInput, {
    nullable: true
  })
  every?: App_flow_action_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationWhereInput, {
    nullable: true
  })
  some?: App_flow_action_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationWhereInput, {
    nullable: true
  })
  none?: App_flow_action_translationWhereInput | undefined;
}
