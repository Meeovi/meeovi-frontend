import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutIntegrationInput } from "../inputs/NotificationCreateWithoutIntegrationInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateOrConnectWithoutIntegrationInput", {})
export class NotificationCreateOrConnectWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutIntegrationInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutIntegrationInput;
}
