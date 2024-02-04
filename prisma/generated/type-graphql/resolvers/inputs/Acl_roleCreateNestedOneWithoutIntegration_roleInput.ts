import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateOrConnectWithoutIntegration_roleInput } from "../inputs/Acl_roleCreateOrConnectWithoutIntegration_roleInput";
import { Acl_roleCreateWithoutIntegration_roleInput } from "../inputs/Acl_roleCreateWithoutIntegration_roleInput";
import { Acl_roleWhereUniqueInput } from "../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_roleCreateNestedOneWithoutIntegration_roleInput", {})
export class Acl_roleCreateNestedOneWithoutIntegration_roleInput {
  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutIntegration_roleInput, {
    nullable: true
  })
  create?: Acl_roleCreateWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleCreateOrConnectWithoutIntegration_roleInput, {
    nullable: true
  })
  connectOrCreate?: Acl_roleCreateOrConnectWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: true
  })
  connect?: Acl_roleWhereUniqueInput | undefined;
}
