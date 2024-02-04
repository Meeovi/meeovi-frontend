import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsCountOrderByAggregateInput } from "../inputs/Directus_dashboardsCountOrderByAggregateInput";
import { Directus_dashboardsMaxOrderByAggregateInput } from "../inputs/Directus_dashboardsMaxOrderByAggregateInput";
import { Directus_dashboardsMinOrderByAggregateInput } from "../inputs/Directus_dashboardsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_dashboardsOrderByWithAggregationInput", {})
export class Directus_dashboardsOrderByWithAggregationInput {
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
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  note?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user_created?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  color?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Directus_dashboardsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Directus_dashboardsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Directus_dashboardsMinOrderByAggregateInput | undefined;
}
