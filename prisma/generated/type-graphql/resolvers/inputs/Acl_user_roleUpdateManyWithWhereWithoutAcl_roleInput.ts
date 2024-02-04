import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleScalarWhereInput } from "../inputs/Acl_user_roleScalarWhereInput";
import { Acl_user_roleUpdateManyMutationInput } from "../inputs/Acl_user_roleUpdateManyMutationInput";

@TypeGraphQL.InputType("Acl_user_roleUpdateManyWithWhereWithoutAcl_roleInput", {})
export class Acl_user_roleUpdateManyWithWhereWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => Acl_user_roleScalarWhereInput, {
    nullable: false
  })
  where!: Acl_user_roleScalarWhereInput;

  @TypeGraphQL.Field(_type => Acl_user_roleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Acl_user_roleUpdateManyMutationInput;
}
