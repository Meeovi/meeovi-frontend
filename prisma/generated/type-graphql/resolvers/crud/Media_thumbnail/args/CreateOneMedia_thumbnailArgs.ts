import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailCreateInput } from "../../../inputs/Media_thumbnailCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => Media_thumbnailCreateInput, {
    nullable: false
  })
  data!: Media_thumbnailCreateInput;
}
