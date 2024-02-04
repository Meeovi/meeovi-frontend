import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logAvgOrderByAggregateInput } from "../inputs/Import_export_logAvgOrderByAggregateInput";
import { Import_export_logCountOrderByAggregateInput } from "../inputs/Import_export_logCountOrderByAggregateInput";
import { Import_export_logMaxOrderByAggregateInput } from "../inputs/Import_export_logMaxOrderByAggregateInput";
import { Import_export_logMinOrderByAggregateInput } from "../inputs/Import_export_logMinOrderByAggregateInput";
import { Import_export_logSumOrderByAggregateInput } from "../inputs/Import_export_logSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_logOrderByWithAggregationInput", {})
export class Import_export_logOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Import_export_logCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Import_export_logCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Import_export_logAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Import_export_logMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Import_export_logMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Import_export_logSumOrderByAggregateInput | undefined;
}
