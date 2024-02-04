import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_transitionOrderByWithAggregationInput } from "../../../inputs/State_machine_transitionOrderByWithAggregationInput";
import { State_machine_transitionScalarWhereWithAggregatesInput } from "../../../inputs/State_machine_transitionScalarWhereWithAggregatesInput";
import { State_machine_transitionWhereInput } from "../../../inputs/State_machine_transitionWhereInput";
import { State_machine_transitionScalarFieldEnum } from "../../../../enums/State_machine_transitionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByState_machine_transitionArgs {
  @TypeGraphQL.Field(_type => State_machine_transitionWhereInput, {
    nullable: true
  })
  where?: State_machine_transitionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_transitionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: State_machine_transitionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [State_machine_transitionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "action_name" | "state_machine_id" | "from_state_id" | "to_state_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => State_machine_transitionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: State_machine_transitionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
