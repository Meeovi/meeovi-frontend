import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configurationUpdateManyMutationInput } from "../../../inputs/Media_folder_configurationUpdateManyMutationInput";
import { Media_folder_configurationWhereInput } from "../../../inputs/Media_folder_configurationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMedia_folder_configurationArgs {
  @TypeGraphQL.Field(_type => Media_folder_configurationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_folder_configurationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Media_folder_configurationWhereInput, {
    nullable: true
  })
  where?: Media_folder_configurationWhereInput | undefined;
}
