import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_default_folderWhereInput } from "../../../inputs/Media_default_folderWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMedia_default_folderArgs {
  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  where?: Media_default_folderWhereInput | undefined;
}
