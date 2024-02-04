import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Media_folderOrderByWithRelationAndSearchRelevanceInput";
import { Media_folderWhereInput } from "../../../inputs/Media_folderWhereInput";
import { Media_folderWhereUniqueInput } from "../../../inputs/Media_folderWhereUniqueInput";
import { Media_folderScalarFieldEnum } from "../../../../enums/Media_folderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMedia_folderArgs {
  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_folderOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Media_folderOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: true
  })
  cursor?: Media_folderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Media_folderScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "parent_id" | "default_folder_id" | "name" | "child_count" | "path" | "media_folder_configuration_id" | "use_parent_configuration" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
