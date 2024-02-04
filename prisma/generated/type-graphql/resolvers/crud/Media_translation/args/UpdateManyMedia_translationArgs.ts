import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationUpdateManyMutationInput } from "../../../inputs/Media_translationUpdateManyMutationInput";
import { Media_translationWhereInput } from "../../../inputs/Media_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMedia_translationArgs {
  @TypeGraphQL.Field(_type => Media_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Media_translationWhereInput, {
    nullable: true
  })
  where?: Media_translationWhereInput | undefined;
}
