import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutIntegration_roleInput } from "../inputs/IntegrationCreateWithoutIntegration_roleInput";
import { IntegrationUpdateWithoutIntegration_roleInput } from "../inputs/IntegrationUpdateWithoutIntegration_roleInput";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";

@TypeGraphQL.InputType("IntegrationUpsertWithoutIntegration_roleInput", {})
export class IntegrationUpsertWithoutIntegration_roleInput {
  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutIntegration_roleInput, {
    nullable: false
  })
  update!: IntegrationUpdateWithoutIntegration_roleInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutIntegration_roleInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutIntegration_roleInput;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;
}
