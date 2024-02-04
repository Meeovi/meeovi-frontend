import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingOrderByWithAggregationInput } from "../../../inputs/Product_sortingOrderByWithAggregationInput";
import { Product_sortingScalarWhereWithAggregatesInput } from "../../../inputs/Product_sortingScalarWhereWithAggregatesInput";
import { Product_sortingWhereInput } from "../../../inputs/Product_sortingWhereInput";
import { Product_sortingScalarFieldEnum } from "../../../../enums/Product_sortingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_sortingArgs {
  @TypeGraphQL.Field(_type => Product_sortingWhereInput, {
    nullable: true
  })
  where?: Product_sortingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_sortingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_sortingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sortingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "url_key" | "priority" | "active" | "fields" | "created_at" | "locked" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_sortingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_sortingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
