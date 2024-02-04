import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateOrConnectWithoutIntegration_roleInput } from "../inputs/IntegrationCreateOrConnectWithoutIntegration_roleInput";
import { IntegrationCreateWithoutIntegration_roleInput } from "../inputs/IntegrationCreateWithoutIntegration_roleInput";
import { IntegrationUpdateToOneWithWhereWithoutIntegration_roleInput } from "../inputs/IntegrationUpdateToOneWithWhereWithoutIntegration_roleInput";
import { IntegrationUpsertWithoutIntegration_roleInput } from "../inputs/IntegrationUpsertWithoutIntegration_roleInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput", {})
export class IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput {
  @TypeGraphQL.Field(_type => IntegrationCreateWithoutIntegration_roleInput, {
    nullable: true
  })
  create?: IntegrationCreateWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateOrConnectWithoutIntegration_roleInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpsertWithoutIntegration_roleInput, {
    nullable: true
  })
  upsert?: IntegrationUpsertWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateToOneWithWhereWithoutIntegration_roleInput, {
    nullable: true
  })
  update?: IntegrationUpdateToOneWithWhereWithoutIntegration_roleInput | undefined;
}
