import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/State_machineOrderByWithRelationAndSearchRelevanceInput";
import { State_machineWhereInput } from "../../../inputs/State_machineWhereInput";
import { State_machineWhereUniqueInput } from "../../../inputs/State_machineWhereUniqueInput";
import { State_machineScalarFieldEnum } from "../../../../enums/State_machineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstState_machineArgs {
  @TypeGraphQL.Field(_type => State_machineWhereInput, {
    nullable: true
  })
  where?: State_machineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machineOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: State_machineOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => State_machineWhereUniqueInput, {
    nullable: true
  })
  cursor?: State_machineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [State_machineScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "technical_name" | "initial_state_id" | "created_at" | "updated_at"> | undefined;
}
