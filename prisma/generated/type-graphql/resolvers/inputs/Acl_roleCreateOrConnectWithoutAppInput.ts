import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateWithoutAppInput } from "../inputs/Acl_roleCreateWithoutAppInput";
import { Acl_roleWhereUniqueInput } from "../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_roleCreateOrConnectWithoutAppInput", {})
export class Acl_roleCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutAppInput, {
    nullable: false
  })
  create!: Acl_roleCreateWithoutAppInput;
}
