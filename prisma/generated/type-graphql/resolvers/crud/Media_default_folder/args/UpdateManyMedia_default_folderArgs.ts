import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_default_folderUpdateManyMutationInput } from "../../../inputs/Media_default_folderUpdateManyMutationInput";
import { Media_default_folderWhereInput } from "../../../inputs/Media_default_folderWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMedia_default_folderArgs {
  @TypeGraphQL.Field(_type => Media_default_folderUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_default_folderUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  where?: Media_default_folderWhereInput | undefined;
}
