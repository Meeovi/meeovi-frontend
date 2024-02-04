import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleUpdateWithoutAppInput } from "../inputs/Acl_roleUpdateWithoutAppInput";
import { Acl_roleWhereInput } from "../inputs/Acl_roleWhereInput";

@TypeGraphQL.InputType("Acl_roleUpdateToOneWithWhereWithoutAppInput", {})
export class Acl_roleUpdateToOneWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpdateWithoutAppInput, {
    nullable: false
  })
  data!: Acl_roleUpdateWithoutAppInput;
}
