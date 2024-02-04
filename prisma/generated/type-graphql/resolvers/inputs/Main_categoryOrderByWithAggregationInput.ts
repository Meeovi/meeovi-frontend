import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCountOrderByAggregateInput } from "../inputs/Main_categoryCountOrderByAggregateInput";
import { Main_categoryMaxOrderByAggregateInput } from "../inputs/Main_categoryMaxOrderByAggregateInput";
import { Main_categoryMinOrderByAggregateInput } from "../inputs/Main_categoryMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Main_categoryOrderByWithAggregationInput", {})
export class Main_categoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

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
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Main_categoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Main_categoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Main_categoryMinOrderByAggregateInput | undefined;
}
