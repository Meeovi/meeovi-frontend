import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configUpdateInput } from "../../../inputs/System_configUpdateInput";
import { System_configWhereUniqueInput } from "../../../inputs/System_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSystem_configArgs {
  @TypeGraphQL.Field(_type => System_configUpdateInput, {
    nullable: false
  })
  data!: System_configUpdateInput;

  @TypeGraphQL.Field(_type => System_configWhereUniqueInput, {
    nullable: false
  })
  where!: System_configWhereUniqueInput;
}
