import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_eventOrderByWithAggregationInput } from "../../../inputs/App_flow_eventOrderByWithAggregationInput";
import { App_flow_eventScalarWhereWithAggregatesInput } from "../../../inputs/App_flow_eventScalarWhereWithAggregatesInput";
import { App_flow_eventWhereInput } from "../../../inputs/App_flow_eventWhereInput";
import { App_flow_eventScalarFieldEnum } from "../../../../enums/App_flow_eventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_flow_eventArgs {
  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  where?: App_flow_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_flow_eventOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "app_id" | "name" | "aware" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_flow_eventScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_flow_eventScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
