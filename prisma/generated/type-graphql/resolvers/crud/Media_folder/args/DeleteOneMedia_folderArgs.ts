import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderWhereUniqueInput } from "../../../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMedia_folderArgs {
  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folderWhereUniqueInput;
}
