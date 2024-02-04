import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configurationOrderByWithAggregationInput } from "../../../inputs/Media_folder_configurationOrderByWithAggregationInput";
import { Media_folder_configurationScalarWhereWithAggregatesInput } from "../../../inputs/Media_folder_configurationScalarWhereWithAggregatesInput";
import { Media_folder_configurationWhereInput } from "../../../inputs/Media_folder_configurationWhereInput";
import { Media_folder_configurationScalarFieldEnum } from "../../../../enums/Media_folder_configurationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedia_folder_configurationArgs {
  @TypeGraphQL.Field(_type => Media_folder_configurationWhereInput, {
    nullable: true
  })
  where?: Media_folder_configurationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configurationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Media_folder_configurationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configurationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "create_thumbnails" | "thumbnail_quality" | "media_thumbnail_sizes_ro" | "keep_aspect_ratio" | "private" | "no_association" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Media_folder_configurationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Media_folder_configurationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
