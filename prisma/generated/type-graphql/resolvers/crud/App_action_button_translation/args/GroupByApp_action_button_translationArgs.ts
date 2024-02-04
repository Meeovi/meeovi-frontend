import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_button_translationOrderByWithAggregationInput } from "../../../inputs/App_action_button_translationOrderByWithAggregationInput";
import { App_action_button_translationScalarWhereWithAggregatesInput } from "../../../inputs/App_action_button_translationScalarWhereWithAggregatesInput";
import { App_action_button_translationWhereInput } from "../../../inputs/App_action_button_translationWhereInput";
import { App_action_button_translationScalarFieldEnum } from "../../../../enums/App_action_button_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_action_button_translationArgs {
  @TypeGraphQL.Field(_type => App_action_button_translationWhereInput, {
    nullable: true
  })
  where?: App_action_button_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_action_button_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"label" | "created_at" | "updated_at" | "app_action_button_id" | "language_id">;

  @TypeGraphQL.Field(_type => App_action_button_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_action_button_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
