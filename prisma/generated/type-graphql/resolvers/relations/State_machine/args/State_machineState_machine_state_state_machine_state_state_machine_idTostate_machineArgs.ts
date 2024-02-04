import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_stateOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/State_machine_stateOrderByWithRelationAndSearchRelevanceInput";
import { State_machine_stateWhereInput } from "../../../inputs/State_machine_stateWhereInput";
import { State_machine_stateWhereUniqueInput } from "../../../inputs/State_machine_stateWhereUniqueInput";
import { State_machine_stateScalarFieldEnum } from "../../../../enums/State_machine_stateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class State_machineState_machine_state_state_machine_state_state_machine_idTostate_machineArgs {
  @TypeGraphQL.Field(_type => State_machine_stateWhereInput, {
    nullable: true
  })
  where?: State_machine_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_stateOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: State_machine_stateOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateWhereUniqueInput, {
    nullable: true
  })
  cursor?: State_machine_stateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [State_machine_stateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "technical_name" | "state_machine_id" | "created_at" | "updated_at"> | undefined;
}
