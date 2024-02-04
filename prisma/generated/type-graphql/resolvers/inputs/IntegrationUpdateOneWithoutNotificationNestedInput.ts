import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateOrConnectWithoutNotificationInput } from "../inputs/IntegrationCreateOrConnectWithoutNotificationInput";
import { IntegrationCreateWithoutNotificationInput } from "../inputs/IntegrationCreateWithoutNotificationInput";
import { IntegrationUpdateToOneWithWhereWithoutNotificationInput } from "../inputs/IntegrationUpdateToOneWithWhereWithoutNotificationInput";
import { IntegrationUpsertWithoutNotificationInput } from "../inputs/IntegrationUpsertWithoutNotificationInput";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationUpdateOneWithoutNotificationNestedInput", {})
export class IntegrationUpdateOneWithoutNotificationNestedInput {
  @TypeGraphQL.Field(_type => IntegrationCreateWithoutNotificationInput, {
    nullable: true
  })
  create?: IntegrationCreateWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateOrConnectWithoutNotificationInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpsertWithoutNotificationInput, {
    nullable: true
  })
  upsert?: IntegrationUpsertWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  disconnect?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  delete?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateToOneWithWhereWithoutNotificationInput, {
    nullable: true
  })
  update?: IntegrationUpdateToOneWithWhereWithoutNotificationInput | undefined;
}
