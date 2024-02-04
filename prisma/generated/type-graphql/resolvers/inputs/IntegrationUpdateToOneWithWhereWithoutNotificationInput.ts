import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationUpdateWithoutNotificationInput } from "../inputs/IntegrationUpdateWithoutNotificationInput";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";

@TypeGraphQL.InputType("IntegrationUpdateToOneWithWhereWithoutNotificationInput", {})
export class IntegrationUpdateToOneWithWhereWithoutNotificationInput {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutNotificationInput, {
    nullable: false
  })
  data!: IntegrationUpdateWithoutNotificationInput;
}
