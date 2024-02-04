import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_transitionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/State_machine_transitionOrderByWithRelationAndSearchRelevanceInput";
import { State_machine_transitionWhereInput } from "../../../inputs/State_machine_transitionWhereInput";
import { State_machine_transitionWhereUniqueInput } from "../../../inputs/State_machine_transitionWhereUniqueInput";
import { State_machine_transitionScalarFieldEnum } from "../../../../enums/State_machine_transitionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class State_machineState_machine_transitionArgs {
  @TypeGraphQL.Field(_type => State_machine_transitionWhereInput, {
    nullable: true
  })
  where?: State_machine_transitionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_transitionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: State_machine_transitionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => State_machine_transitionWhereUniqueInput, {
    nullable: true
  })
  cursor?: State_machine_transitionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [State_machine_transitionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "action_name" | "state_machine_id" | "from_state_id" | "to_state_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
