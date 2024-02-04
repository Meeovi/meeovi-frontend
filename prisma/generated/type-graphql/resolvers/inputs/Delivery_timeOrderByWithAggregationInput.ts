import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeAvgOrderByAggregateInput } from "../inputs/Delivery_timeAvgOrderByAggregateInput";
import { Delivery_timeCountOrderByAggregateInput } from "../inputs/Delivery_timeCountOrderByAggregateInput";
import { Delivery_timeMaxOrderByAggregateInput } from "../inputs/Delivery_timeMaxOrderByAggregateInput";
import { Delivery_timeMinOrderByAggregateInput } from "../inputs/Delivery_timeMinOrderByAggregateInput";
import { Delivery_timeSumOrderByAggregateInput } from "../inputs/Delivery_timeSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Delivery_timeOrderByWithAggregationInput", {})
export class Delivery_timeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  min?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  max?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Delivery_timeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Delivery_timeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Delivery_timeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Delivery_timeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Delivery_timeSumOrderByAggregateInput | undefined;
}
