import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeCountOrderByAggregateInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCountOrderByAggregateInput";
import { Media_folder_configuration_media_thumbnail_sizeMaxOrderByAggregateInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeMaxOrderByAggregateInput";
import { Media_folder_configuration_media_thumbnail_sizeMinOrderByAggregateInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeOrderByWithAggregationInput", {})
export class Media_folder_configuration_media_thumbnail_sizeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_folder_configuration_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_thumbnail_size_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Media_folder_configuration_media_thumbnail_sizeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Media_folder_configuration_media_thumbnail_sizeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Media_folder_configuration_media_thumbnail_sizeMinOrderByAggregateInput | undefined;
}
