import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_state_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/State_machine_state_translationOrderByWithRelationAndSearchRelevanceInput";
import { State_machine_state_translationWhereInput } from "../../../inputs/State_machine_state_translationWhereInput";
import { State_machine_state_translationWhereUniqueInput } from "../../../inputs/State_machine_state_translationWhereUniqueInput";
import { State_machine_state_translationScalarFieldEnum } from "../../../../enums/State_machine_state_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyState_machine_state_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_state_translationWhereInput, {
    nullable: true
  })
  where?: State_machine_state_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_state_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: State_machine_state_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => State_machine_state_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: State_machine_state_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [State_machine_state_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"language_id" | "state_machine_state_id" | "name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
