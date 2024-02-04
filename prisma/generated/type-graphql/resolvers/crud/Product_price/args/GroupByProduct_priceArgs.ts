import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceOrderByWithAggregationInput } from "../../../inputs/Product_priceOrderByWithAggregationInput";
import { Product_priceScalarWhereWithAggregatesInput } from "../../../inputs/Product_priceScalarWhereWithAggregatesInput";
import { Product_priceWhereInput } from "../../../inputs/Product_priceWhereInput";
import { Product_priceScalarFieldEnum } from "../../../../enums/Product_priceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_priceArgs {
  @TypeGraphQL.Field(_type => Product_priceWhereInput, {
    nullable: true
  })
  where?: Product_priceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_priceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_priceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "rule_id" | "product_id" | "product_version_id" | "price" | "quantity_start" | "quantity_end" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_priceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_priceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
