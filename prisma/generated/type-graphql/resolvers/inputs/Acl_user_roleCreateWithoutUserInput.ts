import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateNestedOneWithoutAcl_user_roleInput } from "../inputs/Acl_roleCreateNestedOneWithoutAcl_user_roleInput";

@TypeGraphQL.InputType("Acl_user_roleCreateWithoutUserInput", {})
export class Acl_user_roleCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Acl_roleCreateNestedOneWithoutAcl_user_roleInput, {
    nullable: false
  })
  acl_role!: Acl_roleCreateNestedOneWithoutAcl_user_roleInput;
}
