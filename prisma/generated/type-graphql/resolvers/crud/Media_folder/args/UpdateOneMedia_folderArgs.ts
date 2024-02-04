import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderUpdateInput } from "../../../inputs/Media_folderUpdateInput";
import { Media_folderWhereUniqueInput } from "../../../inputs/Media_folderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMedia_folderArgs {
  @TypeGraphQL.Field(_type => Media_folderUpdateInput, {
    nullable: false
  })
  data!: Media_folderUpdateInput;

  @TypeGraphQL.Field(_type => Media_folderWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folderWhereUniqueInput;
}
