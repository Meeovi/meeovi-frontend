import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_fileOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Import_export_fileOrderByWithRelationAndSearchRelevanceInput";
import { Import_export_logOrderByRelationAggregateInput } from "../inputs/Import_export_logOrderByRelationAggregateInput";
import { Import_export_logOrderByRelevanceInput } from "../inputs/Import_export_logOrderByRelevanceInput";
import { Import_export_profileOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Import_export_profileOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_logOrderByWithRelationAndSearchRelevanceInput", {})
export class Import_export_logOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  activity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  records?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  username?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profile_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profile_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  file_id?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  result?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  invalid_records_log_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  import_export_file?: Import_export_fileOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  import_export_log?: Import_export_logOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logOrderByRelationAggregateInput, {
    nullable: true
  })
  other_import_export_log?: Import_export_logOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  import_export_profile?: Import_export_profileOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Import_export_logOrderByRelevanceInput | undefined;
}
