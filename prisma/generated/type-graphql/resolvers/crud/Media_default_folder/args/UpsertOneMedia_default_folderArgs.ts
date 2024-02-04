import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_default_folderCreateInput } from "../../../inputs/Media_default_folderCreateInput";
import { Media_default_folderUpdateInput } from "../../../inputs/Media_default_folderUpdateInput";
import { Media_default_folderWhereUniqueInput } from "../../../inputs/Media_default_folderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedia_default_folderArgs {
  @TypeGraphQL.Field(_type => Media_default_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_default_folderWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_default_folderCreateInput, {
    nullable: false
  })
  create!: Media_default_folderCreateInput;

  @TypeGraphQL.Field(_type => Media_default_folderUpdateInput, {
    nullable: false
  })
  update!: Media_default_folderUpdateInput;
}
