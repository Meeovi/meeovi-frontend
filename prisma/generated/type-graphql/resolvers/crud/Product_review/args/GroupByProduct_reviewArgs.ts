import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewOrderByWithAggregationInput } from "../../../inputs/Product_reviewOrderByWithAggregationInput";
import { Product_reviewScalarWhereWithAggregatesInput } from "../../../inputs/Product_reviewScalarWhereWithAggregatesInput";
import { Product_reviewWhereInput } from "../../../inputs/Product_reviewWhereInput";
import { Product_reviewScalarFieldEnum } from "../../../../enums/Product_reviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_reviewArgs {
  @TypeGraphQL.Field(_type => Product_reviewWhereInput, {
    nullable: true
  })
  where?: Product_reviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_reviewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "product_id" | "customer_id" | "sales_channel_id" | "language_id" | "external_user" | "external_email" | "title" | "content" | "points" | "status" | "comment" | "custom_fields" | "updated_at" | "created_at" | "product_version_id">;

  @TypeGraphQL.Field(_type => Product_reviewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_reviewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
