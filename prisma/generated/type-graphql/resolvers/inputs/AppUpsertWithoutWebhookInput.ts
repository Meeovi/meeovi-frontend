import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutWebhookInput } from "../inputs/AppCreateWithoutWebhookInput";
import { AppUpdateWithoutWebhookInput } from "../inputs/AppUpdateWithoutWebhookInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutWebhookInput", {})
export class AppUpsertWithoutWebhookInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutWebhookInput, {
    nullable: false
  })
  update!: AppUpdateWithoutWebhookInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutWebhookInput, {
    nullable: false
  })
  create!: AppCreateWithoutWebhookInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
