import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationAvgOrderByAggregateInput } from "../inputs/Media_folder_configurationAvgOrderByAggregateInput";
import { Media_folder_configurationCountOrderByAggregateInput } from "../inputs/Media_folder_configurationCountOrderByAggregateInput";
import { Media_folder_configurationMaxOrderByAggregateInput } from "../inputs/Media_folder_configurationMaxOrderByAggregateInput";
import { Media_folder_configurationMinOrderByAggregateInput } from "../inputs/Media_folder_configurationMinOrderByAggregateInput";
import { Media_folder_configurationSumOrderByAggregateInput } from "../inputs/Media_folder_configurationSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_folder_configurationOrderByWithAggregationInput", {})
export class Media_folder_configurationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  create_thumbnails?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  thumbnail_quality?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_thumbnail_sizes_ro?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  keep_aspect_ratio?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  private?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  no_association?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Media_folder_configurationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Media_folder_configurationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Media_folder_configurationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Media_folder_configurationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Media_folder_configurationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Media_folder_configurationSumOrderByAggregateInput | undefined;
}
