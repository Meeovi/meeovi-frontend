import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationWhereInput } from "../../../inputs/Media_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMedia_translationArgs {
  @TypeGraphQL.Field(_type => Media_translationWhereInput, {
    nullable: true
  })
  where?: Media_translationWhereInput | undefined;
}
