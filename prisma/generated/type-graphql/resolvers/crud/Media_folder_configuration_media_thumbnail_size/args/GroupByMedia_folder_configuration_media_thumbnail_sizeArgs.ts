import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configuration_media_thumbnail_sizeOrderByWithAggregationInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeOrderByWithAggregationInput";
import { Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput";
import { Media_folder_configuration_media_thumbnail_sizeWhereInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeWhereInput";
import { Media_folder_configuration_media_thumbnail_sizeScalarFieldEnum } from "../../../../enums/Media_folder_configuration_media_thumbnail_sizeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedia_folder_configuration_media_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  where?: Media_folder_configuration_media_thumbnail_sizeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Media_folder_configuration_media_thumbnail_sizeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"media_folder_configuration_id" | "media_thumbnail_size_id">;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Media_folder_configuration_media_thumbnail_sizeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
