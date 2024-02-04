import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_fileAvgOrderByAggregateInput } from "../inputs/Import_export_fileAvgOrderByAggregateInput";
import { Import_export_fileCountOrderByAggregateInput } from "../inputs/Import_export_fileCountOrderByAggregateInput";
import { Import_export_fileMaxOrderByAggregateInput } from "../inputs/Import_export_fileMaxOrderByAggregateInput";
import { Import_export_fileMinOrderByAggregateInput } from "../inputs/Import_export_fileMinOrderByAggregateInput";
import { Import_export_fileSumOrderByAggregateInput } from "../inputs/Import_export_fileSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_fileOrderByWithAggregationInput", {})
export class Import_export_fileOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Import_export_fileCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Import_export_fileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Import_export_fileAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Import_export_fileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Import_export_fileMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Import_export_fileSumOrderByAggregateInput | undefined;
}
