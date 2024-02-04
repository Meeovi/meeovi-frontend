import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailWhereInput } from "../../../inputs/Media_thumbnailWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereInput, {
    nullable: true
  })
  where?: Media_thumbnailWhereInput | undefined;
}
