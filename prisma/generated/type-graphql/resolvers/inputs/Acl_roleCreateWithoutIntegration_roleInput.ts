import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateNestedManyWithoutAcl_roleInput } from "../inputs/Acl_user_roleCreateNestedManyWithoutAcl_roleInput";
import { AppCreateNestedManyWithoutAcl_roleInput } from "../inputs/AppCreateNestedManyWithoutAcl_roleInput";

@TypeGraphQL.InputType("Acl_roleCreateWithoutIntegration_roleInput", {})
export class Acl_roleCreateWithoutIntegration_roleInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  privileges!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deleted_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleCreateNestedManyWithoutAcl_roleInput, {
    nullable: true
  })
  acl_user_role?: Acl_user_roleCreateNestedManyWithoutAcl_roleInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateNestedManyWithoutAcl_roleInput, {
    nullable: true
  })
  app?: AppCreateNestedManyWithoutAcl_roleInput | undefined;
}
