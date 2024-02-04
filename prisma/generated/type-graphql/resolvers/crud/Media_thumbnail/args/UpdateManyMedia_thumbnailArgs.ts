import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailUpdateManyMutationInput } from "../../../inputs/Media_thumbnailUpdateManyMutationInput";
import { Media_thumbnailWhereInput } from "../../../inputs/Media_thumbnailWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => Media_thumbnailUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_thumbnailUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Media_thumbnailWhereInput, {
    nullable: true
  })
  where?: Media_thumbnailWhereInput | undefined;
}
