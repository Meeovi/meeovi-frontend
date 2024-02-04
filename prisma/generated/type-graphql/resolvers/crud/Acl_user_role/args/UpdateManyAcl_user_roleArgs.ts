import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_user_roleUpdateManyMutationInput } from "../../../inputs/Acl_user_roleUpdateManyMutationInput";
import { Acl_user_roleWhereInput } from "../../../inputs/Acl_user_roleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAcl_user_roleArgs {
  @TypeGraphQL.Field(_type => Acl_user_roleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Acl_user_roleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Acl_user_roleWhereInput, {
    nullable: true
  })
  where?: Acl_user_roleWhereInput | undefined;
}
