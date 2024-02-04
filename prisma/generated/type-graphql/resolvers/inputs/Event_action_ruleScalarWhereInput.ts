import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Event_action_ruleScalarWhereInput", {})
export class Event_action_ruleScalarWhereInput {
  @TypeGraphQL.Field(_type => [Event_action_ruleScalarWhereInput], {
    nullable: true
  })
  AND?: Event_action_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleScalarWhereInput], {
    nullable: true
  })
  OR?: Event_action_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleScalarWhereInput], {
    nullable: true
  })
  NOT?: Event_action_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  event_action_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  rule_id?: BytesFilter | undefined;
}
