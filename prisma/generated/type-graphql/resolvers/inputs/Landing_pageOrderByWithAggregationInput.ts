import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCountOrderByAggregateInput } from "../inputs/Landing_pageCountOrderByAggregateInput";
import { Landing_pageMaxOrderByAggregateInput } from "../inputs/Landing_pageMaxOrderByAggregateInput";
import { Landing_pageMinOrderByAggregateInput } from "../inputs/Landing_pageMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Landing_pageOrderByWithAggregationInput", {})
export class Landing_pageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cms_page_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_page_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Landing_pageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Landing_pageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Landing_pageMinOrderByAggregateInput | undefined;
}
