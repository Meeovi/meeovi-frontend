import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_buttonOrderByWithAggregationInput } from "../../../inputs/App_action_buttonOrderByWithAggregationInput";
import { App_action_buttonScalarWhereWithAggregatesInput } from "../../../inputs/App_action_buttonScalarWhereWithAggregatesInput";
import { App_action_buttonWhereInput } from "../../../inputs/App_action_buttonWhereInput";
import { App_action_buttonScalarFieldEnum } from "../../../../enums/App_action_buttonScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_action_buttonArgs {
  @TypeGraphQL.Field(_type => App_action_buttonWhereInput, {
    nullable: true
  })
  where?: App_action_buttonWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_action_buttonOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "entity" | "view" | "url" | "action" | "open_new_tab" | "app_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_action_buttonScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_action_buttonScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
