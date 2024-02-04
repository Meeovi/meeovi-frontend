import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_activityAvgOrderByAggregateInput } from "../inputs/Directus_activityAvgOrderByAggregateInput";
import { Directus_activityCountOrderByAggregateInput } from "../inputs/Directus_activityCountOrderByAggregateInput";
import { Directus_activityMaxOrderByAggregateInput } from "../inputs/Directus_activityMaxOrderByAggregateInput";
import { Directus_activityMinOrderByAggregateInput } from "../inputs/Directus_activityMinOrderByAggregateInput";
import { Directus_activitySumOrderByAggregateInput } from "../inputs/Directus_activitySumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_activityOrderByWithAggregationInput", {})
export class Directus_activityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  action?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  ip?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user_agent?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  collection?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  comment?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  origin?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Directus_activityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Directus_activityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_activityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Directus_activityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_activityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Directus_activityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_activityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Directus_activityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_activitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Directus_activitySumOrderByAggregateInput | undefined;
}
