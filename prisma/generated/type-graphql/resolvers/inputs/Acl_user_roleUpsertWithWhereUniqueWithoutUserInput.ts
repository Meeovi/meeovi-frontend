import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateWithoutUserInput } from "../inputs/Acl_user_roleCreateWithoutUserInput";
import { Acl_user_roleUpdateWithoutUserInput } from "../inputs/Acl_user_roleUpdateWithoutUserInput";
import { Acl_user_roleWhereUniqueInput } from "../inputs/Acl_user_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_user_roleUpsertWithWhereUniqueWithoutUserInput", {})
export class Acl_user_roleUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => Acl_user_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_user_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Acl_user_roleUpdateWithoutUserInput, {
    nullable: false
  })
  update!: Acl_user_roleUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => Acl_user_roleCreateWithoutUserInput, {
    nullable: false
  })
  create!: Acl_user_roleCreateWithoutUserInput;
}
