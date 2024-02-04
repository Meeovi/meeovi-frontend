import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderWhereInput } from "../../../inputs/Media_folderWhereInput";

@TypeGraphQL.ArgsType()
export class Media_default_folderMedia_folderArgs {
  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;
}
