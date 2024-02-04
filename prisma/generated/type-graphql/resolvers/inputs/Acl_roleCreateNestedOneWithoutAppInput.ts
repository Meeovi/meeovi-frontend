import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateOrConnectWithoutAppInput } from "../inputs/Acl_roleCreateOrConnectWithoutAppInput";
import { Acl_roleCreateWithoutAppInput } from "../inputs/Acl_roleCreateWithoutAppInput";
import { Acl_roleWhereUniqueInput } from "../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_roleCreateNestedOneWithoutAppInput", {})
export class Acl_roleCreateNestedOneWithoutAppInput {
  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutAppInput, {
    nullable: true
  })
  create?: Acl_roleCreateWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleCreateOrConnectWithoutAppInput, {
    nullable: true
  })
  connectOrCreate?: Acl_roleCreateOrConnectWithoutAppInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: true
  })
  connect?: Acl_roleWhereUniqueInput | undefined;
}
