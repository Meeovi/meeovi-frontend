import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_blockOrderByWithAggregationInput } from "../../../inputs/App_cms_blockOrderByWithAggregationInput";
import { App_cms_blockScalarWhereWithAggregatesInput } from "../../../inputs/App_cms_blockScalarWhereWithAggregatesInput";
import { App_cms_blockWhereInput } from "../../../inputs/App_cms_blockWhereInput";
import { App_cms_blockScalarFieldEnum } from "../../../../enums/App_cms_blockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_cms_blockArgs {
  @TypeGraphQL.Field(_type => App_cms_blockWhereInput, {
    nullable: true
  })
  where?: App_cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_cms_blockOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "app_id" | "name" | "block" | "template" | "styles" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_cms_blockScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_cms_blockScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
