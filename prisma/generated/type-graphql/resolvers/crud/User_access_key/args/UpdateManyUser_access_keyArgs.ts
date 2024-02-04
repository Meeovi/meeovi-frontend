import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyUpdateManyMutationInput } from "../../../inputs/User_access_keyUpdateManyMutationInput";
import { User_access_keyWhereInput } from "../../../inputs/User_access_keyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUser_access_keyArgs {
  @TypeGraphQL.Field(_type => User_access_keyUpdateManyMutationInput, {
    nullable: false
  })
  data!: User_access_keyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => User_access_keyWhereInput, {
    nullable: true
  })
  where?: User_access_keyWhereInput | undefined;
}
