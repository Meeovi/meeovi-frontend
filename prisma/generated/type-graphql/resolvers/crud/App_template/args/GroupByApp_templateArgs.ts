import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateOrderByWithAggregationInput } from "../../../inputs/App_templateOrderByWithAggregationInput";
import { App_templateScalarWhereWithAggregatesInput } from "../../../inputs/App_templateScalarWhereWithAggregatesInput";
import { App_templateWhereInput } from "../../../inputs/App_templateWhereInput";
import { App_templateScalarFieldEnum } from "../../../../enums/App_templateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_templateArgs {
  @TypeGraphQL.Field(_type => App_templateWhereInput, {
    nullable: true
  })
  where?: App_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_templateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_templateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "template" | "path" | "active" | "app_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_templateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_templateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
