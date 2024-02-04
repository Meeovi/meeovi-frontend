import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineOrderByWithAggregationInput } from "../../../inputs/State_machineOrderByWithAggregationInput";
import { State_machineScalarWhereWithAggregatesInput } from "../../../inputs/State_machineScalarWhereWithAggregatesInput";
import { State_machineWhereInput } from "../../../inputs/State_machineWhereInput";
import { State_machineScalarFieldEnum } from "../../../../enums/State_machineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByState_machineArgs {
  @TypeGraphQL.Field(_type => State_machineWhereInput, {
    nullable: true
  })
  where?: State_machineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machineOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: State_machineOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [State_machineScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "technical_name" | "initial_state_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => State_machineScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: State_machineScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
