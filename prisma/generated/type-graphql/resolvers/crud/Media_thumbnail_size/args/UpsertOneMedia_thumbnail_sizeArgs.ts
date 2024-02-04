import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeCreateInput } from "../../../inputs/Media_thumbnail_sizeCreateInput";
import { Media_thumbnail_sizeUpdateInput } from "../../../inputs/Media_thumbnail_sizeUpdateInput";
import { Media_thumbnail_sizeWhereUniqueInput } from "../../../inputs/Media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedia_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnail_sizeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeCreateInput, {
    nullable: false
  })
  create!: Media_thumbnail_sizeCreateInput;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeUpdateInput, {
    nullable: false
  })
  update!: Media_thumbnail_sizeUpdateInput;
}
