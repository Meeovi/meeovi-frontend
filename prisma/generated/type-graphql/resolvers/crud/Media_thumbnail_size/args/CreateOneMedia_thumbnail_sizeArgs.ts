import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeCreateInput } from "../../../inputs/Media_thumbnail_sizeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedia_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeCreateInput, {
    nullable: false
  })
  data!: Media_thumbnail_sizeCreateInput;
}
