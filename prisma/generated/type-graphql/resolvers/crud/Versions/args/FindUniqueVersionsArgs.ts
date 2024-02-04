import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsWhereUniqueInput } from "../../../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;
}
