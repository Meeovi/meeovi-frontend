import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailWhereUniqueInput } from "../../../inputs/Media_thumbnailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnailWhereUniqueInput;
}
