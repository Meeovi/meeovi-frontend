import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleRelationFilter } from "../inputs/Acl_roleRelationFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { IntegrationRelationFilter } from "../inputs/IntegrationRelationFilter";
import { Integration_roleWhereInput } from "../inputs/Integration_roleWhereInput";
import { integration_roleIntegration_idAcl_role_idCompoundUniqueInput } from "../inputs/integration_roleIntegration_idAcl_role_idCompoundUniqueInput";

@TypeGraphQL.InputType("Integration_roleWhereUniqueInput", {})
export class Integration_roleWhereUniqueInput {
  @TypeGraphQL.Field(_type => integration_roleIntegration_idAcl_role_idCompoundUniqueInput, {
    nullable: true
  })
  integration_id_acl_role_id?: integration_roleIntegration_idAcl_role_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereInput], {
    nullable: true
  })
  AND?: Integration_roleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereInput], {
    nullable: true
  })
  OR?: Integration_roleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereInput], {
    nullable: true
  })
  NOT?: Integration_roleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  integration_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  acl_role_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Acl_roleRelationFilter, {
    nullable: true
  })
  acl_role?: Acl_roleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntegrationRelationFilter, {
    nullable: true
  })
  integration?: IntegrationRelationFilter | undefined;
}
