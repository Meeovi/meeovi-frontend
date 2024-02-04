import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutNotificationInput } from "../inputs/IntegrationCreateWithoutNotificationInput";
import { IntegrationUpdateWithoutNotificationInput } from "../inputs/IntegrationUpdateWithoutNotificationInput";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";

@TypeGraphQL.InputType("IntegrationUpsertWithoutNotificationInput", {})
export class IntegrationUpsertWithoutNotificationInput {
  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutNotificationInput, {
    nullable: false
  })
  update!: IntegrationUpdateWithoutNotificationInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutNotificationInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutNotificationInput;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;
}
