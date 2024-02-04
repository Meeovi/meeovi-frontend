import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_translationOrderByWithAggregationInput } from "../../../inputs/State_machine_translationOrderByWithAggregationInput";
import { State_machine_translationScalarWhereWithAggregatesInput } from "../../../inputs/State_machine_translationScalarWhereWithAggregatesInput";
import { State_machine_translationWhereInput } from "../../../inputs/State_machine_translationWhereInput";
import { State_machine_translationScalarFieldEnum } from "../../../../enums/State_machine_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByState_machine_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_translationWhereInput, {
    nullable: true
  })
  where?: State_machine_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: State_machine_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [State_machine_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"language_id" | "state_machine_id" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => State_machine_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: State_machine_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
