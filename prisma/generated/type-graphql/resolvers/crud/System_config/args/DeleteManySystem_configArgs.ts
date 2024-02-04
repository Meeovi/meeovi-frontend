import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configWhereInput } from "../../../inputs/System_configWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySystem_configArgs {
  @TypeGraphQL.Field(_type => System_configWhereInput, {
    nullable: true
  })
  where?: System_configWhereInput | undefined;
}
