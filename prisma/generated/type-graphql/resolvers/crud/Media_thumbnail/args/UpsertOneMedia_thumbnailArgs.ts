import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailCreateInput } from "../../../inputs/Media_thumbnailCreateInput";
import { Media_thumbnailUpdateInput } from "../../../inputs/Media_thumbnailUpdateInput";
import { Media_thumbnailWhereUniqueInput } from "../../../inputs/Media_thumbnailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnailWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_thumbnailCreateInput, {
    nullable: false
  })
  create!: Media_thumbnailCreateInput;

  @TypeGraphQL.Field(_type => Media_thumbnailUpdateInput, {
    nullable: false
  })
  update!: Media_thumbnailUpdateInput;
}
