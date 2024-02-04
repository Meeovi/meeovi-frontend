import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_fileOrderByRelevanceInput } from "../inputs/Import_export_fileOrderByRelevanceInput";
import { Import_export_logOrderByRelationAggregateInput } from "../inputs/Import_export_logOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_fileOrderByWithRelationAndSearchRelevanceInput", {})
export class Import_export_fileOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  original_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expire_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  size?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  access_token?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logOrderByRelationAggregateInput, {
    nullable: true
  })
  import_export_log?: Import_export_logOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Import_export_fileOrderByRelevanceInput | undefined;
}
