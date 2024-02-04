import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesWhereUniqueInput } from "../../../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDirectus_filesArgs {
  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_filesWhereUniqueInput;
}
