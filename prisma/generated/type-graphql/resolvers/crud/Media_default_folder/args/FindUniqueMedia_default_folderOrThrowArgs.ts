import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_default_folderWhereUniqueInput } from "../../../inputs/Media_default_folderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMedia_default_folderOrThrowArgs {
  @TypeGraphQL.Field(_type => Media_default_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_default_folderWhereUniqueInput;
}
