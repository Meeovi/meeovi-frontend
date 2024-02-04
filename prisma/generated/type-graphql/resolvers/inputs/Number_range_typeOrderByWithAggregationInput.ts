import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeCountOrderByAggregateInput } from "../inputs/Number_range_typeCountOrderByAggregateInput";
import { Number_range_typeMaxOrderByAggregateInput } from "../inputs/Number_range_typeMaxOrderByAggregateInput";
import { Number_range_typeMinOrderByAggregateInput } from "../inputs/Number_range_typeMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_range_typeOrderByWithAggregationInput", {})
export class Number_range_typeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  technical_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  global?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Number_range_typeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Number_range_typeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Number_range_typeMinOrderByAggregateInput | undefined;
}
