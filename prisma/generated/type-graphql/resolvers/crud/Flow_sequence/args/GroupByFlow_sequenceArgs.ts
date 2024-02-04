import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceOrderByWithAggregationInput } from "../../../inputs/Flow_sequenceOrderByWithAggregationInput";
import { Flow_sequenceScalarWhereWithAggregatesInput } from "../../../inputs/Flow_sequenceScalarWhereWithAggregatesInput";
import { Flow_sequenceWhereInput } from "../../../inputs/Flow_sequenceWhereInput";
import { Flow_sequenceScalarFieldEnum } from "../../../../enums/Flow_sequenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlow_sequenceArgs {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  where?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Flow_sequenceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "flow_id" | "app_flow_action_id" | "parent_id" | "rule_id" | "action_name" | "config" | "position" | "display_group" | "true_case" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Flow_sequenceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Flow_sequenceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
