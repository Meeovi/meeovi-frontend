import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_assigned_productsOrderByWithAggregationInput } from "../../../inputs/Product_cross_selling_assigned_productsOrderByWithAggregationInput";
import { Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput } from "../../../inputs/Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput";
import { Product_cross_selling_assigned_productsWhereInput } from "../../../inputs/Product_cross_selling_assigned_productsWhereInput";
import { Product_cross_selling_assigned_productsScalarFieldEnum } from "../../../../enums/Product_cross_selling_assigned_productsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_cross_selling_assigned_productsArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereInput, {
    nullable: true
  })
  where?: Product_cross_selling_assigned_productsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_cross_selling_assigned_productsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "cross_selling_id" | "product_id" | "product_version_id" | "position" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
