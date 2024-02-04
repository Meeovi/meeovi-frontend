import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_rolesOrderByRelevanceInput } from "../inputs/Directus_rolesOrderByRelevanceInput";
import { Directus_usersOrderByRelationAggregateInput } from "../inputs/Directus_usersOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_rolesOrderByWithRelationAndSearchRelevanceInput", {})
export class Directus_rolesOrderByWithRelationAndSearchRelevanceInput {
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
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  ip_access?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enforce_tfa?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  admin_access?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_access?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Directus_usersOrderByRelationAggregateInput, {
    nullable: true
  })
  directus_users?: Directus_usersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Directus_rolesOrderByRelevanceInput | undefined;
}
