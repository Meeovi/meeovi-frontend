import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_actionOrderByWithAggregationInput } from "../../../inputs/App_flow_actionOrderByWithAggregationInput";
import { App_flow_actionScalarWhereWithAggregatesInput } from "../../../inputs/App_flow_actionScalarWhereWithAggregatesInput";
import { App_flow_actionWhereInput } from "../../../inputs/App_flow_actionWhereInput";
import { App_flow_actionScalarFieldEnum } from "../../../../enums/App_flow_actionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_flow_actionArgs {
  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  where?: App_flow_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_flow_actionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "app_id" | "name" | "badge" | "url" | "delayable" | "parameters" | "config" | "headers" | "requirements" | "icon" | "sw_icon" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_flow_actionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_flow_actionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
