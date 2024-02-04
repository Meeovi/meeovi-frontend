import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configCreateInput } from "../../../inputs/System_configCreateInput";
import { System_configUpdateInput } from "../../../inputs/System_configUpdateInput";
import { System_configWhereUniqueInput } from "../../../inputs/System_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSystem_configArgs {
  @TypeGraphQL.Field(_type => System_configWhereUniqueInput, {
    nullable: false
  })
  where!: System_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => System_configCreateInput, {
    nullable: false
  })
  create!: System_configCreateInput;

  @TypeGraphQL.Field(_type => System_configUpdateInput, {
    nullable: false
  })
  update!: System_configUpdateInput;
}
