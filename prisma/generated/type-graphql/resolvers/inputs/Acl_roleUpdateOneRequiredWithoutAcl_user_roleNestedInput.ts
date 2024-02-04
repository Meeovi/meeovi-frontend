import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateOrConnectWithoutAcl_user_roleInput } from "../inputs/Acl_roleCreateOrConnectWithoutAcl_user_roleInput";
import { Acl_roleCreateWithoutAcl_user_roleInput } from "../inputs/Acl_roleCreateWithoutAcl_user_roleInput";
import { Acl_roleUpdateToOneWithWhereWithoutAcl_user_roleInput } from "../inputs/Acl_roleUpdateToOneWithWhereWithoutAcl_user_roleInput";
import { Acl_roleUpsertWithoutAcl_user_roleInput } from "../inputs/Acl_roleUpsertWithoutAcl_user_roleInput";
import { Acl_roleWhereUniqueInput } from "../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_roleUpdateOneRequiredWithoutAcl_user_roleNestedInput", {})
export class Acl_roleUpdateOneRequiredWithoutAcl_user_roleNestedInput {
  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutAcl_user_roleInput, {
    nullable: true
  })
  create?: Acl_roleCreateWithoutAcl_user_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleCreateOrConnectWithoutAcl_user_roleInput, {
    nullable: true
  })
  connectOrCreate?: Acl_roleCreateOrConnectWithoutAcl_user_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpsertWithoutAcl_user_roleInput, {
    nullable: true
  })
  upsert?: Acl_roleUpsertWithoutAcl_user_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: true
  })
  connect?: Acl_roleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpdateToOneWithWhereWithoutAcl_user_roleInput, {
    nullable: true
  })
  update?: Acl_roleUpdateToOneWithWhereWithoutAcl_user_roleInput | undefined;
}
