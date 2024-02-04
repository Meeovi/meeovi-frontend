import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaOrderByWithAggregationInput } from "../../../inputs/MediaOrderByWithAggregationInput";
import { MediaScalarWhereWithAggregatesInput } from "../../../inputs/MediaScalarWhereWithAggregatesInput";
import { MediaWhereInput } from "../../../inputs/MediaWhereInput";
import { MediaScalarFieldEnum } from "../../../../enums/MediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMediaArgs {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MediaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MediaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "user_id" | "media_folder_id" | "mime_type" | "file_extension" | "file_size" | "meta_data" | "file_name" | "media_type" | "thumbnails_ro" | "private" | "uploaded_at" | "created_at" | "updated_at" | "path">;

  @TypeGraphQL.Field(_type => MediaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MediaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
