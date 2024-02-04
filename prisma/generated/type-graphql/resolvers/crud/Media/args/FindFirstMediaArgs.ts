import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MediaOrderByWithRelationAndSearchRelevanceInput";
import { MediaWhereInput } from "../../../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../../../inputs/MediaWhereUniqueInput";
import { MediaScalarFieldEnum } from "../../../../enums/MediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMediaArgs {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MediaOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MediaOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  cursor?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MediaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "user_id" | "media_folder_id" | "mime_type" | "file_extension" | "file_size" | "meta_data" | "file_name" | "media_type" | "thumbnails_ro" | "private" | "uploaded_at" | "created_at" | "updated_at" | "path"> | undefined;
}
