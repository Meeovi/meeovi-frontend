import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Media_thumbnailOrderByWithRelationAndSearchRelevanceInput";
import { Media_thumbnailWhereInput } from "../../../inputs/Media_thumbnailWhereInput";
import { Media_thumbnailWhereUniqueInput } from "../../../inputs/Media_thumbnailWhereUniqueInput";
import { Media_thumbnailScalarFieldEnum } from "../../../../enums/Media_thumbnailScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereInput, {
    nullable: true
  })
  where?: Media_thumbnailWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Media_thumbnailOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailWhereUniqueInput, {
    nullable: true
  })
  cursor?: Media_thumbnailWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "media_id" | "width" | "height" | "custom_fields" | "created_at" | "updated_at" | "path"> | undefined;
}
