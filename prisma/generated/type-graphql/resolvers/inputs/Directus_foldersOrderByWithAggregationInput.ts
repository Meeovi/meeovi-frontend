import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCountOrderByAggregateInput } from "../inputs/Directus_foldersCountOrderByAggregateInput";
import { Directus_foldersMaxOrderByAggregateInput } from "../inputs/Directus_foldersMaxOrderByAggregateInput";
import { Directus_foldersMinOrderByAggregateInput } from "../inputs/Directus_foldersMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_foldersOrderByWithAggregationInput", {})
export class Directus_foldersOrderByWithAggregationInput {
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
  parent?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Directus_foldersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Directus_foldersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Directus_foldersMinOrderByAggregateInput | undefined;
}
