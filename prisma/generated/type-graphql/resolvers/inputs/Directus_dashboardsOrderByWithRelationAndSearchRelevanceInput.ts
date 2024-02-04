import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsOrderByRelevanceInput } from "../inputs/Directus_dashboardsOrderByRelevanceInput";
import { Directus_usersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Directus_usersOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_dashboardsOrderByWithRelationAndSearchRelevanceInput", {})
export class Directus_dashboardsOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => Directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  directus_users?: Directus_usersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Directus_dashboardsOrderByRelevanceInput | undefined;
}
