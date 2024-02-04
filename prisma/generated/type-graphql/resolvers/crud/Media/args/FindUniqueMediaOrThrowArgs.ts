import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaWhereUniqueInput } from "../../../inputs/MediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMediaOrThrowArgs {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;
}
