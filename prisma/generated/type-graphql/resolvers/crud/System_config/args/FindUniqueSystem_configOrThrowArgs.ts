import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configWhereUniqueInput } from "../../../inputs/System_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSystem_configOrThrowArgs {
  @TypeGraphQL.Field(_type => System_configWhereUniqueInput, {
    nullable: false
  })
  where!: System_configWhereUniqueInput;
}
