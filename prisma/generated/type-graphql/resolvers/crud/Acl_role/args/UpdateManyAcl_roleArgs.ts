import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleUpdateManyMutationInput } from "../../../inputs/Acl_roleUpdateManyMutationInput";
import { Acl_roleWhereInput } from "../../../inputs/Acl_roleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAcl_roleArgs {
  @TypeGraphQL.Field(_type => Acl_roleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Acl_roleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;
}
