import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeUpdateManyMutationInput } from "../../../inputs/Media_thumbnail_sizeUpdateManyMutationInput";
import { Media_thumbnail_sizeWhereInput } from "../../../inputs/Media_thumbnail_sizeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMedia_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_thumbnail_sizeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  where?: Media_thumbnail_sizeWhereInput | undefined;
}
