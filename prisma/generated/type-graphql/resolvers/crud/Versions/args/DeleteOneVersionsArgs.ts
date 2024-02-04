import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsWhereUniqueInput } from "../../../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;
}
