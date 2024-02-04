import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsAvgOrderByAggregateInput } from "../inputs/Directus_collectionsAvgOrderByAggregateInput";
import { Directus_collectionsCountOrderByAggregateInput } from "../inputs/Directus_collectionsCountOrderByAggregateInput";
import { Directus_collectionsMaxOrderByAggregateInput } from "../inputs/Directus_collectionsMaxOrderByAggregateInput";
import { Directus_collectionsMinOrderByAggregateInput } from "../inputs/Directus_collectionsMinOrderByAggregateInput";
import { Directus_collectionsSumOrderByAggregateInput } from "../inputs/Directus_collectionsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_collectionsOrderByWithAggregationInput", {})
export class Directus_collectionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  collection?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  icon?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  note?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  display_template?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hidden?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  singleton?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  translations?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  archive_field?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  archive_app_filter?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  archive_value?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  unarchive_value?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  sort_field?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  accountability?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  color?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  item_duplication_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  sort?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  group?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  collapse?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  preview_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Directus_collectionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Directus_collectionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Directus_collectionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Directus_collectionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Directus_collectionsSumOrderByAggregateInput | undefined;
}
