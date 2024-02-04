import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationCountOrderByAggregateInput } from "../inputs/Import_export_profile_translationCountOrderByAggregateInput";
import { Import_export_profile_translationMaxOrderByAggregateInput } from "../inputs/Import_export_profile_translationMaxOrderByAggregateInput";
import { Import_export_profile_translationMinOrderByAggregateInput } from "../inputs/Import_export_profile_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_profile_translationOrderByWithAggregationInput", {})
export class Import_export_profile_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  import_export_profile_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Import_export_profile_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Import_export_profile_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Import_export_profile_translationMinOrderByAggregateInput | undefined;
}
