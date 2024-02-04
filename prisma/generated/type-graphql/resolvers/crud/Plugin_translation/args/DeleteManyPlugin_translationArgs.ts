import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Plugin_translationWhereInput } from "../../../inputs/Plugin_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlugin_translationArgs {
  @TypeGraphQL.Field(_type => Plugin_translationWhereInput, {
    nullable: true
  })
  where?: Plugin_translationWhereInput | undefined;
}
