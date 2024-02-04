import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput";
import { Media_folder_configurationWhereInput } from "../../../inputs/Media_folder_configurationWhereInput";
import { Media_folder_configurationWhereUniqueInput } from "../../../inputs/Media_folder_configurationWhereUniqueInput";
import { Media_folder_configurationScalarFieldEnum } from "../../../../enums/Media_folder_configurationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMedia_folder_configurationArgs {
  @TypeGraphQL.Field(_type => Media_folder_configurationWhereInput, {
    nullable: true
  })
  where?: Media_folder_configurationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Media_folder_configurationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configurationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "create_thumbnails" | "thumbnail_quality" | "media_thumbnail_sizes_ro" | "keep_aspect_ratio" | "private" | "no_association" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
