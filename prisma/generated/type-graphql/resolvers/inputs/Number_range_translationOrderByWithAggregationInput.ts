import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationCountOrderByAggregateInput } from "../inputs/Number_range_translationCountOrderByAggregateInput";
import { Number_range_translationMaxOrderByAggregateInput } from "../inputs/Number_range_translationMaxOrderByAggregateInput";
import { Number_range_translationMinOrderByAggregateInput } from "../inputs/Number_range_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_range_translationOrderByWithAggregationInput", {})
export class Number_range_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number_range_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Number_range_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Number_range_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Number_range_translationMinOrderByAggregateInput | undefined;
}
