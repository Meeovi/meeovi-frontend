import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeUpdateInput } from "../../../inputs/Media_thumbnail_sizeUpdateInput";
import { Media_thumbnail_sizeWhereUniqueInput } from "../../../inputs/Media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMedia_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeUpdateInput, {
    nullable: false
  })
  data!: Media_thumbnail_sizeUpdateInput;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnail_sizeWhereUniqueInput;
}
