import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutWebhookInput } from "../inputs/AppCreateOrConnectWithoutWebhookInput";
import { AppCreateWithoutWebhookInput } from "../inputs/AppCreateWithoutWebhookInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutWebhookInput", {})
export class AppCreateNestedOneWithoutWebhookInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutWebhookInput, {
    nullable: true
  })
  create?: AppCreateWithoutWebhookInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutWebhookInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutWebhookInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
