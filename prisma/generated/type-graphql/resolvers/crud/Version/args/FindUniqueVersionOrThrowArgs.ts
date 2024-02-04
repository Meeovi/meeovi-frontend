import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionWhereUniqueInput } from "../../../inputs/VersionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVersionOrThrowArgs {
  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;
}
