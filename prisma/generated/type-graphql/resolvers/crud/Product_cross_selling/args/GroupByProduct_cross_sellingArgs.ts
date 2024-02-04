import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingOrderByWithAggregationInput } from "../../../inputs/Product_cross_sellingOrderByWithAggregationInput";
import { Product_cross_sellingScalarWhereWithAggregatesInput } from "../../../inputs/Product_cross_sellingScalarWhereWithAggregatesInput";
import { Product_cross_sellingWhereInput } from "../../../inputs/Product_cross_sellingWhereInput";
import { Product_cross_sellingScalarFieldEnum } from "../../../../enums/Product_cross_sellingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_cross_sellingArgs {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  where?: Product_cross_sellingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_cross_sellingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "position" | "sort_by" | "sort_direction" | "active" | "limit" | "product_id" | "product_version_id" | "product_stream_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_cross_sellingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_cross_sellingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
