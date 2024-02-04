import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionNullableRelationFilter } from "../inputs/App_flow_actionNullableRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FlowRelationFilter } from "../inputs/FlowRelationFilter";
import { Flow_sequenceListRelationFilter } from "../inputs/Flow_sequenceListRelationFilter";
import { Flow_sequenceNullableRelationFilter } from "../inputs/Flow_sequenceNullableRelationFilter";
import { Flow_sequenceWhereInput } from "../inputs/Flow_sequenceWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { RuleNullableRelationFilter } from "../inputs/RuleNullableRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Flow_sequenceWhereUniqueInput", {})
export class Flow_sequenceWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereInput], {
    nullable: true
  })
  AND?: Flow_sequenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereInput], {
    nullable: true
  })
  OR?: Flow_sequenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereInput], {
    nullable: true
  })
  NOT?: Flow_sequenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  flow_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  app_flow_action_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  rule_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  action_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  display_group?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  true_case?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionNullableRelationFilter, {
    nullable: true
  })
  app_flow_action?: App_flow_actionNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlowRelationFilter, {
    nullable: true
  })
  flow?: FlowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceNullableRelationFilter, {
    nullable: true
  })
  flow_sequence?: Flow_sequenceNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceListRelationFilter, {
    nullable: true
  })
  other_flow_sequence?: Flow_sequenceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RuleNullableRelationFilter, {
    nullable: true
  })
  rule?: RuleNullableRelationFilter | undefined;
}
