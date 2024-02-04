import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedManyWithoutAcl_roleInput } from "../inputs/AppCreateNestedManyWithoutAcl_roleInput";
import { Integration_roleCreateNestedManyWithoutAcl_roleInput } from "../inputs/Integration_roleCreateNestedManyWithoutAcl_roleInput";

@TypeGraphQL.InputType("Acl_roleCreateWithoutAcl_user_roleInput", {})
export class Acl_roleCreateWithoutAcl_user_roleInput {
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

  @TypeGraphQL.Field(_type => AppCreateNestedManyWithoutAcl_roleInput, {
    nullable: true
  })
  app?: AppCreateNestedManyWithoutAcl_roleInput | undefined;

  @TypeGraphQL.Field(_type => Integration_roleCreateNestedManyWithoutAcl_roleInput, {
    nullable: true
  })
  integration_role?: Integration_roleCreateNestedManyWithoutAcl_roleInput | undefined;
}
