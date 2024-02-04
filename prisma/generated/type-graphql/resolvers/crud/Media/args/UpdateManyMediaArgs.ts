import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaUpdateManyMutationInput } from "../../../inputs/MediaUpdateManyMutationInput";
import { MediaWhereInput } from "../../../inputs/MediaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMediaArgs {
  @TypeGraphQL.Field(_type => MediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: MediaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
