import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldAvgOrderByAggregateInput } from "../inputs/Custom_fieldAvgOrderByAggregateInput";
import { Custom_fieldCountOrderByAggregateInput } from "../inputs/Custom_fieldCountOrderByAggregateInput";
import { Custom_fieldMaxOrderByAggregateInput } from "../inputs/Custom_fieldMaxOrderByAggregateInput";
import { Custom_fieldMinOrderByAggregateInput } from "../inputs/Custom_fieldMinOrderByAggregateInput";
import { Custom_fieldSumOrderByAggregateInput } from "../inputs/Custom_fieldSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_fieldOrderByWithAggregationInput", {})
export class Custom_fieldOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  set_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_customer_write?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_cart_expose?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Custom_fieldCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Custom_fieldAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Custom_fieldMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Custom_fieldMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Custom_fieldSumOrderByAggregateInput | undefined;
}
