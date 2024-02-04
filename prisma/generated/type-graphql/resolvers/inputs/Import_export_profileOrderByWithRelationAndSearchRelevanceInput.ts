import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logOrderByRelationAggregateInput } from "../inputs/Import_export_logOrderByRelationAggregateInput";
import { Import_export_profileOrderByRelevanceInput } from "../inputs/Import_export_profileOrderByRelevanceInput";
import { Import_export_profile_translationOrderByRelationAggregateInput } from "../inputs/Import_export_profile_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_profileOrderByWithRelationAndSearchRelevanceInput", {})
export class Import_export_profileOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  system_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  source_entity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  file_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  delimiter?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  enclosure?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  mapping?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  update_by?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logOrderByRelationAggregateInput, {
    nullable: true
  })
  import_export_log?: Import_export_logOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  import_export_profile_translation?: Import_export_profile_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Import_export_profileOrderByRelevanceInput | undefined;
}
