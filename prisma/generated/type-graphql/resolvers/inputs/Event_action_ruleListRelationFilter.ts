import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleWhereInput } from "../inputs/Event_action_ruleWhereInput";

@TypeGraphQL.InputType("Event_action_ruleListRelationFilter", {})
export class Event_action_ruleListRelationFilter {
  @TypeGraphQL.Field(_type => Event_action_ruleWhereInput, {
    nullable: true
  })
  every?: Event_action_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleWhereInput, {
    nullable: true
  })
  some?: Event_action_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleWhereInput, {
    nullable: true
  })
  none?: Event_action_ruleWhereInput | undefined;
}
