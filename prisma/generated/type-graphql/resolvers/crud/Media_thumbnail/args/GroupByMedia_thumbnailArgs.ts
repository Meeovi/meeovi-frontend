import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailOrderByWithAggregationInput } from "../../../inputs/Media_thumbnailOrderByWithAggregationInput";
import { Media_thumbnailScalarWhereWithAggregatesInput } from "../../../inputs/Media_thumbnailScalarWhereWithAggregatesInput";
import { Media_thumbnailWhereInput } from "../../../inputs/Media_thumbnailWhereInput";
import { Media_thumbnailScalarFieldEnum } from "../../../../enums/Media_thumbnailScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereInput, {
    nullable: true
  })
  where?: Media_thumbnailWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Media_thumbnailOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "media_id" | "width" | "height" | "custom_fields" | "created_at" | "updated_at" | "path">;

  @TypeGraphQL.Field(_type => Media_thumbnailScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Media_thumbnailScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
