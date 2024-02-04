import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_historyOrderByWithAggregationInput } from "../../../inputs/State_machine_historyOrderByWithAggregationInput";
import { State_machine_historyScalarWhereWithAggregatesInput } from "../../../inputs/State_machine_historyScalarWhereWithAggregatesInput";
import { State_machine_historyWhereInput } from "../../../inputs/State_machine_historyWhereInput";
import { State_machine_historyScalarFieldEnum } from "../../../../enums/State_machine_historyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByState_machine_historyArgs {
  @TypeGraphQL.Field(_type => State_machine_historyWhereInput, {
    nullable: true
  })
  where?: State_machine_historyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_historyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: State_machine_historyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [State_machine_historyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "state_machine_id" | "entity_name" | "entity_id" | "from_state_id" | "to_state_id" | "action_name" | "user_id" | "created_at" | "updated_at" | "referenced_id" | "referenced_version_id">;

  @TypeGraphQL.Field(_type => State_machine_historyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: State_machine_historyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
