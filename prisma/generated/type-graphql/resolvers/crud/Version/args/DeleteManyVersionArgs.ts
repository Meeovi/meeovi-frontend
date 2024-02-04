import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionWhereInput } from "../../../inputs/VersionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVersionArgs {
  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;
}
