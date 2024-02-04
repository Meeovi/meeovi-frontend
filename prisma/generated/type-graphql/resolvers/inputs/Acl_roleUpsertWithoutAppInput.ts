import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateWithoutAppInput } from "../inputs/Acl_roleCreateWithoutAppInput";
import { Acl_roleUpdateWithoutAppInput } from "../inputs/Acl_roleUpdateWithoutAppInput";
import { Acl_roleWhereInput } from "../inputs/Acl_roleWhereInput";

@TypeGraphQL.InputType("Acl_roleUpsertWithoutAppInput", {})
export class Acl_roleUpsertWithoutAppInput {
  @TypeGraphQL.Field(_type => Acl_roleUpdateWithoutAppInput, {
    nullable: false
  })
  update!: Acl_roleUpdateWithoutAppInput;

  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutAppInput, {
    nullable: false
  })
  create!: Acl_roleCreateWithoutAppInput;

  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;
}
