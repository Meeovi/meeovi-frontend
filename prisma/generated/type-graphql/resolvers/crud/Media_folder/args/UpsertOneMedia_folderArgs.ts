import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderCreateInput } from "../../../inputs/Media_folderCreateInput";
import { Media_folderUpdateInput } from "../../../inputs/Media_folderUpdateInput";
import { Media_folderWhereUniqueInput } from "../../../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedia_folderArgs {
  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folderWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folderCreateInput, {
    nullable: false
  })
  create!: Media_folderCreateInput;

  @TypeGraphQL.Field(_type => Media_folderUpdateInput, {
    nullable: false
  })
  update!: Media_folderUpdateInput;
}
