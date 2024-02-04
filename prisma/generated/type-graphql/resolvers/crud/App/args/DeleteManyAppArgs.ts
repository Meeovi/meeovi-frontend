import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppWhereInput } from "../../../inputs/AppWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAppArgs {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
