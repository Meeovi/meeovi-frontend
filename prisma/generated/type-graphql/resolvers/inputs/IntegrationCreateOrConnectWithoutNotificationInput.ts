import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutNotificationInput } from "../inputs/IntegrationCreateWithoutNotificationInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateOrConnectWithoutNotificationInput", {})
export class IntegrationCreateOrConnectWithoutNotificationInput {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutNotificationInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutNotificationInput;
}
