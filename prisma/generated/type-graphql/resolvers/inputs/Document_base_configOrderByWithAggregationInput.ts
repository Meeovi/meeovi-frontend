import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCountOrderByAggregateInput } from "../inputs/Document_base_configCountOrderByAggregateInput";
import { Document_base_configMaxOrderByAggregateInput } from "../inputs/Document_base_configMaxOrderByAggregateInput";
import { Document_base_configMinOrderByAggregateInput } from "../inputs/Document_base_configMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Document_base_configOrderByWithAggregationInput", {})
export class Document_base_configOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  filename_prefix?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  filename_suffix?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  document_number?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  global?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  document_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  logo_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Document_base_configCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Document_base_configMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Document_base_configMinOrderByAggregateInput | undefined;
}
