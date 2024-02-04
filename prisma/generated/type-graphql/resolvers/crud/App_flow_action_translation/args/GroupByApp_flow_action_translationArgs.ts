import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_action_translationOrderByWithAggregationInput } from "../../../inputs/App_flow_action_translationOrderByWithAggregationInput";
import { App_flow_action_translationScalarWhereWithAggregatesInput } from "../../../inputs/App_flow_action_translationScalarWhereWithAggregatesInput";
import { App_flow_action_translationWhereInput } from "../../../inputs/App_flow_action_translationWhereInput";
import { App_flow_action_translationScalarFieldEnum } from "../../../../enums/App_flow_action_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_flow_action_translationArgs {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereInput, {
    nullable: true
  })
  where?: App_flow_action_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_flow_action_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"app_flow_action_id" | "language_id" | "label" | "description" | "headline" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_flow_action_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_flow_action_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
