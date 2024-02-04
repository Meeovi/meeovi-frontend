import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCountOrderByAggregateInput } from "../inputs/Category_tagCountOrderByAggregateInput";
import { Category_tagMaxOrderByAggregateInput } from "../inputs/Category_tagMaxOrderByAggregateInput";
import { Category_tagMinOrderByAggregateInput } from "../inputs/Category_tagMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Category_tagOrderByWithAggregationInput", {})
export class Category_tagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Category_tagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Category_tagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Category_tagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Category_tagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Category_tagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Category_tagMinOrderByAggregateInput | undefined;
}
