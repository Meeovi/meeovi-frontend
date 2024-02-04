import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_stateOrderByWithAggregationInput } from "../../../inputs/State_machine_stateOrderByWithAggregationInput";
import { State_machine_stateScalarWhereWithAggregatesInput } from "../../../inputs/State_machine_stateScalarWhereWithAggregatesInput";
import { State_machine_stateWhereInput } from "../../../inputs/State_machine_stateWhereInput";
import { State_machine_stateScalarFieldEnum } from "../../../../enums/State_machine_stateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByState_machine_stateArgs {
  @TypeGraphQL.Field(_type => State_machine_stateWhereInput, {
    nullable: true
  })
  where?: State_machine_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_stateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: State_machine_stateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [State_machine_stateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "technical_name" | "state_machine_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => State_machine_stateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: State_machine_stateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
