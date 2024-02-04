import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configUpdateManyMutationInput } from "../../../inputs/User_configUpdateManyMutationInput";
import { User_configWhereInput } from "../../../inputs/User_configWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUser_configArgs {
  @TypeGraphQL.Field(_type => User_configUpdateManyMutationInput, {
    nullable: false
  })
  data!: User_configUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => User_configWhereInput, {
    nullable: true
  })
  where?: User_configWhereInput | undefined;
}
