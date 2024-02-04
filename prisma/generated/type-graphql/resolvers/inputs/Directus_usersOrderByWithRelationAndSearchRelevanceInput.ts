import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsOrderByRelationAggregateInput } from "../inputs/Directus_dashboardsOrderByRelationAggregateInput";
import { Directus_filesOrderByRelationAggregateInput } from "../inputs/Directus_filesOrderByRelationAggregateInput";
import { Directus_flowsOrderByRelationAggregateInput } from "../inputs/Directus_flowsOrderByRelationAggregateInput";
import { Directus_rolesOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Directus_rolesOrderByWithRelationAndSearchRelevanceInput";
import { Directus_usersOrderByRelevanceInput } from "../inputs/Directus_usersOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_usersOrderByWithRelationAndSearchRelevanceInput", {})
export class Directus_usersOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  first_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  password?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  location?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tags?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  avatar?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  language?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  theme?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tfa_secret?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  role?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  token?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_access?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_page?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_identifier?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  auth_data?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  email_notifications?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsOrderByRelationAggregateInput, {
    nullable: true
  })
  directus_dashboards?: Directus_dashboardsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesOrderByRelationAggregateInput, {
    nullable: true
  })
  directus_files_directus_files_modified_byTodirectus_users?: Directus_filesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_filesOrderByRelationAggregateInput, {
    nullable: true
  })
  directus_files_directus_files_uploaded_byTodirectus_users?: Directus_filesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsOrderByRelationAggregateInput, {
    nullable: true
  })
  directus_flows?: Directus_flowsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  directus_roles?: Directus_rolesOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Directus_usersOrderByRelevanceInput | undefined;
}
