import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCountOrderByAggregateInput } from "../inputs/Customer_groupCountOrderByAggregateInput";
import { Customer_groupMaxOrderByAggregateInput } from "../inputs/Customer_groupMaxOrderByAggregateInput";
import { Customer_groupMinOrderByAggregateInput } from "../inputs/Customer_groupMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_groupOrderByWithAggregationInput", {})
export class Customer_groupOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_gross?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  registration_active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_groupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_groupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_groupMinOrderByAggregateInput | undefined;
}
