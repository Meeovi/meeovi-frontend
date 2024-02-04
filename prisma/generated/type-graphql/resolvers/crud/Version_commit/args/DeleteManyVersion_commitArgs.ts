import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitWhereInput } from "../../../inputs/Version_commitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVersion_commitArgs {
  @TypeGraphQL.Field(_type => Version_commitWhereInput, {
    nullable: true
  })
  where?: Version_commitWhereInput | undefined;
}
