import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagUpdateManyMutationInput } from "../../../inputs/Media_tagUpdateManyMutationInput";
import { Media_tagWhereInput } from "../../../inputs/Media_tagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMedia_tagArgs {
  @TypeGraphQL.Field(_type => Media_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_tagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Media_tagWhereInput, {
    nullable: true
  })
  where?: Media_tagWhereInput | undefined;
}
