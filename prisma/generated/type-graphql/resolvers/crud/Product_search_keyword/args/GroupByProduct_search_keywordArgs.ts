import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_keywordOrderByWithAggregationInput } from "../../../inputs/Product_search_keywordOrderByWithAggregationInput";
import { Product_search_keywordScalarWhereWithAggregatesInput } from "../../../inputs/Product_search_keywordScalarWhereWithAggregatesInput";
import { Product_search_keywordWhereInput } from "../../../inputs/Product_search_keywordWhereInput";
import { Product_search_keywordScalarFieldEnum } from "../../../../enums/Product_search_keywordScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_search_keywordArgs {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereInput, {
    nullable: true
  })
  where?: Product_search_keywordWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_search_keywordOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "language_id" | "product_id" | "product_version_id" | "keyword" | "ranking" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_search_keywordScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_search_keywordScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
