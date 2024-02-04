import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagWhereInput } from "../../../inputs/Media_tagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMedia_tagArgs {
  @TypeGraphQL.Field(_type => Media_tagWhereInput, {
    nullable: true
  })
  where?: Media_tagWhereInput | undefined;
}
