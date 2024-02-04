import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeWhereUniqueInput } from "../../../inputs/Media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMedia_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnail_sizeWhereUniqueInput;
}
