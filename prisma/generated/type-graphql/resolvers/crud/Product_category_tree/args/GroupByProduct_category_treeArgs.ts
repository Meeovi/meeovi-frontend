import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_category_treeOrderByWithAggregationInput } from "../../../inputs/Product_category_treeOrderByWithAggregationInput";
import { Product_category_treeScalarWhereWithAggregatesInput } from "../../../inputs/Product_category_treeScalarWhereWithAggregatesInput";
import { Product_category_treeWhereInput } from "../../../inputs/Product_category_treeWhereInput";
import { Product_category_treeScalarFieldEnum } from "../../../../enums/Product_category_treeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_category_treeArgs {
  @TypeGraphQL.Field(_type => Product_category_treeWhereInput, {
    nullable: true
  })
  where?: Product_category_treeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_category_treeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_id" | "product_version_id" | "category_id" | "category_version_id">;

  @TypeGraphQL.Field(_type => Product_category_treeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_category_treeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
