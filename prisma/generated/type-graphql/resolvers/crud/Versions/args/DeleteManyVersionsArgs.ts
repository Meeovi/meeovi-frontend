import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsWhereInput } from "../../../inputs/VersionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;
}
