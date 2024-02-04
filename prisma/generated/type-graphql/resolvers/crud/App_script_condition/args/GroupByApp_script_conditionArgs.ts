import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_conditionOrderByWithAggregationInput } from "../../../inputs/App_script_conditionOrderByWithAggregationInput";
import { App_script_conditionScalarWhereWithAggregatesInput } from "../../../inputs/App_script_conditionScalarWhereWithAggregatesInput";
import { App_script_conditionWhereInput } from "../../../inputs/App_script_conditionWhereInput";
import { App_script_conditionScalarFieldEnum } from "../../../../enums/App_script_conditionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_script_conditionArgs {
  @TypeGraphQL.Field(_type => App_script_conditionWhereInput, {
    nullable: true
  })
  where?: App_script_conditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_script_conditionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "app_id" | "identifier" | "active" | "group" | "script" | "constraints" | "config" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_script_conditionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_script_conditionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
