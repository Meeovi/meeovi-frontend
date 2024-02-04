import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateOrConnectWithoutNotificationInput } from "../inputs/IntegrationCreateOrConnectWithoutNotificationInput";
import { IntegrationCreateWithoutNotificationInput } from "../inputs/IntegrationCreateWithoutNotificationInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateNestedOneWithoutNotificationInput", {})
export class IntegrationCreateNestedOneWithoutNotificationInput {
  @TypeGraphQL.Field(_type => IntegrationCreateWithoutNotificationInput, {
    nullable: true
  })
  create?: IntegrationCreateWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateOrConnectWithoutNotificationInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput | undefined;
}
