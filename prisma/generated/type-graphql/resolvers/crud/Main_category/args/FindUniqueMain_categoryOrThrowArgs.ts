import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryWhereUniqueInput } from "../../../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMain_categoryOrThrowArgs {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;
}
