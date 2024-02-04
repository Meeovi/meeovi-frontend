import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configurationWhereInput } from "../../../inputs/Media_folder_configurationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMedia_folder_configurationArgs {
  @TypeGraphQL.Field(_type => Media_folder_configurationWhereInput, {
    nullable: true
  })
  where?: Media_folder_configurationWhereInput | undefined;
}
