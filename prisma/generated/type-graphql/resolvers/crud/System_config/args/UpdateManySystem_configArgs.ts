import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configUpdateManyMutationInput } from "../../../inputs/System_configUpdateManyMutationInput";
import { System_configWhereInput } from "../../../inputs/System_configWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySystem_configArgs {
  @TypeGraphQL.Field(_type => System_configUpdateManyMutationInput, {
    nullable: false
  })
  data!: System_configUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => System_configWhereInput, {
    nullable: true
  })
  where?: System_configWhereInput | undefined;
}
