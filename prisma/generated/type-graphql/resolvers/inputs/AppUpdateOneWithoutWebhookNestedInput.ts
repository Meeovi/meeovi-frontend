import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutWebhookInput } from "../inputs/AppCreateOrConnectWithoutWebhookInput";
import { AppCreateWithoutWebhookInput } from "../inputs/AppCreateWithoutWebhookInput";
import { AppUpdateToOneWithWhereWithoutWebhookInput } from "../inputs/AppUpdateToOneWithWhereWithoutWebhookInput";
import { AppUpsertWithoutWebhookInput } from "../inputs/AppUpsertWithoutWebhookInput";
import { AppWhereInput } from "../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneWithoutWebhookNestedInput", {})
export class AppUpdateOneWithoutWebhookNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutWebhookInput, {
    nullable: true
  })
  create?: AppCreateWithoutWebhookInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutWebhookInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutWebhookInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutWebhookInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutWebhookInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  disconnect?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  delete?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutWebhookInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutWebhookInput | undefined;
}
