import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationUpdateWithoutIntegration_roleInput } from "../inputs/IntegrationUpdateWithoutIntegration_roleInput";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";

@TypeGraphQL.InputType("IntegrationUpdateToOneWithWhereWithoutIntegration_roleInput", {})
export class IntegrationUpdateToOneWithWhereWithoutIntegration_roleInput {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutIntegration_roleInput, {
    nullable: false
  })
  data!: IntegrationUpdateWithoutIntegration_roleInput;
}
