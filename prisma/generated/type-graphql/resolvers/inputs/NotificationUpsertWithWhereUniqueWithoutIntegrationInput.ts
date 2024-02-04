import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutIntegrationInput } from "../inputs/NotificationCreateWithoutIntegrationInput";
import { NotificationUpdateWithoutIntegrationInput } from "../inputs/NotificationUpdateWithoutIntegrationInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutIntegrationInput", {})
export class NotificationUpsertWithWhereUniqueWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutIntegrationInput, {
    nullable: false
  })
  update!: NotificationUpdateWithoutIntegrationInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutIntegrationInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutIntegrationInput;
}
