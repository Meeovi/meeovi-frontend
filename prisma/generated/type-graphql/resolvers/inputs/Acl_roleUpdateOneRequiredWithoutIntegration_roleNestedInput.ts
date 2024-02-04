import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateOrConnectWithoutIntegration_roleInput } from "../inputs/Acl_roleCreateOrConnectWithoutIntegration_roleInput";
import { Acl_roleCreateWithoutIntegration_roleInput } from "../inputs/Acl_roleCreateWithoutIntegration_roleInput";
import { Acl_roleUpdateToOneWithWhereWithoutIntegration_roleInput } from "../inputs/Acl_roleUpdateToOneWithWhereWithoutIntegration_roleInput";
import { Acl_roleUpsertWithoutIntegration_roleInput } from "../inputs/Acl_roleUpsertWithoutIntegration_roleInput";
import { Acl_roleWhereUniqueInput } from "../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput", {})
export class Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput {
  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutIntegration_roleInput, {
    nullable: true
  })
  create?: Acl_roleCreateWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleCreateOrConnectWithoutIntegration_roleInput, {
    nullable: true
  })
  connectOrCreate?: Acl_roleCreateOrConnectWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpsertWithoutIntegration_roleInput, {
    nullable: true
  })
  upsert?: Acl_roleUpsertWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: true
  })
  connect?: Acl_roleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpdateToOneWithWhereWithoutIntegration_roleInput, {
    nullable: true
  })
  update?: Acl_roleUpdateToOneWithWhereWithoutIntegration_roleInput | undefined;
}
