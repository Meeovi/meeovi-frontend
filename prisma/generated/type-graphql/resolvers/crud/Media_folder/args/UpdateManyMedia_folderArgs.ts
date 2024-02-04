import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderUpdateManyMutationInput } from "../../../inputs/Media_folderUpdateManyMutationInput";
import { Media_folderWhereInput } from "../../../inputs/Media_folderWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMedia_folderArgs {
  @TypeGraphQL.Field(_type => Media_folderUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_folderUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  where?: Media_folderWhereInput | undefined;
}
