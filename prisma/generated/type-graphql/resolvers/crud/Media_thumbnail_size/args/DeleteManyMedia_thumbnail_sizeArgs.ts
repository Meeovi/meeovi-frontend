import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeWhereInput } from "../../../inputs/Media_thumbnail_sizeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMedia_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  where?: Media_thumbnail_sizeWhereInput | undefined;
}
