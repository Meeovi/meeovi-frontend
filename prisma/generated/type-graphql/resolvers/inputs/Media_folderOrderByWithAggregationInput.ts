import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderAvgOrderByAggregateInput } from "../inputs/Media_folderAvgOrderByAggregateInput";
import { Media_folderCountOrderByAggregateInput } from "../inputs/Media_folderCountOrderByAggregateInput";
import { Media_folderMaxOrderByAggregateInput } from "../inputs/Media_folderMaxOrderByAggregateInput";
import { Media_folderMinOrderByAggregateInput } from "../inputs/Media_folderMinOrderByAggregateInput";
import { Media_folderSumOrderByAggregateInput } from "../inputs/Media_folderSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_folderOrderByWithAggregationInput", {})
export class Media_folderOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  default_folder_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  child_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  path?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_folder_configuration_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  use_parent_configuration?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Media_folderCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Media_folderCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Media_folderAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Media_folderMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Media_folderMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Media_folderSumOrderByAggregateInput | undefined;
}
