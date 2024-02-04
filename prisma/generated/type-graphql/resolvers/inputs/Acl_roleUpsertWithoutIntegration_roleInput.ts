import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateWithoutIntegration_roleInput } from "../inputs/Acl_roleCreateWithoutIntegration_roleInput";
import { Acl_roleUpdateWithoutIntegration_roleInput } from "../inputs/Acl_roleUpdateWithoutIntegration_roleInput";
import { Acl_roleWhereInput } from "../inputs/Acl_roleWhereInput";

@TypeGraphQL.InputType("Acl_roleUpsertWithoutIntegration_roleInput", {})
export class Acl_roleUpsertWithoutIntegration_roleInput {
  @TypeGraphQL.Field(_type => Acl_roleUpdateWithoutIntegration_roleInput, {
    nullable: false
  })
  update!: Acl_roleUpdateWithoutIntegration_roleInput;

  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutIntegration_roleInput, {
    nullable: false
  })
  create!: Acl_roleCreateWithoutIntegration_roleInput;

  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;
}
