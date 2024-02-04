import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Refresh_tokenWhereUniqueInput } from "../../../inputs/Refresh_tokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneRefresh_tokenArgs {
  @TypeGraphQL.Field(_type => Refresh_tokenWhereUniqueInput, {
    nullable: false
  })
  where!: Refresh_tokenWhereUniqueInput;
}
