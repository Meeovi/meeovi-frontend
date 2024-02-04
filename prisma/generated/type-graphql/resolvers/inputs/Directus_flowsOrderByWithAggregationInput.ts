import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_flowsCountOrderByAggregateInput } from "../inputs/Directus_flowsCountOrderByAggregateInput";
import { Directus_flowsMaxOrderByAggregateInput } from "../inputs/Directus_flowsMaxOrderByAggregateInput";
import { Directus_flowsMinOrderByAggregateInput } from "../inputs/Directus_flowsMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_flowsOrderByWithAggregationInput", {})
export class Directus_flowsOrderByWithAggregationInput {
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
  icon?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  color?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  trigger?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  accountability?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  options?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  operation?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_created?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user_created?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Directus_flowsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Directus_flowsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Directus_flowsMinOrderByAggregateInput | undefined;
}
