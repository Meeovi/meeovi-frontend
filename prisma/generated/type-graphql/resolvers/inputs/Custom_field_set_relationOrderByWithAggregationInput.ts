import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_set_relationCountOrderByAggregateInput } from "../inputs/Custom_field_set_relationCountOrderByAggregateInput";
import { Custom_field_set_relationMaxOrderByAggregateInput } from "../inputs/Custom_field_set_relationMaxOrderByAggregateInput";
import { Custom_field_set_relationMinOrderByAggregateInput } from "../inputs/Custom_field_set_relationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_field_set_relationOrderByWithAggregationInput", {})
export class Custom_field_set_relationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  set_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  entity_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Custom_field_set_relationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Custom_field_set_relationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Custom_field_set_relationMinOrderByAggregateInput | undefined;
}
