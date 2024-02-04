import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityOrderByWithAggregationInput } from "../../../inputs/Product_visibilityOrderByWithAggregationInput";
import { Product_visibilityScalarWhereWithAggregatesInput } from "../../../inputs/Product_visibilityScalarWhereWithAggregatesInput";
import { Product_visibilityWhereInput } from "../../../inputs/Product_visibilityWhereInput";
import { Product_visibilityScalarFieldEnum } from "../../../../enums/Product_visibilityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => Product_visibilityWhereInput, {
    nullable: true
  })
  where?: Product_visibilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_visibilityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "product_id" | "product_version_id" | "sales_channel_id" | "visibility" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_visibilityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_visibilityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
