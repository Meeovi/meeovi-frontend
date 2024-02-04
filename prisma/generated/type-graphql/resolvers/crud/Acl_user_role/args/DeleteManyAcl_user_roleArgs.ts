import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_user_roleWhereInput } from "../../../inputs/Acl_user_roleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAcl_user_roleArgs {
  @TypeGraphQL.Field(_type => Acl_user_roleWhereInput, {
    nullable: true
  })
  where?: Acl_user_roleWhereInput | undefined;
}
