import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryUpdateManyMutationInput } from "../../../inputs/User_recoveryUpdateManyMutationInput";
import { User_recoveryWhereInput } from "../../../inputs/User_recoveryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUser_recoveryArgs {
  @TypeGraphQL.Field(_type => User_recoveryUpdateManyMutationInput, {
    nullable: false
  })
  data!: User_recoveryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => User_recoveryWhereInput, {
    nullable: true
  })
  where?: User_recoveryWhereInput | undefined;
}
