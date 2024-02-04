import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_configOrderByWithAggregationInput } from "../../../inputs/Product_search_configOrderByWithAggregationInput";
import { Product_search_configScalarWhereWithAggregatesInput } from "../../../inputs/Product_search_configScalarWhereWithAggregatesInput";
import { Product_search_configWhereInput } from "../../../inputs/Product_search_configWhereInput";
import { Product_search_configScalarFieldEnum } from "../../../../enums/Product_search_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_search_configArgs {
  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  where?: Product_search_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_search_configOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "language_id" | "and_logic" | "min_search_length" | "excluded_terms" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_search_configScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_search_configScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
