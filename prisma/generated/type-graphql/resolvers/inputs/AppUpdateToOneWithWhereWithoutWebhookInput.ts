import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutWebhookInput } from "../inputs/AppUpdateWithoutWebhookInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutWebhookInput", {})
export class AppUpdateToOneWithWhereWithoutWebhookInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutWebhookInput, {
    nullable: false
  })
  data!: AppUpdateWithoutWebhookInput;
}
