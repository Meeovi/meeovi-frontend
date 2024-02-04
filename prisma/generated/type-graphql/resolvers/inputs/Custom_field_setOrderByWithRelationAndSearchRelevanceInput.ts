import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AppOrderByWithRelationAndSearchRelevanceInput";
import { Custom_fieldOrderByRelationAggregateInput } from "../inputs/Custom_fieldOrderByRelationAggregateInput";
import { Custom_field_setOrderByRelevanceInput } from "../inputs/Custom_field_setOrderByRelevanceInput";
import { Custom_field_set_relationOrderByRelationAggregateInput } from "../inputs/Custom_field_set_relationOrderByRelationAggregateInput";
import { Product_custom_field_setOrderByRelationAggregateInput } from "../inputs/Product_custom_field_setOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_field_setOrderByWithRelationAndSearchRelevanceInput", {})
export class Custom_field_setOrderByWithRelationAndSearchRelevanceInput {
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
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Custom_fieldOrderByRelationAggregateInput, {
    nullable: true
  })
  custom_field?: Custom_fieldOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  app?: AppOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationOrderByRelationAggregateInput, {
    nullable: true
  })
  custom_field_set_relation?: Custom_field_set_relationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setOrderByRelationAggregateInput, {
    nullable: true
  })
  product_custom_field_set?: Product_custom_field_setOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Custom_field_setOrderByRelevanceInput | undefined;
}
