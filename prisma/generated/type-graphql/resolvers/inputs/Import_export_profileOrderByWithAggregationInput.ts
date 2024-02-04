import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profileCountOrderByAggregateInput } from "../inputs/Import_export_profileCountOrderByAggregateInput";
import { Import_export_profileMaxOrderByAggregateInput } from "../inputs/Import_export_profileMaxOrderByAggregateInput";
import { Import_export_profileMinOrderByAggregateInput } from "../inputs/Import_export_profileMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Import_export_profileOrderByWithAggregationInput", {})
export class Import_export_profileOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Import_export_profileCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Import_export_profileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Import_export_profileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Import_export_profileMinOrderByAggregateInput | undefined;
}
