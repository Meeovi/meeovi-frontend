import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeOrderByRelevanceInput } from "../inputs/Delivery_timeOrderByRelevanceInput";
import { Delivery_time_translationOrderByRelationAggregateInput } from "../inputs/Delivery_time_translationOrderByRelationAggregateInput";
import { Shipping_methodOrderByRelationAggregateInput } from "../inputs/Shipping_methodOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Delivery_timeOrderByWithRelationAndSearchRelevanceInput", {})
export class Delivery_timeOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => Delivery_time_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  delivery_time_translation?: Delivery_time_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Delivery_timeOrderByRelevanceInput | undefined;
}
