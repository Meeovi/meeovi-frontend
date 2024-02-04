import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_templateCountOrderByAggregateInput } from "../inputs/Flow_templateCountOrderByAggregateInput";
import { Flow_templateMaxOrderByAggregateInput } from "../inputs/Flow_templateMaxOrderByAggregateInput";
import { Flow_templateMinOrderByAggregateInput } from "../inputs/Flow_templateMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Flow_templateOrderByWithAggregationInput", {})
export class Flow_templateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Flow_templateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Flow_templateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Flow_templateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Flow_templateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Flow_templateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Flow_templateMinOrderByAggregateInput | undefined;
}
