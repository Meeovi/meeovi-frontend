import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_block_translationOrderByWithAggregationInput } from "../../../inputs/App_cms_block_translationOrderByWithAggregationInput";
import { App_cms_block_translationScalarWhereWithAggregatesInput } from "../../../inputs/App_cms_block_translationScalarWhereWithAggregatesInput";
import { App_cms_block_translationWhereInput } from "../../../inputs/App_cms_block_translationWhereInput";
import { App_cms_block_translationScalarFieldEnum } from "../../../../enums/App_cms_block_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_cms_block_translationArgs {
  @TypeGraphQL.Field(_type => App_cms_block_translationWhereInput, {
    nullable: true
  })
  where?: App_cms_block_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_cms_block_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"label" | "app_cms_block_id" | "language_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_cms_block_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_cms_block_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
