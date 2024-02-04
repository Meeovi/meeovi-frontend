import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleUpdateWithoutIntegration_roleInput } from "../inputs/Acl_roleUpdateWithoutIntegration_roleInput";
import { Acl_roleWhereInput } from "../inputs/Acl_roleWhereInput";

@TypeGraphQL.InputType("Acl_roleUpdateToOneWithWhereWithoutIntegration_roleInput", {})
export class Acl_roleUpdateToOneWithWhereWithoutIntegration_roleInput {
  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpdateWithoutIntegration_roleInput, {
    nullable: false
  })
  data!: Acl_roleUpdateWithoutIntegration_roleInput;
}
