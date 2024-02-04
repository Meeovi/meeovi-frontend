import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutAcl_user_roleInput } from "../inputs/UserCreateNestedOneWithoutAcl_user_roleInput";

@TypeGraphQL.InputType("Acl_user_roleCreateWithoutAcl_roleInput", {})
export class Acl_user_roleCreateWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAcl_user_roleInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAcl_user_roleInput;
}
